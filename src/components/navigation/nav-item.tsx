"use client"

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import styles from "./nav-item.module.css";
import { usePathname } from "next/navigation";
import cn from "classnames";

interface NavItemProps {
    href: string;
    icon: StaticImageData;
    title: string;
}

export function NavItem({ href, icon, title }: NavItemProps) {
    const path = usePathname()
    const isActive = href === path

    return (
        <Link className={cn(styles["nav-item"], isActive && styles["nav-item-active"])} href={href}>
            <Image className={cn(styles["nav-icon"], isActive && styles["nav-icon-active"])} src={icon} alt={title} width={24} height={24} />
            <span className={styles["nav-title"]}>{title}</span>
        </Link>
    );
}   