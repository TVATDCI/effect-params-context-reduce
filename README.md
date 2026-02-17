# Project: Mini User Management App

## Project Overview

A React-based application demonstrating best practices in routing, state management, and component organization. This project was refactored from a student codebase to implement modern patterns including Tailwind CSS v4, API service layer, error boundaries, and mock authentication.

---

## Repository Branches

| Branch                        | Description                                |
| ----------------------------- | ------------------------------------------ |
| `feature/initiative-codebase` | Original student code (before refactoring) |
| `feature/update`              | Refactored code with modern patterns       |

---

## Features

- **User List Page**: Displays a list of users fetched from an API with loading and error states
- **User Details Page**: Shows detailed information about a selected user (protected route)
- **Global State Management**: Uses `useContext` and `useReducer` for user state
- **Lazy Loading**: React's `lazy` and `Suspense` for better performance
- **Centralized Routing**: Route paths managed in `routes-paths.js`
- **API Service Layer**: Axios instance with interceptors for clean API calls
- **Error Handling**: ErrorBoundary component and ErrorMessage UI
- **Loading States**: Loading component with spinner
- **Mock Authentication**: Login/Logout flow with protected routes
- **Tailwind CSS v4**: Modern utility-first styling with custom theme

---

## Tech Stack

| Technology       | Version | Purpose               |
| ---------------- | ------- | --------------------- |
| React            | ^19.2.0 | UI Framework          |
| React Router DOM | ^7.9.6  | Client-side routing   |
| Axios            | ^1.13.5 | HTTP requests         |
| Tailwind CSS     | ^4.0.0  | Styling               |
| PropTypes        | ^15.8.1 | Runtime type checking |
| Vite             | ^6.2.0  | Build tool            |
| ESLint           | ^9.22.0 | Linting               |

---

## API Used

User data is fetched from: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

---

## Project Structure

```bash
/src
├── /components
│   ├── /common
│   │   ├── ErrorBoundary.jsx    # Catches React errors
│   │   ├── ErrorMessage.jsx     # Error display component
│   │   └── Loading.jsx          # Loading spinner
│   ├── UserList.jsx             # User list with API call
│   └── UserProfile.jsx          # User profile display
├── /context
│   ├── AuthContext.jsx          # Authentication state
│   └── UserContext.jsx          # User data state
├── /pages
│   ├── Home.jsx                 # Home page with UserList
│   ├── Login.jsx                # Mock login page
│   └── UserDetails.jsx          # User details (protected)
├── /reducers
│   └── userReducer.js           # User state reducer
├── /services
│   ├── api.js                   # Axios instance
│   └── userService.js           # User API methods
├── /assets
│   ├── d-skull.svg
│   └── spacecharter.svg
├── App.jsx                      # Main app with providers
├── AppRoutes.jsx                # Route definitions
├── Layout.jsx                   # Layout with header/nav
├── NotFound.jsx                 # 404 page
├── ProtectedRoute.jsx           # Route guard component
├── routes-paths.js              # Route constants
├── index.css                    # Tailwind CSS config
└── main.jsx                     # Entry point
```

---

## Key Concepts Demonstrated

### `useParams`

Extracts URL parameters (user ID) in the UserDetails component.

### `useContext`

Provides global state via UserContext and AuthContext.

### `useReducer`

Manages complex user state with actions: `SET_USERS`, `SET_SELECTED_USER`, `SET_LOADING`, `SET_ERROR`.

### `useEffect`

Handles side effects like API calls on component mount.

### API Service Layer

Separates API logic from components using `services/api.js` and `services/userService.js`.

### Error Boundary

Class component that catches JavaScript errors in child components.

### Protected Routes

`ProtectedRoute` component checks authentication before rendering children.

---

## How to Run

```bash
# Clone the repository
git clone https://github.com/TVATDCI/effect-params-context-reduce.git
cd effect-params-context-reduce

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5173/effect-params-context-reduce/
```

---

## Usage

1. **Home Page**: View list of users from API
2. **Login**: Click "Login" button, enter any username/password
3. **User Details**: After login, click a user name to see details
4. **Logout**: Click "Logout" to end session

---

## Refactoring Summary

This project was refactored from a student codebase. See [`plans/refactoring-plan.md`](plans/refactoring-plan.md) for detailed changes.

### Issues Fixed

- Router duplication between `main.jsx` and `App.jsx`
- Missing return statement in reducer default case
- Incorrect asset import paths
- No error handling UI
- No loading states
- Unused imports and console.log statements

### Improvements Added

- API service layer with Axios interceptors
- ErrorBoundary for graceful error handling
- Loading and ErrorMessage components
- Mock authentication with protected routes
- Tailwind CSS v4 with custom theme
- PropTypes for runtime type checking

---

## Future Enhancements

- [ ] Add unit tests with Vitest
- [ ] Implement real authentication (JWT/OAuth)
- [ ] Add user search/filter functionality
- [ ] Implement user pagination
- [ ] Add more pages (About, Contact, Settings)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

MIT License - see [LICENSE](LICENSE) file.

---

## Acknowledgments

- [React Router](https://reactrouter.com/) for client-side routing
- [Axios](https://axios-http.com/) for API requests
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the test API
