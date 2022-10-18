import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "dev",
    password: "nikhil@123",
    database: "blog",
});
