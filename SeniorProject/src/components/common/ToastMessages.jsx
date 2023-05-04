import {toast} from "react-toastify";

const ToastMessages = async (response,messages) => {
    if (response === "success") {
        await toast.success(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if(response === "error") {
        await toast.error(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }else if(response === "warning") {
        await toast.warn(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }else {
        await toast.info(messages, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}

export default ToastMessages;