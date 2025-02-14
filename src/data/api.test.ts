import { Temporal } from "temporal-polyfill"
import { getRecurringBills } from "./api"

describe.only("api", () => {
    describe("recurring bills", ()=> {
        it("should get latest transaction date", async () => {
            const data = await getRecurringBills()
            expect(data.latestTransactionDate).toEqual(Temporal.PlainMonthDay.from("08-19"))
        })
    })
})