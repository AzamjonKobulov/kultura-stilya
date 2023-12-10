import Image from 'next/image';

export default function page() {
  return (
    <div className="space-y-5 px-5 pt-5">
      {/* Баллов */}
      <div
        href="/select-and-order"
        className="border h-150 relative flex rounded-18 overflow-hidden"
      >
        <div className="w-1/2 flex pt-8 pl-7">
          <div className="space-y-0">
            <h2 className=" text-3xl font-semibold leading-none">0</h2>
            <div className="space-y-5 font-light leading-none">
              <p>Баллов</p>
              <p>Баллов 1 балл = 1 ₽</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/assets/images/bag.png"
            className="w-full h-full"
            width={150}
            height={150}
            alt="Bonus"
          />
        </div>
      </div>
      <p className="text-sm">
        Дальше ты будешь получать +50 баллов за каждый завершенный заказ.{' '}
      </p>
      <div>
        <h3>История</h3>
        <p className="text-sm">
          Пока что у тебя нет истории начислений баллов.
        </p>
      </div>
    </div>
  );
}
