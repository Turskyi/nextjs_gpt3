import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mainImage from '@/assets/images/main_horizontal_image.png'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FormEvent, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [message, setMessage] = useState('');
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageLoadingError, setMessageLoadingError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setMessage('');
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const prompt = formData.get("prompt")?.toString().trim();

    if (prompt) {
      try {
        setMessageLoadingError(false);
        setMessageLoading(true);

        const response = await fetch("/api/polite?prompt=" + encodeURIComponent(prompt));
        const body = await response.json();
        setMessage(body.politerMessage);
      } catch (error) {
        console.error(error);
        setMessageLoadingError(true);
      } finally {
        setMessageLoading(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Politer AI: The ultimate tool to make your messages more polite and friendly</title>
        <meta name="description" content="by Dmytro Turskyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.heading}>Politer Ai</h1>
        <h2 className={styles.subtitle}>powered by GPT-3</h2>
        <br></br>
        <Form onSubmit={handleSubmit} className={styles.inputForm}>
          <Form.Group className='mb-3' controlId='prompt-imput'>
            <Form.Label>Type your message below and click the button to make it more polite and friendly.</Form.Label>
            <Form.Control
              name='prompt'
              placeholder='e.g. I do not have time for this nonsense. Stop bothering me.'
              maxLength={200}
              as='textarea'
              rows={3}
            />
          </Form.Group>
          <Button type='submit' className='mb-3' disabled={messageLoading}>
            Polite it up 😊
          </Button>
        </Form>
        {messageLoading && <Spinner animation='border' />}
        {messageLoadingError && 'Something went wrong. Please try again.'}
        {message &&
          <h5>{message}</h5>
        }
        {message.length == 0 &&
          <div className={styles.mainImageContainer}>
            <Image
              src={mainImage}
              fill
              alt='A picture of a text transform your message and the image of two people talking to each other'
              priority
              className={styles.mainImage}
            />
          </div>
        }
      </main>
    </>
  )
}
