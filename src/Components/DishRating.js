import {Field, Formik, useFormik } from 'formik';

const DishRating = (props) => {
    return(
<div>
    <div>
        <h3>Dish</h3>
            <input
                name = {props.dishName}
                onChange={props.handleChange}

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
                    name={props.tasteName}
                    type="number"
                    placeholder = 'Rating 1-5'
                    onChange={props.handleChange}
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
                <input
                        name = {props.notesName}

                        onChange={props.handleChange}

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
             
</div>
)}

export default DishRating