import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import PostPage from "./pages/postpage/PostPage";
import UserProfilePage from "./pages/userpage/UserPage";
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
        path: "post/:postBlogId",
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
        path: "post-edit/:postBlogId",
        element: <CreatePostPage edited={true} />,
      },
      {
        path: "verify-page",
        element: <VerifyEmailPage />,
      },
      // {
      //   path: "social-page",
      //   element: <SocialPage />,
      // },
      // {
      //   path: "chat",
      //   element: <ChatPage />,
      // },
    ],
  },
]);

export default mainRouter;
