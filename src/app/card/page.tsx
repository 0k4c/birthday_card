'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { themes, Theme } from '../../themes';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import HorizontalLayout from '../../components/layouts/HorizontalLayout';

const layouts = {
  default: {
    name: '縦長',
    component: DefaultLayout,
  },
  horizontal: {
    name: '横長',
    component: HorizontalLayout,
  },
};

type LayoutKey = keyof typeof layouts;

interface CardData {
  themeId: string;
  layoutKey: LayoutKey;
  name: string;
  date: string;
  time: string;
  location: string;
  message: string;
}

function CardView() {
  const searchParams = useSearchParams();
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      try {
        const decodedData = JSON.parse(atob(data));
        setCardData(decodedData);
      } catch (error) {
        console.error("Failed to parse card data:", error);
      }
    }
  }, [searchParams]);

  if (!cardData) {
    return <div className="text-white text-2xl">読み込み中...</div>;
  }

  const selectedTheme = themes.find(t => t.id === cardData.themeId) || themes[0];
  const LayoutComponent = layouts[cardData.layoutKey]?.component || DefaultLayout;

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-4 transition-all duration-500"
      style={{
        backgroundImage: selectedTheme.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="present-box-scene">
        <div className={`present-box ${isRevealed ? 'is-opening' : ''}`} onClick={() => !isRevealed && setIsRevealed(true)}>
          <div className="lid"></div>
          <div className="box"></div>
        </div>
        <div className="revealed-card">
          <LayoutComponent {...cardData} theme={selectedTheme} />
        </div>
      </div>
      {isRevealed && (
        <button onClick={() => setIsRevealed(false)} className="mt-20 px-4 py-2 bg-gray-700/70 text-white rounded-md backdrop-blur-sm">
          プレゼントを閉じる
        </button>
      )}
    </main>
  );
}

export default function CardPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-gray-800 text-white">読み込み中...</div>}>
      <CardView />
    </Suspense>
  );
}
