import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selector-auth';

const PrivateRoute = () => {
    const tokenStatus = useSelector(selectToken);

    return tokenStatus ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
