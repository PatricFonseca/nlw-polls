import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
// import { PrismaClient } from "@prisma/client";
// import { z } from "zod";

const app = fastify();

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
// const prisma = new PrismaClient();

app.listen({ port: 3000 }).then(() => {
  console.log("Server is listening on port 3000");
});
