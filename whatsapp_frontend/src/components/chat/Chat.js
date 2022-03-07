import React, { useState, useEffect, useContext } from "react";
import { Box } from "@material-ui/core";
import { getConversation } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const Chat = () => {
  const [conversation, setConversation] = useState({});
  const { account } = useContext(AccountContext);
  const { person } = useContext(UserContext);

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader />
      <Messages conversation={conversation} person={person} />
    </Box>
  );
};

export default Chat;
