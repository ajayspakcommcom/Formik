import React, { useState } from 'react';
import { useFormik } from 'formik';


const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = (values) => {
    console.log(values);
};

const validate = (values) => {

    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'This field is required'

    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid Email Format';
    }

    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
};

const YoutubeForm = (props) => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });

    //console.log('Form Values', formik.values);
    // console.log('Form Errors', formik.errors);

    console.log('visited Field', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-group">
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type="text"
                        className="form-control"
                        id="channel"
                        name='channel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;