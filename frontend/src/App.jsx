import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Announcements from "./pages/Announcements";
import ReportIssue from "./pages/ReportIssue";
import MyReports from "./pages/MyReports";
import CommunityIssues from "./pages/CommunityIssues";
import Events from "./pages/Events";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import { setToken } from "./features/auth/authSlice";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <LandingPage />}
      />
      <Route
        element={
          <AuthenticatedRoute token={token}>
            <Layout />
          </AuthenticatedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/community-issues" element={<CommunityIssues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
