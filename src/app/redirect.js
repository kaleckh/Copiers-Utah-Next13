"use client"
import { redirect, useParams, usePathname, useRouter } from 'next/navigation'
export function Redirect() {
    if (typeof window !== "undefined") {
        if (process.env.NODE_ENV === "production") {
            isHttp()
        }
        if (!(window.location.href.indexOf("www") > -1)) {

            window.location.href = window.location.href.replace("//", "//www.")
        }
    }
}

const isHttp = (url => {
    if (!window.location.href.indexOf("https") > -1) {
        window.location.href = window.location.href.replace("http", "https")
    }
})