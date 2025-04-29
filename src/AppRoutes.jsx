import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { ROUTES } from "./routes-paths";

const Home = lazy(() => import("./pages/Home"));
const UserDetails = lazy(() => import("./pages/UserDetails"));
const NotFound = lazy(() => import("./NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.USER_DETAILS} element={<UserDetails />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
