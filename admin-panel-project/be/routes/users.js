import { getUsers } from "../services/user_service.js";
import express from "express";

const user_router = express.Router();

user_router.get("/user_role", async (request, response) => {
  const result = await getUsers();
  response.status(200).send(result);
});

// user_router.post("/user_role", async (request, response) => {
//   const { userRoleId, userRoleName } = request.body;
//   const { max } = await getMaxNo();
//   console.log(max);

//   response.status(200).send({});
// });
export default user_router;
