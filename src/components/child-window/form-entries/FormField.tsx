import React from 'react';

type FormFieldProps = {
    id: string;
    label: string;
    type: string;
    value: string | number | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    children?: React.ReactNode;
}

const FormField = ({ id, label, type, value, onChange, children, disabled = false, required = false }: FormFieldProps) => (
    <div className={`flex items-center mb-4`}>
        <label htmlFor={id} className={"text-cyan-800 font-semibold mr-10"}>{label}</label>
        <div className={`flex items-center flex-grow ${children ? 'space-x-2' : ''}`}>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className={`flex-grow border border-cyan-800/40 rounded-md focus:ring-cyan-500 focus:border-cyan-500`}
                disabled={disabled}
                required={required}
            />
            {children && (
                <div className="min-w-[80px] flex items-center">
                    {children}
                </div>
            )}
        </div>
    </div>
);

export default FormField;
