import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";
import UploadButtons from "./UploadButtons";
import EditButton from "./EditButton";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "image", headerName: "Image", width: 130 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "subtitle", headerName: "Subtitle", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "rating", headerName: "Rating", width: 130 },
  {
    field: "actions",
    headerName: "Actions",
    width: 130,

    renderCell: () => {
      return (
        <div>
          <EditButton />
        </div>
      );
    },
  },
];

const rows = [
  { id: 1 },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {
  return (
    <div style={{ height: 400, width: "100%", marginLeft: 250 }}>
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
