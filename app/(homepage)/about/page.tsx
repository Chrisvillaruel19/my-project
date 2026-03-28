export default function AboutPage() {

  // 🔹 DATA (easy to edit)
  const data = {
    about: {
      name: "Niño Villaruel",
      description: "Frontend Developer passionate about clean UI.",
    },

    experience: [
      { title: "Student", description: "Studying IT" },
      { title: "Frontend Dev", description: "React & Tailwind" },
    ],

    techStack: ["HTML", "CSS", "JavaScript", "React"],

    philosophy: [
      "Keep it simple",
      "Focus on users",
      "Keep learning",
    ],
  };

  return (
    <div className="py-10 space-y-20">

      {/* ================= ABOUT SECTION ================= */}
      <section className="flex justify-center">
        <div className="flex items-center gap-10 max-w-4xl">

          <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
            Profile
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {data.about.name}
            </h1>
            <p className="text-gray-600">
              {data.about.description}
            </p>
          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="flex justify-between px-16">

        {/* LEFT */}
        <div className="w-2/3 space-y-4">
          <h2 className="font-semibold text-xl">
            Experience
          </h2>

          {data.experience.map((item, i) => (
            <div key={i}>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-1/3">
          <h2 className="font-semibold text-xl text-right">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 gap-2 mt-3">
            {data.techStack.map((tech, i) => (
              <div key={i} className="border p-2 text-center">
                {tech}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="px-16">
        <h2 className="text-center font-semibold text-xl mb-6">
          My Philosophy
        </h2>

        <div className="flex justify-between gap-4">
          {data.philosophy.map((item, i) => (
            <div key={i} className="border p-4 w-1/3">
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}