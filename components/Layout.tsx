/* eslint-disable @next/next/no-html-link-for-pages */
import { AppShell, Button, Header, Image, Menu, Tooltip } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Links: Array<{
  href: string;
  label: string;
}> = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/themes",
    label: "Conference Themes",
  },
  {
    href: "/dates",
    label: "Important Dates",
  },
  {
    href: "/speakers",
    label: "Speakers",
  },
  // {
  //   href: "/partners",
  //   label: "Partners",
  // },
  {
    href: "/register",
    label: "Call For Papers",
  },
  {
    href: "/schedule",
    label: "Schedule",
  },
  {
    href: "/committee",
    label: "Committee",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

// const NavBar2 = () => {
//   return (
//     <header>
//       <div className="mx-auto max-w-screen-xl p-4 ">
//         <div className="flex items-center justify-around space-x-4  lg:space-x-10">
//           <div className="flex lg:w-0 lg:flex-1">
//             <Link href="/">
//               <a className="flex items-center" href="/">
//                 <Image
//                   src="https://rvce.edu.in/sites/default/files/logo_0.png"
//                   alt="logo"
//                   className=" mt-5 h-full w-20"
//                 />
//               </a>
//             </Link>
//           </div>
//           <div className="flex lg:w-0 lg:flex-1">
//             <Link href="/">
//               <a className="flex items-center" href="/">
//                 <Image
//                   src="https://rvce.edu.in/sites/default/files/logo_0.png"
//                   alt="logo"
//                   className=" mt-5 h-full w-20"
//                 />
//               </a>
//             </Link>
//           </div>
//           <div className="flex lg:w-0 lg:flex-1">
//             <Link href="/">
//               <a className="flex items-center" href="/">
//                 <Image
//                   src="https://rvce.edu.in/sites/default/files/logo_0.png"
//                   alt="logo"
//                   className=" mt-5 h-full w-20"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

const NavBar = () => {
  const router = useRouter();
  return (
    <header>
      <div className="bg-[#0d1117] flex basis-4	">
        <div className=" ml-10 grid place-items-center ">
          <a href="https://www.rvce.edu.in/">
            <Image
              src="https://rvce.edu.in/sites/default/files/logo_0.png"
              alt="RVCE Logo"
              height={70}
              width={70}
            />
          </a>
        </div>
        <div className="mx-auto max-w-screen-xl p-4 bg-[#0D1117]">
          <div className="flex items-center justify-center space-x-4 lg:space-x-10">
            <nav className="hidden space-x-8 text-sm font-medium md:flex">
              {Links.map((link) => (
                <Link href={link.href} key={JSON.stringify(link)}>
                  <a
                    className="text-white-500 font-bold hover:text-indigo-400"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="grid place-items-center mr-10">
              <a
                href="https://www.bioinnovationcentre.com/
                   "
              >
                <Image
                  src="https://www.bioinnovationcentre.com/storage/app/media/images/logo2.png"
                  alt="BIC Logo "
                  height={65}
                  width={175}
                />
              </a>
            </div>
            <div className="lg:hidden">
              <Menu>
                <Menu.Target>
                  <button
                    className="rounded-lg bg-[#1A1B1E] p-2  text-white	"
                    type="button"
                    name="Mobile Navigation Menu"
                  >
                    {" "}
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6h16M4 12h16M4 18h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </Menu.Target>
                <Menu.Label></Menu.Label>
                <Menu.Dropdown>
                  {Links.map((link) => (
                    <Menu.Item key={link.label}>
                      <Link href={link.href}>
                        <a className="text-white " href="/">
                          {link.label}
                        </a>
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="static bottom-0 w-[100%] bg-[#0d1117]">
      <div className=" mx-auto flex max-w-screen-xl flex-col items-center px-4 py-16 sm:px-6 lg:block  lg:px-8">
        {/* <div className=" flex justify-between"> */}

        <div>
            <Link href="/">
              <a className="flex items-center justify-items-center" href="/">
                <Image
                  src="https://rvce.edu.in/sites/default/files/logo_0.png"
                  alt="logo"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </div>

          {/* <div className=" block    ">
            <p className="mt-1 text-xl text-gray-300 text-center">
            For any further queries kindly contact:

            </p>
            <p className="mt-1 text-xl text-gray-300 font-bold text-center">
            Dr. Vidya Niranjan

            </p>
            <p className="mt-1 text-xl text-gray-300 text-center">
            Phone No. : +91 97415 77756/ +91 99454 65657

            </p>
            <p className="mt-1 text-xl text-gray-300 text-center">
            Conference Email: bioaiml2022@rvce.edu.in 

            </p>
            <p className="mt-1 text-xl text-gray-300 text-center">
            Email ID: vidya.n@rvce.edu.in

            </p>
            
          </div> */}

          
        {/* </div> */}
        <div className=" mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-white-500 font-bold ">
            &copy; 2022
            {new Date().getFullYear() === 2022
              ? ""
              : "- " + new Date().getFullYear()}{" "}
            Prajwal P Naveen B Teli
          </p>
          <div>
            <p className="text-sm text-gray-500">
              Developed by{" "}
              <a
                target="_blank"
                className="font-bold text-indigo-500"
                href="https://www.linkedin.com/in/prajwal-prakash-a3b9931b3/"
                rel="noreferrer"
              >
                Prajwal P,Naveen B Teli{" "}
              </a>
            </p>
            <Tooltip label="Contact ME">
              <a href="/" target="_blank" rel="noopener noreferrer">
                {/* <ChatIcon className="h-5 w-5 text-gray-400" /> */}
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: any) => {
  return (
    <AppShell
    padding={0}
      header={
        <Header height={70}>
          <NavBar />
        </Header>
      }
      footer={<Footer />}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
