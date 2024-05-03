import Icon from "../Icon";
import { Button } from "@/ui/button";
import moment from "moment";
import TaskStatusSelector from "@/components/selectors/taskStatusSelector";
import TaskDetailsModal from "@/components/modals/taskDetails";
import colors from "@/colors";

const getColumns = (isAdmin, handleDeleteTask, handleUpdateTaskStatus) => {
  return [
    {
      accessorKey: "created_at",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className=" pl-0 hover:bg-transparent"
          >
            <p className=" mr-4 font-semibold text-lg text-black">Date</p>
            <Icon name="ArrowUpDown" size={19} color={colors.primary} />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = moment
          .utc(row.getValue("created_at"))
          .format("DD/MM/YYYY");
        return <div className="text-left text-md font-medium ">{date}</div>;
      },
      size: 100,
      sortingFns:'datetime'
    },
    {
      accessorKey: "task_name",
      header: () => {
        return (
          <p className=" font-poppins text-lg font-semibold text-black">Task</p>
        );
      },
      cell: ({ row }) => {
        return (
          <div className=" text-left text-md font-medium w-auto">
            {row.getValue("task_name")}
          </div>
        );
      },
      size: 300,
    },
    {
      accessorKey: "created_by",
      header: () => {
        return (
          <p className=" font-poppins text-lg text-black  font-semibold">
            Created By
          </p>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="text-left text-md font-medium ">
            {row.getValue("created_by").display_name}
          </div>
        );
      },
      size: 200,
    },
    {
      accessorKey: "due_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className=" pl-0 hover:bg-transparent"
          >
            <p className=" mr-4 font-semibold text-lg text-black">Due Date</p>
            <Icon name="ArrowUpDown" size={19} color={colors.primary} />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = moment.utc(row.getValue("due_date")).format("DD/MM/YYYY");
        return <div className="text-left text-md font-medium ">{date}</div>;
      },
      size: 100,
    },
    {
      accessorKey: "assigned_to",
      header: () => {
        return (
          <p className=" font-poppins text-lg text-black  font-semibold">
            Assigned To
          </p>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="text-left font-medium text-md w-full">
            {row.getValue("assigned_to").display_name}
          </div>
        );
      },
      size: 200,
    },
    {
      accessorKey: "status",
      header: () => {
        return (
          <p className=" font-poppins text-lg text-black  font-semibold">
            Status
          </p>
        );
      },
      cell: ({ row }) => {
        return (
          <TaskStatusSelector
            currentState={row.getValue("status")}
            setTaskStatus={handleUpdateTaskStatus}
            taskId={row.getValue("_id")}
          />
        );
      },
      size: 200,
    },

    ...(isAdmin
      ? [
          {
            accessorKey: "id",
            header: undefined,
            cell: ({ row }) => {
              return (
                <Button
                  className=""
                  variant="destructive"
                  onClick={() => {
                    handleDeleteTask(row.getValue("_id"));
                  }}
                >
                  <Icon name="Trash" size={20} />
                </Button>
              );
            },
            size: 0,
          },
        ]
      : []),
    {
      accessorKey: "_id",
      header: undefined,
      cell: ({ row }) => {
        return (
          <TaskDetailsModal data={row.original}/>
        );
      },
      size: 0,
    },
  ];
};

export default getColumns;
