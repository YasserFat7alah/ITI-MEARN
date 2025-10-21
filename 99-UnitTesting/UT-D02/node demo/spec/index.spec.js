const app = require("../index")
const request = require("supertest")
const req = request(app)

describe("root req", () => {
    it("expect get(/) should get all todos=[]", async () => {
        let response = await req.get("/")
        expect(response.status).toBe(200)
        expect(response.body.data).toHaveSize(0)
    })
   
    it("expect get(/xxx) should send msg not found",async()=>{
     let response = await req.get('/xxx')
     expect(response.status).toBe(404)
     expect(response.body.message).toEqual('Not found')
    })

})