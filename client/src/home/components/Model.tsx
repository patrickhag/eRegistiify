type ModelT = {
  title: string;
  content: string;
  closeHandler: () => void;
};

const Model = ({ title, content, closeHandler }: ModelT) => {
  return (
    <div className="container sticky bottom-0 left-0 top-0 h-screen min-w-[100vw] bg-opacity-[0.7] bg-sky-200 z-40  flex justify-center items-center">
      <div className=" boreder-1 rounded-lg shadow-md min-h-[300px] md:max-w-[350px] md:min-w-[500px] bg-white">
        <div className="p-6 flex justify-between px-10 bg-sky-100 text-2xl font-sembold">
          <p>{title} </p>
          <span
            className="cursor-pointer bg-sky-800 text-sky-50 hover:bg-sky-600 rounded-md px-2  "
            onClick={closeHandler}
          >
            &times;
          </span>
        </div>
        <div className="p-6 h-[60%] flex items-center">{content}</div>
      </div>
    </div>
  );
};
export default Model;
