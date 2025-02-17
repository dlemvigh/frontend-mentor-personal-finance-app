interface BillsTotalProps {
    total: number
}

export function BillsTotal({ total }: BillsTotalProps) {

    return (
        <>
            <h2>Total Bills</h2>
            <strong>${total}</strong>
        </>
    )
}