import PropTypes from 'prop-types';

const TodoInput = (props) => {
  const handleKey = (key) => {
    if (key.code === 'Enter') {
      props.addnew();
    }
  };

  const handleUpdateCurrent = (event) => {
    props.updateCurrent(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control form-rounded"
      placeholder="Add todo"
      onKeyUp={(event) => handleKey(event)}
      onChange={(event) => handleUpdateCurrent(event)}
      value={props.current}
    />
  );
};

TodoInput.propTypes = {
  current: PropTypes.string.isRequired,
  updateCurrent: PropTypes.func.isRequired,
  addnew: PropTypes.func.isRequired,
};

export default TodoInput;
