import { ReactNode } from "react"
import { Root, Trigger, Value, Icon, Portal, Content, Viewport, Item, ItemText, Separator as RadixSeparator } from "@radix-ui/react-select"
import styles from "./select.module.css"
import iconCaretDown from "@/assets/images/icon-caret-down.svg"
import classNames from "classnames"
import Image from "next/image"

interface NativeSelectProps {
    placeholder?: string
    defaultValue?: string
    value?: string
    onChange?: (value: string) => void
    children: ReactNode
}

export function NativeSelect({ defaultValue, value, onChange, placeholder, children }: NativeSelectProps) {
    return (
        <Root defaultValue={defaultValue} value={value} onValueChange={onChange}>
            <Trigger className={classNames(styles.trigger, styles["trigger-content"], "text-preset-4")}>
                <Value placeholder={placeholder} />
                <Icon asChild>
                    <Image src={iconCaretDown} alt="" />
                </Icon>
            </Trigger>
            <Portal>
                <Content className={styles.content} position="popper">
                    <Viewport style={{ overflow: "initial" }}>
                        {children}
                    </Viewport>
                </Content>
            </Portal>
        </Root>
    )
}

interface IconSelectProps {
    defaultValue?: string
    value?: string
    onChange?: (value: string) => void
    children: ReactNode
    icon: string
}

export function IconSelect({ defaultValue, value, onChange, icon, children }: IconSelectProps) {
    return (
        <Root defaultValue={defaultValue} value={value} onValueChange={onChange}>
            <Trigger className={classNames(styles.trigger, styles["trigger-icon"])}>
                <Image className={styles.icon} src={icon} alt="Sort by" />
            </Trigger>
            <Portal>
                <Content className={styles.content} position="popper">
                    <Viewport style={{ overflow: "initial" }}>
                        {children}
                    </Viewport>
                </Content>
            </Portal>
        </Root>
    )
}


interface OptionProps {
    value: string
    children: ReactNode
}

export function Option({ value, children }: OptionProps) {
    return (
        <Item value={value} className={classNames(styles.item, "text-preset-4")}>
            <ItemText>{children}</ItemText>
        </Item>
    )
}

export function Separator() {
    return <RadixSeparator className={styles.separator} />
}