import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Get user data from localStorage (set during login)
    const userName = localStorage.getItem("userName") || "User";
    const userEmail = localStorage.getItem("userEmail") || "";
    const names = userName.split(" ");

    setUser({
      firstName: names[0] || "",
      lastName: names[1] || "",
      email: userEmail,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="profile-container">
      {/* Navigation Bar */}
      <nav className="profile-navbar">
        <div className="navbar-brand">
          <svg className="navbar-brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h1 className="profile-navbar-title">My Profile</h1>
        </div>
        <div className="navbar-menu">
          <button
            className="back-button"
            onClick={() => navigate("/dashboard")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">{user.firstName?.charAt(0) || "U"}</div>
            <div className="profile-info">
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <label>First Name</label>
              <p>{user.firstName}</p>
            </div>
            <div className="detail-item">
              <label>Last Name</label>
              <p>{user.lastName}</p>
            </div>
            <div className="detail-item">
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="profile-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
