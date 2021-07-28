import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';

const SelectField = (props) => {
    const [field, { error, touched, value }, { setValue }] = useField(props);

    const { name, options, label, isrequired } = props;

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    return (
        <>
            <div className="mb-3 row">
                <label className="">
                    {label}
                    {isrequired && (
                        <div className="invalid ml-1">(*)</div>
                    )}
                </label>

                <div className="col">
                    <select className="custom-select" onChange={handleChange}>
                        <option selected hidden>Open this select menu</option>
                        {
                            options.map(({ id, name: optionLabel, id: optionValue }) => (
                                <option key={id} value={optionValue} selected = {optionValue === value}>
                                    {optionLabel}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
};
export default SelectField;
