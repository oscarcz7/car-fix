import { Fragment, useState } from "react";
import { Button, Dialog, DialogFooter } from "@material-tailwind/react";

import Register from "./Register";

export default function RegisterComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="outlined" size="sm">
        Crear Cuenta
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <Register />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
