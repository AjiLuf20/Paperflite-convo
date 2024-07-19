import React from "react";
import Nav from "./nav";
import ConversationsTrack from "./conversationsTrack";

const ConversationInformation = React.lazy(
  () => import("./conversationInformation")
);

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row h-full">
      <Nav />
      <ConversationsTrack />
      <ConversationInformation />
    </div>
  );
};

export default Dashboard;
