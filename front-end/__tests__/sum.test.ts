import { describe, expect, test } from "@jest/globals";

import collectionApi from "../lib/CollectionApi";
import { number } from "zod";
import adminApi from "@/lib/AdminApi";

describe("Test colelction api", () => {
  test("Test collection aii", () => {
    return collectionApi.viewCollection().then((res) => {
      expect(res.data.data[0]).toHaveProperty("id");
    });
  });
});

describe("Test admin api", () => {
  test("view admin api", () => {
    return adminApi.getClassData().then((res) => {
      expect(res.data.data[0]).toHaveProperty("id");
    });
  });
});
