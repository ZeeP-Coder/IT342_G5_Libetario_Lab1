import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutModal from "../components/LogoutModal";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("userName") || "User";
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
      {/* Navigation Bar */}
      <nav className="dashboard-navbar">
        <div className="navbar-brand">
          <svg className="navbar-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <h1 className="dashboard-navbar-title">Libetario Dashboard</h1>
        </div>
        <div className="dashboard-navbar-menu">
          <button
            className="profile-link-button"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
          <button className="logout-button" onClick={() => setShowLogoutModal(true)}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <h1>Welcome, {userName}!</h1>
          <p>You are successfully logged in to your account.</p>
          <span className="dashboard-status">Active</span>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="dashboard-card-icon-wrapper">
              <svg className="dashboard-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>Profile</h3>
            <p>View and edit your personal profile information and settings.</p>
            <button
              className="dashboard-card-button"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Dashboard;
