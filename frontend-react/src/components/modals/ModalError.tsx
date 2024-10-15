interface Props {
  show: boolean;
  title?: string;
  text?: string;
  onClick: () => void;
}

export default function ModalError({
  show = false,
  title = "Błąd",
  text = "Wystąpił błąd. Wystąpił błąd. Wystąpił błąd. Wystąpił błąd. Wystąpił błąd. ",
  onClick,
}: Props) {
  if (!show) return null;

  return (
    <div onClick={onClick} className="background-blurred">
      <div className="position-modal shadow-xl bg-white w-96 p-4 ">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <div className="border-4 border-solid border-black p-4 bg-red">
            <p className="text-center text-white text-2xl">{title}</p>
          </div>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}
