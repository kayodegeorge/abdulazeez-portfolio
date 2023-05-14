import Image from "next/image";

const projects = [
  {
    title: "Paypen",
    description:
      "A web app built solely for the purspose of employees pension payment",
    image: "/.png",
  },
  {
    title: "Instaclean website",
    description:
      "Tech-powered marketplace for professional cleaning services in Nigeria",
    image: "/.png",
  },
  {
    title: "Gida App",
    description:
      "A mobile app that connects vetted professional cleaning service providers to customers",
    image: "/.png",
  },
  {
    title: "Raha App",
    description:
      "A payment app that offers a fast, secure, and convenient way to make transactions",
    image: "/.png",
  },
];

export default function Home() {
  return (
    <div className="px-4 lg:px-24">
      <section className="mt-14 lg:mt-56">
        <h1 className="text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]">
          Product Designer & No-code Developer
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          <p className="mt-6 max-w-lg lg:text-2xl">
            Hi there!👋🏽 I&apos;m Abdulazeez , a product designer skilled in user
            experience and visual design — I strive to create intuitive and
            engaging experiences that excites users and businesses.
          </p>

          <div className="flex items-center">
            <div className="flex w-fit items-center gap-3 rounded-full border border-black py-4 pl-6 pr-7">
              <span className="uppercase">Learn more</span>

              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.72571C0 7.34601 0.282154 7.03222 0.648229 6.98255L0.75 6.97571L15.75 6.97571C16.1642 6.97571 16.5 7.31149 16.5 7.72571C16.5 8.1054 16.2178 8.4192 15.8518 8.46886L15.75 8.47571L0.75 8.47571C0.335786 8.47571 0 8.13992 0 7.72571Z"
                  fill="#0F141E"
                />
                <path
                  d="M9.17101 2.23278C8.87749 1.94051 8.87646 1.46564 9.16872 1.17212C9.43442 0.905279 9.85103 0.880177 10.1451 1.0974L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.17251L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.72501L9.17101 2.23278Z"
                  fill="#0F141E"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 lg:mt-52">
        <h2 className="text-4xl lg:text-[102px] lg:leading-tight">
          Selected Projects
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="h-80 bg-blue-400"></div>

              <div className="border border-x border-b p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{project.title}</h3>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7.72571C0 7.34601 0.282154 7.03222 0.648229 6.98255L0.75 6.97571L15.75 6.97571C16.1642 6.97571 16.5 7.31149 16.5 7.72571C16.5 8.1054 16.2178 8.4192 15.8518 8.46886L15.75 8.47571L0.75 8.47571C0.335786 8.47571 0 8.13992 0 7.72571Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M9.17101 2.23278C8.87749 1.94051 8.87646 1.46564 9.16872 1.17212C9.43442 0.905279 9.85103 0.880177 10.1451 1.0974L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.17251L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.72501L9.17101 2.23278Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#828282]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24 mt-24 lg:mb-52 lg:mt-52">
        <h2 className="mx-auto max-w-xl text-center text-5xl leading-tight lg:text-[102px] lg:leading-none">
          Want to start a project
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="flex w-fit items-center gap-3 rounded-full border border-black py-4 pl-6 pr-7">
            <span className="uppercase">Let&apos;s talk</span>

            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.72571C0 7.34601 0.282154 7.03222 0.648229 6.98255L0.75 6.97571L15.75 6.97571C16.1642 6.97571 16.5 7.31149 16.5 7.72571C16.5 8.1054 16.2178 8.4192 15.8518 8.46886L15.75 8.47571L0.75 8.47571C0.335786 8.47571 0 8.13992 0 7.72571Z"
                fill="#0F141E"
              />
              <path
                d="M9.17101 2.23278C8.87749 1.94051 8.87646 1.46564 9.16872 1.17212C9.43442 0.905279 9.85103 0.880177 10.1451 1.0974L10.2294 1.16983L16.2794 7.19383C16.547 7.46032 16.5714 7.87843 16.3524 8.17251L16.2794 8.25673L10.2294 14.2817C9.93593 14.574 9.46105 14.573 9.16877 14.2795C8.90305 14.0127 8.87971 13.596 9.09817 13.3028L9.17096 13.2189L14.687 7.72501L9.17101 2.23278Z"
                fill="#0F141E"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

// return (
//   <div className="text-gray px-[100px] py-[271px]">
//     <div className="">
//       <div className="text-[102px]">
//         <h1>Product Designer &</h1>
//         <h1>No-code Developer</h1>
//       </div>
//       <div className="flex gap-[84px]">
//         <div className="text-[24px]">
//           <p>Hi there!👋🏽 I&apos;m Abdulazeez , a product designer skilled </p>
//           <p>in user experience and visual design — I strive</p>
//           <p>to create intuitive and engaging experiences that</p>
//           <p>excites users and businesses.</p>
//         </div>
//         <div className=" ">
//           <div className=" flex ">
//             <button className="flex py-[15px] px-[24px] border-text-dark gap-2 mt-10 border rounded-[50px]">
//               <p>LEARN MORE</p>
//               <div className="mt-1">
//                 <Image
//                   height={14}
//                   width={16}
//                   src={"assets/arrow-right.svg"}
//                   alt="right arrow image"
//                 ></Image>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );