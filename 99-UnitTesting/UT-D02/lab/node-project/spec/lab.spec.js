const app = require("../index");
const supertest = require("supertest");
const req = supertest(app);
const { clearDatabase } = require("../db.connection.js");

describe("lab testing:", () => {
  let token;
  let todoId;

  beforeAll(async () => {
    let user = {
      // create user before all specs
      name: "yasser",
      email: "yasser@test.com",
      password: "123456",
    };
    await req.post("/user/signup").send(user);
    let res = await req.post("/user/login").send(user);
    token = res.body.data;
  });

  /* === === === === USER ROUTES === === === === */
  describe("users routes:", () => {
    // Note: user name must be sent in req query not req params
    it("req to get(/search) ,expect to get the correct user with his name", async () => {
      const res = await req.get(`/user/search?name=yasser`); // send as query, not param

      expect(res.status).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body.data.name).toBe("yasser");
    });

    it("req to get(/search) with invalid name ,expect res status and res message to be as expected", async () => {
      const res = await req.get("/user/search?name=hamada");

      expect(res.status).toBe(200);
      expect(res.body).toBeDefined();
      expect(res.body.message).toBe("There is no user with name: hamada");
    });
  });

  /* === === === === TODO ROUTES === === === === */
  describe("todos routes:", () => {
    it("send req post(/todo) should add new todo", async () => {
      let response = await req
        .post("/todo")
        .send({ title: "study unit testing" })
        .set({ authorization: token });
      expect(response.status).toBe(201);
      expect(response.body.data.title).toEqual("study unit testing");
      console.log(response.body.data._id);

      todoId = response.body.data._id;
    });

    it("req to patch(/todo) with id only ,expect res status and res message to be as expected", async () => {
      const res = await req
        .patch(`/todo/${todoId}`)
        .send({})
        .set({ authorization: token });

      expect(res.status).toBe(400);
      expect(res.body.message).toBe("must provide title and id to edit todo");
    });

    it("req to patch(/todo) with id and title ,expect res status and res to be as expected", async () => {
      const res = await req
        .patch(`/todo/${todoId}`)
        .send({ title: "Updated title" })
        .set({ authorization: token });

      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe("Updated title");
    });

    it("req to get(/todo/user) ,expect to get all user's todos", async () => {
      const res = await req.get("/todo/user").set({ authorization: token });

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBeTrue();
    });

    it("req to get(/todo/user) ,expect to not get any todos for user hasn't any todo", async () => {
      let newUser = {
        // create user before all specs
        name: "yasser2",
        email: "yasser2@test.com",
        password: "123456",
      };
      await req.post("/user/signup").send(newUser);
      let res = await req.post("/user/login").send(newUser);
      const newToken = res.body.data;

      const response = await req
        .get("/todo/user")
        .set({ authorization: newToken });

      expect(response.status).toBe(200);
      expect(response.body.message).toContain("Couldn't find any todos for ");
    });
  });

  afterAll(async () => {
    await clearDatabase();
  });
});
