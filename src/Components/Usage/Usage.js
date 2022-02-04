import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";

import { HiPencil } from "react-icons/hi";

import "./Usage.css";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#c4eef5",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[900],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#74b6ed",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: "#c4eef5",
  },
}))(MuiDialogActions);

function Usage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="usage">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{ color: "white", backgroundColor: "#74b6ed" }}
      >
        FAQs
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4>HandWriting</h4>
          <h5>FAQs</h5>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom className="text">
            <HiPencil /> Choose from 34 fonts that looks handwritten <br />
            <HiPencil />
            To use your handwriting, you will have to generate font of your
            handwriting.
            <br />
            <HiPencil /> There are websites like{" "}
            <a href="http://www.calligraphr.com">Calligraphr</a> that let you do
            that.
            <br />
            <HiPencil />
            Once you get .ttf file of your handwriting, upload it to 'Choose
            Your Own Font' button in customizations sections
            <br />
            <HiPencil /> There is a known issue of gaps between letters in
            custom font, there is letter spacing and word spacing option to
            adjust the gap.
            <br />
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            className="button"
            autoFocus
            href="https://github.com/UttamKumar2615"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<GitHubIcon />}
          >
            Visit Repo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Usage;
