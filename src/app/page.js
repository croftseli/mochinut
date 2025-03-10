import Image from "next/image";
import backgroundImage from '/public/background.jpg';
import logo from '/public/logo.jpg';
import tiktok from '/public/tiktok.svg';
import instagram from '/public/instagram.svg';


export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <nav className="w-full flex justify-between items-center py-4">
        <Image src={logo} alt="MochiNut Logo" width={150} height={150} />
        <ul className="flex gap-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#news" className="hover:underline">News</a></li>
          <li><a href="#locations" className="hover:underline">Locations</a></li>
          <li><a href="#photos" className="hover:underline">Photos</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          <li>
            <a href="https://www.instagram.com/mochinutspringhilltn?igsh=dDN6NWZvZzNnNXYw" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <Image src={instagram} alt="Instagram" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Image src={tiktok} alt="TikTok" width={24} height={24} />
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-white text-center sm:text-left">
          Full website coming soon...
        </h1>
      </main>
    </div>
  );
}
