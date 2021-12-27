import Image from "next/image"
import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import Form from "../form"
import moment from "moment"
import { GiAstronautHelmet, GiSpaceSuit, GiFrance } from "react-icons/gi"
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
            <Image src="/Avatar_Pixel_Art_V5.png" height="100rem" width="200rem" alt="" />
            <h1 className="list-title">
              Who am I ? <GiSpaceSuit size="5rem" />
            </h1>
            <p>
              Hi there, my Name is Silvan👽 I&apos;m a{" "}
              {moment().diff(moment("1998/01/05", "YYYY/M/D"), "years")} year old crypto entousiast.
              <br /> I started my journey into crypto and shorter after Blockchain back in November 2020.
              <br /> The biggest lesson I&apos;ve learned over the course of this year has been to
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
            <Image src="/Alien_Pixel_Art_V5.png" height="100rem" width="100rem" alt="" />
            <h1 className="list-title">Softskills</h1>
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
            <Image src="/Blockchain_Pixel_Art_V4.png" height="100rem" width="100rem" alt="" />
            <h1 className="list-title">Blockchain Developer</h1>
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
            <Image src="/Engineer_Pixel_Art_V4.png" height="100rem" width="100rem" alt="" />
            <h1 className="list-title">Engineer</h1>
            <p>
              I&apos;m really interested in problem solving, because that&apos;s where you get to know a lot of
              interesting tools and methods.
            </p>
            <p className="list-subtitle">Experiences I draw from:</p>
            <p>Personal projects, Hackathons, Freelancing</p>
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
