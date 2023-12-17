import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search Italian Foods..."
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>

    </div>
  );
}

export default Searchbar;
