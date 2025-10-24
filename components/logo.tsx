interface LogoProps {
  variant?: "dark" | "light"
  className?: string
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-black" : "text-white"

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-14">
        {/* Using the exact shapes from the PNG */}
        <svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Light blue triangle */}
          <path d="M61,40 L41,40 L81,120 L101,120 Z" fill="#67c4ff" />

          {/* Dark blue parallelogram */}
          <path d="M10,40 L40,40 L30,80 L0,80 Z" fill="#4169e1" />
        </svg>
      </div>
      <div className={`font-bold text-lg ${textColor}`}>
        MAXIMIZE <span className="italic">1031</span>
      </div>
    </div>
  )
}
