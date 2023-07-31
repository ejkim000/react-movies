import { useState } from 'react';
import { Input, Button } from './styles/Header.styled';

function Form({ movieSearch }) {

    const [form, setForm] = useState({
        searchTerm: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form, 
            searchTerm: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.value = '';
        
        movieSearch(form.searchTerm);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input type="text" value={form.searchTerm} onChange={handleChange} />
            <Button> 🔍 </Button>
        </form>
    </div>
  )
}

export default Form;