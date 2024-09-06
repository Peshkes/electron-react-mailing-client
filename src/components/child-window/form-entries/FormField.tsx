import React from 'react';

type FormFieldProps = {
    id: string;
    label: string;
    type: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
}

const FormField = ({ id, label, type, value, onChange, disabled = false, required = false }: FormFieldProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-4">
        <label htmlFor={id} className={"text-cyan-800 font-semibold"}>{label}</label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className={'w-full border border-cyan-800/40 rounded-md focus:ring-cyan-500 focus:border-cyan-500'}
            disabled={disabled}
            required={required}
        />
    </div>
);

export default FormField;