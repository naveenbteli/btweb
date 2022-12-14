import { Button } from "@mantine/core";
import React from "react";

const Reg = () => {
  return (
    <div className="bg-[#0D1117] lg:p-8 p-2 md:p-12 lg:px-16 lg:py-24 ">
      <div className="  text-center p-1 shadow-xl bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 rounded-2xl">
        <div className="block p-6 bg-[#0D1117] sm:p-8 rounded-xl">
          <div className="sm:pr-8">
            <h2 className="text-2xl mb-3 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-bl from-blue-500 via-yellow-500 to-orange-500 lg:text-5xl">
              Call For Papers{" "}
            </h2>

            <div>
              <p className="mt-1 pt-8 lg:pl-32   lg:pr-32 lg:text-2xl text-gray-300 text-justify">
                Prospective authors are encouraged to submit quality and
                original research papers for presentation at the Conference. The
                submission of the abstract should follow the standard template
                provided by the organizers of the conference. The acceptance of
                the abstract submission will be based on the relevance, quality
                of content, and plagiarism check. All oral and poster-related
                submissions including the technical paper submissions will be
                handled electronically, double-blind peer reviewed. All accepted
                and presented papers will be published in the conference
                proceedings and selected papers will be forwarded for
                publication in Elsevier.
              </p>
            </div>
             <div className="pt-8">
             <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              className="mt-2"
            >
              <a href="https://easychair.org/conferences/?conf=aimlbio2022">
              Paper submission link: 

              </a>
            </Button>

             </div>

             <h2 className="text-2xl mb-3 mt-8 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-bl from-blue-500 via-yellow-500 to-orange-500 lg:text-4xl">
             Objectives For Conference{" "}
            </h2>
           <div className="text-2xl text-sky-300 text-start lg:pl-32 pt-8">
            <ul>
              <li className="pb-4" >
                1. Envision the application of AI/ML in the new frontiers of biotechnology
              </li>
              <li  className="pb-4">
                2. Collaborate and network among the students, faculty, working  professionals and researchers
              
              </li>
              <li>
          
                3. Provide compendium of new ideas for research & commercial  applications
              </li>
            </ul>
            </div>
            
            <h2 className="text-2xl mb-3 p-16 pb-4 leading-snug text-transparent font-semibold bg-clip-text bg-gradient-to-bl from-blue-500 via-yellow-500 to-orange-500 lg:text-5xl">
              Register{" "}
            </h2>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:items-center justify-ceneter">
              <div className=" block p-8   ">
                <h3 className="mt-4 text-2xl font-bold text-white text-center">
                  Registrations Open
                </h3>
                <p className="mt-1 text-xl text-gray-300 text-center">
                  17th of August, 2022
                </p>
              </div>
              <div className=" block p-8  ">
                <h1 className="mt-4 text-2xl font-bold text-white text-center">
                  Registrations Close
                </h1>
                <p className="mt-1 text-xl text-gray-300 text-center">
                  14th of October, 2022
                </p>
              </div>
            </div>
            <div className="lg:pl-40">
              <div className=" block lg:p-8   ">
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Industry professionals: Rs. 3000/-
                </p>
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Professors and Research Scholars: Rs. 2000/-
                </p>
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Students - Presenting authors for oral presentations: Rs.
                  1000/-
                </p>
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Non-presenting authors for oral presentations: Rs. 750/-
                </p>
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Authors for poster presentations: Rs. 600/-
                </p>
                <p className="mt-1 lg:text-xl text-gray-300 text-start">
                  Foreign Delegates: $100/-
                </p>
              </div>
            </div>

            {/* <div>
              <p className="mt-1 text-xl text-gray-300 text-start">
                Prospective authors are encouraged to submit quality and
                original research papers for presentation at the Conference. The
                submission of the abstract should follow the standard template
                provided by the organizers of the conference. The acceptance of
                the abstract submission will be based on the relevance, quality
                of content, and plagiarism check. All oral and poster-related
                submissions including the technical paper submissions will be
                handled electronically, double-blind peer reviewed. All accepted
                and presented papers will be published in the conference
                proceedings and selected papers will be forwarded for
                publication in Elsevier.
              </p>
            </div> */}

            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "blue", deg: 60 }}
              className="mt-2"
            >
              <a href="https://easychair.org/conferences/?conf=aimlbio2022">
                Register
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
