import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
      host: "localhost",
      database: "try_muda",
      port: 8889,
      user: "root",
      password: "root",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    });
    try {
      const query = "SELECT id,nome FROM id_transporte";
      const values = [];
      const [data] = await dbconnection.execute(query, values);
      dbconnection.end();
  
      res.status(200).json({results: data});
    } catch (error) {
    //   unhide to check error
    //   res.status(500).json({ error: error.message });
    }
  }