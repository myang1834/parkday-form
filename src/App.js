import React, { Component, useState, useRef} from 'react'
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





function App() {
 

  let [date, setDate] = useState(new Date())
  let [dishCount, setCount] = useState(1)
  const [value, setValue] =  useState("");
  let photos = []
  const dishNames = ['dish3', 'dish2', 'dish1', 'dish0']
  const myObj = {dishName: 'hello', tasteName: 1}

  function addDish (){
    
    setCount(dishCount + 1)
   


  }

  const fileRef = useRef();

    return (
      <div className = "container">
         
        <Formik 
           initialValues = {{
             date: date,
             whatWentWell: '',
             whatWentWrong: '',
             howCanWeDoEvenBetter: '',
             dailyGeneral: '',
             orderDetails: '',
             yield: '',
             orderTotals: '',
             file: null,
             test: ''
         
            }}
           onSubmit = {(values, actions) => {
             
                if(values.file === null){
                  alert(JSON.stringify(values, null, 2) );

                }else{
                alert(JSON.stringify(values, null, 2) + '\n' + '"file:" ' + values.file.name + '\n' + '"type:" '+ values.file.type + '\n' + '"size:" ' + `${values.file.size} bytes`);
                  actions.setSubmitting(false);
                  console.log(values.file)
                }
   
            }}
            >
            {({setFieldValue, handleSubmit, handleChange}) => (
          <form onSubmit = {handleSubmit}>
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
                <p onClick={() => {addDish()}}>Add New Dish, the count is {dishCount}</p>
            </div>

 
      {/*There is a problem with using the name variable and trying to dynamically name the inputs, need a way to log state and reference it */}            
      {/*Array(dishCount).fill(
        <div>
          <DishRating name = {dishNames[dishCount]} tasteName = {'taste' + dishCount} notesName = {'notes' + dishCount} handleChange = {handleChange} />  
              <input id="file" name="file" type="file" onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }} />

        </div>)*/}

      
      {Array.from({length:dishCount}, () => <div>
          <DishRating dishName = {'dishName' + dishCount.toString()} tasteName = {'taste' + dishCount} notesName = {'notes' + dishCount} handleChange = {handleChange} />  
              <input id="file" name="file" type="file" onChange={(event) => {
                setFieldValue('file', event.currentTarget.files[0]);
          
              }} />

        </div>)}

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
      

    )
  }  

    
     


export default App;
