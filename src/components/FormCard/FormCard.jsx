import React, { useState } from 'react'
import {StyledFormCard} from './styled'
import { Formik } from 'formik'

const FormCard = () => {
    const [owner, setOwner] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    return (
        <StyledFormCard>
            <Formik
                initialValues={{owner: '', name: '', number: ''}}
                validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />

                </form>

            )}

            </Formik>
            <form>
                <label>Hundägare: </label>
                <input type="text" value={owner} onChange={setOwner} /><br></br>
                <label>Hundens namn: </label>
                <input type="text" value={name} onChange={setName} /><br></br>
                <label>Hundens nummer: </label>
                <input type="text" value={number} onChange={setNumber} />                
            </form>       
        </StyledFormCard>
    )
}

export default FormCard