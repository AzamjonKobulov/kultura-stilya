'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';
import Button from '../components/common/Button';

export default function Page() {
  const [copyMessage, setCopyMessage] = useState('');

  const textAreaRef = useRef(null);

  const TgLink = 'https://t.me/bot?start=434208998';

  const handleCopyLink = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
      setCopyMessage('Ссылка скопирована!');
    }
  };
  return (
    <div className="">
      <Image
        src="/assets/images/legs.png"
        alt="Legs"
        width={1000}
        height={1400}
        className="h-80 w-full"
      />
      <div className="relative divide-y divide-brand-gray-100 z-10 bg-white rounded-t-18 pt-6 -mt-5 px-5">
        <div className="space-y-2 pb-9">
          <h3>
            Приглашай друзей! Дарим <br /> по
            <span className="text-brand-red ml-2">500 рублей</span> каждому!
          </h3>
          <div className="space-y-5">
            <p>
              Получи за каждое приглашение по твоей реферальной ссылке 500
              баллов. Также 500 баллов получит твой друг.
            </p>
            <p>1 балл = 1 рубль. Баллами можно оплачивать до 100% покупок.</p>
          </div>
        </div>

        <div className="space-y-5 py-4">
          <div>
            <h5 className="text-base font-bold">Ссылка на приглашение</h5>
            <a
              href={TgLink}
              className="text-sm text-brand-red underline underline-offset-4"
            >
              <textarea
                ref={textAreaRef}
                value={TgLink}
                style={{ position: 'absolute', left: '-9999px' }}
                readOnly
              />
              {TgLink}
            </a>
          </div>
          <Button
            onClick={() => {
              handleCopyLink();
              setTimeout(() => {
                setCopyMessage('');
              }, 2000);
            }}
            className={`h-12 flex items-center gap-2.5 text-white text-base px-5 py-4 ${
              copyMessage ? 'bg-brand-red' : 'bg-black'
            }`}
          >
            {copyMessage ? (
              <span className="flex items-center gap-2.5">
                {copyMessage}{' '}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
              </span>
            ) : (
              <>
                Скопировать ссылку
                <span>
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 17V19C13 20.1046 12.1046 21 11 21H3C1.89543 21 1 20.1046 1 19V8C1 6.89543 1.89543 6 3 6H5M11.6847 1H7C5.89543 1 5 1.89543 5 3V15C5 16.1046 5.89543 17 7 17H15C16.1046 17 17 16.1046 17 15V6.24162C17 5.7034 16.7831 5.18789 16.3982 4.81161L13.0829 1.56999C12.7092 1.2046 12.2074 1 11.6847 1Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </>
            )}
          </Button>
        </div>

        <div className="space-y-2 py-5">
          <h5 className="text-base font-bold">Условия</h5>
          <div className="space-y-5">
            <p>
              Баллы начисляются после того как заказ пользователя, перешедшего
              по реферальной ссылке, был отправлен в Россию.
            </p>
            <p>
              Акция действует до 1 декабря. После 1 декабря вы будете получать
              +250 баллов за приглашенного друга, а другу ничего не начислится.
            </p>
          </div>
        </div>

        <div className="space-y-1 pt-5 pb-14">
          <div className="flex items-center justify-between">
            <p>Переходов по ссылке</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Сделали заказ</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Отправили в РФ</p>
            <p>0</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Всего баллов заработано</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
