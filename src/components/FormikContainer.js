import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const initialValues = {
    email: '',
    description: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string().required('Required'),
  })
  const onSubmit = (values) => console.log('Form data', values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            name='email'
            label='Email'
          />
          <FormikControl
            control='textarea'
            name='description'
            label='Description'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
