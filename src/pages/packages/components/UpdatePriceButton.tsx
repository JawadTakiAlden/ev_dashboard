import React from "react";
import PopupButton from "../../../components/PopupButton";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import PricingForm from "./PricingForm";
import { Pricing } from "../../../tables-def/packages";

const UpdatePriceButton = ({ price }: { price: Pricing }) => {
  return (
    <PopupButton
      ButtonComponentRender={({ handleOpen }) => (
        <Button variant="outlined" color="warning" onClick={handleOpen}>
          Edit
        </Button>
      )}
      title="Edit"
      DialogRender={({ props }) => (
        <Dialog {...props}>
          <DialogTitle>Edit Price Information</DialogTitle>
          <DialogContent>
            <PricingForm
              task="update"
              dir="column"
              initialValues={price}
              onSubmit={(values) => {
                console.log(values);
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    />
  );
};

export default UpdatePriceButton;
