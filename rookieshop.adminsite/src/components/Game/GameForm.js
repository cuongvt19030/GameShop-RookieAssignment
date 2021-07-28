import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import TextField from '../../shared-components/FormInputs/TextField';
import SelectField from '../../shared-components/FormInputs/SelectField';
import { GAME } from '../../Constants/pages';
import { NormalBrandType } from "../../Constants/Brand/BrandConstants";
import { BrandTypeOptions } from "../../Constants/selectOptions";
import FileUpload from '../../shared-components/FormInputs/FileUpload';
import { CreateGameRequest, UpdateGameRequest } from "./services/request";

const initialFormValues = {
    name: '',
    type: NormalBrandType,
    imageFile: undefined
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    type: Yup.string().required('Required')
});

const BrandFormContainer = ({ initialBrandForm = {
    ...initialFormValues
} }) => {
    const [loading, setLoading] = useState(false);

    const isUpdate = initialBrandForm.id ? true : false;

    const history = useHistory();

    const handleResult = (result, message) => {
        if (result) {
            NotificationManager.success(
                `${isUpdate ? 'Updated' : 'Created'} Successful Brand ${message}`,
                `${isUpdate ? 'Update' : 'Create'} Successful`,
                2000,
            );

            setTimeout(() => {
                history.push(BRAND);
            }, 1000);

        } else {
            NotificationManager.error(message, 'Create failed', 2000);
        }
    }

    const updateBrandAsync = async (form) => {
        console.log('update brand async');
        let data = await UpdateBrandRequest(form.formValues);
        if (data)
        {
            handleResult(true, data.name);
        }
    }

    const createBrandAsync = async (form) => {  
        console.log('create brand async');
        let data = await createBrandRequest(form.formValues);
        if (data)
        {
            handleResult(true, data.name);
        }
    }

    return (
        <Formik
            initialValues={initialBrandForm}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values) => {
                setLoading(true);

                setTimeout(() => {
                    if (isUpdate) {
                        updateBrandAsync({ formValues: values });
                    }
                    else {
                        createBrandAsync({ formValues: values });
                    }

                    setLoading(false);
                }, 1000);
            }}
        >
            {(actions) => (
                <Form className='intro-y col-lg-6 col-12'>
                    <TextField 
                        name="name" 
                        label="Name" 
                        placeholder="input brand name" 
                        isrequired 
                        disabled={isUpdate ? true : false} />
                    <SelectField 
                        name="type" 
                        label="Type" 
                        options={BrandTypeOptions} 
                        isrequired />
                    <FileUpload 
                        name="imageFile" 
                        label="Image" 
                        image={actions.values.imagePath} />
                    
                    <div className="d-flex">
                        <div className="ml-auto">
                            <button className="btn btn-danger"
                                type="submit" disabled={loading}
                            >
                                Save {(loading) && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
                            </button>

                            <Link to={BRAND} className="btn btn-outline-secondary ml-2">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default BrandFormContainer;
