import React, { useState } from "react";

function CustomField({ details, setDetails }) {
    const [newFieldKey, setNewFieldKey] = useState("");
    const [customFields, setCustomFields] = useState([]);

    const handleCustomFieldChange = (e, fieldKey) => {
        const { value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [fieldKey]: value,
        }));
    };

    const addCustomField = () => {
        if (newFieldKey.trim() !== "" && !(newFieldKey in details)) {
            setCustomFields([...customFields, newFieldKey]);
            setDetails((prevDetails) => ({
                ...prevDetails,
                [newFieldKey]: "",
            }));
            setNewFieldKey("");
        }
    };

    return (
        <div>
            {customFields.map((fieldKey) => (
                <label key={fieldKey} htmlFor={fieldKey} className="label">
                    {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)}:
                    <input
                        type="text"
                        id={fieldKey}
                        name={fieldKey}
                        value={details[fieldKey] || ""}
                        onChange={(e) => handleCustomFieldChange(e, fieldKey)}
                    />
                </label>
            ))}
            <input
                type="text"
                placeholder="Enter custom field name"
                value={newFieldKey}
                onChange={(e) => setNewFieldKey(e.target.value)}
            />
            <button type="button" onClick={addCustomField}>
                Add Custom Field
            </button>
        </div>
    );
}

export default CustomField;
