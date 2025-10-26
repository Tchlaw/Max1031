import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const posts = {
  "1031-exchange-basics": {
    title: "Understanding 1031 Exchange Basics",
    date: "2025-10-26",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222;">
        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">What is a 1031 Exchange?</h2>
        <p>A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows you to sell one <strong>investment or business property</strong> and buy another of like-kind—while <strong>deferring capital gains taxes</strong> that would normally be due at sale.</p>
        <p>This helps investors preserve equity, reposition into better properties, and compound growth without immediate tax erosion.</p>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Key Requirements</h2>
        <ul style="margin-left: 1.5rem;">
          <li>The property must be held for investment or business purposes.</li>
          <li>You must identify replacement property within <strong>45 days</strong> of closing on your sale.</li>
          <li>The exchange must be completed within <strong>180 days</strong> (or by your tax filing due date, if earlier).</li>
          <li>You must use a <strong>Qualified Intermediary (QI)</strong>—you cannot touch sale proceeds directly.</li>
        </ul>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">How the 1031 Exchange Process Works</h2>
        <ol style="margin-left: 1.5rem;">
          <li><strong>Plan early:</strong> Engage your QI and CPA before opening escrow.</li>
          <li><strong>Sell your property:</strong> Proceeds go directly to your QI.</li>
          <li><strong>Identify replacement properties:</strong> Within 45 days, submit written identification to your QI.</li>
          <li><strong>Perform due diligence:</strong> Inspect, negotiate, and secure financing.</li>
          <li><strong>Acquire replacement property:</strong> Within 180 days, QI wires funds to complete your purchase.</li>
          <li><strong>Report the exchange:</strong> File IRS Form 8824 with your tax return.</li>
        </ol>

        <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555; margin: 1.5rem 0;">
          <strong>Timeline tip:</strong> Day 1 starts the day after closing. The 45- and 180-day deadlines are strict and rarely extendable.
        </blockquote>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">The 45-Day Identification Rules</h2>
        <ul style="margin-left: 1.5rem;">
          <li><strong>3-Property Rule:</strong> Identify up to three properties of any value.</li>
          <li><strong>200% Rule:</strong> Identify any number of properties, as long as their combined fair market value doesn’t exceed 200% of the sold property’s value.</li>
          <li><strong>95% Rule:</strong> Identify any number of properties, but you must close on at least 95% of their total value.</li>
        </ul>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Avoiding Boot: Replacing Equity and Debt</h2>
        <p>To fully defer taxes, you must:</p>
        <ul style="margin-left: 1.5rem;">
          <li>Buy property of <strong>equal or greater value</strong>.</li>
          <li>Reinvest <strong>all net equity</strong> (sale proceeds).</li>
          <li>Replace <strong>equal or greater debt</strong>—or add cash to make up any shortfall.</li>
        </ul>
        <p>Any cash or debt not reinvested is considered <strong>boot</strong> and is generally taxable.</p>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Types of 1031 Exchanges</h2>
        <ul style="margin-left: 1.5rem;">
          <li><strong>Forward Exchange:</strong> Sell first, buy second (most common).</li>
          <li><strong>Reverse Exchange:</strong> Buy first, sell later using an Exchange Accommodation Titleholder (EAT).</li>
          <li><strong>Improvement Exchange:</strong> Use exchange funds to improve the replacement property before closing.</li>
          <li><strong>Portfolio Exchange:</strong> Consolidate or diversify multiple properties to rebalance your portfolio.</li>
        </ul>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Examples</h2>
        <h3 style="margin-top: 1rem;">Full Deferral</h3>
        <p>Sell for $2,000,000 (with $800,000 debt and $1,200,000 equity). Buy for $2,200,000 with $900,000 debt and $1,300,000 equity. You replaced value, equity, and debt—no boot, full deferral.</p>

        <h3>Partial Boot</h3>
        <p>Sell for $2,000,000, buy for $1,900,000, and take $100,000 cash out. That $100,000 is boot and typically taxable.</p>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">FAQ</h2>
        <h3>Do vacation homes qualify?</h3>
        <p>Not usually. They can qualify only if used primarily for rental/investment and personal use is limited.</p>
        <h3>Can I trade into multiple properties?</h3>
        <p>Yes—use one of the three identification rules to manage multiple replacements.</p>
        <h3>What happens if I miss a deadline?</h3>
        <p>The exchange fails, and taxes are due. Extensions are rare, so plan early.</p>
        <h3>Can I take cash out?</h3>
        <p>Cash taken out (“boot”) is typically taxable. Some investors refinance after completing the exchange, but timing is critical.</p>

        <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

        <h2 style="font-size: 1.25rem;">Considering a 1031 Exchange?</h2>
        <p>We partner with experienced Qualified Intermediaries and help investors evaluate whether a 1031 fits their goals. <a href="/contact" style="color: #0056b3; text-decoration: underline;">Contact us</a> to discuss your next move.</p>

        <p style="font-size: 0.9rem; color: #666;"><em>Disclaimer:</em> This content is for educational purposes only and not tax or legal advice. Consult your CPA or attorney for personalized guidance.</p>
      </div>
    `
  },

  "choosing-replacement-property": {
    title: "How to Choose the Right Replacement Property",
    date: "2024-01-20",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222;">
        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Location Considerations</h2>
        <p>When selecting a replacement property, location is critical. Evaluate local economic trends, job growth, rental demand, and infrastructure investments.</p>

        <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Property Type and Value</h2>
        <p>Align your replacement with your investment strategy. Consider whether you want to maintain the same asset type or diversify (for example, exchanging retail for industrial).</p>

        <p>Always verify cap rates, condition, and tenant stability to ensure the exchange strengthens—not weakens—your portfolio.</p>
      </div>
    `
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container mx-auto py-12 px-4 max-w-4xl">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
