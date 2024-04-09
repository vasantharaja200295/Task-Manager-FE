import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GET_ONBOARDING } from "@/services/apiKeys";
import { getOnboardingData, setOnboardingData } from "@/services/apiFunctions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Label } from "@/ui/label";
import DeptSelector from "./deptSelector";
import RoleSelector from "./roleSelector";
import ReportsToSelector from "./reportsToSelector";
import ROUTES from "@/routes/routes";
import { ROLES } from "@/routes/constants";
import { Button } from "@/ui/button";
import Icon from "@/components/Icon";
import Loader from "@/components/Loader";

const Index = () => {
  const [dept, setDept] = useState();
  const [role, setRole] = useState();
  const [reportsTo, setReportsTo] = useState();
  const [hodDetails, setHodDetails] = useState(null);
  const navigate = useNavigate();
  const onboardingFlowCompleted = useSelector(state=> state.user.onboading_flow_completed)

  const { data } = useQuery({
    queryKey: [GET_ONBOARDING],
    queryFn: getOnboardingData,
  });

  const { mutateAsync: handleOnboardingData, isPending: isOnboardingPending } =
    useMutation({
      mutationFn: setOnboardingData,
    });

  const handleOnboarding = async () => {
    const payload = {
      dept,
      role,
      reports_to: reportsTo,
    };
    try {
      const res = await handleOnboardingData(payload);
      if (res.status === 200) {
        navigate(ROUTES.DASHBOARD)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === ROLES.HOD) {
      setReportsTo(null);
    }
  };

  const handleDeptSelect = (selectedDept) => {
    setDept(selectedDept);
    const selectedDeptData = data?.find((dept) => dept.name === selectedDept.name);
    if (selectedDeptData) {
      const hod = selectedDeptData.hod;
      setHodDetails(hod);
    }
  };

  const setButtonDisabled = () => {
    if (!dept || !role) {
      return true;
    }
    return !!(role === ROLES.FACULTY && !reportsTo);
  };

  useEffect(()=>{
    if(onboardingFlowCompleted){
      navigate(ROUTES.DASHBOARD)
    }
  }, [])


  return (
    <div className=" h-screen w-screen inline-flex">
      <div className=" flex-1 h-full">hello</div>
      <div className=" flex flex-col items-center justify-center h-full w-[60%] ">
        <Card className=" w-3/6 h-max">
          <CardHeader>
            <CardTitle>Welcome to TaskManager</CardTitle>
            <CardDescription>Complete the Onboarding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-col  gap-3 h-full w-full">
              <div>
                <Label>Select Department</Label>
                <DeptSelector data={data} setDept={handleDeptSelect} />
              </div>
              <div>
                <Label>Select Role</Label>
                <RoleSelector setRole={handleRoleSelect} />
              </div>
              <div>
                <Label>Whom you will be Reporting To?</Label>
                <ReportsToSelector
                  data={hodDetails}
                  setReportsTo={setReportsTo}
                  disabled={role === "hod" || !dept}
                />
                {role === "hod" && (
                  <p className=" text-xs">
                    Note: As a HOD you wont be reporting to anyone
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className=" flex flex-row justify-end">
            <Button
              className=" w-fit gap-2"
              {...{ disabled: setButtonDisabled() }}
              onClick={handleOnboarding}
            >
              {isOnboardingPending ? (
                <Loader color="#ffffff"/>
              ) : (
                <>
                  Continue <Icon name="ArrowRight" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
