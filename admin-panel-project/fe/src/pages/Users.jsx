import React from "react";
import UsersTable from "../components/UsersTable";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";

export default function Users() {
  return (
    <div>
      <div className="user">
        <div className="users">
          <div>
            <Button color="primary" variant="contained">
              <ListItemButton to={"/usersAdd"}>New</ListItemButton>
            </Button>
          </div>
        </div>
        <div className="users">
          <div>
            <Button color="primary" variant="contained">
              <ListItemButton to={"/usersAdd"}>Add Filter</ListItemButton>
            </Button>
          </div>
        </div>
      </div>
      <UsersTable />
    </div>
  );
}
