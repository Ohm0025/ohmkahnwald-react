import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import PostPage from "./pages/PostPage";
import UserProfilePage from "./pages/UserPage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import LoginPage from "./pages/loginpage/LoginPage";
import CreatePostPage from "./pages/createpostpage/CreatePostPage";
import VerifyEmailPage from "./pages/verifypage/VerifyPage";
import SocialPage from "./pages/socialpage/SocialPage";
import ChatPage from "./pages/chatpage/ChatPage";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "post",
        element: <PostPage />,
      },
      {
        path: "profile",
        element: <UserProfilePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "post-create",
        element: <CreatePostPage />,
      },
      {
        path: "verify-page",
        element: <VerifyEmailPage />,
      },
      {
        path: "social-page",
        element: <SocialPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
]);

export default mainRouter;
