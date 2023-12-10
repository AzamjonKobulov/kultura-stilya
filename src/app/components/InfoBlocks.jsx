import Link from 'next/link';
import Image from 'next/image';

const data = [
  {
    image: '/assets/images/friends.png',
    label: 'Зови друзей! +500 руб.',
    href: '/call-friends',
  },
  {
    image: '/assets/images/size.png',
    label: 'Размерная сетка',
    href: '/sizes',
  },
  {
    image: '/assets/images/info.png',
    label: 'Информация о магазине',
    href: '/about',
  },
];

export default function InfoBlocks() {
  return (
    <div className="max-w-xs w-full grid grid-cols-3 gap-2.5 mt-5">
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`h-[100px] flex flex-col justify-between border border-black/10 rounded-18 pb-2.5 px-2.5 ${
            index === 0 ? 'pt-2.5' : index === 1 ? 'pt-1.5' : 'pt-3'
          }`}
        >
          <div
            className={`${
              index === 0
                ? 'w-[47px] h-[47px]'
                : index === 1
                ? 'w-[56px] h-[56px]'
                : 'w-[42px] h-[42px]'
            }`}
          >
            <Image
              src={item.image}
              alt={item.label}
              width={50}
              height={50}
              className="w-full h-full"
            />
          </div>
          <p className="text-xs font-medium leading-none">{item.label}</p>
        </Link>
      ))}
    </div>
  );
}
