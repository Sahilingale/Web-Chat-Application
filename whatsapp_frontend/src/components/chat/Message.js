import React, { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    background: "#FFFFFF",
    maxWidth: "60%",
    padding: 5,
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
  },
  text: {
    fontSize: 14,
    padding: "0 25px 0 5px",
  },
  time: {
    fontSize: 10,
    marginTop: "auto",
    marginTop: 6,
    color: "#919191",
    wordBreak: "keep-alive",
  },
  own: {
    display: "flex",
    background: "#dcf8c6",
    maxWidth: "60%",
    padding: 5,
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
    marginLeft: "auto",
  },
});
const Message = ({ message }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };

  return (
    <Box
      className={
        account.googleId === message.sender ? classes.own : classes.wrapper
      }
    >
      <Typography className={classes.text}>{message.text}</Typography>
      <Typography className={classes.time}>
        {formatDate(new Date(message.createdAt).getHours())}:
        {formatDate(new Date(message.createdAt).getMinutes())}
      </Typography>
    </Box>
  );
};

export default Message;
