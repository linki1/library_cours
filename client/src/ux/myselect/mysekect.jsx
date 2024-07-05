import React, { useRef } from "react";


function Myselect({ arroption, defaultValue, onChange, value }) {
    const handleSelectChange = () => {

    };
    return (
        <select value={value} onChange={(e) => { onChange(e.target.value) }} style={{ textAlign: 'center' }} >
            <option disabled value={defaultValue}>{defaultValue}</option>
            {arroption.map(({ value, title }) => (
                <option key={value} value={value}>
                    {title}
                </option>
            ))}
        </select>
    );
}

export default Myselect;