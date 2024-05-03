import React from "react";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";
import Icon from "@/components/Icon";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/apiFunctions";
import ROUTES from "@/routes/routes";
import { toastMessage } from "@/utils/helperFunctions";

const schema = z.object({
  username: z.string().min(1, "Username is Required"),
  password: z.string().min(8, "Password must be 8 characters"),
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z.string().email({ message: "Invalid email address" }),
  confirmPassword: z.string().min(8, "Confirm Password is Required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const watchPassword = watch("password", "");
  const watchConfirmPassword = watch("confirmPassword", "");

  const {mutateAsync: handleSignUp} = useMutation({mutationFn:signUp})

  const formSubmit = async (data) => {
    try{
      const res = await handleSignUp(data);
      if(res.status === 200){
        toastMessage("success", "Sign Up Successful");
        navigate(ROUTES.LOGIN)
      }
    }catch (error){
      toastMessage("error", error?.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="h-fit w-[350px] border-[1px] rounded-sm p-3 box-border">
        <h3>Task Manager</h3>
        <h4 className="mt-2">Sign Up</h4>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mt-5">
            <Label>Username</Label>
            <Input
              placeholder="Enter username"
              {...register("username", { required: true })}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.username && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.username?.message}
              </div>
            )}
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between gap-4 mt-4">
            <div>
              <Label>First Name</Label>
              <Input
                placeholder="Enter First Name"
                {...register("firstName", { required: true })}
                className="h-8 rounded-[4px] mt-2"
              />
              {errors.firstName && (
                <div className="text-[10px] mt-2 text-red-500">
                  {errors.firstName?.message}
                </div>
              )}
            </div>
            <div>
              <Label>Last Name</Label>
              <Input
                placeholder="Enter Last Name"
                {...register("lastName", { required: true })}
                className="h-8 rounded-[4px] mt-2"
              />
              {errors.lastName && (
                <div className="text-[10px] mt-2 text-red-500">
                  {errors.lastName?.message}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <Label>Email</Label>
            <Input
              placeholder="Enter Email"
              {...register("email", { required: true })}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.email && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="mt-4">
            <Label>Password</Label>
            <Input
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.password && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="mt-4">
            <Label>Confirm Password</Label>
            <Input
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: () =>
                  watchPassword === watchConfirmPassword ||
                  "Passwords do not match",
              })}
              className="h-8 rounded-[4px] mt-2"
            />
            {errors.confirmPassword && (
              <div className="text-[10px] mt-2 text-red-500">
                {errors.confirmPassword?.message}
              </div>
            )}
          </div>
          <Button
            className="w-full h-[30px] rounded-[5px] mt-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icon
                name="LoaderCircle"
                size={20}
                className="animate-spin"
              />
            ) : (
              "Sign Up"
            )}
          </Button>
          <div className="text-xs w-full text-center mt-2 *:text-xs">
            Already have an account ?{" "}
            <Button
              variant="link"
              className="p-0 underline"
              onClick={() => {
                navigate(ROUTES.LOGIN);
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
