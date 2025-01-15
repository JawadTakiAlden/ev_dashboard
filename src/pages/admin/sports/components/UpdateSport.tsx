import React from "react";
import { Sport } from "../../../../tables-def/sport";
import PopupButton from "../../../../components/PopupButton";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import SportForm from "./SportForm";
import { useUpdateSport } from "../../../../api/sports";

const UpdateSport = ({ sport }: { sport: Sport }) => {
  const updateSport = useUpdateSport();
  return (
    <PopupButton
      ButtonComponentRender={({ handleOpen }) => (
        <IconButton color="warning" onClick={handleOpen}>
          <MdModeEditOutline />
        </IconButton>
      )}
      title="update"
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>
              Update <q>{sport.title}</q>
            </DialogTitle>
            <DialogContent>
              <SportForm
                initialValues={{
                  title: sport.title,
                }}
                task="update"
                loadingButtonProps={{
                  loading: updateSport.isPending,
                }}
                onSubmit={(values) => {
                  updateSport.mutateAsync({ data: values, id: sport.id });
                  handleClose();
                }}
              />
            </DialogContent>
          </Dialog>
        );
      }}
    />
  );
};

export default UpdateSport;
