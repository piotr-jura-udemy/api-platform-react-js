import React from 'react';

export const renderField = ({input, label, type, meta: {error}}) => {
  return (
    <div className="form-group">
      {label !== null && label !== '' && <label>{label}</label>}
      {type !== 'textarea' && <input {...input} type={type} className="form-control"/>}
      {type === 'textarea' && <textarea {...input} className="form-control"/>}
    </div>
  );
};
