'use client';

import Link from "next/link";

export default function Logo() {
    return (
        <>
        <Link href={'/'}><i className="bi bi-house text-dark"></i></Link>
        </>
    )
}