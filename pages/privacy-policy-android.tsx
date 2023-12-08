import Head from 'next/head';
import styles from '@/styles/Privacy.module.css';

const PrivacyPolicyAndroid = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Politer AI - Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for Politer AI, an Android mobile application that helps you write more polite and friendly messages using GPT-3.5."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          Privacy Policy for Android Mobile Application "Politer AI"
        </h1>
        <p className={styles.intro}>
          We care about your privacy and we respect your data. This Privacy The
          policy explains how we collect, use, and share your personal
          information when you use our Android mobile application (the "App").
          Please read this Privacy Policy carefully and contact us if you have
          any questions.
        </p>
        <h2 className={styles.subheading}>What information do we collect?</h2>
        <p className={styles.paragraph}>
          We collect the following types of information when you use our App:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            The messages that you type or paste into the App. We use this
            information to provide you with the service of transforming your
            message into a more polite and friendly version using GPT-3, an
            artificial intelligence model that can generate natural language. We
            do not store or share your messages with anyone, and we delete them
            as soon as we process them.
          </li>
          <li className={styles.item}>
            The device information that you allow us to access, such as your
            device model, operating system, and unique device identifier. We use
            this information to improve our App performance, functionality, and
            security. We do not use this information to identify you or track
            you.
          </li>
          <li className={styles.item}>
            The usage information that we automatically collect, such as the
            date and time of your App usage, the duration of your App session,
            and the number of messages that you process with our App. We use
            this information to analyze and improve our App service, quality,
            and user experience. We do not use this information to identify you
            or track you.
          </li>
        </ul>
        <h2 className={styles.subheading}>How do we use your information?</h2>
        <p className={styles.paragraph}>
          We use your information for the following purposes:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            To provide you with the service of transforming your message into a
            more polite and friendly version using GPT-3.
          </li>
          <li className={styles.item}>
            To improve our App performance, functionality, and security.
          </li>
          <li className={styles.item}>
            To analyze and improve our App service, quality, and user
            experience.
          </li>
          <li className={styles.item}>
            To comply with our legal obligations, protect our rights and
            interests, and prevent fraud or abuse.
          </li>
        </ul>
        <h2 className={styles.subheading}>How do we share your information?</h2>
        <p className={styles.paragraph}>
          We do not share your information with anyone, except in the following
          cases:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            We share your messages with OpenAI, the provider of the GPT-3.5
            artificial intelligence model that we use to transform your
            messages. OpenAI is a research organization that aims to ensure that
            artificial intelligence is aligned with human values and can be used
            for good. OpenAI has its privacy policy that you can read
            here:&#160;
            <a
              href="https://openai.com/policies/privacy-policy"
              // opens the link in a new tab
              target="_blank"
              // a best practice for security when using target="_blank".
              rel="noopener noreferrer"
            >
              OpenAI Privacy Policy
            </a>
          </li>
          <li className={styles.item}>
            We share your device and usage information with Google, the provider
            of the Android operating system and the Google Play Store that we
            use to distribute our App. Google is a technology company that
            offers various products and services, including online advertising,
            cloud computing, and software development. Google has its privacy
            policy that you can read here:&#160;
            <a
              href="https://policies.google.com/privacy"
              // opens the link in a new tab
              target="_blank"
              // a best practice for security when using target="_blank".
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li className={styles.item}>
            We may share your information with law enforcement, government
            authorities, or other parties if we are required to do so by law,
            court order, or legal process, or if we believe that it is necessary
            to protect our rights and interests, or the rights and interests of
            others.
          </li>
        </ul>
        <h2 className={styles.subheading}>
          How do we protect your information?
        </h2>
        <p className={styles.paragraph}>
          We take reasonable measures to protect your information from
          unauthorized access, use, disclosure, modification, or destruction. We
          use encryption, firewalls, and other security technologies to
          safeguard your information. However, we cannot guarantee that your
          information is completely secure, as no method of transmission or
          storage is 100% secure. You are responsible for maintaining the
          confidentiality of your device and your App settings, and for
          notifying us if you suspect any unauthorized activity or breach of
          security.
        </p>
        <h2 className={styles.subheading}>
          How do we update our Privacy Policy?
        </h2>
        <p className={styles.paragraph}>
          We may update our Privacy Policy from time to time to reflect changes
          in our practices, technologies, or legal requirements. We will notify
          you of any material changes by posting the updated Privacy Policy on
          our website and within our App. Your continued use of our App after
          the effective date of the updated Privacy Policy constitutes your
          acceptance of the changes. We encourage you to review our Privacy
          Policy periodically to stay informed about how we collect, use, and
          share your information.
        </p>
        <h2 className={styles.subheading}>How can you contact us?</h2>
        <p className={styles.paragraph}>
          If you have any questions, comments, or concerns about our Privacy
          Policy or our data practices, please contact us at&#160;
          <a href="mailto:dmytro@turskyi.com">dmytro@turskyi.com</a>. We will
          respond to your inquiry as soon as possible.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyAndroid;
