import React from "react";
import PopupButton from "../../../components/PopupButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";
import { LoadingButton } from "@mui/lab";
import { DeliveryTime } from "../../../tables-def/delivery-times";
import { useDeleteDeliveryTime } from "../../../api/delivery-times";

const DeleteDeliveryTime = ({
  deliveryTime,
}: {
  deliveryTime: DeliveryTime;
}) => {
  const deleteDeliveryTime = useDeleteDeliveryTime();
  return (
    <PopupButton
      title="delete delivery time"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <Tooltip title="delete delivery time">
            <IconButton onClick={handleOpen} color={"error"}>
              <MdDeleteSweep />
            </IconButton>
          </Tooltip>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>
              Delete " {deliveryTime.title} " confirmation
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                hic a quos modi tempora eveniet ea numquam similique facere
                nihil. Eius in eum sed deserunt quae corporis adipisci nisi
                minima?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color={"error"}>
                Cancel
              </Button>
              <LoadingButton
                onClick={async () => {
                  await deleteDeliveryTime.mutateAsync(deliveryTime.id);
                  handleClose();
                }}
                loading={deleteDeliveryTime.isPending}
                variant="outlined"
                color={"success"}
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

export default DeleteDeliveryTime;
