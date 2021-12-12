import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import Form from "../form"

export default function CallToAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
        <div className="call-to-action-element lg:flex flex-col-3 md:flex-col-1 max-w-lg mx-auto p-7 text-white bg-gray-900 m-1">
          <h1 style={{ fontSize: "1.75em", fontWeight: "bold" }}>Start a project</h1>
          <p style={{ textAlignLast: "center", textAlign: "center", margin: "1rem" }}>
            Interested in strating a project. Do you want to cooperate or want to ask something?
          </p>
          <Button onClick={onOpen} >Here we Go</Button>
          <Form openAction={isOpen} closeAction={onClose} />
        </div>

  )
}
