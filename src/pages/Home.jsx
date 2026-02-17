import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Welcome to User Management
      </h2>
      <UserList />
    </div>
  );
};

export default Home;
