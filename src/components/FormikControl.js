import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormikControl
