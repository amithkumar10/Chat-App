import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayouts/PageLayout";
import MessagePage from "./pages/MessagePage/MessagePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import Verify from "./components/AuthForm/Verify";
import ChatBytesLanding from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<ChatBytesLanding />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/verify" element={<Verify />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
