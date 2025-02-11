import { ReactNode } from "react"
import * as RadixSelect from "@radix-ui/react-select"
import styles from "./select.module.css"
import iconCaretDown from "@/assets/images/icon-caret-down.svg"
import Image from "next/image"
import classNames from "classnames"

interface SelectProps {
    placeholder?: string
    defaultValue?: string
    value?: string
    onChange?: (value: string) => void
    children: ReactNode
}

export function Select({ defaultValue, value, onChange, placeholder, children } : SelectProps) {
    return (
        <RadixSelect.Root defaultValue={defaultValue} value={value} onValueChange={onChange}>
            <RadixSelect.Trigger className={classNames(styles.trigger, "text-preset-4")}>
                <RadixSelect.Value placeholder={placeholder} />
                <RadixSelect.Icon asChild>
                    <Image src={iconCaretDown} alt="" />
                </RadixSelect.Icon>
            </RadixSelect.Trigger>
            <RadixSelect.Portal>
                <RadixSelect.Content className={styles.content} position="popper">
                    <RadixSelect.Viewport>
                        {children}
                    </RadixSelect.Viewport>
                </RadixSelect.Content>
            </RadixSelect.Portal>
        </RadixSelect.Root>
    )
}

interface OptionProps {
    value: string
    children: ReactNode
}

export function Option({ value, children }: OptionProps) {
    return (
        <RadixSelect.Item value={value} className={classNames(styles.item, "text-preset-4")}>
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
    )
}

export function Separator() {
    return <RadixSelect.Separator className={styles.separator} />
}