import { useState } from 'react';

const HopshopForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddHopshop(formData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title:</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Description:</label>
        <textarea
          required
          name="subtitle"
          id="text-input"
          value={formData.subtitle}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category:</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
            <option value="">Select Category</option>
            <option value="Auto">Auto</option>
            <option value="Beauty">Beauty</option>
            <option value="Beverages">Beverages</option>
            <option value="Electronics">Electronics</option>
            <option value="Family">Family</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
            <option value="Holidays & Gifts">Holidays & Gifts</option>
            <option value="Grocery">Grocery</option>
            <option value="Health">Health</option>
            <option value="Household">Household</option>
            <option value="School / Work">School / Work</option>
            <option value="Pets">Pets</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default HopshopForm;
