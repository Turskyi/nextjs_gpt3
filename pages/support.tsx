import Head from 'next/head';
import Link from 'next/link';
import packageJson from '../package.json';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { TELEGRAM_LINK } from '@/constants';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support - Politer AI</title>
        <meta name="description" content="Get support for Politer AI." />
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

        <h1 style={{ marginTop: '20px' }}>Support</h1>

        <h2>Frequently Asked Questions (FAQ)</h2>
        <p>If you have any questions, check out our FAQs below:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <strong>How does Politer AI work?</strong> - Simply type your
            message, and our AI will provide a more polite version of it.
          </li>
          <li>
            <strong>
              What should I do if my message isn&apos;t improving?
            </strong>{' '}
            - Please contact us using the details below.
          </li>
          <li>
            <strong>Can I use Politer AI offline?</strong> - Currently, an
            internet connection is required to process messages.
          </li>
        </ul>

        <h2>Contact Us</h2>
        <p>If you need further assistance, feel free to reach out:</p>
        <p>
          Email:{' '}
          <a href="mailto:support@politerai.com">support@politerai.com</a>
        </p>
        <p>
          Telegram:{' '}
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            Chat for questions and requests
          </a>
        </p>

        <h2>Additional Resources</h2>
        <p>
          <Link href="/privacy-policy" passHref>
            <span style={{ textDecoration: 'none' }}>Privacy Policy</span>
          </Link>
        </p>
        <p>
          <Link href="/terms-of-service" passHref>
            <span style={{ textDecoration: 'none' }}>Terms of Service</span>
          </Link>
        </p>

        <h2>Accessibility</h2>
        <p>
          Currently, Politer AI does not support specific accessibility
          features. However, as the app is still in its early stages of
          development, accessibility improvements may be added in the future. If
          you require a particular accessibility feature, please reach out, and
          I will do my best to implement it as soon as possible, free of charge.
        </p>

        <h2>Report Technical Issues</h2>
        <p>
          If you experience any technical issues, please{' '}
          <a href="mailto:support@politerai.com">contact us</a> or report them
          in our{' '}
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            Telegram support chat
          </a>
          . Include details such as your app version and a description of the
          problem.
        </p>

        <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
          <p>Politer AI - Version {packageJson.version}</p>
        </footer>
      </main>
    </>
  );
}
