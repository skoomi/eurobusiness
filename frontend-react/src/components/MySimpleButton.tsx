type MyButtonProps = {
  onClick: () => void;
  text: string;
};
export default function MySimpleButton({ onClick, text }: MyButtonProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form default action

    onClick();
  };

  return (
    <>
      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <form method="post" onSubmit={handleSubmit} className="grid gap-2">
            <button
              type="submit"
              className="border-4 border-solid border-black p-4 bg-[#066FB4]"
            >
              <p className="text-center text-white text-2xl">{text}</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
