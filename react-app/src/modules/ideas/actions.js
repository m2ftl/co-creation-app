// import PG from "PG";

export default function Insertidea(values)

   {
    console.log(values);
    // const client = new PG.Client({
    //  connectionString: process.env.DATABASE_URL,
    //  ssl: true,
    // });
    // client.connect();
    // client.query("INSERT INTO users (id, title, description) VALUES (uuid_generate_v4(),$1,$2) RETURNING *", [values.title, values.description])
    //   .catch(error => {
    //     console.warn(error);
    //   });
  }
