import { Fragment, useState } from "react";
import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import SignIn from "./Login";

export default function LoginComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="filled" size="sm">
        Iniciar Sesión
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <SignIn />
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
