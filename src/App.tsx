


import { getUsers, type TUser } from "./api/userApi"
import { UsersList } from "./components/UsersList"
import { AddForm } from "./components/AddForm"
import { useState } from "react";


// Задание

// 0. Добавить типизацию
// 1. Получить список пользователей и отобразить их список
// 2. Реализовать функцию удаления пользователя
// 3. Реализовать компонент формы добавления пользователя
//    - Создание должно работать при нажатии на enter или клик на кнопку
//    - Установить фокус на форму с названием
// 4. Избавиться от лишних ререндеров
// 5. Любые улучшения на свой вкус

function App() {
  const [users, setUsers] = useState([]);
  // TODO
  const deleteUserHandler = () => { }

  // TODO
  const addUserHandler = () => { }


  // TODO
  const averageAge = 0
  const users = []

  return (
    <div className="app">
      <h1>Test App</h1>
      <div className="header">
        <AddForm addUser={addUserHandler} />

        <div>Средний возраст: {averageAge}</div>
      </div>
      <UsersList users={users} deleteUser={deleteUserHandler} />
    </div>
  )
}

export default App
