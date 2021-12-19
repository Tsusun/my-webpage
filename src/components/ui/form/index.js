import { Button } from "../common"
import { Formik } from "formik"
import { ChakraProvider, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react"
import TextField from "../../form/text-field"
import * as Yup from "yup"
import { Textarea } from "@chakra-ui/react"

export default function Form({ openAction, closeAction }) {
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
        <div>
          <ChakraProvider>
            <Modal isOpen={openAction} onClose={closeAction} blockScrollOnMount={true}>
              <ModalOverlay />
              <ModalContent className="p-8" style={{ padding: "1.5rem" }}>
                <TextField name="username" label="Enter Username" placeholder="name" />
                <TextField name="email" label="Enter E-mail" type="email" placeholder="email@xyz.com" />
                <TextField name="text" as={Textarea} label="Enter your message" type="text" placeholder="" />

                <Button onClick={formik.handleSubmit} hoverable={false} className="m-10" type="submit">
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
