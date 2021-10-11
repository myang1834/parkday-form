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
  let [dishRating, setDishRating] = useState({dishName: '', dishRating: null, dishNotes: '' , photo: null })
  const dish = {dishName: '', dishRating: null, dishNotes: '' , photo: null }
  const dishes = []
  const ref = useRef(null)

 
  function addDish (){
    setCount(dishCount + 1)

  }
  const someFunction = () => {
    console.log(ref.current.values)
  }

  const dishRatingChange = () => {
    //const newDish = Object.create(dish)
   // dishes.push(newDish)
   // console.log(dishes)
    //console.log(dishes.length)


  }

    return (
      <div className = "container">
        
         
        <Formik 
          innerRef = {ref}
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
                    const vals = ref.current.values
                    console.log(vals)
                    let objLen = Object.keys(vals).length
                    console.log(Object.keys(vals))
                    let keys1 = Object.keys(vals)
                    let newDish = Object.create(null)
                    

                  for(let i = 0; i < objLen; i++){
                    if(keys1[i].includes('dishName')){
                      newDish.dishName = vals[keys1[i]]
                      dishes.push({dishName: vals[keys1[i]]})
                    }
                    if(keys1[i].includes('tasteName')){
                      dishes.push({tasteName: vals[keys1[i]]})
                    }
                    if(keys1[i].includes('notesName')){
                      dishes.push({notesName: vals[keys1[i]]})
                    }
                     console.log(dishes)
                     console.log(newDish)
                    //const newDish = Object.create(dish)
                    //newDish.dishName = ref.current.values.dishName2
                    //dishes.push(newDish)

                  }
                 
                  
                  //console.log(dishes)
                  alert(JSON.stringify(values, null, 2) + JSON.stringify(dishes));

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
        
                  <TextSubmit text = 'Order Totals' name = {'orderTotals'}/>

                  <h2 className="meetingsh1">Dish Ratings</h2>

          

          
                  {Array.from({length:dishCount}, () => <div>
                      <DishRating dishName = {'dishName' + dishCount.toString()} tasteName = {'taste' + dishCount.toString()} notesName = {'notes' + dishCount.toString()} handleChange = {handleChange} />  
                          {dishRatingChange()}
                          <input id="file" name="file" type="file" onChange={(event) => {
                            dish.photo = event.currentTarget.files[0]
                           
                            setFieldValue('file', event.currentTarget.files[0]);
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
