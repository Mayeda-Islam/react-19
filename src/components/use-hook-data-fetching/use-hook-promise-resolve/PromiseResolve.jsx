import React, { Suspense, useState, use } from "react";

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀");
    }, 1000);
  });
};
const MessageOutput = ({ messageOut }) => {
  return <p>here is the message:{messageOut}</p>;
};
const ShowContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p className="text-xl">⌛ Downloading message...</p>}>
      <MessageOutput messageOut={messagePromise} />
    </Suspense>
  );
};
const PromiseResolve = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);
  const handleDownload = () => {
    setMessage(fetchMessage);
    setShow(true);
  };
  return (
    <div>
      {show ? (
        <ShowContainer messagePromise={message} />
      ) : (
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download message
        </button>
      )}
    </div>
  );
};

export default PromiseResolve;
