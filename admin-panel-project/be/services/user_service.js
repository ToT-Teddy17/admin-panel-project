import { pool } from "../config/mysql-config.js";
export async function getUsers() {
  const [rows] = await pool.query(`select * from user_role `);
  console.log(rows);
  return rows;
}

// export async function getMaxNo() {
//   const [rows] = await pool.query(
//     `select max(user_role_id) as max from user_role`
//   );
//   return rows[0];
// }
// export async function addUser(userRoleId, userRoleName) {
//   const query = `insert into users values(?,?)`;
//   const [rows] = await pool.query(query, [userRoleId, userRoleName]);
//   return rows;
// }
