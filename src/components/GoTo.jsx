import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLinkBySlug } from "../services/api";

export const GoTo = () => {
  const [error, setError] = useState();
  let { slug } = useParams();

  useEffect(() => {
    if (slug) {
      getLinkBySlug({ slug })
        .then((response) => {
          window.location.replace(response.data.longUrl);
          return;
        })
        .catch((e) => setError(e.message));
    }
  }, [slug]);

  if (error)
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Holy smokes!</strong>
            <span class="block sm:inline">
              We couldn't find that slug in our database!
            </span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy">
          Please wait, redirecting you to the requested URL
        </h1>
      </div>
    </div>
  );
};
