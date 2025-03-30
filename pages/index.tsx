import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import mainImage from '@/assets/images/main_horizontal_image.png';
import { Button, Form, Spinner } from 'react-bootstrap';
import { FormEvent, useState } from 'react';
import { INPUT_MAX_LENGTH } from '../constants';
import Link from 'next/link';
import appStoreBadgePath from '@/assets/images/Download_on_the_App_Store_Badge.png';

export default function Home() {
  // State to track the message input.
  const [message, setMessage] = useState('');
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageLoadingError, setMessageLoadingError] = useState(false);
  // State to track character count.
  const [charCount, setCharCount] = useState(0);

  // Function to handle form submission.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setMessage('');
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const prompt = formData.get('prompt')?.toString().trim();

    if (prompt) {
      try {
        setMessageLoadingError(false);
        setMessageLoading(true);
        if (prompt.length < 5) {
          setMessage('Message too short');
        } else {
          const response = await fetch(
            '/api/polite?prompt=' + encodeURIComponent(prompt),
          );
          const body = await response.json();
          setMessage(body.politerMessage);
        }
      } catch (error) {
        console.error(error);
        setMessageLoadingError(true);
      } finally {
        setMessageLoading(false);
      }
    }
  }

  // Function to handle input change and update character count
  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setCharCount(value.length);
  }

  return (
    <>
      {/* Use the Head component to customize the title and meta description 
      for each page */}
      <Head>
        <title>Politer AI: Make your messages nicer</title>
        <meta
          name="description"
          content="Politer AI is a GPT-3.5 powered tool created by Software 
          Engineer Dmytro Turskyi, that helps you write more polite and 
          friendly messages. Just type your message and click the button to see 
          the magic."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={styles.heading}>Politer AI</h1>
        <h2 className={styles.subtitle}>powered by GPT-3.5</h2>
        <br></br>
        <Form onSubmit={handleSubmit} className={styles.inputForm}>
          <Form.Group className="mb-3" controlId="prompt-input">
            <Form.Label>
              Type your message below and click the button to make it more
              polite and friendly.
            </Form.Label>
            <Form.Control
              name="prompt"
              placeholder="e.g. I do not have time for this nonsense. Stop 
              bothering me."
              maxLength={INPUT_MAX_LENGTH}
              as="textarea"
              rows={3}
              // Call handleInputChange on input change.
              onChange={handleInputChange}
            />
            <p>
              {charCount}/{INPUT_MAX_LENGTH} characters
            </p>
          </Form.Group>
          <Button type="submit" className="mb-3" disabled={messageLoading}>
            Polite it up 😊
          </Button>
        </Form>
        {messageLoading && <Spinner animation="border" />}
        {messageLoadingError &&
          `We apologize for the inconvenience, but the 
          OpenAI API is not available at the moment. It looks like we have 
          reached our limit or quota for the API. Please wait for a while or 
          switch to a different service.`}

        {message && (
          <div className={styles.politeContainer}>
            <h5 className={styles.politeTitle}>Polite version:</h5>
            <div className={styles.politeMessage}>
              <h5>{message}</h5>
            </div>
          </div>
        )}

        {message.length == 0 && (
          <div className={styles.mainImageContainer}>
            <Image
              src={mainImage}
              fill
              alt="A picture of somebody holding the image of smile"
              priority
              className={styles.mainImage}
            />
          </div>
        )}
        <section className={styles.featuresSection}>
          <h2>Why Use Politer AI?</h2>
          <ul className={styles.featuresList}>
            <li>Instantly make your messages more polite and professional</li>
            <li>Easy-to-use interface</li>
            <li>Powered by AI to enhance your communication</li>
            <li>Available for free on Android</li>
          </ul>
        </section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingBottom: '20px',
            width: '100%',
          }}
        >
          <h3>Download Politer AI</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px', // Add spacing between the badges
              marginBottom: '10px',
            }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.turskyi.politerai"
              target="_blank"
              style={{ display: 'inline-block' }}
            >
              <Image
                src={`https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png`}
                alt="Get it on Google Play"
                width={150}
                height={58}
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6743640556"
              target="_blank"
              style={{ display: 'inline-block' }}
            >
              <Image
                src={appStoreBadgePath}
                alt="Download on the App Store"
                width={136}
                height={42}
              />
            </a>
          </div>
        </div>
        <Link
          href="/support"
          style={{
            display: 'block',
            fontSize: '14px',
            color: '#007bff',
            textDecoration: 'none',
          }}
        >
          Support
        </Link>
      </main>
    </>
  );
}
