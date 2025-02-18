import { Fragment, useCallback, useState } from "react";
import { IconSelect, NativeSelect, Option, Separator } from "./select";
import iconFilter from "@/assets/images/icon-filter-mobile.svg"

interface FilterBySelectProps extends FilterByOptionsProps {
    onChange: (value: string) => void;
}

export function FilterBySelect({ onChange, allOptionsText, options }: FilterBySelectProps) {
    const [value, setValue] = useState(" ")

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
                    <FilterByOptions allOptionsText={allOptionsText} options={options} />
                </NativeSelect>
            </div>
            <div className="mobile-only">
                <IconSelect
                    value={value}
                    onChange={handleChange}
                    icon={iconFilter}
                >
                    <FilterByOptions allOptionsText={allOptionsText} options={options} />
                </IconSelect>
            </div>
        </>
    )
}

interface FilterByOptionsProps {
    allOptionsText: string;
    options: string[];
}

function FilterByOptions({ allOptionsText, options }: FilterByOptionsProps) {
    return (
        <>
            <Option value=" ">{allOptionsText}</Option>
            {options.map(option => (
                <Fragment key={option}>
                    <Separator />
                    <Option value={option}>{option}</Option>
                </Fragment>
            ))}
        </>
    )
}