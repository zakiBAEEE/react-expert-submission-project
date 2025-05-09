import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { asynUnsetAuthUser } from "../states/authUser/action";
import { FaDoorOpen } from "react-icons/fa";

function DialogLogout() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const onLogout = () => {
        dispatch(asynUnsetAuthUser())
    }

    return (
        <>
            <div className="flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-gray-200 p-1 rounded-md" onClick={handleOpen}>
                <Typography variant="small">Log out</Typography>
                <FaDoorOpen size={20} />
            </div>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Konfirmasi Logout</DialogHeader>
                <DialogBody>
                    Anda ingin Keluar dari Aplikasi??
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={onLogout}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export { DialogLogout }