export type Balance = {
    current: number;
    income: number;
    expenses: number;
}
export type Transaction = {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
}
export type Budget = {
    category: string;
    maximum: number;
    theme: string;
}
export type Pot = {
    name: string;
    target: number;
    total: number;
    theme: string;
}

export type Data = {
    balance: Balance;
    transactions: Transaction[];
    budgets: Budget[];
    pots: Pot[];
}

export const data: Data = {
    "balance": {
        "current": 4836.00,
        "income": 3814.25,
        "expenses": 1700.50
    },
    "transactions": [
        {
            "avatar": "emma-richardson.jpg",
            "name": "Emma Richardson",
            "category": "General",
            "date": "2024-08-19T14:23:11Z",
            "amount": 75.50,
            "recurring": false
        },
        {
            "avatar": "savory-bites-bistro.jpg",
            "name": "Savory Bites Bistro",
            "category": "Dining Out",
            "date": "2024-08-19T20:23:11Z",
            "amount": -55.50,
            "recurring": false
        },
        {
            "avatar": "daniel-carter.jpg",
            "name": "Daniel Carter",
            "category": "General",
            "date": "2024-08-18T09:45:32Z",
            "amount": -42.30,
            "recurring": false
        },
        {
            "avatar": "sun-park.jpg",
            "name": "Sun Park",
            "category": "General",
            "date": "2024-08-17T16:12:05Z",
            "amount": 120.00,
            "recurring": false
        },
        {
            "avatar": "urban-services-hub.jpg",
            "name": "Urban Services Hub",
            "category": "General",
            "date": "2024-08-17T21:08:09Z",
            "amount": -65.00,
            "recurring": false
        },
        {
            "avatar": "liam-hughes.jpg",
            "name": "Liam Hughes",
            "category": "Groceries",
            "date": "2024-08-15T18:20:33Z",
            "amount": 65.75,
            "recurring": false
        },
        {
            "avatar": "lily-ramirez.jpg",
            "name": "Lily Ramirez",
            "category": "General",
            "date": "2024-08-14T13:05:27Z",
            "amount": 50.00,
            "recurring": false
        },
        {
            "avatar": "ethan-clark.jpg",
            "name": "Ethan Clark",
            "category": "Dining Out",
            "date": "2024-08-13T20:15:59Z",
            "amount": -32.50,
            "recurring": false
        },
        {
            "avatar": "james-thompson.jpg",
            "name": "James Thompson",
            "category": "Entertainment",
            "date": "2024-08-11T15:45:38Z",
            "amount": -5.00,
            "recurring": false
        },
        {
            "avatar": "pixel-playground.jpg",
            "name": "Pixel Playground",
            "category": "Entertainment",
            "date": "2024-08-11T18:45:38Z",
            "amount": -10.00,
            "recurring": true
        },
        {
            "avatar": "ella-phillips.jpg",
            "name": "Ella Phillips",
            "category": "Dining Out",
            "date": "2024-08-10T19:22:51Z",
            "amount": -45.00,
            "recurring": false
        },
        {
            "avatar": "sofia-peterson.jpg",
            "name": "Sofia Peterson",
            "category": "Transportation",
            "date": "2024-08-08T08:55:17Z",
            "amount": -15.00,
            "recurring": false
        },
        {
            "avatar": "mason-martinez.jpg",
            "name": "Mason Martinez",
            "category": "Lifestyle",
            "date": "2024-08-07T17:40:29Z",
            "amount": -35.25,
            "recurring": false
        },
        {
            "avatar": "green-plate-eatery.jpg",
            "name": "Green Plate Eatery",
            "category": "Groceries",
            "date": "2024-08-06T08:25:44Z",
            "amount": -78.50,
            "recurring": false
        },
        {
            "avatar": "sebastian-cook.jpg",
            "name": "Sebastian Cook",
            "category": "Transportation",
            "date": "2024-08-06T10:05:44Z",
            "amount": -22.50,
            "recurring": false
        },
        {
            "avatar": "william-harris.jpg",
            "name": "William Harris",
            "category": "Personal Care",
            "date": "2024-08-05T14:30:56Z",
            "amount": -10.00,
            "recurring": false
        },
        {
            "avatar": "elevate-education.jpg",
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-08-04T11:15:22Z",
            "amount": -50.00,
            "recurring": true
        },
        {
            "avatar": "serenity-spa-and-wellness.jpg",
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-08-03T14:00:37Z",
            "amount": -30.00,
            "recurring": true
        },
        {
            "avatar": "spark-electric-solutions.jpg",
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-08-02T09:25:11Z",
            "amount": -100.00,
            "recurring": true
        },
        {
            "avatar": "rina-sato.jpg",
            "name": "Rina Sato",
            "category": "Bills",
            "date": "2024-08-02T13:31:11Z",
            "amount": -50.00,
            "recurring": false
        },
        {
            "avatar": "swift-ride-share.jpg",
            "name": "Swift Ride Share",
            "category": "Transportation",
            "date": "2024-08-01T18:40:33Z",
            "amount": -18.75,
            "recurring": false
        },
        {
            "avatar": "aqua-flow-utilities.jpg",
            "name": "Aqua Flow Utilities",
            "category": "Bills",
            "date": "2024-07-30T13:20:14Z",
            "amount": -100.00,
            "recurring": true
        },
        {
            "avatar": "ecofuel-energy.jpg",
            "name": "EcoFuel Energy",
            "category": "Bills",
            "date": "2024-07-29T11:55:29Z",
            "amount": -35.00,
            "recurring": true
        },
        {
            "avatar": "yuna-kim.jpg",
            "name": "Yuna Kim",
            "category": "Dining Out",
            "date": "2024-07-29T13:51:29Z",
            "amount": -28.50,
            "recurring": false
        },
        {
            "avatar": "flavor-fiesta.jpg",
            "name": "Flavor Fiesta",
            "category": "Dining Out",
            "date": "2024-07-27T20:15:06Z",
            "amount": -42.75,
            "recurring": false
        },
        {
            "avatar": "harper-edwards.jpg",
            "name": "Harper Edwards",
            "category": "Shopping",
            "date": "2024-07-26T09:43:23Z",
            "amount": -89.99,
            "recurring": false
        },
        {
            "avatar": "buzz-marketing-group.jpg",
            "name": "Buzz Marketing Group",
            "category": "General",
            "date": "2024-07-26T14:40:23Z",
            "amount": 3358.00,
            "recurring": false
        },
        {
            "avatar": "technova-innovations.jpg",
            "name": "TechNova Innovations",
            "category": "Shopping",
            "date": "2024-07-25T16:25:37Z",
            "amount": -29.99,
            "recurring": false
        },
        {
            "avatar": "bytewise.jpg",
            "name": "ByteWise",
            "category": "Lifestyle",
            "date": "2024-07-23T09:35:14Z",
            "amount": -49.99,
            "recurring": true
        },
        {
            "avatar": "nimbus-data-storage.jpg",
            "name": "Nimbus Data Storage",
            "category": "Bills",
            "date": "2024-07-21T10:05:42Z",
            "amount": -9.99,
            "recurring": true
        },
        {
            "avatar": "emma-richardson.jpg",
            "name": "Emma Richardson",
            "category": "General",
            "date": "2024-07-20T17:30:55Z",
            "amount": -25.00,
            "recurring": false
        },
        {
            "avatar": "daniel-carter.jpg",
            "name": "Daniel Carter",
            "category": "General",
            "date": "2024-07-19T12:45:09Z",
            "amount": 50.00,
            "recurring": false
        },
        {
            "avatar": "sun-park.jpg",
            "name": "Sun Park",
            "category": "General",
            "date": "2024-07-18T19:20:23Z",
            "amount": -38.50,
            "recurring": false
        },
        {
            "avatar": "harper-edwards.jpg",
            "name": "Harper Edwards",
            "category": "Shopping",
            "date": "2024-07-17T14:55:37Z",
            "amount": -29.99,
            "recurring": false
        },
        {
            "avatar": "liam-hughes.jpg",
            "name": "Liam Hughes",
            "category": "Groceries",
            "date": "2024-07-16T10:10:51Z",
            "amount": -52.75,
            "recurring": false
        },
        {
            "avatar": "lily-ramirez.jpg",
            "name": "Lily Ramirez",
            "category": "General",
            "date": "2024-07-15T16:35:04Z",
            "amount": 75.00,
            "recurring": false
        },
        {
            "avatar": "ethan-clark.jpg",
            "name": "Ethan Clark",
            "category": "Dining Out",
            "date": "2024-07-14T20:50:18Z",
            "amount": -41.25,
            "recurring": false
        },
        {
            "avatar": "rina-sato.jpg",
            "name": "Rina Sato",
            "category": "Entertainment",
            "date": "2024-07-13T09:15:32Z",
            "amount": -10.00,
            "recurring": false
        },
        {
            "avatar": "james-thompson.jpg",
            "name": "James Thompson",
            "category": "Bills",
            "date": "2024-07-12T13:40:46Z",
            "amount": -95.50,
            "recurring": false
        },
        {
            "avatar": "ella-phillips.jpg",
            "name": "Ella Phillips",
            "category": "Dining Out",
            "date": "2024-07-11T18:05:59Z",
            "amount": -33.75,
            "recurring": false
        },
        {
            "avatar": "yuna-kim.jpg",
            "name": "Yuna Kim",
            "category": "Dining Out",
            "date": "2024-07-10T12:30:13Z",
            "amount": -27.50,
            "recurring": false
        },
        {
            "avatar": "sofia-peterson.jpg",
            "name": "Sofia Peterson",
            "category": "Transportation",
            "date": "2024-07-09T08:55:27Z",
            "amount": -12.50,
            "recurring": false
        },
        {
            "avatar": "mason-martinez.jpg",
            "name": "Mason Martinez",
            "category": "Lifestyle",
            "date": "2024-07-08T15:20:41Z",
            "amount": -65.00,
            "recurring": false
        },
        {
            "avatar": "sebastian-cook.jpg",
            "name": "Sebastian Cook",
            "category": "Transportation",
            "date": "2024-07-07T11:45:55Z",
            "amount": -20.00,
            "recurring": false
        },
        {
            "avatar": "william-harris.jpg",
            "name": "William Harris",
            "category": "General",
            "date": "2024-07-06T17:10:09Z",
            "amount": 20.00,
            "recurring": false
        },
        {
            "avatar": "elevate-education.jpg",
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-07-05T11:15:22Z",
            "amount": -50.00,
            "recurring": true
        },
        {
            "avatar": "serenity-spa-and-wellness.jpg",
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-07-03T14:00:37Z",
            "amount": -30.00,
            "recurring": true
        },
        {
            "avatar": "spark-electric-solutions.jpg",
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-07-02T09:25:51Z",
            "amount": -100.00,
            "recurring": true
        },
        {
            "avatar": "swift-ride-share.jpg",
            "name": "Swift Ride Share",
            "category": "Transportation",
            "date": "2024-07-02T19:50:05Z",
            "amount": -16.50,
            "recurring": false
        }
    ],
    "budgets": [
        {
            "category": "Entertainment",
            "maximum": 50.00,
            "theme": "#277C78"
        },
        {
            "category": "Bills",
            "maximum": 750.00,
            "theme": "#82C9D7"
        },
        {
            "category": "Dining Out",
            "maximum": 75.00,
            "theme": "#F2CDAC"
        },
        {
            "category": "Personal Care",
            "maximum": 100.00,
            "theme": "#626070"
        }
    ],
    "pots": [
        {
            "name": "Savings",
            "target": 2000.00,
            "total": 159.00,
            "theme": "#277C78"
        },
        {
            "name": "Concert Ticket",
            "target": 150.00,
            "total": 110.00,
            "theme": "#626070"
        },
        {
            "name": "Gift",
            "target": 60.00,
            "total": 40.00,
            "theme": "#82C9D7"
        },
        {
            "name": "New Laptop",
            "target": 1000.00,
            "total": 10.00,
            "theme": "#F2CDAC"
        },
        {
            "name": "Holiday",
            "target": 1440.00,
            "total": 531.00,
            "theme": "#826CB0"
        }
    ]
}