export const TASK_STATUS = {
    assigned: {
        label: 'Assigned',
        value: 'assigned',
        backgroundColor: '#FFA726'  // Orange for tasks that are newly assigned
    },
    in_progress: {
        label: 'In Progress',
        value: 'in_progress',
        backgroundColor: '#29B6F6'  // Light Blue for tasks that are actively being worked on
    },
    completed: {
        label: 'Completed',
        value: 'completed',
        backgroundColor: '#66BB6A'  // Green for tasks that have been completed
    },
    pending: {
        label: 'Pending',
        value: 'pending',
        backgroundColor: '#FFEE58'  // Yellow for tasks that are pending, awaiting start
    },
    cancelled: {
        label: 'Cancelled',
        value: 'cancelled',
        backgroundColor: '#EF5350'  // Red for tasks that have been cancelled
    },
    wont_fix:{
        label: 'Won\'t Fix',
        value: 'wont_fix',
        backgroundColor: '#BDBDBD'  // Grey for tasks that have been cancelled
    }
}

export const TASK_STATUS_LIST = Object.values(TASK_STATUS)
