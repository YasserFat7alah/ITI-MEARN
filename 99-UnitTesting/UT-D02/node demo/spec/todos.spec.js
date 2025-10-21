const { clearDatabase } = require("../db.connection");
const app = require("../index")
const request = require("supertest")
const req = request(app)


describe("todos routes", () => {
    let token, todoId;

    beforeAll(async () => {
        let user = { name: "mona", email: "mona@gmail.com", password: "123456" }
        await req.post('/user/signup').send(user)
        let response = await req.post('/user/login').send(user)
        token = response.body.data
    })

    it("send req get(/todo) should get all todos=[]", async () => {
        let response = await req.get('/todo')
        expect(response.status).toBe(200)
        expect(response.body.data).toHaveSize(0)
    })

    it("send req post(/todo) should add new todo", async () => {
        let response = await req.post('/todo').send({ title: "study unit testing" }).set({ authorization: token })
        expect(response.status).toBe(201)
        expect(response.body.data.title).toEqual("study unit testing")
        todoId = response.body.data._id
    })

    it("send req post(/todo) without auth", async () => {
        let response = await req.post('/todo').send({ title: "study unit testing" })
        expect(response.status).toBe(401)
        expect(response.body.message).toEqual('you have not access , please login first')
    })


    it("send req post(/todo) with invalid title", async () => {
        let response = await req.post('/todo').send({ title: "st" }).set({ authorization: token })
        expect(response.status).toBe(500)
        expect(response.body.message).toContain("less than 3")
    })

    it("req get(/todo/:id) should return the added todo", async () => {
        let response = await req.get(`/todo/${todoId}`).set({ authorization: token })
        expect(response.status).toBe(200)
        expect(response.body.data.title).toEqual("study unit testing")
    })



    afterAll(async () => {
        await clearDatabase()
    })
})