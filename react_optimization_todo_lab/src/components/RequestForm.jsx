import React from "react";
import { InputField, SelectField, TextareaField } from "./FormComponents";

const CATEGORY_OPTIONS = [
  "Water Leakage",
  "Garbage Pickup",
  "Streetlight Issue",
  "Road Damage",
  "Drainage Blockage",
];

const PRIORITY_OPTIONS = ["Low", "Medium", "High"];

function RequestForm({ formData, onChange, onSubmit }) {
  console.log("RequestForm container wrapper re-rendered");

  return (
    <div className="card">
      <h3>New Request Form</h3>
      <form onSubmit={onSubmit} className="form-grid">
        <InputField
          name="residentName"
          placeholder="Resident Name"
          value={formData.residentName}
          onChange={onChange}
        />

        <InputField
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={onChange}
        />

        <InputField
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={onChange}
        />

        <SelectField
          name="category"
          value={formData.category}
          onChange={onChange}
          options={CATEGORY_OPTIONS}
          defaultLabel="Select Category"
        />

        <SelectField
          name="priority"
          value={formData.priority}
          onChange={onChange}
          options={PRIORITY_OPTIONS}
          defaultLabel="Select Priority"
        />

        <InputField
          type="date"
          name="visitDate"
          value={formData.visitDate}
          onChange={onChange}
        />

        <TextareaField
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onChange}
        />

        <button type="submit">Add Request</button>
      </form>
    </div>
  );
}

export default RequestForm;
