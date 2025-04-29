## Project Overview:

**The initiative code has been moved to branch** [feature/initiative-codebase](https://github.com/TVATDCI/effect-params-context-reduce/tree/feature/initiative-codebase)

**The plan is improving on enhancing readability, scalability and maintainability by extracting the routing logic of App.jsx into separate component, such as AppRotes, to avoid cluttering. If the application glows**:upside_down_face:

#### This mini project will include:

- **User List:** A page that displays a list of users fetched from an API.
- **User Details Page:** Displays detailed information about a selected user by using useParams.
- **Global State Management:** Manage global state for user information using useContext and useReducer.
- **Fetching Data:** Use `Axios` to fetch user data from an API inside `useEffect`.
- **More details on extra routes components COMING SOON!**

### Project Basic Structure

```bash
/src
 ├── /components
 │   ├── UserList.jsx
 │   ├── UserProfile.jsx
 ├── /context
 │   ├── UserContext.jsx
 ├── /reducers
 │   ├── userReducer.js
 ├── /pages
 │   ├── Home.jsx
 │   ├── UserDetails.jsx
 ├── /assets
 │   ├── logo.svg
 ├── App.jsx
 ├── AppRoutes.jsx
 ├── Layout.jsx
 ├── routes-paths.js
 └── main.jsx
 └── NotFound.jsx

```

### Detailed Explanation of Key Concepts:

- `useParams:` This hook extracts parameters (like user ID) from the URL. We used it in the UserDetails component to fetch user data based on the ID present in the URL.

- `useContext:` Provides global state across components. Here, it is used to share the user list and selected user data between different components.

- `useReducer:` A more powerful alternative to useState when dealing with complex state logic. We used it for managing user data and actions like setting users and selecting a user.

- `useEffect:` Used to handle side effects in functional components, like fetching data. In this project, we used it to fetch user data from an API when the component mounts or when the user ID changes.

- `Axios:` Used for making HTTP requests to fetch user data from a mock API (jsonplaceholder.typicode.com).
