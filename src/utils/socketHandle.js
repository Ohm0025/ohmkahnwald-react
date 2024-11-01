useEffect(() => {
  if (socket) {
    socket.on("message", (message) => {
      console.log("message at socket on : " + message);
    });
    socket.on("loadMessage", (message) => {
      console.log("loadMessage at socket on : " + message);
    });
    socket.on("activeUsers", (users) => {
      console.log("active users at socket on : " + users);
    });
    socket.on("userJoined", (username) => {
      console.log("userJoined at socket on : " + username);
    });
    socket.on("userLeft", (username) => {
      console.log("user left at socket on : " + username);
    });
    return () => {
      socket.off("message");
      socket.off("loadMessage");
      socket.off("activeUsers");
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }
}, [socket]);
