import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Textarea = ({ label, name, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as='textarea' id={name} name={name} {...rest} />
    <ErrorMessage name={name} component={TextError} />
  </div>
)

export default Textarea