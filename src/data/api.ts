import { data } from "./data";
export * from "./api-recurring-bills"
export * from "./api-budgets"

export async function getOverviewData() {
  return {
    balance: data.balance,
    pots: data.pots.slice(0, 4),
    budgets: data.budgets,
    transactions: data.transactions.slice(0, 5),
  };
}

export async function getTransactions() {
  return data.transactions;
}


export async function getPots() {
  return data.pots;
}
