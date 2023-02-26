import { useState } from "react";
import { createLink } from "../services/api";
import env from "react-dotenv";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [generatedSlug, setGeneratedSlug] = useState();
  const baseUrl = env.BASE_URL;

  if (!baseUrl) return <p>Please set the BASE_URL env variable</p>;

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await createLink({ url, title });
    setGeneratedSlug(response.data.slug);
  };

  if (generatedSlug) {
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy">
            Congrats! Here's your slug:
          </h1>
          <div className="mb-2">
            <h2>Your Long URL</h2>
            <p>{url}</p>
          </div>
          <div className="mb-2">
            <h2>Your Slug</h2>
            <a
              href={`${baseUrl}/${generatedSlug}`}
            >{`${baseUrl}/${generatedSlug}`}</a>
          </div>
          <div className="mb-2">
            <button
              type="submit"
              onClick={() => {
                setTitle("");
                setUrl("");
                setGeneratedSlug(undefined);
              }}
              className="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
            >
              Create another!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase decoration-wavy">
          Create Link
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Link Title</span>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="
    
                w-full
                block px-16 py-2 mt-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                placeholder="My short URL title"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Long URL</span>
              <input
                name="url"
                type="text"
                placeholder="My long maps URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="
                block
                w-full
                mt-2 px-16 py-2
                border-gray-300
                rounded-md
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
                required
              />
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              disabled={url === "" || title === ""}
              onClick={handleCreate}
              className="
                h-10
                px-5
                text-indigo-100
                bg-indigo-700
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-indigo-800
              "
            >
              Create!
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};
