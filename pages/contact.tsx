import Head from 'next/head';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-4xl pt-[75px]">
        <ContactForm />
      </div>
    </>
  );
}
