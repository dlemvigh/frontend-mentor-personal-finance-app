import { getRecurringBills } from "./api"

describe("api", () => {
    describe("recurring bills", ()=> {
        it("should get latest transaction date", async () => {
            const data = await getRecurringBills()
            expect(data.latestTransactionDate).toBe("xxx")
        })
    })
})