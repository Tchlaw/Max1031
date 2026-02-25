export const metadata = {
  title: "Privacy Policy | Maximize 1031",
  description:
    "Privacy Policy for Maximize 1031 describing what information we collect, how we use it, and your rights.",
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
  note: {
    background: "rgba(0,0,0,0.04)",
    padding: "0.9rem 1rem",
    borderRadius: 10,
    margin: "0.75rem 0",
  },
};

export default function PrivacyPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <p style={styles.updated}>
        <em>Effective date: February 24, 2026</em>
      </p>

      <h2 style={styles.h2}>1. Introduction</h2>
      <p style={styles.p}>
        Maximize 1031 (“Maximize 1031,” “we,” “our,” or “us”) respects your
        privacy. This Privacy Policy explains how we collect, use, and protect
        information when you visit maximize1031.com (the “Site”) or submit
        information through our contact/intake form.
      </p>
      <p style={styles.p}>
        By using the Site or submitting information to us, you consent to the
        practices described in this Privacy Policy.
      </p>

      <h2 style={styles.h2}>2. Information We Collect</h2>
      <p style={styles.p}>
        We collect information in two main ways: (a) information you provide
        directly, and (b) information collected automatically when you use the
        Site.
      </p>

      <h3 style={{ ...styles.h2, fontSize: "1.1rem", marginTop: "1.25rem" }}>
        A. Personal information you provide
      </h3>
      <p style={styles.p}>
        When you submit our contact/intake form, we may collect the following
        information (as entered by you):
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>First Name</li>
        <li style={styles.li}>Last Name</li>
        <li style={styles.li}>Email</li>
        <li style={styles.li}>Phone Number</li>
        <li style={styles.li}>Message (free text)</li>
        <li style={styles.li}>Have you sold the property? (Y/N)</li>
        <li style={styles.li}>What is the address of the property being sold?</li>
        <li style={styles.li}>Is the property in escrow? (Y/N)</li>
        <li style={styles.li}>
          What is the official name of the owner(s) listed on title of the
          property being sold?
        </li>
        <li style={styles.li}>Is there more than one owner? (Y/N)</li>
        <li style={styles.li}>
          Do any owners want to receive cash from the sale of the property? (Y/N)
        </li>
        <li style={styles.li}>Are any of the owners a partnership? (Y/N)</li>
        <li style={styles.li}>Are any of the owners an LLC? (Y/N)</li>
        <li style={styles.li}>Are any of the owners a corporation? (Y/N)</li>
        <li style={styles.li}>
          What is the expected cash value of the sale after commissions and
          expenses? (numeric/free text)
        </li>
      </ul>

      <div style={styles.note}>
        <strong>Sensitive / financial information note:</strong>{" "}
        <span>
          The form may include details about a real estate transaction, ownership
          structure, and expected sale proceeds. Please do not submit information
          that is not necessary for your inquiry (for example, Social Security
          numbers, full bank account numbers, or other highly sensitive personal
          identifiers). If we need additional information to provide services, we
          will request it through appropriate, secure channels.
        </span>
      </div>

      <h3 style={{ ...styles.h2, fontSize: "1.1rem", marginTop: "1.25rem" }}>
        B. Information collected automatically
      </h3>
      <p style={styles.p}>
        Like many websites, we may automatically collect certain information when
        you visit the Site, such as:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>IP address</li>
        <li style={styles.li}>Device and browser type</li>
        <li style={styles.li}>Pages you view and the time spent on them</li>
        <li style={styles.li}>Referring/exit pages</li>
        <li style={styles.li}>Approximate location (derived from IP)</li>
      </ul>

      <h2 style={styles.h2}>3. How We Use Your Information</h2>
      <p style={styles.p}>We use the information we collect to:</p>
      <ul style={styles.ul}>
        <li style={styles.li}>Respond to your inquiry and communicate with you</li>
        <li style={styles.li}>Schedule calls or consultations</li>
        <li style={styles.li}>
          Evaluate whether 1031 exchange services may be appropriate for your
          situation
        </li>
        <li style={styles.li}>
          Provide services if you engage us (subject to a separate written
          agreement)
        </li>
        <li style={styles.li}>
          Maintain internal records related to inquiries and client relationships
        </li>
        <li style={styles.li}>
          Improve our Site, content, and service offerings
        </li>
        <li style={styles.li}>Comply with legal obligations</li>
      </ul>

      <h2 style={styles.h2}>4. Legal Bases / Consent</h2>
      <p style={styles.p}>
        We process information for legitimate business purposes, including to
        respond to your request and operate our business. When you submit the
        contact/intake form, you are providing information with the expectation
        that we will review it and contact you about your inquiry.
      </p>

      <h2 style={styles.h2}>5. Sharing of Information</h2>
      <p style={styles.p}>
        We do <strong>not</strong> sell your personal information.
      </p>
      <p style={styles.p}>
        We may share information in the following situations:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <strong>Service providers:</strong> We may share information with
          vendors who help operate our business and the Site (for example,
          website hosting, email delivery, scheduling tools, form processing,
          or CRM systems). These providers are permitted to use the information
          only to perform services for us.
        </li>
        <li style={styles.li}>
          <strong>Exchange facilitation partners / platforms:</strong> If you
          become a client, we may share information necessary to facilitate a
          1031 exchange with qualified intermediary partners or platforms and
          other parties involved in providing the contracted services (as
          appropriate and consistent with your engagement).
        </li>
        <li style={styles.li}>
          <strong>Legal requirements:</strong> We may disclose information if
          required to do so by law, court order, or governmental regulation, or
          to protect our rights and the safety of others.
        </li>
      </ul>

      <h2 style={styles.h2}>6. Cookies &amp; Analytics</h2>
      <p style={styles.p}>
        The Site may use cookies and similar technologies to support basic
        functionality and to understand how visitors use the Site. These tools
        may collect information such as IP address, browser type, and pages
        visited.
      </p>
      <p style={styles.p}>
        You can control cookies through your browser settings. If you disable
        cookies, some features of the Site may not function properly.
      </p>

      <h2 style={styles.h2}>7. Data Retention</h2>
      <p style={styles.p}>
        We retain inquiry information for as long as needed to respond to your
        request and maintain our business records. If you request deletion, we
        will take reasonable steps to delete information, subject to legal,
        regulatory, and legitimate business recordkeeping requirements.
      </p>

      <h2 style={styles.h2}>8. Data Security</h2>
      <p style={styles.p}>
        We use reasonable administrative, technical, and organizational measures
        designed to protect information from unauthorized access, use, or
        disclosure. However, no method of transmission over the Internet or
        method of electronic storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2 style={styles.h2}>9. California Privacy Rights (CCPA/CPRA)</h2>
      <p style={styles.p}>
        If you are a California resident, you may have the right to:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          Request information about the categories and specific pieces of
          personal information we collect and how we use it
        </li>
        <li style={styles.li}>
          Request deletion of personal information (subject to certain
          exceptions)
        </li>
        <li style={styles.li}>
          Request correction of inaccurate personal information
        </li>
        <li style={styles.li}>
          Opt out of the “sale” or “sharing” of personal information for
          cross-context behavioral advertising (we do not sell personal
          information, and we do not share personal information for
          cross-context behavioral advertising based on the practices described
          in this policy)
        </li>
        <li style={styles.li}>
          Not be discriminated against for exercising your privacy rights
        </li>
      </ul>
      <p style={styles.p}>
        To submit a request, email us at{" "}
        <a href="mailto:sean@maximize1031.com">sean@maximize1031.com</a>. We may
        need to verify your identity before completing your request.
      </p>

      <h2 style={styles.h2}>10. Children’s Privacy</h2>
      <p style={styles.p}>
        The Site is not intended for individuals under 18, and we do not
        knowingly collect personal information from children.
      </p>

      <h2 style={styles.h2}>11. Professional Disclaimer</h2>
      <p style={styles.p}>
        Information on this Site is provided for general educational purposes
        and does not constitute legal, tax, or investment advice. Any services
        related to 1031 exchanges are provided pursuant to a separate written
        agreement and applicable law.
      </p>

      <h2 style={styles.h2}>12. Changes to This Privacy Policy</h2>
      <p style={styles.p}>
        We may update this Privacy Policy from time to time. When we do, we will
        update the effective date at the top of this page. Your continued use of
        the Site after changes become effective constitutes your acceptance of
        the updated policy.
      </p>

      <h2 style={styles.h2}>13. Contact Us</h2>
      <p style={styles.p}>
        If you have questions about this Privacy Policy or want to submit a
        privacy request, contact:
      </p>
      <p style={styles.p}>
        <strong>Maximize 1031</strong>
        <br />
        Email: <a href="mailto:sean@maximize1031.com">sean@maximize1031.com</a>
        <br />
        United States
      </p>

      {/*
        IMPLEMENTATION NOTES
        - Add footer link: <Link href="/privacy">Privacy Policy</Link>
        - Add a short line under the contact form submit button:
          “By submitting this form, you agree that we may contact you about your inquiry. See our Privacy Policy.”
          Link “Privacy Policy” to /privacy.
        - If you later add ad pixels (Meta/LinkedIn) or Google Analytics, update Section 6 (Cookies & Analytics)
          to describe those tools and, if needed, add cookie/consent controls.
      */}
    </main>
  );
}
