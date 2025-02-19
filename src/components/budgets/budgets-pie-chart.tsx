import { SVGProps } from "react"

import { BudgetsData } from "@/data/api-budgets"

import styles from "./budgets-pie-chart.module.css"
import classNames from "classnames"

interface BudgetsPieChartProps {
  budgets: BudgetsData[]
  className?: string
}

export function BudgetsPieChart({ budgets, className }: BudgetsPieChartProps) {
  const totalSpent = budgets.reduce((acc, budget) => acc + budget.spent, 0)
  const totalMaximum = budgets.reduce((acc, budget) => acc + budget.maximum, 0)

  const size = 200

  const outerRadius = size / 2
  const innerRadius = 70
  let cumulativePercentage = 0
  const offsetAngle = -Math.PI / 2

  const arcs = budgets.map((budget, index) => {
    const percentage = budget.spent / totalSpent
    const startAngle = cumulativePercentage * 2 * Math.PI + offsetAngle
    const endAngle = (cumulativePercentage + percentage) * 2 * Math.PI + offsetAngle
    cumulativePercentage += percentage

    const largeArcFlag = percentage > 0.5 ? 1 : 0

    const outerStartX = outerRadius + outerRadius * Math.cos(startAngle)
    const outerStartY = outerRadius + outerRadius * Math.sin(startAngle)
    const outerEndX = outerRadius + outerRadius * Math.cos(endAngle)
    const outerEndY = outerRadius + outerRadius * Math.sin(endAngle)

    const innerStartX = outerRadius + innerRadius * Math.cos(endAngle)
    const innerStartY = outerRadius + innerRadius * Math.sin(endAngle)
    const innerEndX = outerRadius + innerRadius * Math.cos(startAngle)
    const innerEndY = outerRadius + innerRadius * Math.sin(startAngle)

    const pathData = `
      M ${outerStartX} ${outerStartY}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
      L ${innerStartX} ${innerStartY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}
      Z
    `

    return (
      <path
        key={index}
        d={pathData}
        fill={budget.theme}
        stroke="white"
        strokeWidth="2"
      />
    )
  })

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles["center-text"]}>
        <strong className="text-preset-1">${totalSpent}</strong>
        <span className={`${styles["center-text-maximum"]} text-preset-5`}>
          of ${totalMaximum} limit
        </span>
      </div>

      <svg className={styles["pie-chart"]} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {arcs}
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          fill="none"
          stroke="white"
          strokeWidth="20"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
