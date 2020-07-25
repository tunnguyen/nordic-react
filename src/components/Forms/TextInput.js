import React from 'react';

const TextInput = ({ label, name, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label className="form-label">{ label }: </label>
      <input 
        className="form-field"
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </div>
  )
}

export default TextInput;