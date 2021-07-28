import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { updateGenresRequest, createGenresRequest } from './services/request';
import { NotificationManager } from 'react-notifications';
import { GENRE } from '../../Constants/pages';
import TextField from '../../shared-components/FormInput/TextField';
import * as yup from 'yup';


const initialFormValues = {
    name: ''
};

const validationSchema = yup.object().shape({
    name: yup.string().required('Required')
});

const GenreForm = ({ initialGenreForm = {
    ...initialFormValues
} }) => {
    const [loading, setLoading] = useState(false);

    const isUpdate = initialGenreForm.id ? true : false;

    const history = useHistory();

    const handleResult = (result, message) => {
        if (result) {
            NotificationManager.success(
                `${isUpdate ? 'Updated' : 'Created'} Successful Genre ${message}`,
                `${isUpdate ? 'Update' : 'Create'} Successful`,
                2000,
            );

            setTimeout(() => {
                history.push(GENRE);
            }, 1000);
        } else {
            NotificationManager.error(message, 'Create failed', 2000);
        }
    }

    const updateGenreAsync = async (form) => {
        console.log('update genre async');
        let data = await updateGenresRequest(form.formValues);
        if (data) {
            handleResult(true, data.name);
        }
    }

    const createGenreAsync = async (form) => {
        console.log('create genre async');
        let data = await createGenresRequest(form.formValues);
        if (data) {
            handleResult(true, data.name);
        }
    }

    return (
        <>
            <Formik
                initialValues={initialGenreForm}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    setLoading(true);

                    setTimeout(() => {
                        if (isUpdate) {
                            updateGenreAsync({ formValues: values });
                        }
                        else {
                            createGenreAsync({ formValues: values });
                        }

                        setLoading(false);
                    }, 1000);
                    console.log("Update");
                }}>
                {() => (
                    <Form className='intro-y col-lg-6 col-12'>
                        <TextField
                            name="name" 
                            lable="Name" 
                            placeholder="input genre name" 
                            isrequired
                        />
                        <div className="d-flex">
                            <div className="ml-auto">
                                <button className="btn btn-danger"
                                    type="submit" disabled={loading}>
                                    Save {(loading)}
                                </button>

                                <Link to={GENRE} className="btn btn-outline-secondary ml-2">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default GenreForm;