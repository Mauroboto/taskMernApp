import swagerAutogen from "swagger-autogen";

const outputFile = "./swagger.json";
const endPointsFiles = ["./src/app.js"];

const doc = {
  info: {
    title: "Task CRUD API",
    description:
      "This APi allows you to register users and then make CRUD TASK Operations, Security improved by using GZIP, HELMET, JWT and BCRYPTJS, performance improved by using CLUSTER native module from Node, Global error handler middleware, middleware validator powered by ZOD",
  },

  host: "http://localhost:3000",
  schemes: ["http"],
};

swagerAutogen()(outputFile, endPointsFiles, doc);
