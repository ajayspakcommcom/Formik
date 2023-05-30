import React, { useState } from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = (values) => {
    console.log(values);
};


const validationSchema = Yup.object({
    name: Yup.string().required('Reuired!'),
    email: Yup.string().email('Invalid email format').required('Reuired!'),
    channel: Yup.string().required('Reuired!')
});

const YoutubeForm = (props) => {

    // const formik = useFormik({
    //     initialValues: initialValues,
    //     onSubmit: onSubmit,
    //     validationSchema: validationSchema
    // });

    //console.log('Form Values', formik.values);
    //console.log('Form Errors', formik.errors);
    //console.log('visited Field', formik.touched);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onsubmit} >
            <Form>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                    //{...formik.getFieldProps('name')}
                    />
                    {/* {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null} */}
                    <ErrorMessage name='name' render={msg => <div className='error'>{msg}</div>} />
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                    //{...formik.getFieldProps('email')}
                    />
                    {/* {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null} */}
                    <ErrorMessage name='email' />
                </div>

                <div className="form-group">
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type="text"
                        className="form-control"
                        id="channel"
                        name='channel'
                    //{...formik.getFieldProps('channel')}
                    />
                    {/* {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null} */}
                    <ErrorMessage name='channel' />
                </div>

                <button type="submit" className="btn btn-default">Submit</button>

            </Form>
        </Formik>
    );
};

export default YoutubeForm;