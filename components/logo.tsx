import { BUSINESS_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "light" | "dark"
  className?: string
  compact?: boolean
}

const getNameParts = () => {
  const parts = BUSINESS_NAME.split(" ").filter(Boolean)

  if (parts.length <= 1) {
    return { top: "", main: BUSINESS_NAME }
  }

  const [first, ...rest] = parts
  return { top: first.toUpperCase(), main: rest.join(" ") }
}

export function Logo({ variant = "dark", className, compact = false }: LogoProps) {
  const { top, main } = getNameParts()
  const isLight = variant === "light"

  return (
    <div className={cn("flex items-center", compact ? "gap-2" : "gap-3", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full border shadow-sm",
          compact ? "h-8 w-8" : "h-10 w-10 md:h-11 md:w-11",
          isLight
            ? "bg-white/15 text-white border-white/30"
            : "bg-secondary/25 text-primary border-primary/20"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className={cn(compact ? "h-4 w-4" : "h-5 w-5")}
        >
          <path
            d="M12 3c4.6.7 8.3 3.7 10 8l-10 11L2 11c1.7-4.3 5.4-7.3 10-8Z"
            fill="currentColor"
          />
          <circle cx="9" cy="12" r="1.2" fill="currentColor" />
          <circle cx="14.5" cy="13.5" r="1" fill="currentColor" />
          <circle cx="12.5" cy="9.5" r="0.9" fill="currentColor" />
        </svg>
      </div>
      <div className={cn("flex flex-col leading-none", compact ? "gap-0.5" : "gap-1")}>
        {top ? (
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.22em]",
              isLight ? "text-white/80" : "text-muted-foreground"
            )}
          >
            {top}
          </span>
        ) : null}
        <span
          className={cn(
            compact ? "text-lg" : "text-3xl md:text-4xl",
            "font-black tracking-tight",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          {main}
        </span>
      </div>
    </div>
  )
}
