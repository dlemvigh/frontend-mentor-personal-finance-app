import { ReactNode } from "react"
import * as RadixSelect from "@radix-ui/react-select"
import styles from "./select.module.css"
import iconCaretDown from "@/assets/images/icon-caret-down.svg"
import classNames from "classnames"
import Image from "next/image"

interface SelectProps {
    placeholder?: string
    defaultValue?: string
    value?: string
    onChange?: (value: string) => void
    children: ReactNode
    mobileTriggerIcon?: ReactNode
}

export function Select({ defaultValue, value, onChange, placeholder, mobileTriggerIcon, children } : SelectProps) {

    return (
        <RadixSelect.Root defaultValue={defaultValue} value={value} onValueChange={onChange}>            
            <RadixSelect.Trigger className={classNames(styles.trigger, "text-preset-4", !!mobileTriggerIcon && styles["trigger-mobile"])}>
                <div className={classNames("mobile-only", styles["trigger-content-mobile"])}>
                    {mobileTriggerIcon}
                </div>
                <div className={classNames(!!mobileTriggerIcon && "mobile-hidden", styles["trigger-content"])}>
                    <RadixSelect.Value placeholder={placeholder} />
                    <RadixSelect.Icon asChild>
                        <Image src={iconCaretDown} alt="" />
                    </RadixSelect.Icon>
                </div>
                
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