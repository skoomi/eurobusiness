import { forwardRef } from "react";

type ModalProps = {
  title: string;
  message: string;
  close: () => void;
};
const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ title, message, close }, ref) => {
    return (
      <dialog ref={ref}>
        <div className="bg-white w-96 p-4 shadow-xl">
          <div className="border-4 border-solid border-black p-4 grid gap-2">
            <div className="border-4 border-solid border-black p-4 bg-[#066FB4]">
              <p className="text-center text-white text-2xl">{title}</p>
            </div>
            <p className="text-center text-2xl">{message}</p>
            <br />
            <button
              onClick={close}
              className="justify-self-center w-48 border-4 border-solid border-black p-2 bg-[#066FB4]"
            >
              <p className="text-center text-white text-2xl">Zamknij</p>
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default Modal;
