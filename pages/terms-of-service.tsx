import { DATE_UPDATED } from '@/constants';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Politer AI</title>
        <meta name="description" content="Terms of Service for Politer AI." />
      </Head>
      <main style={{ padding: '20px' }}>
        {/* Logo in the top-left corner */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            borderRadius: '50%',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="Politer AI Logo"
              width={50}
              height={50}
              style={{
                borderRadius: '50%',
              }}
            />
          </Link>
        </div>

        <h1 style={{ marginTop: '20px' }}>Terms of Service</h1>

        <p>Last Updated: {DATE_UPDATED}</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By using Politer AI&apos;s services, you agree to be bound by these
          Terms of Service. If you do not agree to these terms, please do not
          use our services.
        </p>

        <h2>Use of Service</h2>
        <p>
          Politer AI provides an AI-powered service designed to improve the
          politeness of your text-based communication. You agree to use the
          service only for lawful purposes and not to engage in activities that
          may harm the service or its users.
        </p>

        <h2>Account Creation</h2>
        <p>
          Please note that Politer AI does not require you to create an account
          to use its services. You can access and use the app without needing to
          sign up or log in.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, software, trademarks, and other materials provided
          through Politer AI, including the platform&apos;s underlying
          technology, are owned by us or licensed to us. You may not copy,
          modify, or distribute these materials without permission. However, the
          text generated by Politer AI through your input is your own, and you
          retain ownership of any content created through the service.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Politer AI is not liable for any direct, indirect, incidental, or
          consequential damages resulting from the use or inability to use our
          service, even if we have been advised of the possibility of such
          damages.
        </p>

        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or limit access to our services at our
          sole discretion. This may include actions such as limiting the number
          of uses, removing access in certain countries or devices, or
          terminating the app or website completely.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Politer AI, its employees,
          and partners from any claims, damages, or expenses arising from your
          use of the service or violation of these terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of the jurisdiction in
          which we operate, and any disputes will be resolved in the applicable
          courts.
        </p>

        <h2>Changes to the Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Changes will
          be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at{' '}
          <a href="mailto:support@politerai.com">support@politerai.com</a>.
        </p>
      </main>
    </>
  );
}
