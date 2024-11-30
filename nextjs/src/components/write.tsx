import NavBar from "@/components/navbar";
export default function WriteEditor() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <input
          type="text"
          placeholder="Title"
          className="w-full text-5xl font-serif placeholder-gray-300 border-none focus:outline-none focus:ring-0"
        />
        <div className="mt-8 flex items-start gap-2">
          <button className="mt-1.5">
            <span className="sr-only">Add content</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <textarea
            placeholder="Tell your story..."
            className="w-full min-h-[200px] text-xl placeholder-gray-400 border-none focus:outline-none focus:ring-0 resize-none"
          />
        </div>
      </main>
    </div>
  );
}
