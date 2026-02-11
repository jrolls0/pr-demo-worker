import { describe, it, expect } from "vitest";
import worker from "../src/index";

describe("worker", () => {
  it("responds with 200", async () => {
    const res = await worker.fetch(new Request("http://localhost/"));
    expect(res.status).toBe(200);
  });

  it("greets by name", async () => {
    const res = await worker.fetch(new Request("http://localhost/?name=Brad"));
    const text = await res.text();
    expect(text).toContain("Brad");
  });
});
