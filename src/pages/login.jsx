import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";
import Icon from "@/components/Icon";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/apiFunctions";
import { setUserData } from "@/redux/user/actions";
import { verifyToken } from "@/services/serviceFunctions";
import { setToken } from "@/redux/auth/actions";

const schema = z.object({
  username: z.string().min(1, "username is Requrired"),
  password: z.string().min(2, "Password must be 8 characters"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (location.pathname == "/") {
      const res = verifyToken();
      if (res) {
        setToken(dispatch, { tokenVerified: res });
        navigate("/dashboard"); // Navigate to dashboard if token is valid
      }
    }
  }, []);

  const formSubmit = async (data) => {
    const userData = await login(data);
    if (userData) {
      setUserData(dispatch, userData);
      setToken(dispatch, { tokenVerified: true });
      if (!userData?.dept || !userData?.role || !userData?.onboading_flow_completed || !userData?.reports_to){
        navigate("/onboarding");
        return;
      }
      navigate("/dashboard"); 
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="h-fit w-[350px] border-[1px] rounded-sm p-3 box-border">
        <h3>Task Manager</h3>
        <h4 className="mt-2">Login</h4>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mt-5">
            <Label>Username</Label>
            <Input
              placeholder="Enter username"
              {...register("username")}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.username && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.username?.message}
              </div>
            )}
          </div>
          <div className="mt-4">
            <Label>Password</Label>
            <Input
              placeholder="Password"
              type="password"
              {...register("password")}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.password && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.password?.message}
              </div>
            )}
          </div>
          <Button
            className="w-full h-[30px] rounded-[5px] mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icon name="LoaderCircle" size={20} className="animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
          <div className="text-xs w-full text-center mt-2 *:text-xs">
            Don't have an account ?{" "}
            <Button
              variant="link"
              className="p-0 underline"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
