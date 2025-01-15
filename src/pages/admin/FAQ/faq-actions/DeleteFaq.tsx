import React from "react";
import { Faq } from "../../../../tables-def/faq";
import PopupButton from "../../../../components/PopupButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDeleteFaq } from "../../../../api/faqs";

const DeleteFaq = ({ faq }: { faq: Faq }) => {
  const deleteFaq = useDeleteFaq();
  return (
    <PopupButton
      ButtonComponentRender={({ handleOpen }) => (
        <IconButton color="error" onClick={handleOpen}>
          <MdOutlineDeleteSweep />
        </IconButton>
      )}
      title="delete"
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>
              Confirm Deletion of <q>{faq.question}</q>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this FAQ? This action cannot be
                undone. Please confirm if you wish to proceed with removing the
                FAQ titled <q>{faq.question}</q>.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error" variant="outlined">
                Cancel
              </Button>
              <LoadingButton
                onClick={() => {
                  deleteFaq.mutateAsync(faq.id);
                  handleClose();
                }}
                loading={deleteFaq.isPending}
                color="primary"
                variant="contained"
              >
                Confirm
              </LoadingButton>
            </DialogActions>
          </Dialog>
        );
      }}
    />
  );
};

export default DeleteFaq;
