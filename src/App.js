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
  let [photos, setPhotos] = useState([])
  const pStyles = {
    backgroundColor: 'red',
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom:2,
    borderTop: 1 ,
    borderTopColor: 'blue',
    borderRight: 1 ,
    borderRightColor: 'blue',
    borderBottom: 1 ,
    borderBottomColor: '#333333',
    borderLeft: 1 ,
    borderLeftColor: '#CCCCCC'
  }
  
 
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
             protein1: '',
             protein2: '',
             vegan: '',
             orderDetails: '',
             orderTotals: '',
             file: null,
             
         
            }}
           onSubmit = {(values, actions) => {
             
                if(values.file === null){
                  alert(JSON.stringify(values, null, 2) );

                }else{
                alert(JSON.stringify(values, null, 2) + '\n' + '"file:" ' + values.file.name + '\n' + '"type:" '+ values.file.type + '\n' + '"size:" ' + `${values.file.size} bytes`);
                  actions.setSubmitting(false);
                  console.log(values.file)
                  console.log(values.file[0])
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
              <h2>Yield</h2> 
              <h3>Protein 1</h3>
                <Field name = {'protein1'} type = 'number' placeholder = '# dishes served'/> 
              <h3>Protein 2</h3> 
               <Field name = {'protein2'} type = 'number' placeholder = '# dishes served'/> 

              <h3>Vegan</h3> 
               <Field name = {'vegan'} type = 'number' placeholder = '# dishes served'/> 


 
              
              {/*<TextSubmit text = 'Yield' name = {'yield'}/>*/}
              




              <TextSubmit text = 'Order Totals' name = {'orderTotals'}/>
              <h2 className="meetingsh1">Dish Ratings</h2>

           
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
               
            /*    const files = event.target.files
                for(let i = 0; files.length; i++){
                  FormData.append(`images[${i}]`, files[i])             */
                  }
          
              } />

        </div>)}

        <div>
                <p onClick={() => {addDish()}}>Add New Dish</p>
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
      

    )
  }  



    
     


export default App;
