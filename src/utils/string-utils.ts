export function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString)
    const formatted = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    return formatted
}

export function formatDollarValue(value: number): string {
    const sign = value < 0 ? "-" : ""
    const absValue = Math.abs(value).toFixed(2)
    return sign + "$" + absValue
}