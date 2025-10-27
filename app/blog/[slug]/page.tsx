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
},

"selling-fire-damaged-lot-after-buying-new-home": {
  title: "What Happens If You Buy a New Home Before Selling Your Fire-Damaged Lot?",
  date: "2025-10-26",
  content: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222;">
      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">A Common Scenario After Wildfire Loss</h2>
      <p>
        After a wildfire, many homeowners move quickly to secure housing for their family — sometimes purchasing a new home right away, 
        before insurance funds or sale proceeds from the damaged property arrive.  
        Later, when the original lot is sold, they wonder: <em>“Can I still defer or exclude capital gains taxes?”</em>
      </p>

      <p>
        The answer depends on <strong>how the properties were used</strong>, the <strong>timing of your purchase and sale</strong>, 
        and which parts of the tax code apply — usually <strong>Section 1033 (Involuntary Conversion)</strong> 
        and <strong>Section 121 (Primary Residence Exclusion)</strong>.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">The Core Issue: Sequence and Intent</h2>
      <p>
        When you buy your new home first, then sell the fire-damaged lot later, 
        the IRS looks at whether the two transactions are part of a single “involuntary conversion” event — 
        that is, whether the sale of your damaged property and the purchase of your new one are connected by the fire loss itself.
      </p>
      <p>
        The key question: Did you buy the new home <strong>as a replacement</strong> for your destroyed residence?
      </p>

      <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555; margin: 1.5rem 0;">
        <strong>Intent matters:</strong> If you clearly intended to replace your destroyed home and acted within the permitted timeframe, 
        you may still qualify for tax deferral under <strong>§1033</strong> — even if you purchased the new home first.
      </blockquote>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 1 – Section 1033 (Involuntary Conversion for Primary Residence)</h2>
      <p>
        Under Section 1033, if your property was destroyed by fire or other casualty and you receive insurance or sale proceeds, 
        you can defer gain by <strong>reinvesting in replacement property similar or related in service or use</strong> 
        — typically another home for personal use.
      </p>

      <ul style="margin-left: 1.5rem;">
        <li><strong>Timing:</strong> You usually have <strong>2 years</strong> from the end of the tax year when you realized the gain 
        (extended to <strong>4 years</strong> in federally declared disaster areas).</li>
        <li><strong>Order of events:</strong> You may buy the new home <em>before</em> selling the old lot, as long as it’s clear the purchase 
        was intended to replace the destroyed residence.</li>
        <li><strong>Proof of intent:</strong> Keep records — insurance claims, contractor quotes, communications — 
        showing that your new home was acquired as part of your recovery process.</li>
      </ul>

      <p>
        If you sell your damaged lot within the allowed §1033 window and reinvest the insurance and sale proceeds 
        into the cost of your new residence (or to pay down its loan), you can generally <strong>defer recognition of gain</strong>.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 2 – Section 121 (Home Sale Exclusion)</h2>
      <p>
        If the fire-damaged property was your primary home and you meet the 
        <strong>two-out-of-five-year use test</strong>, you may exclude up to <strong>$250,000</strong> 
        of gain (or <strong>$500,000</strong> if married filing jointly).  
        This exclusion often applies to the <em>home itself</em> and may also apply to proceeds from the destroyed structure.
      </p>

      <p>
        However, if you’ve already purchased and moved into a new home before selling the damaged lot, 
        the IRS still allows the §121 exclusion on the destroyed home — provided you <strong>owned and used</strong> it 
        as your principal residence for two of the last five years before the casualty.
      </p>

      <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555; margin: 1.5rem 0;">
        <strong>Example:</strong> You owned and lived in your home for 10 years.  
        A fire in 2024 destroys it, and you move out.  
        In early 2025, you buy a new home and later sell the damaged lot for $600,000.  
        You can generally claim the §121 exclusion on the gain from your destroyed home — even though you already bought the new one.
      </blockquote>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Option 3 – Combining §121 and §1033</h2>
      <p>
        In many cases, homeowners can use both provisions together:
      </p>
      <ul style="margin-left: 1.5rem;">
        <li>First apply the <strong>§121 exclusion</strong> to exclude up to $250K/$500K of gain.</li>
        <li>Then use <strong>§1033</strong> to defer the remaining gain by reinvesting in your replacement home.</li>
      </ul>

      <p>
        This combination can eliminate tax entirely if the reinvestment matches or exceeds your total insurance and sale proceeds.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Timing Matters</h2>
      <p>
        The clock starts when you <strong>receive insurance proceeds or close the sale</strong> of the damaged property.  
        You generally have until two (or four) years after the end of that tax year to complete your replacement purchase.
      </p>
      <p>
        If you bought your new home shortly after the fire and later sell your old lot, you can usually elect §1033 treatment 
        as long as the transactions occur within the permitted window and the proceeds ultimately go toward your replacement residence.
      </p>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">Documentation Tips</h2>
      <ul style="margin-left: 1.5rem;">
        <li>Keep escrow statements, insurance settlement details, and closing docs for both properties.</li>
        <li>Document that your new home replaced the one destroyed — same family use, similar size or purpose.</li>
        <li>Note disaster declaration status if applicable — it can extend deadlines to 4 years.</li>
        <li>Consult your CPA before filing to elect §1033 deferral properly.</li>
      </ul>

      <h2 style="color: #111; font-size: 1.75rem; margin-top: 1.5rem;">What If You Keep the Old Lot for a While?</h2>
      <p>
        If you hold onto the burned lot for several years before selling, it can lose its “replacement intent” connection to the disaster.  
        In that case, the IRS may treat the later sale as a <strong>separate investment transaction</strong> — not part of the §1033 deferral — 
        and you may instead explore a <strong>§1031 exchange</strong> if you intend to reinvest the proceeds in other real estate.
      </p>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

      <h2 style="font-size: 1.25rem;">Summary</h2>
      <ul style="margin-left: 1.5rem;">
        <li>Buying a new home before selling your damaged lot <strong>does not automatically disqualify</strong> you from deferral.</li>
        <li>Section <strong>1033</strong> deferral is still possible if your new home is clearly a replacement for the destroyed residence.</li>
        <li>Section <strong>121</strong> exclusion may cover a portion of your gain, regardless of timing.</li>
        <li>Proper documentation and timing are critical — intent must be clear.</li>
      </ul>

      <hr style="margin: 2rem 0; border: none; border-top: 1px solid #ccc;" />

      <h2 style="font-size: 1.25rem;">We Can Help You Navigate the Sequence</h2>
      <p>
        At Maximize 1031, we help homeowners and investors structure exchanges and reinvestments after disasters.  
        If you’ve already bought a new home and are preparing to sell your damaged lot, we can help you evaluate how §1031, §1033, and §121 interact — 
        and work with your CPA to protect your gain from unnecessary taxation.
      </p>

      <p>
        <a href="/contact" style="color: #0056b3; text-decoration: underline;">Contact us</a> to discuss your specific case to plan your deferral timeline.
      </p>

      <p style="font-size: 0.9rem; color: #666;"><em>Disclaimer:</em> This article is for informational purposes only and does not constitute tax, legal, or investment advice.  
      Always consult your CPA or attorney before making financial decisions related to disaster recovery or property reinvestment.</p>
    </div>
    },

"reverse-1031-exchange-guide-california": {
  title: "Reverse 1031 Exchange Guide for California Investors: Buy First, Sell Later",
  date: "2025-07-09",
  content: `
    <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #222;">
      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">Introduction — Why Go “Reverse”?</h2>
      <p>
        Los Angeles inventory is tight, cap rates compress overnight, and the perfect NNN deal rarely waits around while you liquidate your current asset.
        A <strong>reverse 1031 exchange</strong> solves that timing dilemma: you can <strong>park</strong> (temporarily hold) the new property,
        close on it today, and dispose of your relinquished property up to 180 days later — all while deferring capital gains tax.
      </p>
      <p>
        This step-by-step California-centric playbook is written for investors with <strong>$500,000+</strong> in taxable gains and for advisors who guide them.
      </p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">1. Reverse Exchange Basics</h2>
      <h3 style="font-size:1.25rem; margin-top:1rem;">1.1 What Is a Reverse 1031?</h3>
      <p>
        A reverse exchange flips the usual order of events. Under <strong>IRS Revenue Procedure 2000-37</strong>,
        a third-party <strong>Exchange Accommodation Titleholder (EAT)</strong> purchases and “parks” either
        (a) the replacement property you’re buying or (b) the property you plan to sell.
        The EAT holds legal title so you’re never on title to both at the same time — satisfying §1031’s like-kind rules.
      </p>
      <p><a href="https://www.irs.gov/pub/irs-drop/rp-00-37.pdf" target="_blank" style="color:#0056b3;">IRS Rev. Proc. 2000-37 (PDF)</a></p>

      <h3 style="font-size:1.25rem; margin-top:1rem;">1.2 Key Players</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:0.5rem;">
        <thead style="background:#f8f8f8;">
          <tr><th align="left">Role</th><th align="left">What They Do</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Exchanger (You)</strong></td><td>Ultimately owns the replacement property and must meet 45/180-day deadlines.</td></tr>
          <tr><td><strong>Qualified Intermediary (QI)</strong></td><td>Structures paperwork, escrows funds, coordinates with EAT.</td></tr>
          <tr><td><strong>Exchange Accommodation Titleholder (EAT)</strong></td><td>Special-purpose LLC that parks title for up to 180 days.</td></tr>
          <tr><td><strong>Bridge / Private Lender</strong></td><td>Finances the purchase while title is parked.</td></tr>
        </tbody>
      </table>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">2. Reverse Exchange Timeline</h2>
      <p>
        The IRS safe harbor allows a <strong>maximum 180-day parking window</strong>. Missing a deadline means your exchange fails.
      </p>
      <pre style="background:#f8f8f8; padding:1rem; border-radius:4px;">
Day 0     | EAT acquires (parks) replacement property
Day 45    | You identify the relinquished property you will sell
Day 180   | You close the sale of the relinquished property
      </pre>
      <p>Use a 45/180-day deadline calculator to mark actual dates and build 20–30 days of cushion into your listing schedule — buyer delays are the #1 reason reverse exchanges collapse.</p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">3. Financing the Parked Property</h2>
      <p>
        Traditional banks often hesitate to lend when an EAT holds title. Common options include:
      </p>
      <ul style="margin-left:1.5rem;">
        <li><strong>Bridge (hard-money) loan</strong> secured by the parked asset. Rates are 2–3% above bank debt but can close in days.</li>
        <li><strong>Seller carryback</strong> from the replacement-property seller — helpful when they need a fast close.</li>
        <li><strong>Cash purchase + refinance</strong> once you take title.</li>
      </ul>
      <p>Always have your attorney review loan documents — some contain covenants that conflict with EAT ownership.</p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">4. California-Specific Considerations</h2>
      <h3 style="font-size:1.25rem; margin-top:1rem;">4.1 Documentary Transfer Tax (DTT)</h3>
      <p>
        Because title transfers twice (seller → EAT, then EAT → you), some counties assess DTT on both. Budget for this or negotiate a cost split.
      </p>

      <h3 style="font-size:1.25rem; margin-top:1rem;">4.2 Claw-Back of Deferred Gain</h3>
      <p>
        If you later move the replacement property <strong>out of California</strong>, the Franchise Tax Board may recapture deferred gain.
        File <strong>FTB Form 3840</strong> annually to track California-source gain even if the exchange is fully deferred federally.
      </p>

      <h3 style="font-size:1.25rem; margin-top:1rem;">4.3 Community-Property Nuances</h3>
      <p>
        Married investors holding title as community property must ensure both spouses sign the exchange assignment to prevent a vesting mismatch later.
      </p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">5. Cost Breakdown (Example $3 M Purchase / $3 M Sale)</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <thead style="background:#f8f8f8;"><tr><th align="left">Fee Category</th><th align="left">Typical Range</th></tr></thead>
        <tbody>
          <tr><td>EAT / Parking LLC setup</td><td>$3,500–$6,000</td></tr>
          <tr><td>QI reverse-exchange fee</td><td>$3,000–$5,000</td></tr>
          <tr><td>Bridge-loan interest (3 mo @ 11%)</td><td>≈ $82,500 per $3 M borrowed</td></tr>
          <tr><td>Extra escrow &amp; title</td><td>$2,000–$4,000</td></tr>
          <tr><td>Second DTT (if applicable)</td><td>Varies by county</td></tr>
        </tbody>
      </table>
      <p>Total soft costs typically equal <strong>1.5–2 % of purchase price</strong> (excluding finance interest).</p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">6. Case Study – Duplex to NNN Retail</h2>
      <p>
        <em>Investor profile:</em> LA landlord, 20-year hold, $4 M duplex, $1 M equity, $1 M gain. <br/>
        <em>Goal:</em> Secure a $3.8 M CVS in San Diego before duplex sale.
      </p>
      <ol style="margin-left:1.5rem;">
        <li><strong>Day 0 –</strong> EAT acquires CVS with $2.8 M bridge loan + $1 M cash.</li>
        <li><strong>Day 33 –</strong> Duplex listed for sale.</li>
        <li><strong>Day 45 –</strong> Duplex identified as relinquished property.</li>
        <li><strong>Day 120 –</strong> Duplex sale closes; proceeds pay off bridge loan.</li>
        <li><strong>Day 121 –</strong> EAT transfers CVS to investor — gain deferred ≈ $800 k federal + state.</li>
      </ol>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">7. Common Pitfalls &amp; Fixes</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <thead style="background:#f8f8f8;"><tr><th align="left">Pitfall</th><th align="left">Mitigation</th></tr></thead>
        <tbody>
          <tr><td>Missing 180-day deadline</td><td>Pre-list or pre-negotiate sale before parking.</td></tr>
          <tr><td>Debt-equity mismatch</td><td>Replacement debt ≤ relinquished debt; refinance after exchange closes.</td></tr>
          <tr><td>Contract not assigned to EAT</td><td>Add “and/or assigns” and formal assignment before closing.</td></tr>
          <tr><td>Lender rejects EAT structure</td><td>Vet lenders early; use bridge/private financing.</td></tr>
        </tbody>
      </table>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">8. FAQ</h2>
      <p><strong>Q:</strong> Can I park the relinquished property instead of the replacement?<br/>
      <strong>A:</strong> Yes. That’s an <em>exchange-last</em> structure — reduces financing issues but requires more cash.</p>

      <p><strong>Q:</strong> Does depreciation recapture still defer?<br/>
      <strong>A:</strong> Yes, it’s deferred (not eliminated) if replacement value ≥ relinquished basis.</p>

      <p><strong>Q:</strong> What if my buyer falls through at Day 170?<br/>
      <strong>A:</strong> You may substitute a backup buyer within 180 days; past that, gain is taxable.</p>

      <h2 style="color:#111; font-size:1.75rem; margin-top:1.5rem;">9. Next Steps</h2>
      <p>
        
      </p>

      <hr style="margin:2rem 0; border:none; border-top:1px solid #ccc;"/>

      <h2 style="font-size:1.25rem;">Compliance Disclaimer</h2>
      

      <p>
        <a href="/contact" style="color: #0056b3; text-decoration: underline;">Contact us</a> to discuss your specific case.
      </p>

      <p style="font-size: 0.9rem; color: #666;"><em>Disclaimer:</em> This article is for informational purposes only and does not constitute tax, legal, or investment advice.  
      Always consult your CPA or attorney before making financial decisions.</p>
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
