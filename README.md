# Project: Mini User Management App

## Project Overview

A React-based learning application demonstrating the `useEffect` → request params → context → `useReducer` pattern behind the repository's name: data fetched with `useEffect`, routed params picked up with `useParams`, global state shared through context, and reducer actions (`SET_USERS`, `SET_SELECTED_USER`, `SET_LOADING`, `SET_ERROR` — see `src/reducers/userReducer.js`). It was refactored from a student codebase to implement modern patterns including Tailwind CSS v4, an API service layer, error boundaries, and mock authentication. The refactoring history lives in [`plans/refactoring-plan.md`](plans/refactoring-plan.md).

---

## Live Demo

Deployed on GitHub Pages:

**https://tvatdci.github.io/effect-params-context-reduce/**

---

## Repository Branches

| Branch                        | Description                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| `main`                        | Current development line (post-refactor, security-cleaned)     |
| `gh-pages`                    | Deployed build output for GitHub Pages                         |
| `feature/initiative-codebase` | Original student code (before refactoring)                     |
| `feature/update`              | Refactored code with modern patterns                           |

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

| Technology       | Version   | Purpose               |
| ---------------- | --------- | --------------------- |
| React            | ^19.2.0   | UI Framework          |
| React Router DOM | ^7.15.1   | Client-side routing   |
| Axios            | ^1.16.0   | HTTP requests         |
| Tailwind CSS     | ^4.0.0    | Styling               |
| PropTypes        | ^15.8.1   | Runtime type checking |
| Vite             | ^6.2.0    | Build tool            |
| ESLint           | ^9.22.0   | Linting               |

Dependency hygiene note: after the security update series (PRs #3–#5) the lockfile resolves to `vite@6.4.5` and `npm audit` reports **0 vulnerabilities**.

---

## Prerequisites

- **Node.js** `^18.0.0 || ^20.0.0 || >=22.0.0` — the engines range Vite 6.4.5 declares
- **npm** (comes with Node)
- Tested with Node `v26.7.0` and npm `11.19.0`

> **Troubleshooting note:** on current Node versions the dev server and build print a harmless `DEP0205` deprecation warning (`module.register()` is deprecated). It comes from Node's internals, not from this project's code, and can be ignored.

---

## API Used

User data is fetched from [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com):

- `GET /users` — user list (`services/userService.js` → `getAllUsers`)
- `GET /users/:id` — single user (`getUserById`)

The shared Axios instance (`src/services/api.js`) uses a 10s timeout and response interceptors that normalize error messages for network and server errors.

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
│   ├── grad_glob.png            # Spinning globe logo (header)
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

The dev path includes the project subpath because `vite.config.js` sets `base: "/effect-params-context-reduce/"` — the same base the GitHub Pages deployment uses.

For a production build:

```bash
npm run build
```

---

## Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

`npm run deploy` publishes the `dist` folder to the `gh-pages` branch using the `gh-pages` npm package (currently pinned at `^6.1.1` after the PR #5 toolchain downgrade). Pages then serves the new build at the live demo URL above; nothing deploys automatically without running this command.

---

## Usage

1. **Home Page**: View list of users from API
2. **Login**: Click "Login" in the header, enter any non-empty username and password
3. **User Details**: After login, click a user name to see details
4. **Logout**: Click "Logout" in the header to end the session

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

Tracked in [`plans/refactoring-plan.md`](plans/refactoring-plan.md):

- [ ] Add unit tests with Vitest
- [ ] Implement real authentication (JWT/OAuth)
- [ ] Add user search/filter functionality
- [ ] Implement user pagination
- [ ] Add React Query for data fetching
- [ ] Migrate to TypeScript
- [ ] Add more pages (About, Contact, Settings)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

No license file is included in this repository yet.

---

## Acknowledgments

- [React Router](https://reactrouter.com/) for client-side routing
- [Axios](https://axios-http.com/) for API requests
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the test API
