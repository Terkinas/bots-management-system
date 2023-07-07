"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname()
    const params = useParams()

    const routes = [
        {
            href: "/buy-tiktok-likes",
            label: "Buy TikTok Likes",
            active: pathname === "/buy-tiktok-likes",
        },
        {
            href: "/buy-tiktok-followers",
            label: "Buy TikTok Followers",
            active: pathname === "/buy-tiktok-followers",
        },
        {
            href: "/buy-tiktok-views",
            label: "Buy TikTok Views",
            active: pathname === "/buy-tiktok-views",
        },
        {
            href: "/faq",
            label: "FAQ",
            active: pathname === "/faq",
        },
        {
            href: "/contact-us",
            label: "Contact Us",
            active: pathname === "/contact",
        }
    ]

    return (
        <nav
          className={cn("flex items-center  [&>*:nth-child(n+2):nth-last-child(n+1)]:border-l", className)}
          {...props}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary px-4 py-0.5 lg:px-6 border-slate-300',
                route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
              )}
            >
              {route.label}
          </Link>
          ))}
        </nav>
    )
}