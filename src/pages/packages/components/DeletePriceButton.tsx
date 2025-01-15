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
            <DialogTitle>Delete " {price.title} " confirmation</DialogTitle>
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
