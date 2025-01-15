import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Faq } from "../../../../tables-def/faq";
import PopupButton from "../../../../components/PopupButton";
import { MdModeEditOutline } from "react-icons/md";
import FAQForm from "../form/FaqForm";
import { useUpdateFaq } from "../../../../api/faqs";

const UpdateFaq = ({ faq }: { faq: Faq }) => {
  const updateFaq = useUpdateFaq();
  return (
    <PopupButton
      ButtonComponentRender={({ handleOpen }) => (
        <IconButton color="warning" onClick={handleOpen}>
          <MdModeEditOutline />
        </IconButton>
      )}
      title="edit"
      DialogRender={({ props, handleClose }) => {
        return (
          <Dialog {...props}>
            <DialogTitle>
              Edit FAQ: <q>{faq.question}</q>
            </DialogTitle>
            <DialogContent>
              <FAQForm
                initialValues={faq}
                task="update"
                loadingButtonProps={{
                  loading: updateFaq.isPending,
                }}
                onSubmit={(values) => {
                  updateFaq.mutateAsync({ data: values, id: faq.id });
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

export default UpdateFaq;
