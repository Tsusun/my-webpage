import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import Form from "../form"
import { IoIosRocket } from "react-icons/io"

export default function CallToAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="call-to-action-element lg:flex justify-center p-7 text-white bg-gray-900 ">
      <div>
        <h1 className="flex flex-col-2 sm:flex-col items-center text-center" style={{ fontSize: "1.75em", fontWeight: "bold" }}>
          <IoIosRocket size="4rem" />
          &nbsp;&nbsp;Start a project
        </h1>
      </div>
      <div>
        <p style={{ margin: "1rem" }} className="lg:text-left sm:text-center sm:justify-center">
          Interested in strating a project.
          <br /> Do you want to cooperate or want to ask something?
        </p>
      </div>
      <div className="text-center p-5">
        <Button onClick={onOpen}>Here we Go</Button>
      </div>

      <Form openAction={isOpen} closeAction={onClose} />
    </div>
  )
}
