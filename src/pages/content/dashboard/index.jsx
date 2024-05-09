import { Calendar } from "@/ui/calendar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "@/services/apiFunctions";
import { GET_DASHBOARD_DATA } from "@/services/apiKeys";
import Table from "@/components/dataTable";
import AddTask from "@/components/modals/addTask";
import QuickNotes from "@/components/QuickNotes";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import Icon from "@/components/Icon";
import colors from "@/colors";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  const { data } = useQuery({
    queryKey: [GET_DASHBOARD_DATA],
    queryFn: () => getDashboardData(),
  });

  console.log(data?.analytics?.monthly.map((item) => {console.log(item); return item.completed_count}))

  const chartData = {
    labels: ["Completed", "In Progress", "Assigned"],
    datasets: [
      {
        data: Object.values(data?.analytics?.overall || {}),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const chartConfig = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        displayColors: false,
        backgroundColor: "#fff",
        cornerRadius: 8,
        padding: 10,
        bodyColor: "#000",
        titleColor: colors.primary,
      },
    },
    cutout: "45%",
    radius: "95%",
    borderWidth: 1,
    responsive: true,
    maintainAspectRatio: true,
  };

  const LineData = {
    labels: data?.analytics?.monthly.map((item) => item.month).reverse(),
    datasets: [
      {
        data: data?.analytics?.monthly.map((item) => item.completed_count).reverse(),
        fill: false,
        tension: 0.3,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: false,
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      filler: {
        propagate: false,
      },
    },
    responsive: true,
    pointBackgroundColor: "#fff",
    pointBorderColor: colors.primary,
    borderColor: colors.primary,
    lineBorderColor: colors.primary,
    pointBorderWidth: 2,
    borderWidth: 3,
  };

  console.log(data);

  return (
    <div className=" p-4">
      <div className=" flex items-center justify-between">
        <h2 className=" font-bold">
          Hi,{" "}
          <span className=" text-primary font-semibold">
            {user?.display_name}
          </span>
        </h2>
        {user?.role === "hod" && <AddTask />}
      </div>
      <div className=" h-full  rounded-lg flex">
        <div className=" h-[82vh] box-border flex-1 py-4 space-y-4">
          <div className=" h-60  flex items-center space-x-4 justify-between">
            <div className=" border-2 shadow-md box-border p-2 h-full  rounded-lg">
              <h3 className=" text-primary inline-flex items-center gap-1 w-full">
                <Icon name="BarChart" size={20} strokeWidth={2.5} />
                Overall Performance
              </h3>
              <div className=" bg-violet-100 h-[85%] rounded-md flex-1 flex flex-row w-full items-center px-4 justify-evenly space-x-4">
                <div className=" bg-white h-40 w-40 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <h1 className=" text-primary">
                    {data?.analytics?.overall?.completed_count}
                  </h1>
                  <h5>Completed</h5>
                </div>
                <div className=" bg-white h-40 w-40 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <h1 className=" text-primary">
                    {data?.analytics?.overall?.inprogress_count}
                  </h1>
                  <h5>In Progress</h5>
                </div>
                <div className=" bg-white h-40 w-40 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <h1 className=" text-primary">
                    {data?.analytics?.overall?.assigned}
                  </h1>
                  <h5>Assigned</h5>
                </div>
              </div>
            </div>
            <div className=" border-2 shadow-md box-border p-2 h-full w-full rounded-lg">
              <h3 className=" text-primary inline-flex items-center gap-1 w-full">
                <Icon name="PieChart" size={20} strokeWidth={2.5} /> Analytics
              </h3>
              <Line
                data={LineData}
                options={options}
                className=" scale-y-[86%]"
              />
            </div>
            <div className="  border-2 shadow-md box-border p-2 h-full w-fit rounded-lg  flex flex-col items-center justify-center">
              <Doughnut
                data={chartData}
                options={chartConfig}
                className="scale-[90%]"
              />
            </div>
          </div>
          <div className=" border-2 shadow-md box-border p-2 h-[51vh] flex-1 rounded-lg">
            <h3 className=" text-primary">
              Today's Task{" "}
              <span className=" text-zinc-600 text-lg font-medium">
                ({data?.tasks?.length ?? `0`})
              </span>
            </h3>
            <Table
              data={data?.tasks}
              isAdmin={false}
              isLoading={false}
              className=" h-[82%]"
            />
          </div>
        </div>
        <div className="  h-[82vh] w-fit  box-border p-4 flex flex-col items-center">
          <div className=" h-[45%] w-fit ">
            <div className="border-2 bg-white rounded-lg shadow-md">
              <Calendar />
            </div>
          </div>
          <div className=" flex-1 border-2 shadow-md box-border w-full rounded-lg p-2">
            <QuickNotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
