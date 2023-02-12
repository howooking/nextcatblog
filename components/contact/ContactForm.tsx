/* eslint-disable operator-linebreak */
import { useRef } from 'react';
import { useNotificationContext } from '@/context/notificationContext';

export default function ContactForm(): JSX.Element {
  const { hideNotification, showNotification } = useNotificationContext();
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    showNotification({
      title: 'Sending...',
      message: 'Sending a message',
      status: 'pending',
    });

    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const message = messageRef.current?.value;
    const bodyData = { email, name, message };
    try {
      const post = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      const data = await post.json();
      console.log('Success:', data);
      showNotification({
        title: 'Success!!',
        message: 'Successfully sent a Message to Howoo',
        status: 'success',
      });
    } catch (error) {
      console.error('Error:', error);
      showNotification({
        title: 'ERRRRRORRRR!',
        message: 'something went wrong',
        status: 'error',
      });
    } finally {
      setTimeout(() => {
        hideNotification();
      }, 3000);
    }
  };
  return (
    <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
      <div className="flex w-full justify-between gap-3">
        <div className="w-1/2">
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full rounded-lg bg-gray-200 p-1"
              ref={emailRef}
              required
            />
          </label>
        </div>
        <div className="w-1/2">
          <label htmlFor="name">
            <p>Name</p>
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="w-full rounded-lg bg-gray-200 p-1"
              ref={nameRef}
              required
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="name">
          <p>Message</p>
          <textarea
            placeholder="Message"
            id="email"
            className="w-full rounded-lg bg-gray-200 p-1"
            rows={5}
            ref={messageRef}
            required
          />
        </label>
      </div>
      <div className="mx-auto w-1/2">
        <button
          type="submit"
          className="w-full rounded-xl bg-orange-400 p-2 text-white shadow-2xl hover:scale-105 hover:opacity-90"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
