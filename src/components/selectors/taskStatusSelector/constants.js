export const TASK_STATUS = {
    assigned: {
        label: 'Assigned',
        value: 'assigned',
        backgroundColor: '#FFA726',  // Orange for tasks that are newly assigned
        boardBackground: 'rgba(255, 167, 38, 0.1)'  // Orange with barely noticeable opacity
    },
    in_progress: {
        label: 'In Progress',
        value: 'in_progress',
        backgroundColor: '#29B6F6',  // Light Blue for tasks that are actively being worked on
        boardBackground: 'rgba(41, 182, 246, 0.1)'  // Light Blue with barely noticeable opacity
    },
    pending: {
        label: 'Pending',
        value: 'pending',
        backgroundColor: '#FFEE58',  // Yellow for tasks that are pending, awaiting start
        boardBackground: 'rgba(255, 238, 88, 0.1)'  // Yellow with barely noticeable opacity
    },
    completed: {
        label: 'Completed',
        value: 'completed',
        backgroundColor: '#66BB6A',  // Green for tasks that have been completed
        boardBackground: 'rgba(102, 187, 106, 0.1)'  // Green with barely noticeable opacity
    },
    cancelled: {
        label: 'Cancelled',
        value: 'cancelled',
        backgroundColor: '#EF5350',  // Red for tasks that have been cancelled
        boardBackground: 'rgba(239, 83, 80, 0.1)'  // Red with barely noticeable opacity
    },
    wont_fix:{
        label: 'Won\'t Fix',
        value: 'wont_fix',
        backgroundColor: '#BDBDBD',  // Grey for tasks that won't be fixed
        boardBackground: 'rgba(189, 189, 189, 0.1)'  // Grey with barely noticeable opacity
    }
}

export const TASK_STATUS_LIST = Object.values(TASK_STATUS);
