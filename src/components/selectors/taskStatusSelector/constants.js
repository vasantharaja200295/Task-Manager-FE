export const TASK_STATUS = {
  assigned: {
    label: "Assigned",
    value: "assigned",
    backgroundColor: "#7986CB", // Purple for assigned tasks
    textColor: "#4a537e", // White text for better contrast
    boardBackground: "rgba(121, 134, 203, 0.1)", // Purple with barely noticeable opacity
    eventBackground: "#97a8ff",
  },
  in_progress: {
    label: "In Progress",
    value: "in_progress",
    backgroundColor: "#4285F4", // Blue for tasks in progress
    textColor: "#2c457e", // White text for better contrast
    boardBackground: "rgba(66, 133, 244, 0.1)", // Blue with barely noticeable opacity
    eventBackground: "#7aa9f5",
  },

  completed: {
    label: "Completed",
    value: "completed",
    backgroundColor: "#0F9D58", // Green for completed tasks
    textColor: "#1d5d3e", // White text for better contrast
    boardBackground: "rgba(15, 157, 88, 0.1)", // Green with barely noticeable opacity
    eventBackground: "#4bde97",
  },
  pending: {
    label: "Pending",
    value: "pending",
    backgroundColor: "#F4B400", // Orange for pending tasks
    textColor: "#a37902", // Black text for better contrast
    boardBackground: "rgba(244, 180, 0, 0.1)", // Orange with barely noticeable opacity
    eventBackground: "#f5d067",
  },
  cancelled: {
    label: "Cancelled",
    value: "cancelled",
    backgroundColor: "#EF5350", // Red for cancelled tasks
    textColor: "#cc0602", // White text for better contrast
    boardBackground: "rgba(239, 83, 80, 0.1)", // Red with barely noticeable opacity
    eventBackground: "#fa8987",
  },
  wont_fix: {
    label: "Won't Fix",
    value: "wont_fix",
    backgroundColor: "#BDBDBD", // Grey for tasks that won't be fixed
    textColor: "#333333", // Black text for better contrast
    boardBackground: "rgba(189, 189, 189, 0.1)", // Grey with barely noticeable opacity
    eventBackground: "#ede8e8",
  },
};

export const TASK_STATUS_LIST = Object.values(TASK_STATUS);
