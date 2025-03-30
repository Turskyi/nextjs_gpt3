import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { DATE_UPDATED } from '@/constants';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Politer AI</title>
        <meta name="description" content="Privacy Policy for Politer AI." />
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

        <h1 style={{ marginTop: '20px' }}>Privacy Policy</h1>

        <p>Last Updated: {DATE_UPDATED}</p>

        <h2>Introduction</h2>
        <p>
          Politer AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          respects your privacy and is committed to protecting the personal
          information you share with us. This Privacy Policy explains how we
          collect, use, and disclose your information when you use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We do not collect any personal information. The only data we process
          is related to your interactions with the Politer AI application. This
          includes:
        </p>
        <ul>
          <li>
            Usage Data: Information related to how you interact with the app,
            including which features you use and your interactions with the AI.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the data we process to:</p>
        <ul>
          <li>Provide and improve the functionality of the app</li>
          <li>Enhance the user experience based on app interactions</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Sharing and Disclosure</h2>
        <p>
          We do not sell, rent, or share any personal data because we do not
          collect personal information. Any data processed by the app is related
          to usage interactions and is not shared with third parties.
        </p>

        <h2>Your Rights</h2>
        <p>
          As we do not collect personal information, the rights regarding
          access, update, deletion, or objection to the processing of personal
          data do not apply. However, if you have concerns regarding how your
          data is processed by the AI model (e.g., GPT-3.5), we encourage you to
          reach out directly to the model provider, such as Microsoft.
        </p>

        <h2>Security</h2>
        <p>
          We implement industry-standard security measures to protect your data.
          However, no method of transmission over the internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{' '}
          <a href="mailto:support@politerai.com">support@politerai.com</a>.
        </p>
      </main>
    </>
  );
}
