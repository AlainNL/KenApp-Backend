const request = require("supertest")
const baseUrl = "http://localhost:3000"

describe("/api/defibrillateurs", () => {
  it('should return a 200 status code',
async () => {
    const response = await request(baseUrl)
    .get('/api/defibrillateurs');
    expect(response.statusCode).toBe(200);
  })
})

describe("/api/defibrillateurs", () => {
  it('should return a 201 status code',
  async () => {
    const response = await request(baseUrl)
    .post('/api/defibrillateurs');
    expect(response.statusCode).toBe(201);
  })
})

describe("/api/defibrillateurs/2", () => {
  it('should return a 200 status code',
async () => {
    const response = await request(baseUrl)
    .get('/api/defibrillateurs/2');
    expect(response.statusCode).toBe(200);
  })
})

describe("/api/defibrillateurs/2", () => {
  it('Defibrillateur Updated Successfully',
async () => {
    const response = await request(baseUrl)
    .put('/api/defibrillateurs/2');
    expect(response.statusCode).toBe(200);
  })
})

describe("/api/defibrillateurs/2", () => {
  it('Defibrillateur Removed Successfully',
async () => {
    const response = await request(baseUrl)
    .delete('/api/defibrillateurs/2');
    expect(response.statusCode).toBe(200);
  })
})
