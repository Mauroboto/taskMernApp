//import cluster from "cluster";
//import os from "os";
import app from "./app.js";
import { connectDB } from "./db.js";

//MONGODB
connectDB();

//CORS


//ENV
const PORT = process.env.PORT || 4000;

//CLUSTER

/* const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
} */

app.listen(PORT, () =>
  console.log(`Worker ${process.pid} listening on port: ${PORT}`)
);
app.get("/", (req, res) => {
  res.send("Server OK");
});
