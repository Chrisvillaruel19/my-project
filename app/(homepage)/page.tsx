
        export default function Home() {
  return (
    <div className="px-10 py-10 space-y-16 ">

      {/* 🔹 TOP SECTION */}
      <div className="flex items-center justify-between gap-50 p-60">

        {/* LEFT - PROFILE */}
        <div className="w-80 h-80 bg-gray-300 rounded-full flex items-center justify-center">
          <span>Image</span>
        </div>

        {/* RIGHT - INFO */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">Your Name</h1>
          
          <p className="text-gray-600">
            Short description about yourself. This is your intro section.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded">
              View Projects
            </button>
            <button className="border px-4 py-2 rounded">
              Contact Me
            </button>
          </div>
        </div>

      </div>

      {/* 🔹 SKILLS SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>

        <div className="flex flex-wrap gap-4">
          {["HTML", "CSS", "JavaScript", "Next.js"].map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 border rounded shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 PROJECTS SECTION */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-lg p-4 shadow-sm"
            >
              <div className="h-32 bg-gray-200 mb-3 flex items-center justify-center">
                Screenshot
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Project description here...
              </p>

              <button className="text-blue-500 underline">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 CTA SECTION */}
      <div className="bg-gray-100 p-20 text-center rounded-xl">
        <h2 className="text-2xl font-bold mb-4">CTA Section</h2>

        <button className="bg-black text-white px-6 py-2 rounded">
          Contact Me
        </button>
      </div>

    </div>
  );
}
   