"use client";

import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/util";
import { div } from 'framer-motion/client';
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn
                ("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)
            }
        >

            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        <div className="flex flex-col text-md">
                            <HoveredLink href="/courses">All courses</HoveredLink>
                            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        </div>
                    </MenuItem>


                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                    <div className="flex flex-col space-y-4 text-md">
                        <HoveredLink href="/courses">All courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Songwriting</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem
                        setActive={setActive}
                        active={null}
                        item="Contact us"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar