import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDeActivateUser } from "../../api/users";

const ActivateController = ({
  isActive,
  isLoading,
}: {
  isActive: boolean;
  isLoading: boolean;
}) => {
  const deActivateUser = useDeActivateUser();

  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  return (
    <Button
      variant="outlined"
      disabled={isLoading || deActivateUser.isPending}
      onClick={() => {
        deActivateUser.mutate();
      }}
    >
      {active ? "Deactivate" : "Activate"}
    </Button>
  );
};

export default ActivateController;
