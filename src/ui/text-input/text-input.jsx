import React from 'react';
import './text-input.css'

export const TextInput = ({value, label, disabled, id, name, type, ...props}) => {
    return (
        <div className="input__wrapper">
            <label htmlFor={id}>{label}</label>
            <input type={type || "text"} name={name} value={value} id={id} {...props} />
        </div>
    )
}