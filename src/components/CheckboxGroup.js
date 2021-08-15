import { Field, ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError'

const CheckboxGroup = ({ label, name, options, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...rest}>
      {({ field }) =>
        options.map((option) => (
          <React.Fragment key={option.key}>
            <input
              type='checkbox'
              id={option.value}
              {...field}
              value={option.value}
              checked={field.value.includes(option.value)}
            />
            <label htmlFor={option.value}>{option.key}</label>
          </React.Fragment>
        ))
      }
    </Field>
    <ErrorMessage name={name} component={TextError} />
  </div>
)

export default CheckboxGroup
