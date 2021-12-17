import Image from "next/image"
import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import Form from "../form"
import moment from "moment"
import { GiAstronautHelmet, GiSpaceSuit, GiFrance, GiMushroomGills } from "react-icons/gi"
import {
  SiBitcoincash,
  SiBitcoin,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiSolidity,
  SiReact,
  SiNextdotjs
} from "react-icons/si"
import { BsTerminalFill, BsTwitter } from "react-icons/bs"
import { FaGit, FaNodeJs, FaGitAlt } from "react-icons/fa"

export default function Presentation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto">
        <div className="divide-y-4 bg-white bg-opacity-80 m-4 text-center presentatin-container dark:bg-gray-600 dark:bg-opacity-50">
          <div className="list-content">
            <Image src="/Avatar.png" height="100rem" width="200rem" alt="" />
            <h1 className="list-title">
              Who am I ? <GiSpaceSuit size="5rem" />
            </h1>
            <p>
              Hi there, my Name is Silvan👽 I&apos;m a{" "}
              {moment().diff(moment("1998/01/05", "YYYY/M/D"), "years")} year old crypto entousiast.
              <br /> I started my journey into crypto and shorter after Blockchain back in November 2020. Like
              everyone I was first interested into the making profit side of things,
              <br />
              but quickly relized how amazing this world is. The biggest lesson I learned during this year was
              <br />
              <strong>
                <SiBitcoin size="2rem" className="inline" />
                &nbsp;HOOOOOOOOOOOOOODL !!!&nbsp;
                <SiBitcoincash size="2rem" className="inline" />
              </strong>
              <br />
            </p>
          </div>
          <div className="list-content">
            <Image src="/Avatar.png" height="100rem" width="200rem" alt="" />
            <h1 className="list-title">Softskills</h1>
            <a className="px-2" href="https://twitter.com/jungler_v">
              <BsTwitter size="4rem" className="inline" />
            </a>
            <p>My soft skills shape my actions as well as my way of thinking.</p>
            <p className="list-subtitle">Things that characterize me:</p>
            <p>
              Ambitious, Stubborn, Committed,
              <br /> Practical sense
            </p>
            <p className="list-subtitle">Others:</p>
            <ul>
              <li>
                French (Native)
                <GiFrance size="3rem" className="inline" />
              </li>
              <li>German (Native)</li>
              <li>English</li>
            </ul>
          </div>
          <div className="list-content">
            <Image src="/tools.png" height="100rem" width="100rem" alt="" />
            <h1 className="list-title">Blockchain Developer</h1>
            <a className="px-2" href="https://github.com/Tsusun">
              <svg width="65" height="65" viewBox="0 0 512 512" className="inline">
                <path
                  fill="black"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
            <p>
              🚀I want to be part of the next generation of the web, that is being built. Let&apos;s create a
              new structure together.
            </p>
            <p className="list-subtitle">Technologies I work with:</p>
            <p>
              Solidity
              <SiSolidity className="inline" size="2rem" />, JavaScript{" "}
              <SiJavascript className="inline" size="2rem" />, React
              <SiReact className="inline" size="2rem" />, Next.JS
              <SiNextdotjs className="inline" size="2rem" />, Node.JS
              <FaNodeJs className="inline" size="2rem" />
            </p>
            <p className="list-subtitle">Dev Tools I use:</p>
            <ul>
              <li>VisualStudio Code</li>
              <li className="inline">Truffle🍄</li>
              <li>Ganache</li>
              <li>Chakra Ui</li>
              <li>
                TailwindCSS
                <SiTailwindcss className="inline" size="2rem" />
              </li>
              <li>Github</li>
              <li>
                Git
                <FaGitAlt className="inline" size="2rem" />
              </li>
              <li>
                <BsTerminalFill className="inline" size="2rem" />
                &nbsp;Terminal
              </li>
            </ul>
          </div>
          <div className="list-content">
            <Image src="/books.png" height="100rem" width="100rem" alt="" />
            <h1 className="list-title">Engineer</h1>
            <a className="px-2" href="https://www.linkedin.com/in/silvanreigue/">
              <svg width="65" height="65" viewBox="0 0 512 512" className="inline">
                <path
                  fill="black"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                ></path>
              </svg>
            </a>
            <p>
              I&apos;m really interested in problem solving, because that&apos;s when you get to know a lot of
              interesting tools and methods.
            </p>
            <p className="list-subtitle">Experiences I draw from:</p>
            <p>UX/UI, Product design, Freelancing</p>
            <p className="list-subtitle">Used Stuff:</p>
            <ul>
              <li>
                Python&nbsp;
                <SiPython className="inline" size="2rem" />
              </li>
              <li>OOP</li>
              <li>☕Java</li>
              <li>Assembler</li>
              <li>C language</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Button
          className="flex flex-col-2 items-center"
          onClick={onOpen}
          style={{ fontSize: "1.75em", margin: "5rem", padding: "1.5rem" }}
        >
          Let&apos;s Work Together&nbsp;&nbsp;
          <GiAstronautHelmet size="4rem" />
        </Button>
        <Form openAction={isOpen} closeAction={onClose} />
      </div>
    </div>
  )
}
