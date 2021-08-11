
import React, { useRef, useState } from 'react'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
const MenuGeneralItem = ({ href, theme, icon, tooltipText, children }) => {
    const router = useRouter()

    return (
        <>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{tooltipText}</Tooltip>}>
                <span className="d-inline-block">
                    <Link href={href}>
                        <a className={`fj-navbar-item fj-navbar-link ${router.asPath === href ? 'active' : ''}`} style={{ color: theme.fontColor, marginTop: 5 }}>{icon}</a>
                    </Link>
                </span>
            </OverlayTrigger>
        </>
    )
}

export default MenuGeneralItem
