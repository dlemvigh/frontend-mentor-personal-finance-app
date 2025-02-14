import { data } from "./data";
import { Temporal } from "temporal-polyfill";

export interface RecurringBillsData {
  latestTransactionDate: Temporal.PlainMonthDay;
  summary: {
    total: number;
    paid: {
      total: number;
      count: number;
    };
    upcoming: {
      total: number;
      count: number;
    };
    due: {
      total: number;
      count: number;
    };
  };
  bills: RecurringBill[];
}

export interface RecurringBill {
  avatar: string;
  name: string;
  category: string;
  dayOfMonth: number;
  amount: number;
  status: "Paid" | "Upcoming" | "Due";
}

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

export async function getBudgets() {
  return data.budgets;
}

export async function getPots() {
  return data.pots;
}

export async function getRecurringBills(): Promise<RecurringBillsData> {
  const latestTransactionDate = Temporal.PlainMonthDay.from(
    data.transactions[0].date.substring(5, 10)
  );

  const recurringTransactions = data.transactions.filter(
    (transaction) => transaction.recurring
  );

  const groupedTransactions = recurringTransactions.reduce(
    (acc, transaction) => {
      if (!acc[transaction.name]) {
        acc[transaction.name] = [];
      }
      acc[transaction.name].push(transaction);
      return acc;
    },
    {} as Record<string, typeof data.transactions>
  );

  const bills = Object.values(groupedTransactions).map((group) => {
    const latestTransaction = group.reduce((latest, current) => {
      return new Date(latest.date) > new Date(current.date) ? latest : current;
    });

    const dayOfMonth = new Date(latestTransaction.date).getDate();
    const amount = Math.abs(latestTransaction.amount);
    const daysUntillDue = dayOfMonth - latestTransactionDate.day;
    const status =
      daysUntillDue < 0 ? "Paid" : daysUntillDue <= 5 ? "Due" : "Upcoming";

    return {
      avatar: latestTransaction.avatar,
      name: latestTransaction.name,
      category: latestTransaction.category,
      dayOfMonth,
      amount,
      status, // You can determine the status based on your logic
    } as RecurringBill;
  });

  const summary = bills.reduce(
    (acc, bill) => {
      acc.total += bill.amount;
      if (bill.status === "Paid") {
        acc.paid.total += bill.amount;
        acc.paid.count += 1;
      }
      if (bill.status === "Upcoming" || bill.status === "Due") {
        acc.upcoming.total += bill.amount;
        acc.upcoming.count += 1;
      }
      if (bill.status === "Due") {
        acc.due.total += bill.amount;
        acc.due.count += 1;
      }
      return acc;
    },
    {
      total: 0,
      paid: { total: 0, count: 0 },
      upcoming: { total: 0, count: 0 },
      due: { total: 0, count: 0 },
    }
  );
  summary.total = Math.round(summary.total * 100) / 100;
  summary.paid.total = Math.round(summary.paid.total * 100) / 100;
  summary.upcoming.total = Math.round(summary.upcoming.total * 100) / 100;
  summary.due.total = Math.round(summary.due.total * 100) / 100;

  bills.sort((a, b) => a.dayOfMonth - b.dayOfMonth);

  return {
    latestTransactionDate,
    summary,
    bills,
  };
}
