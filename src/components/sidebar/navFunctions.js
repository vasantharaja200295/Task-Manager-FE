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
        id: 3,
        path: ROUTES.TASKS,
        title: "Tasks",
        icon: "ListChecks"
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