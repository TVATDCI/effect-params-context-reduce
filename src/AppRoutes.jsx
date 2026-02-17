import { lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { ROUTES } from "./routes-paths";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "./components/common/Loading";

const Home = lazy(() => import("./pages/Home"));
const UserDetails = lazy(() => import("./pages/UserDetails"));
const NotFound = lazy(() => import("./NotFound"));

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.USER_DETAILS}
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
