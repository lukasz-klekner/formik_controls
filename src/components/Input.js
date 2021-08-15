import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Input = ({ label, name, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...rest} />
    <ErrorMessage name={name} component={TextError} />
  </div>
)

export default Input
