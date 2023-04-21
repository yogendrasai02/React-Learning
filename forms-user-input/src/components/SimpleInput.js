import { useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');

  const nameChangeHandler = event => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log('On Submit:', enteredName);
  };

  return (
    <form autoComplete="off" onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;