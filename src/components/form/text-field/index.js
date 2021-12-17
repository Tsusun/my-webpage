import React from "react"
import { Field, useField } from "formik"
import { FormErrorMessage, FormControl, FormLabel, Input } from "@chakra-ui/react"

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <form
      action="https://formsubmit.co/daniel.uebersetzung@protonmail.com"
      method="POST"
      target="_blank"
      className="font-sans"
    >
      {" "}
      {/*When the webpage is online verify this works https://formsubmit.co/  */}
      <FormControl isInvalid={meta.error && meta.touched}>
        <FormLabel>{label}</FormLabel>
        <Field as={Input} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </form>
  )
}

export default TextField
