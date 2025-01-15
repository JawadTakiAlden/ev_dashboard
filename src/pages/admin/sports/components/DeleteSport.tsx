import React from "react";
import { Sport } from "../../../../tables-def/sport";
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
import { MdOutlineDeleteSweep } from "react-icons/md";
import { LoadingButton } from "@mui/lab";
import { useDeleteSport } from "../../../../api/sports";

const DeleteSport = ({ sport }: { sport: Sport }) => {
  const deleteSport = useDeleteSport();
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
              Delete <q>{sport.title}</q> Comfirmation
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto praesentium dolorem vel hic quam sunt temporibus
                blanditiis dolores tenetur, reiciendis at. Animi reprehenderit a
                nihil veniam atque ea eveniet perferendis.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error" variant="outlined">
                Cancel
              </Button>
              <LoadingButton
                onClick={() => {
                  deleteSport.mutateAsync(sport.id);
                  handleClose();
                }}
                loading={deleteSport.isPending}
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

export default DeleteSport;
