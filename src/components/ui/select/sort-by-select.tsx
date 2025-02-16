import { useCallback, useState } from "react";
import { IconSelect, NativeSelect, Option, Separator } from "./select";
import iconSort from "@/assets/images/icon-sort-mobile.svg"

interface SortBySelectProps {
    onChange: (value: string) => void;
}

export function SortBySelect({ onChange }: SortBySelectProps) {
    const [value, setValue] = useState("Latest")

    const handleChange = useCallback((value: string) => {
        setValue(value)
        onChange(value)
    }, [onChange])

    return (
        <>
            <div className="mobile-hidden">
                <NativeSelect
                    value={value}
                    onChange={handleChange}
                >
                    <SortByOptions />
                </NativeSelect>
            </div>
            <div className="mobile-only">
                <IconSelect
                    value={value}
                    onChange={handleChange}
                    icon={iconSort}
                >
                    <SortByOptions />
                </IconSelect>
            </div>
        </>
    )
}

function SortByOptions() {
    return (
        <>
            <Option value="Latest">Latest</Option>
            <Separator />
            <Option value="Oldest">Oldest</Option>
            <Separator />
            <Option value="A to Z">A to Z</Option>
            <Separator />
            <Option value="Z to A">Z to A</Option>
            <Separator />
            <Option value="Highest">Highest</Option>
            <Separator />
            <Option value="Lowest">Lowest</Option>
        </>
    )
}