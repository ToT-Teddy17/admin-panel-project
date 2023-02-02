import React from "react";
import { useState, useEffect } from "react";

export default function EditButton() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    fetchAllData();
  }, []);
  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ....}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  async function handleEdit(userId) {
    setIsUpdate(true);
    const filterUser = users.filter((user) => user.id === userId)[0];
    if (filterUser) {
      setCurrentUser({
        id: filterUser.id,
        age: filterUser.age,
        username: filterUser.username,
      });
    }
  }
  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  return (
    <div>
      <p>
        <button onClick={() => handleDelete}>Delete</button>
        <button onClick={() => handleEdit()}>Edit</button>
      </p>
    </div>
  );
}
