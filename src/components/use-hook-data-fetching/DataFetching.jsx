import { Suspense } from "react";
import { use } from "react";

const DataFetching = () => {
  const fetchJokes = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  };

  const JokeItem = () => {
    const joke = use(fetchJokes());
    return (
      <h2 className="text-xl font-medium italic text-neutral-900">
        {joke.value}
      </h2>
    );
  };

  return (
    <div className="shadow p-4 my-6 rounded bg-emerald-50">
      {/* suspense function er upor wrap korarno lage */}
      <Suspense
        fallback={
          <h2 className="shadow p-4 bg-gray-50 text-xl text-center font-bold mt-5">
            Loading...
          </h2>
        }
      >
        <JokeItem />
      </Suspense>
    </div>
  );
};

export default DataFetching;
