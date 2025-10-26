import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Temporary static content - you'll make this dynamic
const posts = {
  "1031-exchange-basics": {
    title: "Understanding 1031 Exchange Basics",
    date: "2024-01-15",
    content: `
      <article class="prose max-w-none">
  <header class="not-prose mb-8 border-b pb-6">
    <h1 class="text-3xl md:text-4xl font-semibold leading-tight">Understanding 1031 Exchange Basics</h1>
    <p class="mt-2 text-sm text-neutral-600">Last updated: <time datetime="2025-10-26">October 26, 2025</time></p>
    <p class="mt-3 text-neutral-700">Defer capital gains taxes, preserve equity, and keep your money working—here’s how 1031 exchanges really work, step by step.</p>
  </header>

  <!-- Summary / Key Numbers -->
  <section aria-labelledby="key-numbers" class="not-prose mb-10">
    <div class="grid gap-4 sm:grid-cols-3">
      <div class="rounded-2xl border p-4 bg-white/50">
        <h3 id="key-numbers" class="text-sm font-medium tracking-wide uppercase text-neutral-500">Key Numbers</h3>
        <ul class="mt-3 text-sm leading-relaxed">
          <li><strong>45 days</strong> to identify replacement property</li>
          <li><strong>180 days</strong> to close (or tax filing due date, if earlier)</li>
          <li><strong>Like-kind</strong> means business/investment real estate for other business/investment real estate</li>
        </ul>
      </div>
      <div class="rounded-2xl border p-4 bg-white/50">
        <h3 class="text-sm font-medium tracking-wide uppercase text-neutral-500">Must Haves</h3>
        <ul class="mt-3 text-sm leading-relaxed">
          <li>Property held for <strong>investment or business</strong> use</li>
          <li>Use a <strong>Qualified Intermediary (QI)</strong></li>
          <li>No actual/constructive <strong>receipt of proceeds</strong></li>
        </ul>
      </div>
      <div class="rounded-2xl border p-4 bg-white/50">
        <h3 class="text-sm font-medium tracking-wide uppercase text-neutral-500">Common Pitfalls</h3>
        <ul class="mt-3 text-sm leading-relaxed">
          <li>Missing 45/180-day deadlines</li>
          <li>Improper title/vesting changes</li>
          <li>Under-replacing debt or equity (&ldquo;boot&rdquo;)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Table of Contents -->
  <nav aria-label="Table of contents" class="not-prose mb-8 rounded-2xl border bg-white/50 p-4">
    <h2 class="text-base font-semibold">In this guide</h2>
    <ol class="mt-3 list-decimal list-inside space-y-1 text-sm">
      <li><a href="#what-is-1031">What is a 1031 Exchange?</a></li>
      <li><a href="#who-qualifies">Who qualifies &amp; what is “like-kind”?</a></li>
      <li><a href="#how-it-works">How it works: step-by-step</a></li>
      <li><a href="#identification-rules">The 45-day identification rules</a></li>
      <li><a href="#replace-equity-debt">Replacing equity &amp; debt (avoid boot)</a></li>
      <li><a href="#exchange-types">Types of exchanges</a></li>
      <li><a href="#ownership-title">Ownership &amp; title considerations</a></li>
      <li><a href="#examples">Quick examples</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#disclaimer">Important disclaimer</a></li>
    </ol>
  </nav>

  <section id="what-is-1031" aria-labelledby="what-is-1031-heading" class="mb-10">
    <h2 id="what-is-1031-heading">What is a 1031 Exchange?</h2>
    <p>A 1031 exchange (Internal Revenue Code §1031) lets you sell one <em>business or investment</em> real estate property and buy another, <strong>deferring capital gains taxes</strong> that would otherwise be due at sale. Deferral can help you keep more equity in play, consolidate or diversify your portfolio, and reposition into higher-quality or better-located assets.</p>
  </section>

  <section id="who-qualifies" aria-labelledby="who-qualifies-heading" class="mb-10">
    <h2 id="who-qualifies-heading">Who qualifies &amp; what is “like-kind”?</h2>
    <ul class="mt-3 list-disc pl-6">
      <li><strong>Use:</strong> Both the relinquished (sold) and replacement (acquired) properties must be held for <strong>investment or business</strong> purposes—not primarily for personal use.</li>
      <li><strong>Like-kind:</strong> For real estate, “like-kind” is broad: you can exchange raw land for an apartment building, an industrial condo for a retail center, etc., so long as they’re held for business/investment.</li>
      <li><strong>Timing:</strong> Identification within <strong>45 days</strong> of sale; acquisition within <strong>180 days</strong> of sale (or your tax return due date, if earlier).</li>
      <li><strong>QI required:</strong> A qualified intermediary (QI) must hold proceeds so you don’t have actual or constructive receipt.</li>
    </ul>
  </section>

  <section id="how-it-works" aria-labelledby="how-it-works-heading" class="mb-10">
    <h2 id="how-it-works-heading">How it works: step-by-step</h2>
    <ol class="mt-3 list-decimal pl-6">
      <li><strong>Plan the exchange:</strong> Talk with your tax advisor and select a QI <em>before</em> opening escrow on your sale.</li>
      <li><strong>Sell the relinquished property:</strong> At closing, proceeds go to your QI—never to you.</li>
      <li><strong>Identify replacements (by Day 45):</strong> Provide a written, unambiguous list to your QI.</li>
      <li><strong>Perform diligence &amp; secure financing:</strong> Work toward a timely close.</li>
      <li><strong>Acquire replacement (by Day 180):</strong> QI wires funds to the replacement closing; title transfers to you or your entity.</li>
      <li><strong>Report the exchange:</strong> File IRS Form 8824 with your tax return.</li>
    </ol>

    <aside class="mt-6 not-prose rounded-xl border bg-amber-50 p-4">
      <p class="text-sm"><strong>Timeline tip:</strong> Day 1 is the day after you close the sale. The 45- and 180-day clocks are calendar days and generally cannot be extended.</p>
    </aside>
  </section>

  <section id="identification-rules" aria-labelledby="identification-rules-heading" class="mb-10">
    <h2 id="identification-rules-heading">The 45-day identification rules</h2>
    <p>You must identify in writing (to your QI) using one of these safe harbors:</p>
    <ul class="mt-3 list-disc pl-6">
      <li><strong>3-Property Rule:</strong> Identify up to 3 properties, regardless of value; buy any one or more of them.</li>
      <li><strong>200% Rule:</strong> Identify any number of properties as long as their total fair market value doesn’t exceed <strong>200%</strong> of what you sold.</li>
      <li><strong>95% Exception:</strong> Identify any number/amounts, but you must acquire at least <strong>95%</strong> of the total value identified.</li>
    </ul>
  </section>

  <section id="replace-equity-debt" aria-labelledby="replace-equity-debt-heading" class="mb-10">
    <h2 id="replace-equity-debt-heading">Replacing equity &amp; debt (avoid boot)</h2>
    <p>To fully defer taxes, aim to:</p>
    <ul class="mt-3 list-disc pl-6">
      <li>Purchase property of <strong>equal or greater value</strong> than what you sold,</li>
      <li>Reinvest <strong>all net equity</strong> (your sale proceeds), and</li>
      <li>Replace <strong>equal or greater debt</strong> (or add cash in lieu of debt).</li>
    </ul>
    <p>Any cash taken out or debt not replaced is called <strong>boot</strong> and is generally taxable to the extent of gain.</p>
  </section>

  <section id="exchange-types" aria-labelledby="exchange-types-heading" class="mb-10">
    <h2 id="exchange-types-heading">Types of exchanges</h2>
    <dl class="mt-3 grid gap-5 sm:grid-cols-2">
      <div class="rounded-2xl border p-4">
        <dt class="font-semibold">Forward Exchange</dt>
        <dd class="mt-1 text-sm text-neutral-700">Sell first, buy second. Most common and simplest.</dd>
      </div>
      <div class="rounded-2xl border p-4">
        <dt class="font-semibold">Reverse Exchange</dt>
        <dd class="mt-1 text-sm text-neutral-700">Buy the replacement first using an exchange accommodation titleholder (EAT); more complex but powerful in tight markets.</dd>
      </div>
      <div class="rounded-2xl border p-4">
        <dt class="font-semibold">Improvement/Construction Exchange</dt>
        <dd class="mt-1 text-sm text-neutral-700">Use exchange funds to improve the replacement before you take title (subject to timing and safe harbor rules).</dd>
      </div>
      <div class="rounded-2xl border p-4">
        <dt class="font-semibold">Consolidation/Diversification</dt>
        <dd class="mt-1 text-sm text-neutral-700">Trade many into one, or one into several, to reshape your portfolio or markets.</dd>
      </div>
    </dl>
  </section>

  <section id="ownership-title" aria-labelledby="ownership-title-heading" class="mb-10">
    <h2 id="ownership-title-heading">Ownership &amp; title considerations</h2>
    <ul class="mt-3 list-disc pl-6">
      <li><strong>Same taxpayer rule:</strong> The entity that sells should be the entity that buys (with some narrow exceptions).</li>
      <li><strong>Holding period:</strong> Properties must be held for investment/business; short flips or personal use don’t qualify.</li>
      <li><strong>Partnership/LLC interests:</strong> Partnership interests themselves aren’t like-kind, but underlying real estate can be—planning is required for “drop &amp; swap” scenarios.</li>
      <li><strong>Mixed use &amp; primary residences:</strong> Personal-use portions don’t qualify; special rules may apply when §121 (home sale exclusion) and §1031 interact.</li>
    </ul>
  </section>

  <section id="examples" aria-labelledby="examples-heading" class="mb-10">
    <h2 id="examples-heading">Quick examples</h2>
    <div class="mt-3 grid gap-5 md:grid-cols-2">
      <div class="rounded-2xl border p-4">
        <h3 class="font-semibold">Full deferral</h3>
        <p class="text-sm text-neutral-700">Sell for $2,000,000 with $800,000 debt and $1,200,000 equity. Buy for $2,200,000 with $900,000 debt and $1,300,000 equity. You replaced value, equity, and debt—no boot.</p>
      </div>
      <div class="rounded-2xl border p-4">
        <h3 class="font-semibold">Partial boot</h3>
        <p class="text-sm text-neutral-700">Same sale, but you buy for $1,900,000 and take $100,000 cash out at closing. The $100,000 is boot and generally taxable to the extent of gain.</p>
      </div>
    </div>
  </section>

  <section id="faq" aria-labelledby="faq-heading" class="mb-12">
    <h2 id="faq-heading">FAQ</h2>
    <details class="group rounded-xl border p-4 mb-3">
      <summary class="font-medium cursor-pointer">Do vacation homes qualify?</summary>
      <div class="mt-2 text-sm text-neutral-700">Personal-use vacation homes typically don’t qualify. Limited exceptions exist if the property has bona fide rental/investment use and personal use stays within IRS guidance.</div>
    </details>
    <details class="group rounded-xl border p-4 mb-3">
      <summary class="font-medium cursor-pointer">Can I trade into multiple properties?</summary>
      <div class="mt-2 text-sm text-neutral-700">Yes—use the 3-Property Rule, 200% Rule, or 95% Exception, and close within 180 days.</div>
    </details>
    <details class="group rounded-xl border p-4 mb-3">
      <summary class="font-medium cursor-pointer">What happens if I miss Day 45 or Day 180?</summary>
      <div class="mt-2 text-sm text-neutral-700">The exchange generally fails and the gain becomes taxable. Plan ahead and line up financing early.</div>
    </details>
    <details class="group rounded-xl border p-4 mb-3">
      <summary class="font-medium cursor-pointer">Do I have to replace my mortgage with a mortgage?</summary>
      <div class="mt-2 text-sm text-neutral-700">You must replace the <em>value</em> of debt; adding new cash can substitute for debt shortfalls.</div>
    </details>
    <details class="group rounded-xl border p-4">
      <summary class="font-medium cursor-pointer">Can I take cash out and still defer?</summary>
      <div class="mt-2 text-sm text-neutral-700">Cash you take out is typically taxable boot. Many investors refinance <em>after</em> the exchange season, but this requires careful planning with your tax advisor and lender.</div>
    </details>
  </section>

  <section class="not-prose mb-12 rounded-2xl border bg-white/50 p-6">
    <h2 class="text-lg font-semibold">Considering a 1031?</h2>
    <p class="mt-2 text-sm text-neutral-700">We partner with leading Qualified Intermediaries and can help you evaluate exchange fit, prep your identification strategy, and connect you with financing and deal flow.</p>
    <div class="mt-4 flex flex-wrap gap-3">
      <a href="/office-hours" class="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-neutral-50">Book office hours</a>
      <a href="/contact" class="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">Talk to us</a>
    </div>
  </section>

  <section id="disclaimer" aria-labelledby="disclaimer-heading" class="text-xs text-neutral-600">
    <h2 id="disclaimer-heading" class="text-sm font-semibold text-neutral-700">Important disclaimer</h2>
    <p>This article is for educational purposes only and is not tax, legal, or investment advice. 1031 treatment depends on your facts and circumstances. Consult your CPA/attorney before acting.</p>
  </section>
</article>

<!-- Optional: FAQ structured data for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do vacation homes qualify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Personal-use vacation homes typically don’t qualify. Limited exceptions exist if the property has bona fide rental/investment use and personal use stays within IRS guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I trade into multiple properties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—use the 3-Property Rule, 200% Rule, or 95% Exception, and close within 180 days."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I miss Day 45 or Day 180?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exchange generally fails and the gain becomes taxable. Plan ahead and line up financing early."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to replace my mortgage with a mortgage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must replace the value of debt; adding new cash can substitute for debt shortfalls."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take cash out and still defer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cash you take out is typically taxable boot. Many investors refinance after the exchange season, but this requires careful planning with your tax advisor and lender."
      }
    }
  ]
}
</script>
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
