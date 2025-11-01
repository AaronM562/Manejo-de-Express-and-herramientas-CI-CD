const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Aplicacion corriendo de forma correcta"));

describe("Pruebas del servidor", () => {
  it("debe responder en la ruta raiz", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Aplicacion corriendo de forma correcta");
  });
});
