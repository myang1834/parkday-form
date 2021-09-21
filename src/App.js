import logo from './logo.svg';
import React, { Component, useState} from 'react'
import './App.css';
import {Field, Formik, useFormik, useField, useFormikContext } from 'formik';
import TextSubmit from './Components/TextSubmit';
import DatePicker from 'react-date-picker'

const DatePicker2 = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: new Date()

    }
  }
  handleSubmit = () => {
    console.log('Form data')
  }

  render(){
    
    return (
      <div className = "container">
         
        <Formik 
           initialValues = {{
             date: this.state.value,
             question1: '',
             question2: '',
             question3: '',
             question4: '',
             question5: '',
             question6: '',
             question7: '',
             dish: '',
             taste: '',
             dishnotes: ''
         
            }}
            onSubmit = {(values, actions) => {
             
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
               
            }}
            >
            {props => (
          <form onSubmit = {props.handleSubmit}>
            <h3 className="meetingsh1">Date</h3>
            <DatePicker2 name = 'date'></DatePicker2>           
            
              <TextSubmit text = 'What went well?' name = {'question1'}/>
              <TextSubmit text = 'What went wrong?' name = {'question2'}/>
              <TextSubmit text = 'How can we do even better?' name = {'question3'}/>
              <TextSubmit text = 'Daily General' name = {'question4'}/>
              <TextSubmit text = 'Order Details' name = {'question5'}/>
              <TextSubmit text = 'Yield' name = {'question6'}/>
              <TextSubmit text = 'Order Totals' name = {'question7'}/>
              <h2 className="meetingsh1">Dish Ratings</h2>

              <div>
                <h3>Dish</h3>
                <Field
                        name = 'dish'
                        component="textarea"
                        rows="1"
                        style={{
                            padding: 10,
                            borderColor: 'silver',
                            borderWidth: 0.3,
                            borderRadius: 5,
                            borderStyle: 'solid',
                        }}
               />   
             </div>
             <div>
                <h3>Taste</h3>
                <input
                    name="taste"
                    type="number"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    placeholder = 'Rating 1-5'
                    style={{
                            padding: 10,
                            borderColor: 'silver',
                            borderWidth: 0.3,
                            borderRadius: 5,
                            borderStyle: 'solid',
                    }}
                  />
             </div>
             <div>
                <h3>Notes</h3>
                <Field
                        name = 'dishnotes'
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
              

            <button
              style={{
                borderRadius: 10,
                backgroundColor: '#e55454',
                color: 'white',
                marginTop: 10,
                marginBottom: 10,
              }}
                type="submit">
                  Submit
            </button>
        
          </form>
          )}
 
        </Formik>
      </div>
      

    )}  
}
    
    
    {/*<div>

   
      <form className = "baseForm" onSubmit = {formik.handleSubmit} noValidate>
    
      <label htmlFor = "input1">Text </label> 
      <input
        id = 'input1'
        name = 'input1'
        type = 'text'
        onChange = {formik.handleChange}
        value = {formik.values.text}

      />
      <textArea name = 'password' value = {formik.values.password} onChange = {formik.handleChange}>

      </textArea>
      
      <p>What went well</p>

      <textArea cols = "40" rows = "10" name = 'text2' value = {formik.values.text2} onChange = {formik.handleChange}> 
      </textArea>

     
      <TextSubmit name = 'text3' title ="What went wrong?" value = {formik.values.text3} onChange = {formik.handleChange}/>
      
  

      <button type="submit">Submit</button>
      </form>
     </div> */}
     
   


export default App;
