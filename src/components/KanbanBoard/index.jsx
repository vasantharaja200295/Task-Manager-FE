import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TASK_STATUS } from "@/components/selectors/taskStatusSelector/constants";
import EllipsisText from "../EllipsisText";

const KanbanBoard = ({ data, handleDeleteTask, handleUpdateTaskStatus }) => {
  const countTasks = (status) => {
    return data.filter((task) => task.status === status.value).length;
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Check if the draggable was dropped outside of a droppable area
    if (!destination) return;

    // Check if the draggable was dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Reorder the tasks within the same column
    if (destination.droppableId === source.droppableId) {
      const updatedTasks = [...data];
      const draggedTask = updatedTasks.find((task) => task._id === draggableId);
      updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, draggedTask);
      return;
    }

    const sourceStatus = source.droppableId;
    const destinationStatus = destination.droppableId;
    const updatedTasks = data.map((task) => {
      if (task._id === draggableId) {
        task.status = destinationStatus;
      }
      return task;
    });

    handleUpdateTaskStatus(draggableId, destinationStatus);
    console.log(
      `Moved task ${draggableId} from ${sourceStatus} to ${destinationStatus}`
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex overflow-x-auto h-full justify-evenly">
        {Object.values(TASK_STATUS).map((status) => (
          <div
            key={status.value}
            className="p-4 border border-gray-300 rounded-lg mr-4 w-[280px] flex-shrink-0"
          >
            <h3 className="text-lg mb-4 inline-flex items-center justify-between w-full">
              {status.label}{" "}
              <p className="text-sm text-gray-500">{countTasks(status)}</p>
            </h3>

            <Droppable droppableId={status.value}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-100 p-2 rounded-md h-[93%] overflow-y-auto"
                  style={{ backgroundColor: status.boardBackground }}
                >
                  {data
                    .filter((task) => task.status === status.value)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="bg-white h-fit border border-gray-300 rounded-md p-2 mb-2"
                          >
                            <div className="flex flex-col">
                              <p className=" font-medium font-poppins">{task.task_name}</p>
                              <EllipsisText text={task.description} />
                              <div>
                                <p>Created By: {task.created_by?.display_name}</p>
                                <p>Assigned To: {task.assigned_to?.display_name}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
