import { Transaction } from "@/data/data"
import { PaginationState, Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button/button"
import styles from "./transaction-pagination.module.css"
import { NextIcon, PrevIcon } from "../icons/pagination-icons"

interface TransactionPaginationProps {
    table: Table<Transaction>
    pagination: PaginationState
}

function usePageNumbers(currentPage: number, pageCount: number) {
    const maxPagesToShow = 5;
    const halfRange = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(currentPage - halfRange, 0);
    let endPage = Math.min(currentPage + halfRange, pageCount - 1);

    if (currentPage <= halfRange) {
        endPage = Math.min(maxPagesToShow - 1, pageCount - 1);
    } else if (currentPage + halfRange >= pageCount) {
        startPage = Math.max(pageCount - maxPagesToShow, 0);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    return pages;
};

export function TransactionPagination({ table, pagination }: TransactionPaginationProps) {

    const pages = usePageNumbers(pagination?.pageIndex, table.getPageCount());
    return (
        <div className={styles.pagination}>
            <Button className={styles.prev} variant="tertiary" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                <PrevIcon />
                <span className="mobile-hidden">
                    Prev
                </span>
            </Button>
            {pages.map(index => {
                const isCurrent = pagination.pageIndex === index;
                return (
                    <Button className={styles.page} key={index} onClick={() => table.setPageIndex(index)} variant={isCurrent ? "primary" : "tertiary"} disabled={isCurrent}>{index + 1}</Button>
                )
            })}

            <Button className={styles.next} variant="tertiary" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                <span className="mobile-hidden">
                    Next
                </span>
                <NextIcon />
            </Button>
        </div>
    )

}