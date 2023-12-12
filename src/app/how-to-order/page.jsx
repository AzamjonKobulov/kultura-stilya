import Link from 'next/link';
import Image from 'next/image';

const data = [
  {
    title: 'Каталог',
    text: 'выбрать из каталога',
    image: '/assets/images/background/catalog.png',
    href: '',
  },
  {
    title: 'Чат-бот',
    text: 'чат-бот для заказа',
    image: '/assets/images/background/chatbot.png',
    href: '',
  },
  {
    title: 'Менеджер',
    text: 'консультация',
    image: '/assets/images/background/manager.jpeg',
    href: '',
  },
];

export default function page() {
  return (
    <div className="space-y-6 px-5">
      <h3 className="mt-5">Как сделать заказ? </h3>
      <div className="space-y-5">
        {data.map((item) => (
          <div
            key={item.title}
            className="relative h-150 rounded-18 bg-black overflow-hidden text-white pl-7 pt-7"
          >
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-brand-overlay z-10"></div>
              <Image
                src={item.image}
                width={700}
                height={500}
                alt={item.text}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 space-y-[18px]">
              <div>
                <h3>{item.title}</h3>
                <p className="font-light text-white">{item.text}</p>
              </div>
              <Link
                href={item.href}
                className="h-8 w-fit flex items-center gap-2.5 bg-white text-black font-semibold rounded-full text-xxs px-5"
              >
                <span>Написать</span>
                <span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9401 13.6364V5.15116H5.45482"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9401 5.15112L4.24266 14.8486"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
