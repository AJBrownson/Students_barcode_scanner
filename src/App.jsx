import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./dashboard/pages/Dashboard";
import Overview from "./dashboard/pages/Overview";
import Students from "./dashboard/pages/Students";
import Attendance from "./dashboard/pages/Attendance";
import Reports from "./dashboard/pages/Reports";
import Settings from "./dashboard/pages/Settings";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/Dashboard/Overview" replace />}
          />
          <Route path="overview" element={<Overview />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Home from "./pages/Home";
// import AuthProvider from "./login/Auths";
// import Layout from "./dashboard/components/Layout";
// import Dashboard from "./dashboard/pages/Dashboard";
// import Students from "./dashboard/pages/Students";
// import Attendance from "./dashboard/pages/Attendance";
// import Reports from "./dashboard/pages/Reports";
// import Settings from "./dashboard/pages/Settings"
// import ProtectedRoute from "./components/ProtectedRoute"

// // These are the new components inside Dashboard
// import Overview from "./dashboard/pages/Overview";
// // import Classes from "./dashboard/pages/Classes";

// function App() {
//   return (
//     <Routes>
//       {/* Public route */}
//       <Route path="/" element={<Home />} />

//       {/* Auth route */}
//       <Route
//         path="/AuthProvider"
//         element={
//           <ProtectedRoute>
//             <Layout />
//           </ProtectedRoute>
//         }
//       />

//       {/* Dashboard layout */}
//       <Route path="/dashboard" element={<Layout />}>
//         {/* Redirect /dashboard to /dashboard/dashboard */}
//         <Route index element={<Navigate to="dashboard" replace />} />

//         {/* Dashboard main route with tabs inside */}
//         <Route path="dashboard" element={<Dashboard />}>
//           <Route index element={<Overview />} />
//           {/* <Route path="classes" element={<Classes />} /> */}
//           <Route path="overview" element={<Overview />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="reports" element={<Reports />} />
//         </Route>

//         {/* Other pages */}
//         <Route path="students" element={<Students />} />
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
