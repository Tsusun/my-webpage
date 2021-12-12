import { Button } from "../common"
import { useDisclosure } from "@chakra-ui/hooks"
import { Formik } from "formik"
import { ChakraProvider, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react"
import TextField from "../text-field"
import * as Yup from "yup"
import { Textarea } from "@chakra-ui/react"

export default function CallToAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Formik
      initialValues={{ username: "", email: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Name required").min(2, "Username is too short"),
        email: Yup.string().email("Invalid email").required("Required"),
        text: Yup.string().required("Required")
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2))
        actions.resetForm()
      }}
    >
      {(formik) => (
        <div className="call-to-action-element lg:flex flex-col-3 md:flex-col-1 max-w-lg mx-auto p-7 text-white bg-gray-900 m-1">
          <h1 style={{ fontSize: "1.75em", fontWeight: "bold" }}>Start a project</h1>
          <p style={{ textAlignLast: "center", textAlign: "center", margin: "1rem" }}>
            Interested in strating a project. Do you want to cooperate or want to ask something?
          </p>
          <Button onClick={onOpen}>Here we Go</Button>
          <ChakraProvider>
              <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
                <ModalOverlay />
                <ModalContent className="p-8" style={{ padding: "1.5rem" }}>

                  <TextField name="username" label="Enter Username" placeholder="name" />
                  <TextField name="email" label="Enter E-mail" type="email" placeholder="email@xyz.com" />
                  <TextField name="text" as={Textarea} label="Enter your message" type="text" placeholder="" />

                  <Button onClick={formik.handleSubmit} hoverable={false} className=" m-10 ">
                    <p>Submit</p>
                  </Button>
                </ModalContent>
              </Modal>
            </ChakraProvider>
        </div>
      )}
    </Formik>
  )
}
