"use client"

import Link from "next/link";

import styles from "./nav-item.module.css";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { ComponentType, SVGProps } from "react";

interface NavItemProps {
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
}

export function NavItem({ href, icon: Icon, title }: NavItemProps) {
    const path = usePathname()
    const isActive = href === path

    return (
        <Link className={cn(styles["nav-item"], isActive && styles["nav-item-active"])} href={href}>
            {/* <Image className={cn(styles["nav-icon"], isActive && styles["nav-icon-active"])} src={icon} alt={title} width={24} height={24} /> */}
            <Icon className={cn(styles["nav-icon"], isActive && styles["nav-icon-active"])} />
            <span className={styles["nav-title"]}>{title}</span>
        </Link>
    );
}   