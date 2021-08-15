import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ]

  const radioOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'roption1' },
    { key: 'Option 2', value: 'roption2' },
    { key: 'Option 3', value: 'roption3' },
  ]

  const checkboxOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'coption1' },
    { key: 'Option 2', value: 'coption2' },
    { key: 'Option 3', value: 'coption3' },
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOptions: [''],
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOptions: Yup.array().required('Required'),
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
          <FormikControl
            control='select'
            name='selectOption'
            label='Select a topic'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            name='radioOption'
            label='Select a topic'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            name='checkboxOptions'
            label='Check (an) option(s)'
            options={checkboxOptions}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
