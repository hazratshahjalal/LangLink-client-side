import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth/useAuth";
import useAdmin from "../Hooks/useAdmin/useAdmin";




const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="h-80 flex items-center justify-center space-x-2 animate-bounce">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
                <div className="w-8 h-8 bg-accent rounded-full"></div>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;