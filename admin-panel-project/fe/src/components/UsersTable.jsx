import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",

    width: 200,
  },

  {
    field: "email",
    headerName: "E-mail",
    sortable: false,
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
  },
  {
    field: "disabled",
    headerName: "Disabled",
    width: 200,
  },
  {
    field: "Avatar",
    headerName: "Avatar",
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
];
// const rows = {};

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  return (
    <div className="productfirstpage" style={{ height: 400, width: "85%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
