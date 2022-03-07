import React, { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation } from "../../service/api";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
  component: {
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
});

const Conversation = ({ user }) => {
  const url = user.imageUrl;
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img src={url} alt="dp" className={classes.displayPicture}></img>
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
