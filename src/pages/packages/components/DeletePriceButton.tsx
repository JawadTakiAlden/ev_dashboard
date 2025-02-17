import { LoadingButton } from "@mui/lab";
import { PriceModel } from "../../../tables-def/price";
import PopupButton from "../../../components/PopupButton";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { useDeletePrice } from "../../../api/packages";

const DeletePriceButton = ({ price }: { price: PriceModel }) => {
  const deletePrice = useDeletePrice();
  return (
    <PopupButton
      title="delete price"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <Tooltip title="delete price">
            <Button variant="outlined" onClick={handleOpen} color={"error"}>
              delete
            </Button>
          </Tooltip>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Confirm Deletion of "{price.title}"</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the price entry "{price.title}"?
                This action is irreversible and will permanently remove the
                price entry from the system.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color={"error"}>
                Cancel
              </Button>
              <LoadingButton
                onClick={async () => {
                  await deletePrice.mutateAsync(price.id);
                  handleClose();
                }}
                loading={deletePrice.isPending}
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

export default DeletePriceButton;
