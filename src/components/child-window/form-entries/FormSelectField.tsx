import React from 'react';

type Option = {
    value: string | number;
    label: string;
}

type FormSelectFieldProps = {
    id: string;
    label: string;
    value: string | number | undefined ;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    disabled?: boolean;
    required?: boolean;
}

const FormSelectField = ({ id, label, value, onChange, options, disabled = false, required = false }: FormSelectFieldProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-4">
        <label htmlFor={id} className={"text-cyan-800 font-semibold"}>{label}</label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className={'w-full border border-cyan-800/40 rounded-md focus:ring-cyan-500 focus:border-cyan-500'}
            disabled={disabled}
            required={required}
        >
            <option value="" disabled={required && !value}>Select an option</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default FormSelectField;