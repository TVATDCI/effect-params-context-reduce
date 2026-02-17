# Project: Mini User Management App

## Project Overview

This project is a React-based application designed to demonstrate best practices in routing, state management, and component organization. The application fetches user data from an external API and displays it in a user-friendly interface. It includes features like lazy loading, centralized route management, and reusable components for scalability and maintainability.

---

**The initiative code has been moved to branch** [feature/initiative-codebase](https://github.com/TVATDCI/effect-params-context-reduce/tree/feature/initiative-codebase)

**The plan is improving on enhancing readability, scalability and maintainability by extracting the routing logic of App.jsx into separate component, such as AppRoutes, to avoid cluttering. If the application grows**:upside_down_face:

And eventually, i would like to add authentication or specific condition, guards or protection route too!

## Features

- **User List Page**: Displays a list of users fetched from an API.
- **User Details Page**: Shows detailed information about a selected user using `useParams`.
- **Global State Management**: Manages global state for user information using `useContext` and `useReducer`.
- **Lazy Loading**: Implements React's `lazy` and `Suspense` for better performance by loading components only when needed.
- **Centralized Routing**: All route paths are managed in a single `routes-paths.js` file for easy updates.
- **Reusable Layout Component**: A shared layout with a company header is used across all pages.
- **Fetching Data**: Uses `Axios` to fetch user data from an API inside `useEffect`.
- **Styled Components**: Uses `styled-components` for component-level styling.
- **Protected Routes**: Includes `ProtectedRoute` component for route guarding.

---

## API Used

The application fetches user data from the following API:
[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

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
 │   ├── d-skull.svg
 │   ├── spacecharter.svg
 ├── App.jsx
 ├── AppRoutes.jsx
 ├── App.css
 ├── index.css
 ├── Layout.jsx
 ├── NotFound.jsx
 ├── ProtectedRoute.jsx
 ├── routes-paths.js
 └── main.jsx
```

### Detailed Explanation of Key Concepts

- `useParams:` This hook extracts parameters (like user ID) from the URL. We used it in the UserDetails component to fetch user data based on the ID present in the URL.

- `useContext:` Provides global state across components. Here, it is used to share the user list and selected user data between different components.

- `useReducer:` A more powerful alternative to useState when dealing with complex state logic. We used it for managing user data and actions like setting users and selecting a user.

- `useEffect:` Used to handle side effects in functional components, like fetching data. In this project, we used it to fetch user data from an API when the component mounts or when the user ID changes.

- `Axios:` Used for making HTTP requests to fetch user data from a mock API (jsonplaceholder.typicode.com).

---

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/TVATDCI/effect-params-context-reduce.git
   cd effect-params-context-reduce
   ```

2. Switch to the appropriate branch:

   ```bash
   git checkout feature/initiative-codebase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the application in your browser:

   ```
   http://localhost:5173
   ```

---

## Key Components

### 1. **App.jsx**

The main entry point of the application. Wraps the app with `UserProvider` for global state management and includes the `Router` for navigation.

### 2. **AppRoutes.jsx**

Handles all routing logic. Implements lazy loading for better performance and wraps routes with the `Layout` component for consistent UI.

### 3. **Layout.jsx**

A reusable layout component that includes a company header and wraps all routes.

### 4. **UserList.jsx**

Fetches and displays a list of users from the API. Uses `Axios` and `useEffect` for data fetching.

### 5. **UserDetails.jsx**

Displays detailed information about a selected user. Uses `useParams` to extract the user ID from the URL.

### 6. **UserContext.jsx**

Manages global state for user information using `useContext` and `useReducer`.

### 7. **routes.js**

Centralized file for managing all route paths. Makes it easy to update paths in one place.

---

## Future Enhancements

- Add more pages like `About`, `Contact`, or `Settings`.
- Implement actual authentication logic for protected routes.
- Add unit tests for components and reducers.
- Improve styling with a CSS framework like Tailwind or Material-UI.
- Add error boundaries for better error handling.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React Router](https://reactrouter.com/) for client-side routing.
- [Axios](https://axios-http.com/) for API requests.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free API for testing.

```
Thanks for smiling ! 😆
```
