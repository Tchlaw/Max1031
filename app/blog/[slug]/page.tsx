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
      
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

        <h2 style="font-size: 1.25rem;">Considering a 1031 Exchange?</h2>
        <p>We partner with experienced Qualified Intermediaries and help investors evaluate whether a 1031 fits their goals. <a href="/contact" style="color: #0056b3; text-decoration: underline;">Contact us</a> to discuss your next move.</p>

        <p style="font-size: 0.9rem; color: #666;"><em>Disclaimer:</em> This content is for educational purposes only and not tax or legal advice. Consult your CPA or attorney for personalized guidance.</p>

      
      </div>
    `
  },


"deferring-gains-fire-damaged-lot": {
  title: "How to Defer Capital Gains When Selling Your Fire-Damaged Lot",
  date: "2025-10-26",
  content: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222;">
      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Understanding Your Options After a Fire Loss</h2>
      <p>
        If your property was damaged or destroyed in a wildfire or other disaster, you may face a difficult decision once the insurance claim is settled — 
        whether to rebuild, sell, or move on. 
        The good news is that <strong>federal tax law provides ways to defer or eliminate capital gains taxes</strong> 
        when selling a fire-damaged property, under Sections <strong>1031</strong> and <strong>1033</strong> of the Internal Revenue Code.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Why a Fire Sale Can Still Create Tax Liability</h2>
      <p>
        Even when your property suffers a total loss, you may owe capital gains taxes if your <em>insurance proceeds or sale price</em> 
        exceed your adjusted basis (usually the original cost plus improvements).  
        For longtime California homeowners, this can mean hundreds of thousands of dollars in taxable gain — even after tragedy.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 1 – Section 1033: Involuntary Conversion (Disaster or Condemnation)</h2>
      <p>
        Section 1033 applies when property is destroyed by fire, theft, or other casualty and the owner receives insurance or other compensation.  
        It allows you to <strong>reinvest in replacement property and defer the gain</strong> if done within a specific time frame.
      </p>

      <ul style="margin-left: 1.5rem;">
        <li><strong>Who qualifies:</strong> Owners whose property was destroyed or condemned involuntarily.</li>
        <li><strong>Time limit:</strong> Typically <strong>2 years</strong> from the end of the tax year when the gain is realized (extended to <strong>4 years</strong> in federally declared disaster areas).</li>
        <li><strong>Replacement property:</strong> Must be “similar or related in service or use.”  
            For investment or rental property, this usually means other investment real estate.</li>
        <li><strong>How to elect:</strong> Report the transaction on your tax return and file an election under Section 1033.</li>
      </ul>

      <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555; margin: 1.5rem 0;">
        <strong>Example:</strong> You receive $700,000 of insurance proceeds for a duplex that originally cost $300,000.  
        If you reinvest the full $700,000 into another rental within two years, your $400,000 gain can be deferred under §1033.
      </blockquote>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 2 – Section 1031: Like-Kind Exchange for Investment Property</h2>
      <p>
        If you sell the damaged land after a fire — for example, selling a burned lot rather than rebuilding — 
        you can often use a <strong>1031 exchange</strong> to defer capital gains taxes, provided the property was held for investment.
      </p>

      <ul style="margin-left: 1.5rem;">
        <li><strong>Timing:</strong> You have <strong>45 days</strong> to identify and <strong>180 days</strong> to close on replacement property after sale.</li>
        <li><strong>Use a Qualified Intermediary (QI):</strong> You cannot receive the sale proceeds directly.</li>
        <li><strong>Replacement property:</strong> Must also be held for investment or business use (not personal use).</li>
        <li><strong>Combinations possible:</strong> In some cases, part of the gain may qualify under §1033 and part under §1031.</li>
      </ul>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Comparing §1031 and §1033</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-top: 1rem;">
        <thead style="background: #f8f8f8;">
          <tr>
            <th align="left">Feature</th>
            <th align="left">Section 1031 (Like-Kind)</th>
            <th align="left">Section 1033 (Involuntary Conversion)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applies to</td>
            <td>Voluntary sale of investment/business property</td>
            <td>Involuntary loss (fire, theft, condemnation)</td>
          </tr>
          <tr>
            <td>Deadline</td>
            <td>45-day ID / 180-day close</td>
            <td>2–4 years to reinvest</td>
          </tr>
          <tr>
            <td>Qualified Intermediary required?</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Replacement property type</td>
            <td>Like-kind investment property</td>
            <td>Similar or related in service or use</td>
          </tr>
          <tr>
            <td>Applies to personal use property?</td>
            <td>No</td>
            <td>Sometimes, if primary residence destroyed</td>
          </tr>
        </tbody>
      </table>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 3 – Primary Residence Exclusion (§121)</h2>
      <p>
        If your fire-damaged property was your <strong>primary home</strong>, 
        you may qualify for the §121 exclusion, which allows individuals to exclude up to <strong>$250,000</strong> 
        (or <strong>$500,000</strong> for married couples) of gain.  
        If you receive insurance proceeds exceeding that exclusion, the remaining gain can sometimes be deferred under §1033.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Coordinating These Rules Strategically</h2>
      <p>
        Homeowners and investors often qualify for more than one section.  
        For example, if you owned a multi-unit property where you lived in one unit and rented the rest, 
        you might combine §121 for the residence portion with §1031 or §1033 for the rental portion.
      </p>

      <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555; margin: 1.5rem 0;">
        <strong>Pro Tip:</strong> Keep detailed records of insurance payouts, repair costs, and sale documentation — 
        they determine your adjusted basis and the portion of gain eligible for deferral.
      </blockquote>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">California and Local Tax Considerations</h2>
      <p>
        In California, both §1031 and §1033 are generally recognized for state income tax purposes, 
        though rules differ on disaster declarations and timing.  
        City transfer taxes typically still apply, but affected owners can petition local councils for waivers in extreme loss zones.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Next Steps if You’re Considering a Sale</h2>
      <ol style="margin-left: 1.5rem;">
        <li>Confirm your insurance proceeds and adjusted basis.</li>
        <li>Consult a CPA or tax attorney about whether §1031, §1033, or both apply.</li>
        <li>Decide whether you’ll rebuild, reinvest, or exchange.</li>
        <li>Work with a Qualified Intermediary early — timing and structure matter.</li>
        <li>Document everything for IRS and insurance reporting.</li>
      </ol>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

      <h2 style="font-size: 1.25rem;">We Can Help You Plan the Right Deferral Strategy</h2>
      <p>
        At Maximize 1031, we specialize in helping property owners navigate tax-deferred reinvestment after a loss.  
        Whether you’re rebuilding, selling a burned lot, or planning a replacement purchase, 
        we’ll help you align with the right IRS provisions and connect you with trusted Qualified Intermediaries.
      </p>

      <p>
        <a href="/contact" style="color: #0056b3; text-decoration: underline;">Contact us</a> for a consultation to discuss your situation confidentially.
      </p>

      <p style="font-size: 0.9rem; color: #666;"><em>Disclaimer:</em> This article is for educational purposes only and does not constitute tax, legal, or investment advice.  
      Always consult your CPA or attorney regarding your specific circumstances.</p>
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
