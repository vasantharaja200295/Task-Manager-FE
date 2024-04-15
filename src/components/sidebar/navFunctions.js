import ROUTES from '@/routes/routes';


const AdminRoutes = [
    {
        id: 1,
        path: ROUTES.DASHBOARD,
        title: "Dashboard",
        icon: "LayoutDashboard"
    },
    {
        id: 2,
        path: ROUTES.BOARDS,
        title: "Boards",
        icon: "Kanban"
    },
    {
        id: 3,
        path: ROUTES.TASKS,
        title: "Tasks",
        icon: "ListChecks"
    },
    {
        id: 4,
        path: ROUTES.MYTASKS,
        title: "My Tasks",
        icon: "ClipboardList"
    },
    {
        id: 5,
        path: ROUTES.DEPARTMENT,
        title: "My Department",
        icon: "School"
    }
];

const userRoutes = [
    {
        id: 1,
        path: ROUTES.DASHBOARD,
        title: "Dashboard",
        icon: "LayoutDashboard"
    },
    {
        id: 2,
        path: ROUTES.BOARDS,
        title: "Boards",
        icon: "Kanban"
    },
    {
        id: 4,
        path: ROUTES.MYTASKS,
        title: "My Tasks",
        icon: "ListChecks"
    }
];



const getNavRoutes = (isAdmin) => {
    return isAdmin ? AdminRoutes : userRoutes
}

export default getNavRoutes; 