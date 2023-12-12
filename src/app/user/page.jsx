import Image from 'next/image';

import Button from '../components/common/Button';

export default function page() {
  return (
    <div>
      <div className="h-72 xs:h-80 grid place-content-center bg-brand-gray-100 pb-8 p-5">
        <div className="space-y-2">
          <div className="w-[150px] h-150 bg-[#C184D0] rounded-full overflow-hidden">
            <Image
              src="/assets/images/avatar.png"
              alt="User Image"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-center">User name</h3>
        </div>
      </div>

      <div className="relative divide-y divide-brand-gray-100 z-10 bg-white rounded-t-18 pt-6 -mt-5 px-5">
        <div className="space-y-3 pb-4">
          <h3>
            Ваш статус: <span className="text-brand-red ml-2">Серебро</span>
          </h3>

          <p>
            Ты получаешь <span className="text-brand-red">+50 баллов</span> за
            каждый заказ
          </p>
        </div>

        <div className="py-4">
          <p>
            У тебя нет завершенных заказов. Закажи и получи еще 3 товара, чтобы
            получить статус «БРОНЗА».
          </p>
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="space-y-3.5 text-base font-bold">
            <div>Статус</div>
            <p className="text-black">Серебро</p>
            <p className="text-black">Бронза</p>
            <p className="text-black">Залото</p>
          </div>
          <div className="space-y-3.5 text-end font-semibold">
            <div className="text-base font-bold">Баллов за заказ</div>
            <p className="text-black">
              +<span>50</span>
            </p>
            <p className="text-black">
              +<span>150</span>
            </p>
            <p className="text-black">
              +<span>250</span>
            </p>
          </div>
          <div className="space-y-3.5 text-end font-semibold">
            <div className="text-base font-bold">Заказов</div>
            <p className="text-black">0</p>
            <p className="text-black">3</p>
            <p className="text-black">10</p>
          </div>
        </div>

        <div className="space-y-5 py-4">
          <div>
            <h5 className="text-base font-bold">Телефон</h5>
            <p>
              Если привяжешь свой телефон, мы сможем перенести твои старые
              заказы в приложение
            </p>
          </div>
          <Button className="h-12 flex items-center gap-2.5  bg-black text-white text-base px-5 py-4">
            Привязать телефон
          </Button>
        </div>

        <div className="space-y-5 py-4">
          <div>
            <h5 className="text-base font-bold">Данные доставки</h5>
            <p>
              Чтобы не вводить каждый раз после заказа. Но если нужно будет
              заказать какой-то заказ в другое место — не проблема.
            </p>
          </div>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between text-sm font-semibold">
              <div>ФИО получателя</div>
              <div>Не указан</div>
            </div>
            <div className="flex items-center justify-between text-sm font-semibold">
              <div>Телефон</div>
              <div>Не указан</div>
            </div>
          </div>
          <Button className="h-12 flex items-center gap-2.5  bg-black text-white text-base px-5 py-4">
            Редактировать
          </Button>
        </div>

        <div className="space-y-4 pt-4 pb-10">
          <div>
            <div className="space-y-2">
              <h3 className="text-brand-red">Ресейл-аккаунт</h3>
              <p>
                Для оптовых покупателей. Оформи 50+ заказов и получи самый
                выгодный тариф.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="text-base font-bold">Условия</h5>
            <div>
              <p>Скидка на комиссию за заказ: 50%</p>
              <p>Нет начислений баллов</p>
              <p>Нет прогресса по статусу</p>
            </div>
          </div>
          <Button className="h-12 flex items-center gap-2.5  bg-black text-white text-base px-5 py-4">
            Подробнее в статье
          </Button>
        </div>
      </div>
    </div>
  );
}
