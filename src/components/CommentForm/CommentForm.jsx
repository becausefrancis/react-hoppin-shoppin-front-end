import { useState, useEffect } from 'react';
import * as hopshopService from '../../services/hopshopService';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });
  const [items, setItems] = useState([]);
  const [submittedItems, setSubmittedItems] = useState([]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newItems = formData.text.split(',').map(item => item.trim());
    setSubmittedItems((prevItems) => [...prevItems, ...newItems]); 
    setFormData({ text: '' }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Enter items:</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Items List</h3>
        <ul>
          {submittedItems.map((item, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" /> {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentForm;
