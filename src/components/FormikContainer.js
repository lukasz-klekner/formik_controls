import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const initialValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
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
            name='email'
            id='email'
            label='Email'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
