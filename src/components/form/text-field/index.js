import React from "react"
import { Field, useField } from "formik"
import { FormErrorMessage, FormControl, FormLabel, Input } from "@chakra-ui/react"

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <section>
      {/*When the webpage is online verify this works https://formsubmit.co/  */}
      <FormControl isInvalid={meta.error && meta.touched}>
        <FormLabel>{label}</FormLabel>
        <Field as={Input} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </section>
  )
}

export default TextField
