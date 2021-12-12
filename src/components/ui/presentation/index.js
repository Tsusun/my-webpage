import Image from "next/image"
import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"
import TextField from "../text-field"

export default function Presentation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Formik
      initialValues={{ username: "", email: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Name required").min(2, "Username is too short"),
        email: Yup.string().email("Invalid email").required("Required")
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2))
        actions.resetForm()
      }}
    >
      {(formik) => (
        <div className="flex flex-col">
          <div className="container max-w-7xl mx-auto">
            <div className="lg:flex flex-col-3 sm:flex-col-1 bg-white m-4 text-center presentatin-container">
              <div className="list-content-first">
                <Image src="/Avatar.png" height="100rem" width="200rem" alt="" />
                <h1 className="list-title">Who am I</h1>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p className="list-subtitle">Things I enjoy designing:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="list-subtitle">Design Tools:</p>
                <ul>
                  <li>Python🐍</li>
                  <li></li>
                  <li>OOP</li>
                  <li>☕Java</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </ul>
              </div>
              <div className="list-content">
                <Image src="/tools.png" height="100rem" width="100rem" alt="" />
                <h1 className="list-title">Blockchain Developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p className="list-subtitle">Languages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p className="list-subtitle">Dev Tools:</p>
                <ul>
                  <li>⚡VisualStudio Code</li>
                  <li>Truffle🍄</li>
                  <li>Ganache</li>
                  <li>Chakra Ui</li>
                  <li></li>
                  <li>Codepen</li>
                  <li> Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="list-content">
                <Image src="/books.png" height="100rem" width="100rem" alt="" />
                <h1 className="list-title">Engineer</h1>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <p className="list-subtitle">Experiences I draw from:</p>
                <p>UX/UI, Product design, Freelancing</p>
                <p className="list-subtitle">Mentor Stats:</p>
                <ul>
                  <li>5 years experience</li>
                  <li>26 short courses</li>
                  <li>42 bootcamps</li>
                  <li>125+ students</li>
                  <li>1,400+ mentor sessions</li>
                  <li>60+ group critiques</li>
                  <li>12,000+ comments</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <Button onClick={onOpen} style={{ fontSize: "1.75em", margin: "5rem", padding: "1.5rem" }}>
              Work together
            </Button>
            <ChakraProvider>
              <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
                <ModalOverlay />
                <ModalContent className="p-8" style={{ padding: "1.5rem" }}>

                  <TextField name="username" label="Enter Username" placeholder="name" />
                  <TextField name="email" label="Enter E-mail" type="email" placeholder="email@xyz.com" />

                  <Button onClick={formik.handleSubmit} hoverable={false} className=" m-10 ">
                    <p>Submit</p>
                  </Button>
                </ModalContent>
              </Modal>
            </ChakraProvider>
          </div>
        </div>
      )}
    </Formik>
  )
}

{
  /* <div classNameName="side-by-side">
        <div classNameName="flex-text-wrapper">
          <p>
            Hi there my Name is Silvan I m {moment().diff(moment("1998/01/05", "YYYY/M/D"), "years")} year old
            crypto entousiast.
            <br /> I started my journey into crypto and shorter after Blockchain back in November 2020. Like
            everyone I was first interested into the #making profit# side of things,
            <br />
            but quickly relized how amazing this world is. The biggest lesson I learned during this year was
            <strong> HOOOOOOOOOOOOOODL !!!</strong>.<br />
          </p>
        </div>
      </div>
      <div classNameName="side-by-side">
        <Image src="/books.png" height="100rem" width="100rem" alt="" />
        <div classNameName="flex-text-wrapper ml-6">
          <p>
            I speak/write fluently French, German and I use English on a daily base. During my previous
            studies
            <br />
            in Electrical Enginnering (Bach. and Mst.) field as well as during my Job as a System Validation
            Engineer
            <br />I had the possibilty to use Python🐍 and Java ☕ in a OOP (Object Oriented Progrogramming)
            way. I also had the possibilty to practise Assembler / C / C++ on various projects and courses.
            Recently I started learning Solidity, Javascript, React.JS, Node.JS, Next.JS, to integrate in the
            coming futur
            <br />
            the web3 world.
          </p>
        </div>
      </div>
      <div classNameName="side-by-side">
        <div classNameName="flex-text-wrapper text-right mr-6">
          <p>
            As a person I have various traits that characterize me. I am always very committed to the projects
            I launch,
            <br />
            possible failures do not scare me and if they happen, I usually do not lose my motivation, on the
            contrary,
            <br />
            it stimulates me. I like practical things, a Swiss Army knife for example is an object that you
            could give me and that I will never get
            <br />
            bored of. Speacking of useful things, as an ongoing web3 developper
            <br /> I use following tools to get alongs in this World: VisualStudio (optimized for web3
            developpement), Truffle, Ganache, TailwindCSS, Chakra Ui.
            <br />I m always looking to improve my toolset so if you have good hints do not hesitate to share
            them with me.
          </p>
        </div>
        <Image src="/tools.png" height="100rem" width="100rem" alt="" />
      </div> */
}

{
  /* <div classNameName="mt-auto ml-auto mr-auto mb-auto lg:w-1/2">
        <Image
          classNameName="profil"
          layout="responsive"
          src="/Website_picture.jpg"
          height= "22rem"
          width= "30rem"
          alt=""
        />
      </div> */
}
