import React, { useEffect, useState } from "react";

export default function Todo() {
  const [nama, setNama] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleNama= (e) => {
    setNama(e.target.value);
  }

  const handleTanggal = (e) => {
    setTanggal(e.target.value);
  }

  const submitTodos = (e) => {
    e.preventDefault()
    const todo = {
        id: Math.floor(Math.random() * 1000),
        nama: nama,
        tanggal: tanggal,
    }
    setTodos([todo, ...todos])
    setNama('')
    setTanggal('')
  }

  const handleDelete = (id) => {
    const filterTodos = todos.filter((el) => el.id !== id);
    setTodos(filterTodos)
  }
  
  const handleCompleted = (id) => {
    const findTodos = todos.find((el) => el.id === id);
    setCompleted([findTodos, ...completed])
    const filterArray = todos.filter ((el) => el.id !== id)
    setTodos(filterArray);
  }

  const deleteCompleted = (id) => {
    const filterCompleted = completed.filter((el) => el.id !== id);
    setCompleted(filterCompleted)
  }

  const saveTodoToLocal = () => {
    localStorage.setItem('todos', (JSON.stringify(todos)));
    localStorage.setItem('completed', (JSON.stringify(completed)));
    localStorage.getItem('todo')
    localStorage.getItem('completed')
  }

  useEffect(() => {
    if(saveTodoToLocal() !== null) saveTodoToLocal()
  }, [todos, completed])
  return (
    <>
      <div className="bg-white mx-4 py-3 rounded-md shadow-md">
        <h1 className="text-center font-semibold">
          {" "}
          TODO LIST MATA KULIAH FRONTEND
        </h1>
      </div>

      {/* Form Input Todo */}

      <div className="bg-white mx-4 px-4 py-3 rounded-md shadow-md">
        <h2 className="text-center text-gray-500 font-medium">
          Masukkan List Todo Anda
        </h2>
        <form className="pt-b pb-4" action="">
          <div className="block mt-5">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-400"
            ></label>
            <input
              type="text"
              value={nama}
              onChange={handleNama}
              className="outline-none bg-gray-100 px-2 py-1 w-full
                    rounded-md mt-2 hover:border hover:border-indigo-500 hover:border-opacity-70
                    transition-duration-300"
              id="nama"
            />
          </div>
          <div className="block mt-5">
            <label className="block text-sm font-medium text-gray-400">
              Tanggal
            </label>
            <input
              value={tanggal}
              onChange={handleTanggal}
              className="outline-none bg-gray-100 px-2 py-1 w-full
                    rounded-md shadow-md mt-2 hover:border hover:border-indigo-500 hover:border-opacity-70 transition-duration-300"
              type="date"
              id="tanggal"
            />
          </div>
          <div className="block-5">
            <button
              onClick={submitTodos}
              className="px-4 py-1 bg-indigo-500 text-white rounded-md shadow-md
                    shadow-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-600 transition duration-300"
            >
              tambahkan
            </button>
          </div>
        </form>
      </div>

      {/* todo when list input */}
      <div className="bg-white mt-6 mx-4 px-4 py-3 rounded-md shadow-md">
        <h2 className="text-center text-gray-500 font-medium">List Todo Anda</h2>
        {todos.map((todo) =>
        <div key={todo.id} className="bg-gray-100 mx-4 px-4 py-2 mt-4 mb-2 rounded-md shadow-md">
            <h3 className="font-bold text-indigo-500 text-lg">{todo.nama}</h3>
            <p className="text-gray-400 text-sm mt-1">({todo.tanggal})</p>
            <div className="flex mt-3 md-3">
                <button onClick={() => handleCompleted(todo.id)}
                className="mr-3 bg-green-500 px-2 py-1 text-white shadow-md shadow-green-500
                hover:shadow-green-600 hover:bg-green-600">
                    <i className="fa-solid fa-check"></i>
                </button>
                <button onClick={() => handleDelete(todo.id)}
                className="bg-red-500 px-2 py-2 text-white shadow-md 
                shadow-red-500 hover:shadow-red-600 hover:bg-red-600">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
        )}
      </div>

      {/* Todo Complete */}
      <div className="bg-white my-6 mx-4 px-4 py-3 rounded-md shadow-md ">
        <h2 className="text-center text-gray-500 font-medium">List ToDo yang sudah anda lakukan</h2>
        {completed.map((completed) => 
        <div key={completed.id}
        className="bg-gray-100 mx-4 px-4 py-2 mt-4 mb-2
        rounded-md shadow-md">
            <h3 className="font-bold text-green-500">{completed.nama}</h3>
            <p className="text-green-400 text-sm mt-1 "> ({completed.tanggal})</p>
            <button onClick={() => deleteCompleted(completed.id)}
            className="mt-3 mb-2 bg-red-500 px-2 py-1 text-white shadow-md rounded-md
            shadow-red-500 hover:bg-red-600 hover:shadow-red-600">
                <i className="fa-solid fa-trash"></i> 
            </button>
        </div>
        )}
      </div>
    </>
  );
}
