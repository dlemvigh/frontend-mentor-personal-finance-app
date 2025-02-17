import Image from "next/image"

import icon from "@/assets/images/icon-recurring-bills.svg"
import styles from "./bills-total.module.css"

interface BillsTotalProps {
  total: number
}

export function BillsTotal({ total }: BillsTotalProps) {
  return (
    <div className={styles.card}>
      <Image className={styles.icon} src={icon} alt="Bills" width={40} height={40} />
      <h2 className={`${styles.title} text-preset-4`}>Total Bills</h2>
      <strong className="text-preset-1">${total}</strong>
    </div>
  )
}
