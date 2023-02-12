import Image from 'next/image';
import profileImg from '../../public/images/site/profile.jpg';

export default function Hero(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 pt-24">
      <div className="w-[200px]">
        <Image
          src={profileImg}
          alt="profile"
          placeholder="blur"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-3 py-4 font-bold text-gray-300">
        <h1 className="text-5xl ">Hi! I am Howoo</h1>
        <p>I am howoo cutest cat in the World</p>
      </div>
    </section>
  );
}
