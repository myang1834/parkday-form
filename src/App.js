import React, { Component, useState} from 'react'
import './App.css';
import {Field, Formik, useFormik, useField, useFormikContext } from 'formik';
import TextSubmit from './Components/TextSubmit';
import DishRating from './Components/DishRating';
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
      value: new Date(),
      addNewDish: false,
      dishCount: 0
    }
    this.onSubmit = this.onSubmit.bind(this)

  }

  addDish = () =>{

    console.log('add new dish')
    this.setState((prevState) => ({
      dishCount: prevState.dishCount + 1
  })); 
   
  }

  handleSubmit = () => {
    console.log('Form data')
  }

  onSubmit = (values, actions) => {
             
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
 
}

  render(){
    
    return (
      <div className = "container">
         
        <Formik 
           initialValues = {{
             date: this.state.value,
             whatWentWell: '',
             whatWentWrong: '',
             howCanWeDoEvenBetter: '',
             dailyGeneral: '',
             orderDetails: '',
             yield: '',
             orderTotals: '',
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
            
              <TextSubmit text = 'What went well?' name = {'whatWentWell'}/>
              <TextSubmit text = 'What went wrong?' name = {'whatWentWrong'}/>
              <TextSubmit text = 'How can we do even better?' name = {'howCanWeDoEvenBetter'}/>
              <TextSubmit text = 'Daily General' name = {'dailyGeneral'}/>
              <TextSubmit text = 'Order Details' name = {'orderDetails'}/>
              <TextSubmit text = 'Yield' name = {'yield'}/>
              <TextSubmit text = 'Order Totals' name = {'orderTotals'}/>
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
             { Array(this.state.dishCount).fill(<div><DishRating/></div>) }

             <div>
                <p onClick={() => {this.addDish()}}>Add New Dish</p>
            </div>

            <button onClick = {this.handleSubmit}
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
    
     


export default App;
