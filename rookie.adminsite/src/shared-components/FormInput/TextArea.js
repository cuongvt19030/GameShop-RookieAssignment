import React from 'react'
import { useField } from 'formik'

const TextArea = (props) => {
    const [field, { error, touched }, meta] = useField(props);
    const { label, isrequired, notvalidate } = props;

    const validateClass = () => {
        if (touched && error) return 'is-invalid';
        if (notvalidate) return '';
        if (touched) return 'is-valid';

        return '';
    };

    return (
        <>
            <div className="mb-3 row">
                <label className="col-form-label d-flex">
                    {label}
                    {isrequired && (
                        <div className="invalid ml-1">(*)</div>
                    )}
                </label>
                <div className="col">
                    <textarea
                        rows={8}
                        className={`form-control ${validateClass()}`}
                        {...field}
                        {...props}>
                    </textarea>
                    {error && touched && (
                        <div className='invalid'>{error}</div>
                    )}
                </div>
            </div>

        </>
    );
};
export default TextArea;