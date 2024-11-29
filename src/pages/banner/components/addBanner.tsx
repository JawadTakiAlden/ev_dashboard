import React from "react";
import PopupButton from "../../../components/PopupButton";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import BannerForm from "./BannerForm";

const AddBanner = () => {
  return (
    <PopupButton
      title="create banner"
      DialogRender={({ props }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>Create banner</DialogTitle>
            <DialogContent>
              <DialogContentText mb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                repellendus rem veritatis vero minima. Eius, libero blanditiis.
                Accusamus quidem ipsa est reiciendis dolorum vel dignissimos.
                Illo atque eveniet sapiente! Maiores?
              </DialogContentText>
              <BannerForm
                initialValues={{
                  image: null,
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default AddBanner;
