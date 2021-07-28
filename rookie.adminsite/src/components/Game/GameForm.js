import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import { updateGameRequest, createGameRequest } from './services/request';
import { NotificationManager } from 'react-notifications';
import { useHistory } from 'react-router';
import { GAME } from '../../Constants/pages';
import { getGenresRequest } from '../Genre/services/request';
import TextField from '../../shared-components/FormInput/TextField';
import NumberField from '../../shared-components/FormInput/NumberField';
import TextArea from '../../shared-components/FormInput/TextArea';
import SelectField from '../../shared-components/FormInput/SelectField';
import FileUpload from '../../shared-components/FormInput/FileUpload';
import { Link } from 'react-router-dom';

const initialFormValues = {
    name: '',
    price: 0,
    description: '',
    coverImage: undefined,
    backGroundImage: undefined
};

const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    price: yup.number().required('Required').positive('Must be > 0'),
    coverImage: yup.string().required('Required'),
    backGroundImage: yup.string().required('Required')
});

export default function GameForm({ initialGameForm = {
    ...initialFormValues
} }) {

    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);
    const isUpdate = initialGameForm.id ? true : false;

    const history = useHistory();

    const handleResult = (result, message) => {
        if (result) {
            NotificationManager.success(
                `${isUpdate ? 'Updated' : 'Created'} Successful game ${message}`,
                `${isUpdate ? 'Update' : 'Create'} Successful`,
                2000,
            );

            setTimeout(() => {
                history.push(GAME);
            }, 1000);
        } else {
            NotificationManager.error(
                `${isUpdate ? 'Updated' : 'Created'} Failed game ${message}`,
                `${isUpdate ? 'Update' : 'Create'} Failed`,
                2000);
        }
    }

    const updateGameAsync = async (form) => {
        console.log("Update");
        let data = await updateGameRequest(form.formValues);
        if (data) {
            handleResult(true, data.name);
        }
    }

    const createGameAsync = async (form) => {
        console.log("Create");
        let data = await createGameRequest(form.formValues);
        if (data) {
            handleResult(true, data.name);
        }
    }

    useEffect(() => {
        async function fetchDataAsync() {
            let result = await getGenresRequest();
            setGenres(result.data);
        }

        fetchDataAsync();
    }, []);

    return (
        <Formik
            initialValues={initialGameForm}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values) => {
                setLoading(true);

                setTimeout(() => {
                    if (isUpdate) {
                        updateGameAsync({ formValues: values });
                    } else {
                        createGameAsync({ formValues: values });
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
                        placeholder="input game name"
                        isrequired
                    />
                    <NumberField
                        name="price"
                        label="Price"
                        placeholder="Price"
                        isrequired
                    />
                    <TextArea
                        name="description"
                        label="Description"
                        placeholder="Description"
                    />
                    <SelectField
                        name="genreId"
                        label="Genre"
                        options={genres}
                        isrequired
                    />
                    <FileUpload
                        name="coverImage"
                        label="CoverImage"
                        isrequired
                        image={actions.values.coverImage}
                    />
                    <FileUpload
                        name="backGroundImage"
                        label="BackGroundImage"
                        isrequired
                        image={actions.values.backGroundImage}
                    />
                    <br/>
                    <div className="d-flex">
                        <div className="ml-auto">
                            <button className="btn btn-danger"
                                type="submit" disabled={loading}>
                                Save {(loading)}
                            </button>

                            <Link to={GAME} className="btn btn-outline-secondary ml-2">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
