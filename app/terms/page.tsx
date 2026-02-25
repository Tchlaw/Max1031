export const metadata = {
  title: "Terms of Use | Maximize 1031",
  description:
    "Terms of Use for Maximize 1031 governing access to and use of maximize1031.com.",
};

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "2.5rem 1.25rem",
    lineHeight: 1.6,
  },
  h1: { fontSize: "2rem", margin: "0 0 0.5rem 0" },
  updated: { margin: "0 0 1.75rem 0" },
  h2: { fontSize: "1.25rem", margin: "2rem 0 0.75rem 0" },
  p: { margin: "0 0 0.75rem 0" },
  ul: { margin: "0.25rem 0 0.75rem 1.25rem" },
  li: { margin: "0.35rem 0" },
};

export default function TermsPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Terms of Use</h1>
      <p style={styles.updated}>
        <em>Effective date: February 24, 2026</em>
      </p>

      <h2 style={styles.h2}>1. Acceptance of These Terms</h2>
      <p style={styles.p}>
        These Terms of Use (“Terms”) govern your access to and use of
        maximize1031.com (the “Site”), operated by Maximize 1031 (“we,” “our,” or
        “us”). By accessing or using the Site, you agree to be bound by these
        Terms. If you do not agree, please do not use the Site.
      </p>

      <h2 style={styles.h2}>2. Educational Information Only</h2>
      <p style={styles.p}>
        Content on this Site is provided for general educational and informational
        purposes only. Nothing on this Site constitutes legal, tax, investment,
        or financial advice.
      </p>
      <p style={styles.p}>
        Accessing this Site or submitting information through our forms does not
        create an attorney-client, advisor-client, or fiduciary relationship.
        Any services related to 1031 exchanges or transaction coordination are
        provided only pursuant to a separate written agreement.
      </p>

      <h2 style={styles.h2}>3. No Guarantees</h2>
      <p style={styles.p}>
        We make no representations or warranties regarding outcomes, eligibility
        for tax deferral, timing of transactions, or suitability of any strategy.
        Real estate transactions and tax matters involve risk and depend on many
        factors outside our control.
      </p>

      <h2 style={styles.h2}>4. Use of the Site</h2>
      <p style={styles.p}>
        You agree to use the Site only for lawful purposes and in a manner that
        does not infringe the rights of others or restrict their use of the Site.
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>You may not attempt to gain unauthorized access to any part of the Site.</li>
        <li style={styles.li}>You may not use the Site to transmit unlawful, harmful, or misleading content.</li>
        <li style={styles.li}>You may not scrape, harvest, or reuse Site content for commercial purposes without permission.</li>
      </ul>

      <h2 style={styles.h2}>5. Intellectual Property</h2>
      <p style={styles.p}>
        All content on this Site—including text, graphics, logos, blog posts, and
        layout—is owned by or licensed to Maximize 1031 and is protected by
        applicable intellectual property laws.
      </p>
      <p style={styles.p}>
        You may view and print pages for personal, non-commercial use only. Any
        other use requires our prior written consent.
      </p>

      <h2 style={styles.h2}>6. User Submissions</h2>
      <p style={styles.p}>
        If you submit information through our contact or intake forms, you
        represent that the information is accurate to the best of your knowledge
        and that you have the right to provide it.
      </p>
      <p style={styles.p}>
        Submission of information does not obligate us to provide services or
        respond in any particular timeframe.
      </p>

      <h2 style={styles.h2}>7. Limitation of Liability</h2>
      <p style={styles.p}>
        To the fullest extent permitted by law, Maximize 1031 shall not be liable
        for any indirect, incidental, consequential, or special damages arising
        out of or related to your use of (or inability to use) the Site or reliance
        on any content provided.
      </p>
      <p style={styles.p}>
        Your sole remedy for dissatisfaction with the Site is to stop using it.
      </p>

      <h2 style={styles.h2}>8. Third-Party Links</h2>
      <p style={styles.p}>
        The Site may contain links to third-party websites. We are not responsible
        for the content or practices of those sites, and linking does not imply
        endorsement.
      </p>

      <h2 style={styles.h2}>9. Privacy</h2>
      <p style={styles.p}>
        Your use of the Site is also governed by our Privacy Policy, which
        describes how we collect and use personal information.
      </p>

      <h2 style={styles.h2}>10. Changes to These Terms</h2>
      <p style={styles.p}>
        We may update these Terms from time to time. Changes will be posted on
        this page with an updated effective date. Continued use of the Site after
        changes become effective constitutes acceptance of the revised Terms.
      </p>

      <h2 style={styles.h2}>11. Governing Law</h2>
      <p style={styles.p}>
        These Terms are governed by the laws of the State of California, without
        regard to conflict-of-law principles.
      </p>

      <h2 style={styles.h2}>12. Contact Us</h2>
      <p style={styles.p}>
        If you have questions about these Terms, contact:
      </p>
      <p style={styles.p}>
        <strong>Maximize 1031</strong>
        <br />
        Email: <a href="mailto:info@maximize1031.com">info@maximize1031.com</a>
        <br />
        United States
      </p>

      {/*
        IMPLEMENTATION NOTES
        - Create route: app/terms/page.tsx (this file)
        - Add footer link: <Link href="/terms">Terms of Use</Link>
        - Optional: place Terms link next to Privacy Policy in footer
        - Keep tone aligned with Privacy Policy and existing site disclaimer
      */}
    </main>
  );
}
