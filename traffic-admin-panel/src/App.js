import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import Landing from './components/Landing';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import DashboardPage from './components/Dashboard/DashboardPage';
import VideoManagement from './components/VideoManagement/VideoManagement';
import ReportsAnalytics from './components/ReportsAnalytics/ReportAnalytics';
import AnalysisResults from './components/AnalysisResults/AnalysisResults';
import AlertsNotifications from './components/AlertsNotifications/AlertsNotifications';
import SystemManagement from './components/SystemManagement/SystemManagement';
import MaintenanceUpdates from './components/MaintenanceUpdates/MaintenanceUpdates';

const App = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [uploadedVideo, setUploadedVideo] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        }
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        delete axios.defaults.headers.common['Authorization'];
    };

    const handleVideoUpload = (video) => {
        setUploadedVideo(video);
    };

    return (
        <Router>
            <div className="App">
                <Navbar
                    handleDrawerToggle={handleDrawerToggle}
                    handleSidebarToggle={handleSidebarToggle}
                    isAuthenticated={isAuthenticated}
                    handleLogout={handleLogout}
                />
                <Content
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                    sidebarOpen={sidebarOpen}
                    uploadedVideo={uploadedVideo}
                    handleVideoUpload={handleVideoUpload}
                />
            </div>
        </Router>
    );
};

const Content = ({ isAuthenticated, setIsAuthenticated, mobileOpen, handleDrawerToggle, sidebarOpen, uploadedVideo, handleVideoUpload }) => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';

    return (
        <>
            {!isLandingPage && (
                <Sidebar
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                    isMobile={window.innerWidth <= 768}
                    open={sidebarOpen}
                />
            )}
            <main style={{ marginLeft: !isLandingPage && sidebarOpen ? 240 : 0, transition: 'margin-left 0.3s' }}>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />} />
                    <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={<SignupPage />} />
                    {isAuthenticated ? (
                        <>
                            <Route path="/dashboard" element={<DashboardPage uploadedVideo={uploadedVideo} />} />
                            <Route path="/video-management" element={<VideoManagement onVideoUpload={handleVideoUpload} />} />
                            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
                            <Route path="/analysis-results" element={<AnalysisResults />} />
                            <Route path="/alerts-notifications" element={<AlertsNotifications />} />
                            <Route path="/system-management" element={<SystemManagement />} />
                            <Route path="/maintenance-updates" element={<MaintenanceUpdates />} />
                            {/* Add other authenticated routes here */}
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/login" />} />
                    )}
                </Routes>
            </main>
        </>
    );
};

export default App;

