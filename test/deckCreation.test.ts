import request from "supertest";
import { app, appServer } from "../server.js";
import { Response } from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { logEvents } from "../middleware/logger.js";
import { Deck } from "../types/decks.types.js";
process.env.NODE_ENV === "test";

describe("Deck Test Suite", () => {
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    mongoose.connect(uri);
    const db = mongoose.connection;
    db.on("error", (err) => {
      console.error(err);
      logEvents(
        `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
        "mongoErrLog.log"
      );
    });
    db.on("open", () => console.log("Connected to Mock DB!!!!"));
  });

  afterAll(() => {
    if (process.env.NODE_ENV === "test") {
      mongoose.connection.close(() => {
        appServer.close();
      });
    }
  });

  describe("Deck Creation positive tests", () => {
    const scenarios = [
      {
        name: "Full deck and not sfuffled",
        payload: {
          type: "FULL",
          shuffled: false,
        },
      },
      {
        name: "Full deck and sfuffled",
        payload: {
          type: "FULL",
          shuffled: true,
        },
      },
      {
        name: "Short deck and not sfuffled",
        payload: {
          type: "SHORT",
          shuffled: false,
        },
      },
      {
        name: "Short deck and sfuffled",
        payload: {
          type: "SHORT",
          shuffled: true,
        },
      },
    ];

    scenarios.forEach((scenario) => {
      describe(scenario.name, () => {
        let response: Response;
        const { payload } = scenario;

        beforeEach(async () => {
          response = await request(app).post("/deck").send(payload);
        });

        test("Response payload status check", async () => {
          expect(response.statusCode).toBe(201);
        });

        test("Response payload content-type check", async () => {
          expect(response.headers["content-type"]).toContain(
            "application/json"
          );
        });

        test("Response schema and types check", () => {
          expect(response.body).not.toBeUndefined();
          const schem = {
            deckId: expect.stringMatching(
              /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
            ),
            remaining: payload.type === "FULL" ? 52 : 32,
            ...payload,
          };
          expect(response.body).toMatchObject<Deck>({ ...schem });
        });
      });
    });
  });

  describe("Deck Creation Negative tests", () => {
    const scenarios = [
      {
        name: "no payload",
        payload: {},
        message: "All fields are required",
        status: 400,
      },
      {
        name: "missing shuffled value",
        payload: {
          type: "FULL",
        },
        message: "All fields are required",
        status: 400,
      },
      {
        name: "missing type value",
        payload: {
          shuffled: false,
        },
        message: "All fields are required",
        status: 400,
      },
    ];

    scenarios.forEach((scenario) => {
      describe(scenario.name, () => {
        let response: Response;
        const { payload } = scenario;

        beforeEach(async () => {
          response = await request(app).post("/deck").send(payload);
        });

        test("Response payload status check", async () => {
          expect(response.statusCode).toBe(scenario.status);
        });

        test("Response payload content-type check", async () => {
          expect(response.headers["content-type"]).toContain(
            "application/json"
          );
        });

        test("Response schema and types check", () => {
          expect(response.body.message).toContain(scenario.message);
        });
      });
    });
  });
});
