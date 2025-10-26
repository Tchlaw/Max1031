import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Temporary static content - you'll make this dynamic
const posts = {
  "1031-exchange-basics": {
    title: "Understanding 1031 Exchange Basics",
    date: "2024-01-15",
    content: `
      <h2>What is a 1031 Exchange?</h2>
    <p>
      A 1031 exchange (named after Section 1031 of the Internal Revenue Code) allows you to sell one 
      <strong>investment or business property</strong> and buy another of like-kind, 
      while deferring capital gains taxes that would otherwise be due upon sale.
      This enables investors to keep more equity invested, consolidate or diversify holdings, 
      and grow wealth more efficiently over time.
    </p>

    <h2>Key Requirements</h2>
    <ul>
      <li>The property must be held for investment or business purposes.</li>
      <li>You must identify replacement property within <strong>45 days</strong> of selling your old property.</li>
      <li>The exchange must be completed within <strong>180 days</strong> (or by your tax return due date, whichever comes first).</li>
      <li>You must use a <strong>Qualified Intermediary (QI)</strong> to hold proceeds and manage the exchange.</li>
      <li>You cannot have actual or constructive receipt of sale proceeds.</li>
    </ul>

    <h2>Who Qualifies and What Counts as “Like-Kind”?</h2>
    <p>
      To qualify, both properties must be held for investment or business use. 
      The term <em>“like-kind”</em> refers to the nature or character of the property, 
      not its grade or quality — meaning nearly all real estate held for investment can be exchanged for other investment real estate.
      For example, an apartment building can be exchanged for raw land, or a retail property for an industrial one.
    </p>

    <h2>How a 1031 Exchange Works (Step by Step)</h2>
    <ol>
      <li><strong>Plan early:</strong> Consult your CPA, attorney, and QI before you sell.</li>
      <li><strong>Sell your property:</strong> Proceeds are sent directly to your QI, not to you.</li>
      <li><strong>Identify replacements:</strong> Within 45 days, you must submit a written identification list to your QI.</li>
      <li><strong>Perform due diligence:</strong> Inspect, negotiate, and secure financing for your replacement.</li>
      <li><strong>Close the replacement purchase:</strong> Within 180 days, your QI transfers funds to acquire the new property.</li>
      <li><strong>Report the exchange:</strong> File IRS Form 8824 with your tax return.</li>
    </ol>

    <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555;">
      <strong>Timeline Tip:</strong> Day 1 starts the day after you close the sale. 
      The 45-day and 180-day deadlines are strict and cannot be extended.
    </blockquote>

    <h2>The 45-Day Identification Rules</h2>
    <p>There are three main ways to identify replacement properties:</p>
    <ul>
      <li><strong>3-Property Rule:</strong> Identify up to three properties of any value.</li>
      <li><strong>200% Rule:</strong> Identify any number of properties as long as their total value doesn’t exceed 200% of the relinquished property’s sale price.</li>
      <li><strong>95% Rule:</strong> Identify any number of properties, but you must close on at least 95% of the total value identified.</li>
    </ul>

    <h2>Replacing Equity and Debt (“Boot” Rules)</h2>
    <p>
      To fully defer taxes, you must:
    </p>
    <ul>
      <li>Purchase property of <strong>equal or greater value</strong>.</li>
      <li>Reinvest <strong>all net equity</strong> (sale proceeds).</li>
      <li>Replace <strong>equal or greater debt</strong> (or add cash to make up the difference).</li>
    </ul>
    <p>
      Any cash taken out or debt not replaced is called <strong>boot</strong> and may be taxable to the extent of gain.
    </p>

    <h2>Types of 1031 Exchanges</h2>
    <ul>
      <li><strong>Forward Exchange:</strong> Sell first, buy second — the most common and straightforward structure.</li>
      <li><strong>Reverse Exchange:</strong> Buy first and sell later using an Exchange Accommodation Titleholder (EAT).</li>
      <li><strong>Improvement (Build-to-Suit) Exchange:</strong> Use exchange funds to improve the replacement before taking title.</li>
      <li><strong>Consolidation or Diversification:</strong> Trade one property for several, or several into one, to reshape your portfolio.</li>
    </ul>

    <h2>Ownership and Title Considerations</h2>
    <ul>
      <li><strong>Same taxpayer rule:</strong> The entity that sells must be the same entity that buys.</li>
      <li><strong>Holding period:</strong> Properties should generally be held for investment; quick flips or personal use properties don’t qualify.</li>
      <li><strong>Partnerships:</strong> Partnership interests themselves are not like-kind; careful planning is needed for “drop and swap” transactions.</li>
      <li><strong>Mixed-use properties:</strong> Personal-use portions don’t qualify, though partial exchanges may apply under certain conditions.</li>
    </ul>

    <h2>Example Scenarios</h2>
    <h3>Full Deferral Example</h3>
    <p>
      Sell for $2,000,000 with $800,000 debt and $1,200,000 equity. 
      Buy for $2,200,000 with $900,000 debt and $1,300,000 equity. 
      You replaced both equity and debt — no boot, full tax deferral.
    </p>

    <h3>Partial Boot Example</h3>
    <p>
      Sell for $2,000,000 and buy for $1,900,000, taking $100,000 in cash out. 
      The $100,000 is boot and may be taxable.
    </p>

    <h2>Frequently Asked Questions</h2>
    <h3>Do vacation homes qualify?</h3>
    <p>
      Usually not. However, if the property has been rented and used primarily for investment, and personal use is minimal, it may qualify under IRS guidance.
    </p>

    <h3>Can I trade into multiple properties?</h3>
    <p>
      Yes, under the 3-Property, 200%, or 95% rules — as long as all purchases close within the 180-day window.
    </p>

    <h3>What happens if I miss the 45- or 180-day deadline?</h3>
    <p>
      The exchange fails, and capital gains taxes are due. Extensions are not available except in federally declared disaster areas.
    </p>

    <h3>Do I have to replace my mortgage with another mortgage?</h3>
    <p>
      You must replace the value of the debt; additional cash investment can make up the difference.
    </p>

    <h3>Can I take cash out and still defer taxes?</h3>
    <p>
      Cash taken out (“boot”) is generally taxable. Some investors refinance after completing their exchange, but this should be done carefully under professional guidance.
    </p>

    <h2>Considering a 1031 Exchange?</h2>
    <p>
      We partner with leading Qualified Intermediaries and can help you evaluate whether a 1031 exchange fits your strategy, 
      prepare identification documents, and coordinate with your broker or lender.
    </p>
    <p>
      <a href="/office-hours">Book office hours</a> or 
      <a href="/contact">contact us</a> to discuss your potential exchange.
    </p>

    <hr />
    <h2>Disclaimer</h2>
    <p style="font-size: 0.9em; color: #555;">
      This article is for informational purposes only and does not constitute tax, legal, or investment advice.
      1031 exchange eligibility depends on your individual facts and circumstances. Always consult a qualified CPA or attorney.
    </p>
  },
  "choosing-replacement-property": {
    title: "How to Choose the Right Replacement Property",
    date: "2024-01-20",
    content: `
      <h2>Location Considerations</h2>
      <p>When selecting a replacement property, location is crucial. Consider factors like market growth potential, rental demand, and economic stability of the area.</p>
      
      <h2>Property Type and Value</h2>
      <p>Your replacement property should align with your investment goals. Consider whether you want to maintain the same property type or diversify into a different asset class.</p>
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
