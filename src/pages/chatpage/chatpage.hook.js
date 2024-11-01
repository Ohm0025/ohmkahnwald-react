import { useState } from "react";
import { useUser } from "../../contexts/userContext";

const samplechat = [
  {
    username: "porramt",
    lastDate: "10/09/45 15:00",
    imgProfile:
      "https://res.cloudinary.com/dhbf0rynh/image/upload/v1730202692/uploadedImage/zwqd8ca4d9mxogfkozhl.jpg",
  },
  {
    username: "porramt",
    imgProfile:
      "https://res.cloudinary.com/dhbf0rynh/image/upload/v1730202692/uploadedImage/zwqd8ca4d9mxogfkozhl.jpg",
  },
  {
    username: "porramt",
    imgProfile:
      "https://res.cloudinary.com/dhbf0rynh/image/upload/v1730202692/uploadedImage/zwqd8ca4d9mxogfkozhl.jpg",
  },
];

const useChatPage = (socket) => {
  const { user } = useUser();
  const [chats, setChats] = useState([...samplechat]);

  return {
    user,
    chats,
  };
};

export default useChatPage;
