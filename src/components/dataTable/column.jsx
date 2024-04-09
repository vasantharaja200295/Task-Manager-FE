import Icon from "../Icon";
import { Button } from "@/ui/button";
import moment from "moment";
import TaskStatusSelector from "@/components/selectors/taskStatusSelector";

const getColumns = (handleDeleteTask, handleUpdateTaskStatus) => {
    
    return ( [
        {
          accessorKey: "task_name",
          header: ()=>{
            return <p className=" font-poppins text-lg font-semibold text-black">Task</p>
          },
          cell: ({row}) => {
            return <div className=" text-left text-md font-medium w-auto">{row.getValue('task_name')}</div>
          },
          size: 300
        },
        {
          accessorKey:'created_by',
          header:()=>{
            return <p className=" font-poppins text-lg text-black  font-semibold">Created By</p>
          },
          cell:({row})=>{
            return <div className="text-left text-md font-medium ">{row.getValue('created_by').display_name}</div>
          },
          size: 200,
        },
        {
          accessorKey: "created_at",
          header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className=" pl-0 hover:bg-transparent"
              >
                <p className=" mr-4 font-semibold text-lg text-black">Created On</p>
                <Icon name="ArrowUpDown" size={19} color="#7c3aed"/>
              </Button>
            )
          },
          cell: ({row}) => {
            const date = moment.utc(row.getValue('created_at')).format('DD/MM/YYYY');
            return <div className="text-left text-md font-medium ">{date}</div>
          },
          size:100,
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
                <Icon name="ArrowUpDown" size={19} color="#7c3aed"/>
              </Button>
            )
          },
          cell: ({row}) => {
            const date = moment.utc(row.getValue('due_date')).format('DD/MM/YYYY');
            return <div className="text-left text-md font-medium ">{date}</div>
          },
          size:100,
        },
        {
            accessorKey: "assigned_to",
            header: ()=>{
              return <p className=" font-poppins text-lg text-black  font-semibold">Assigned To</p>
            },
            cell: ({row}) => {
                return <div className="text-left font-medium text-md w-full">{row.getValue('assigned_to').display_name}</div>
              },
              size:200,
          },
          {
            accessorKey: "status",
            header: ()=>{
              return <p className=" font-poppins text-lg text-black  font-semibold">Status</p>
            },
            cell:({row}) => {
              return(
                <TaskStatusSelector currentState={row.getValue('status')}/>
              )
            },
            size: 200
          },
          { accessorKey:'id',
            header:undefined,
            cell: ({row}) => {
              return(
                  <Button className="" variant="destructive" onClick={()=>{handleDeleteTask(row.original.parentId, row.getValue('_id'))}}>
                    <Icon name="Trash2" size={20} />  
                  </Button>
              )
            },
            size:0,
          }, {
            accessorKey:"_id",
            header:undefined,
            cell: ({row}) => {
              return(
                <Button  variant="ghost" onClick={()=>{handleDeleteTask(row.original.parentId, row.getValue('_id'))}}>
                  <Icon name="EllipsisVertical" size={20} />  
                </Button>
            )
            },
            size:0,
          }
      ]);
   
}

export default getColumns;