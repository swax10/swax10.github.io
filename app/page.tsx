import CV from "./components/CV";
import Github from "./components/Github";
import GoogleScholar from "./components/GoogleScholar";
import LinkedIn from "./components/LinkedIn";
import X from "./components/X";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row p-5 sm:p-20">
      <header className="flex flex-col items-center sm:items-start">
        <h1 className="text-2xl sm:text-4xl text-nowrap font-bold pb-5">
          Shreyas Waghmode
        </h1>
        <div>
          <Image
            className="w-48 h-48 sm:w-72 sm:h-72 rounded-full"
            src="https://avatars.githubusercontent.com/u/110764543?v=4"
            alt="User's Avatar"
          />
          <div className="flex flex-row justify-center pt-5">
            <CV />
            <Github />
            <GoogleScholar />
            <X />
            <LinkedIn />
          </div>
        </div>
      </header>
      <section className="pl-5 sm:pl-10">
        <h1 className="font-semibold text-gray-800 text-xl sm:text-2xl">
          👋 Hi,
        </h1>
        <p>
          I’m Shreyas Waghmode, an undergraduate student pursuing Artificial
          Intelligence and Data Science at
          <a className="text-red-400 font-bold" href="https://nhitm.ac.in/">
            {" "}
            NHITM
          </a>
          , Thane. I have the privilege of being advised by
          <a
            href="https://www.linkedin.com/in/dr-megha-v-gupta-78650b169/"
            className="text-red-400 font-bold"
          >
            {" "}
            Dr. Megha V Gupta
          </a>{" "}
          &
          <a
            href="https://www.linkedin.com/in/suhas-waghmare-975277131/"
            className="text-red-400 font-bold"
          >
            {" "}
            Asst Prof.Suhas Waghmare
          </a>
          . My research interests revolve around
          <strong className="text-lg font-semibold text-gray-800">
            {" "}
            Multimodal AI
          </strong>
          .
        </p>
        <br />
        <h2 className="text-lg font-semibold text-gray-800 my-4">
          Here’s a deeper dive into my interests and experiences:
        </h2>
        <p>
          <h2 className="text-lg font-semibold text-gray-800">
            Research Focus 🔭:
          </h2>{" "}
          My passion lies in Multimodal AI, where I explore the intersection of
          computer vision, natural language processing, and audio analysis. I'm
          fascinated by how different modalities can enhance each other, leading
          to more robust and context-aware AI systems.
        </p>
        <p>
          <h2 className="text-lg font-semibold text-gray-800 pt-5">
            Projects 🚀:
          </h2>{" "}
          Besides my coursework, I've worked on exciting projects. One of them
          is the MultimodalDataLoader, a tool I developed for efficient data
          loading in both JAX and PyTorch. It's been a rewarding experience, and
          I'm always eager to contribute to open-source projects.
        </p>
        <p>
          <h2 className="text-lg font-semibold text-gray-800 pt-5">
            Languages and Tools 💻 :
          </h2>{" "}
          I'm proficient in Python (especially with libraries like PyTorch and
          JAX), but I also have a soft spot for Rust and Haiku. Exploring
          different programming paradigms keeps me curious and motivated.
        </p>
        <p>
          <h2 className="text-lg font-semibold text-gray-800 pt-5">
            Gaming Enthusiast 🎮:
          </h2>{" "}
          When I'm not immersed in code or research papers, you'll find me
          battling virtual dragons or exploring distant galaxies in video games.
          Gaming fuels my creativity and problem-solving skills.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 pt-10">
          {" "}
          Research Highlights{" "}
        </h3>
        <table className="table-auto">
          <tbody>
            <tr>
              {" "}
              {/* Add this line */}
              <td>
                <br />
                <div>
                  <b>
                    <a
                      href="https://drive.google.com/file/d/1HCmImT9bDwDw_5ZfOt5hkisY6O8mMSGC/view?usp=sharing"
                      className="text-red-400 font-bold"
                    >
                      Introduction to Multimodal Deep Learning 🌟
                    </a>
                  </b>
                </div>
                <div>
                  Introduction to Multimodal Deep Learning is a comprehensive
                  guide to understanding the basics of multimodal deep learning.
                  It covers the fundamentals of multimodal learning, its
                  applications, and the challenges faced in the field.
                </div>
              </td>
            </tr>{" "}
            {/* Add this line */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
