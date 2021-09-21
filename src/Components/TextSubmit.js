import {Field, Formik, useFormik } from 'formik';

const TextSubmit = (props) => {
   
    return(
        <div>
                <h3>{props.text}</h3>
                    <Field
                        name = {props.name}
                        component="textarea"
                        rows="4"
                        style={{
                            padding: 10,
                            borderColor: 'silver',
                            borderWidth: 0.3,
                            borderRadius: 5,
                            borderStyle: 'solid',
                        }}
                      />    
          </div>
    )
}

export default TextSubmit