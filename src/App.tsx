import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketProvider } from "@/context/SocketProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/layout/Layout";

// Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Customers from "@/pages/Customers";
import Projects from "@/pages/Projects";
import Tasks from "@/pages/Tasks";
import Reports from "@/pages/Reports";
import Support from "@/pages/Support";
import NotFound from "@/pages/NotFound";
import ChatPage from "@/pages/Chat";

export default function App() {
  return (
    <SocketProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
          <Route path="/customers" element={<ProtectedRoute><Layout><Customers /></Layout></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><Layout><Projects /></Layout></ProtectedRoute>} />
          <Route path="/tasks" element={<ProtectedRoute><Layout><Tasks /></Layout></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><Layout><Reports /></Layout></ProtectedRoute>} />
          <Route path="/support" element={<ProtectedRoute><Layout><Support /></Layout></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Layout><ChatPage /></Layout></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SocketProvider>
  );
}