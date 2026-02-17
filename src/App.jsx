import AppRoutes from "./AppRoutes";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
