import TextField from "@mui/material/TextField";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import UploadButtons from "../components/UploadButtons";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import UserRole from "../components/UserRole";

function UsersAdd() {
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  // const [currentUser, setCurrentUser] = useState();
  const [value, setValue] = React.useState("admin");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChanged = (event) => {
    setChecked(event.target.checked);
  };
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
  async function handleSubmit(e) {
    e.preventDefault();
    if (!isUpdate) {
      const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
    }

    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    setIsUpdate(false);
    // setCurrentUser(newUser);
  }

  return (
    <div className="useradd">
      <div className="useraddhead">App Users New</div>
      <br />
      <TextField
        name="firstname"
        required
        id="outlined-required"
        label="First Name"
      />
      <TextField
        name="lastname"
        required
        id="outlined-required"
        label="Last Name"
      />
      <TextField
        id="outlined-number"
        label="Phone Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name="email"
        required
        id="outlined-required"
        label="Email"
        type={"email"}
      />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <UserRole />
        </RadioGroup>
      </FormControl>

      {/* <Checkbox
        checked={checked}
        onChange={handleChanged}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <UploadButtons />
      <TextField
        name="password"
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Stack direction="row" spacing={3}>
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}

export default UsersAdd;

// const URL = "http://localhost:8080/users";

// const newUser = {
//   id: "",
//   firstname: "",
//   lastname: "",
// };

// const [users, setUsers] = useState([]);
// const [isUpdate, setIsUpdate] = useState(false);
// const [currentUser, setCurrentUser] = useState(newUser);

// useEffect(() => {
//   fetchAllData();
// }, []);

// async function fetchAllData() {
//   // fetch a data from localhost:8080/users
//   const FETCHED_DATA = await fetch(URL); // Response
//   const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ....}]}
//   console.log(FETCHED_JSON);
//   setUsers(FETCHED_JSON.data);
// }

// async function handleDelete(userId) {
//   const options = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId: userId,
//     }),
//   };
//   const FETCHED_DATA = await fetch(URL, options);
//   const FETCHED_JSON = await FETCHED_DATA.json();
//   setUsers(FETCHED_JSON.data);
// }

// async function handleSubmit(e) {
//   e.preventDefault();
//   if (!isUpdate) {
//     const postData = {
//       username: e.target.username.value,
//       age: e.target.age.value,
//     };

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     };

//     const FETCHED_DATA = await fetch(URL, options);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setUsers(FETCHED_JSON.data);
//   } else {
//     const putData = {
//       id: currentUser.id,
//       username: currentUser.username,
//       age: currentUser.age,
//     };

//     const options = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(putData),
//     };
//     const FETCHED_DATA = await fetch(URL, options);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setUsers(FETCHED_JSON.data);
//     setIsUpdate(false);
//     setCurrentUser(newUser);
//   }
// }

// async function handleEdit(userId) {
//   setIsUpdate(true);
//   const filterUser = users.filter((user) => user.id === userId)[0];
//   if (filterUser) {
//     setCurrentUser({
//       id: filterUser.id,
//       age: filterUser.age,
//       username: filterUser.username,
//     });
//   }
// }
// function handleUserName(e) {
//   setCurrentUser({
//     ...currentUser,
//     username: e.target.value,
//   });
// }
// function handleUserAge(e) {
//   setCurrentUser({
//     ...currentUser,
//     age: e.target.value,
//   });
// }

// return (
//   <div className="App">
//     <div className="container">
//       <h1>Add users</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input
//             name="First Name"
//             value={currentUser.firstname}
//             onChange={handleUserName}
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             name="age"
//             value={currentUser.age}
//             onChange={handleUserAge}
//           />
//         </label>
//         <br />
//         <button>{isUpdate ? "update" : "submit"}</button>
//       </form>
//       <h3>Users List</h3>
//       {users &&
//         users.map((user, index) => {
//           return (
//             <div key={index}>
//               <p>
//                 {user.username} : {user.age}{" "}
//                 <button onClick={() => handleDelete(user.id)}>Delete</button>
//                 <button onClick={() => handleEdit(user.id)}>Edit</button>
//               </p>
//             </div>
//           );
//         })}
//     </div>
//   </div>
// );
