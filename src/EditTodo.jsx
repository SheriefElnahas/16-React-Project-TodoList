function EditTodo({ selectedTodo, onUpdateTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('hey');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="add-todo" type="text" value={selectedTodo} onChange={(e) => onUpdateTodo(e.target.value)} />

      <button className="btn-add-task">Update</button>
    </form>
  );
}

export default EditTodo;
