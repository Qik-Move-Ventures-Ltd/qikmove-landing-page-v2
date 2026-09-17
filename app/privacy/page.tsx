import Link from "next/link";

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 container mx-auto max-w-3xl px-6">
      <div className="mb-6">
        <Link href="/" className="text-gray hover:text-dark ">
          ← Back home
        </Link>
        <span
          className="text-xs inline-block px-3 py-1 font-mono tracking-wider 
        rounded-full bg-[#defd6226] text-dark"
        >
          LEGAL
        </span>
      </div>
      <h1
        className="mt-4 font-geist text-4xl font-extrabold tracking-tight text-dark
       md:text-5xl"
      >
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-gray">Last updated: July 5, 2026</p>
      <div className="mt-10">
        <p className="mb-8 text-sm leading-relaxed text-gray">
          Welcome to QikMove.
        </p>
        <p className="mb-8 text-sm leading-relaxed text-gray">
          This Privacy Policy explains how QikMove ("QikMove," "we," "our," or
          "us") collects, uses, stores, shares, and protects your personal
          information when you use our website, mobile applications, and related
          logistics and delivery services (the "Service").
        </p>
        <p className="mb-8 text-sm leading-relaxed text-gray">
          By accessing or using QikMove, you acknowledge that you have read and
          understood this Privacy Policy. Where required by applicable law, we
          will request your consent before processing your personal data for
          specific purposes.
        </p>
      </div>
      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          1. Who We Are
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            QikMove is a Nigerian technology platform that connects customers
            with independent riders for on-demand logistics and delivery
            services.
          </p>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          2. Information We Collect
        </h2>
        <div className="text-sm leading-relaxed text-gray">
          <p>
            Depending on how you use the Service, we may collect the following
            categories of personal information:
          </p>
          <h3 className="font-semibold mt-2 text-dark">Account Information</h3>
          <ul className="list-disc space-y-1 pl-5 mt-3">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Encrypted password</li>
            <li>Profile photo (optional)</li>
          </ul>
          <h3 className="pt-3 font-semibold text-dark">Delivery Information</h3>
          <ul className="list-disc space-y-1 pl-5 mt-3">
            <li>Pickup and delivery addresses</li>
            <li>Package description</li>
            <li>Delivery instructions</li>
            <li>Recipient name and phone number</li>
          </ul>
          <h3 className="pt-3 font-semibold text-dark">Location Information</h3>
          <p className="mt-2">
            To provide our services, we collect location information where
            permitted by your device settings.
          </p>

          <p className="font-medium text-dark mt-2">For customers:</p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>
              Approximate or precise location when requesting a pickup (with
              permission)
            </li>
          </ul>

          <p className="font-medium text-dark mt-3">For riders:</p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>
              Real-time GPS location during active deliveries to enable
              navigation, live tracking, proof of delivery, and rider safety.
            </li>
          </ul>

          <h3 className="pt-3 font-semibold text-dark">Payment Information</h3>
          <p className="mt-2">We collect:</p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>Payment transaction records</li>
            <li>Payment status</li>
            <li>Payment method metadata</li>
          </ul>
          <p className="mt-2">
            QikMove{" "}
            <strong>
              does not store your complete debit or credit card information.
            </strong>{" "}
            Payment card information is securely processed by our trusted
            payment partners.
          </p>

          <h3 className="mt-3 font-semibold text-dark">
            Rider Verification Information
          </h3>
          <p className="mt-2">For riders, we may collect:</p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>Government-issued identification</li>
            <li>Driver's licence (where applicable)</li>
            <li>Vehicle information</li>
            <li>Proof of address</li>
            <li>Profile verification documents</li>
          </ul>

          <h3 className="mt-3 font-semibold text-dark">
            Device & Technical Information
          </h3>
          <p className="mt-2">We automatically collect:</p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>IP address</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Browser type</li>
            <li>App version</li>
            <li>Device identifiers</li>
            <li>Log files</li>
            <li>Usage analytics</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          3. Legal Basis for Processing
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            We process your personal data only where permitted by applicable
            law, including where:
          </p>
          <ul className="list-disc space-y-1 pl-5 mt-2">
            <li>
              processing is necessary to provide the Service and perform our
              contract with you;
            </li>
            <li>you have given your consent;</li>
            <li>
              processing is required to comply with legal or regulatory
              obligations;
            </li>
            <li>
              processing is necessary to protect our legitimate interests,
              including fraud prevention, platform security, service
              improvement, and dispute resolution, provided those interests do
              not override your rights.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          4. How We Use Your Information
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <ul className="list-disc space-y-1 pl-5">
            <li>Create and manage your account.</li>
            <li>Connect customers with nearby riders.</li>
            <li>Facilitate delivery requests and price negotiations.</li>
            <li>Process payments and rider payouts.</li>
            <li>Provide real-time delivery tracking.</li>
            <li>Verify rider identity and maintain platform safety.</li>
            <li>
              Prevent fraud, abuse, unauthorized activity, and policy
              violations.
            </li>
            <li>
              Investigate delivery incidents and resolve disputes between
              customers and riders.
            </li>
            <li>Provide customer support.</li>
            <li>
              Send transactional communications such as receipts, delivery
              updates, account notifications, and security alerts.
            </li>
            <li>
              Send promotional communications, special offers, newsletters, or
              product updates where permitted by law. You may opt out of
              marketing communications at any time.
            </li>
            <li>Improve our products, services, and user experience.</li>
            <li>
              Comply with legal obligations, including the Nigeria Data
              Protection Act (NDPA) 2023 and other applicable laws.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          5. Sharing Your Information
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            We do <strong>not</strong> sell your personal information.{" "}
          </p>
          <h3 className="font-semibold text-dark">Customers and Riders</h3>
          <p>Information necessary to complete a delivery, including:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name</li>
            <li>Phone number</li>
            <li>Pickup location</li>
            <li>Delivery destination</li>
          </ul>

          <h3 className="pt-3 font-semibold text-dark">
            Trusted Service Providers
          </h3>
          <p>
            We work with trusted third-party providers that help us operate
            QikMove, including providers of:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Cloud hosting and infrastructure</li>
            <li>Payment processing</li>
            <li>Authentication services</li>
            <li>Email delivery</li>
            <li>SMS and communication services</li>
            <li>Maps and navigation</li>
            <li>Analytics</li>
            <li>Customer support tools</li>
          </ul>
          <p>
            These providers process personal information only for the services
            they provide to QikMove and are required to protect your
            information.
          </p>

          <h3 className="pt-3 font-semibold text-foreground">
            Legal Requirements
          </h3>
          <p>
            We may disclose information where required by law or where necessary
            to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>comply with legal obligations;</li>
            <li>
              respond to lawful requests from courts, regulators, or law
              enforcement agencies;
            </li>
            <li>
              protect the rights, property, or safety of QikMove, our users, or
              the public;
            </li>
            <li>investigate fraud or illegal activities.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          6. International Data Transfers
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            Some of our trusted service providers may process or store personal
            information outside Nigeria.
          </p>
          <p>
            Where this occurs, QikMove implements appropriate contractual,
            organizational, and technical safeguards to ensure your personal
            information remains protected in accordance with applicable data
            protection laws.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          7. Cookies & Analytics
        </h2>

        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Keep you signed in.</li>
            <li>Remember your preferences.</li>
            <li>Improve website performance.</li>
            <li>Understand how users interact with our Service.</li>
          </ul>

          <p>
            You may disable cookies through your browser settings, although some
            features of the Service may not function properly.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          8. Data Retention
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            We retain personal information only for as long as necessary to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>provide our services;</li>
            <li>maintain your account;</li>
            <li>comply with legal and regulatory obligations;</li>
            <li>resolve disputes;</li>
            <li>prevent fraud;</li>
            <li>enforce our agreements;</li>
            <li>protect the safety and integrity of the platform.</li>
          </ul>

          <p>You may request deletion of your account at any time.</p>

          <p>
            However, certain records may be retained where required by law or
            where necessary for tax compliance, fraud prevention, dispute
            resolution, platform safety, or legitimate business purposes.
          </p>

          <p>
            Rider verification records may also be retained where reasonably
            necessary to investigate fraud or comply with applicable laws.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          9. Security
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            We implement appropriate technical and organizational measures to
            protect your information, including:
          </p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Encryption in transit (HTTPS/TLS)</li>
            <li>Secure cloud infrastructure</li>
            <li>Access controls</li>
            <li>Authentication safeguards</li>
            <li>Continuous monitoring where appropriate</li>
          </ul>

          <p>
            While we strive to protect your information, no method of electronic
            storage or internet transmission is completely secure. Accordingly,
            we cannot guarantee absolute security.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          10. Your Privacy Rights
        </h2>

        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            Subject to applicable law, including the Nigeria Data Protection Act
            (NDPA) 2023, you may have the right to:
          </p>

          <ul className="list-disc space-y-1 pl-5">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Request restriction of certain processing activities.</li>
            <li>Object to certain types of processing.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>
              Request a copy of your personal data in a portable format where
              applicable.
            </li>
            <li>Opt out of marketing communications at any time.</li>
            <li>
              Lodge a complaint with the appropriate data protection authority
              if you believe your rights have been violated.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details
            below.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          11. Children's Privacy
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            QikMove is intended only for individuals who are at least 18 years
            old.
          </p>

          <p>We do not knowingly collect personal information from children.</p>
          <p>
            If you believe that a child has provided us with personal
            information, please contact us immediately so we can investigate and
            delete the information where appropriate.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          12. Closing Your Account
        </h2>

        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>You may close your QikMove account at any time.</p>
          <p>
            Closing your account does not automatically remove all information
            from our systems. We may retain certain records where necessary to
            comply with legal obligations, investigate fraud, resolve disputes,
            enforce our agreements, or protect the safety and security of the
            platform.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          13. Changes to This Privacy Policy
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>We may update this Privacy Policy from time to time.</p>
          <p>
            When we make material changes, we will update the "Last updated"
            date and, where appropriate, notify users through email, in-app
            notifications, or other reasonable means.
          </p>
          <p>
            Your continued use of the Service after changes become effective
            constitutes acceptance of the updated Privacy Policy.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 font-geist text-2xl font-bold text-dark">
          14. Contact Us
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray">
          <p>
            If you have any questions, requests, complaints, or concerns
            regarding this Privacy Policy or your personal information, please
            contact us:
          </p>
          <p className="text-dark font-medium">Customer Support</p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@qikmove.app"
              className="text-[#3838C5] cursor-pointer hover:underline"
            >
              support@qikmove.app
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
