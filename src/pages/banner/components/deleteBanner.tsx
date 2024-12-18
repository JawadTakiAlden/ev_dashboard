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
} from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";
import { BannerModel } from "../../../tables-def/banner";
import { LoadingButton } from "@mui/lab";
import { useDeleteBanner } from "../../../api/banner";

const DeleteBanner = ({ banner }: { banner: BannerModel }) => {
  const deleteBanner = useDeleteBanner();
  return (
    <PopupButton
      title="delete banner"
      ButtonComponentRender={({ handleOpen }) => {
        return (
          <IconButton onClick={handleOpen} color="error">
            <MdDeleteSweep />
          </IconButton>
        );
      }}
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Delete banner confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                repellendus rem veritatis vero minima. Eius, libero blanditiis.
                Accusamus quidem ipsa est reiciendis dolorum vel dignissimos.
                Illo atque eveniet sapiente! Maiores?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <LoadingButton
                onClick={async () => {
                  await deleteBanner.mutateAsync(banner.id);
                  handleClose();
                }}
                variant="outlined"
                loading={deleteBanner.isPending}
                color="primary"
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

export default DeleteBanner;
