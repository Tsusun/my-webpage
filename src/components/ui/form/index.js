import { Button } from "../common"
import { Field, Formik } from "formik"
import { ChakraProvider, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react"
import TextField from "../../form/text-field"
import * as Yup from "yup"
import { Textarea } from "@chakra-ui/react"
import { init } from "emailjs-com"

export default function Form({ openAction, closeAction }) {
  init("user_MA9ApnpL8FeLWetSYzwQo")
  return (
    <Formik
      initialValues={{ username: "", email: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Name required").min(2, "Username is too short"),
        email: Yup.string().email("Invalid email").required("Required"),
        text: Yup.string().required("Required")
      })}
      onSubmit={(values, actions) => {
        try {
          
          emailjs.send("service_ynt7pwu", "template_elw73xj", values).then(() => {
            alert(JSON.stringify(values, null, 2))
            sentMessage.classList.add("success")
            sentMessage.innerHTML = CONTACT_ERROR.success
            actions.resetForm()
            actions.setSubmitting(false)
          })
        } catch {
          sentMessage.classList.add("error")
          actions.setSubmitting(false)
          sentMessage.innerHTML = CONTACT_ERROR.error
        }
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
