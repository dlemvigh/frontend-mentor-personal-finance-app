import { Temporal } from "temporal-polyfill";
import { getRecurringBills } from "./api";

describe.only("api", () => {
  describe("recurring bills", () => {
    it("should get latest transaction date", async () => {
      const data = await getRecurringBills();
      expect(data.latestTransactionDate).toEqual(
        Temporal.PlainMonthDay.from("08-19")
      );
    });

    it("should return recurring bills summary", async () => {
      const data = await getRecurringBills();
      expect(data.summary).toEqual({
        total: 384.98,
        paid: {
          total: 190,
          count: 4,
        },
        upcoming: {
          total: 194.98,
          count: 4,
        },
        due: {
          total: 59.98,
          count: 2,
        },
      });
    });

    it("should return recurring bills", async () => {
      const data = await getRecurringBills();
      expect(data.bills).toEqual([
        {
          avatar: "spark-electric-solutions.jpg",
          name: "Spark Electric Solutions",
          category: "Bills",
          dayOfMonth: 2,
          amount: 100.0,
          status: "Paid",
        },
        {
          avatar: "serenity-spa-and-wellness.jpg",
          name: "Serenity Spa & Wellness",
          category: "Personal Care",
          dayOfMonth: 3,
          amount: 30.0,
          status: "Paid",
        },
        {
          avatar: "elevate-education.jpg",
          name: "Elevate Education",
          category: "Education",
          dayOfMonth: 4,
          amount: 50.0,
          status: "Paid",
        },
        {
          avatar: "pixel-playground.jpg",
          name: "Pixel Playground",
          category: "Entertainment",
          dayOfMonth: 11,
          amount: 10.0,
          status: "Paid",
        },
        {
          avatar: "nimbus-data-storage.jpg",
          name: "Nimbus Data Storage",
          category: "Bills",
          dayOfMonth: 21,
          amount: 9.99,
          status: "Due",
        },
        {
          avatar: "bytewise.jpg",
          name: "ByteWise",
          category: "Lifestyle",
          dayOfMonth: 23,
          amount: 49.99,
          status: "Due",
        },
        {
          avatar: "ecofuel-energy.jpg",
          name: "EcoFuel Energy",
          category: "Bills",
          dayOfMonth: 29,
          amount: 35.0,
          status: "Upcoming",
        },
        {
          avatar: "aqua-flow-utilities.jpg",
          name: "Aqua Flow Utilities",
          category: "Bills",
          dayOfMonth: 30,
          amount: 100.0,
          status: "Upcoming",
        },
      ]);
    });
  });
});
