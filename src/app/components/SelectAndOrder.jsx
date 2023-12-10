import Link from 'next/link';

export default function SelectAndOrder() {
  return (
    <div className="grid grid-cols-2 gap-y-2.5 gap-x-5 mt-5 bg-no-repeat bg-cover bg-bottom rounded-18">
      {/* Выбрать и заказать */}
      <Link
        href="/how-to-order"
        className="border h-40 col-span-2 relative flex items-center justify-center bg-block-1 bg-cover bg-no-repeat rounded-18 overflow-hidden"
      >
        <span className="w-8 h-8 absolute top-2.5 right-2 grid place-content-center rounded-full overflow-hidden bg-brand-red">
          <svg
            className="stroke-white"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9401 13.6366V5.15128H5.45482"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9401 5.15128L4.2426 14.8487"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="text-white space-y-0">
          <h2 className=" text-3xl font-semibold text-white leading-none">
            Выбрать и заказать
          </h2>
          <p className="font-light leading-none">Как сделать заказ?</p>
        </div>
      </Link>
      {/* Баллов */}
      <Link
        href="/bonus"
        className="border h-40 relative flex items-end justify-center bg-block-2 bg-cover bg-no-repeat rounded-18 overflow-hidden pb-8"
      >
        <span className="w-8 h-8 absolute top-2.5 right-2 grid place-content-center rounded-full overflow-hidden bg-brand-red">
          <svg
            className="stroke-white"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9401 13.6366V5.15128H5.45482"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9401 5.15128L4.2426 14.8487"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="text-white space-y-0">
          <h2 className=" text-3xl font-semibold text-white leading-none">0</h2>
          <div className="space-y-5 font-light leading-none">
            <p>Баллов</p>
            <p>Баллов 1 балл = 1 ₽</p>
          </div>
        </div>
      </Link>
      {/* Приглашай друзей */}
      <Link
        href="/select-and-order"
        className="border h-40 relative flex items-end justify-center bg-block-3 bg-cover bg-no-repeat rounded-18 overflow-hidden pb-8"
      >
        <span className="w-8 h-8 absolute top-2.5 right-2 grid place-content-center rounded-full overflow-hidden bg-brand-red">
          <svg
            className="stroke-white"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9401 13.6366V5.15128H5.45482"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9401 5.15128L4.2426 14.8487"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className=" w-32 text-white space-y-0">
          <h2 className=" text-3xl font-semibold text-white leading-none">
            500 <span>₽</span>
          </h2>
          <p className="font-light leading-none">
            Приглашай друзей! Дарим по 500 рублей каждому!
          </p>
        </div>
      </Link>
    </div>
  );
}
