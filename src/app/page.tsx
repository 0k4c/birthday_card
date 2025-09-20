"use client";

import { useState } from 'react';
import { themes, Theme } from '../themes';
import DefaultLayout from '../components/layouts/DefaultLayout';
import HorizontalLayout from '../components/layouts/HorizontalLayout';

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

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [selectedLayout, setSelectedLayout] = useState<LayoutKey>('default');
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const [copySuccess, setCopySuccess] = useState('');

  const handleGenerateLink = () => {
    const cardData = {
      themeId: selectedTheme.id,
      layoutKey: selectedLayout,
      name,
      date,
      time,
      location,
      message,
    };

    const encodedData = btoa(JSON.stringify(cardData));
    const url = `${window.location.origin}/card?data=${encodedData}`;

    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess('リンクをコピーしました！');
      setTimeout(() => setCopySuccess(''), 3000);
    }, () => {
      setCopySuccess('コピーに失敗しました。');
      setTimeout(() => setCopySuccess(''), 3000);
    });
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 transition-all duration-500"
      style={{
        backgroundImage: selectedTheme.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-rose-50/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border-2 border-white">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            招待状を作成
          </h1>

          {/* Layout Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">1. レイアウトを選択</h2>
            <div className="flex justify-center gap-4">
              {(Object.keys(layouts) as LayoutKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedLayout(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${selectedLayout === key ? 'bg-pink-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'}`}>
                  {layouts[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">2. テーマを選択</h2>
            <div className="flex justify-center gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`w-16 h-16 rounded-full border-4 transition-all ${selectedTheme.id === theme.id ? 'border-pink-500 scale-110 shadow-lg' : 'border-gray-300'}`}
                  style={{ backgroundImage: theme.backgroundImage, backgroundSize: 'cover' }}
                  aria-label={theme.name}
                ></button>
              ))}
            </div>
          </div>

          <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">3. 内容を入力</h2>
          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">誕生日を迎える人</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2" placeholder="例：山田花子" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">日時</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full px-3 py-2" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">時間</label>
              <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1 block w-full px-3 py-2" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">場所</label>
              <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full px-3 py-2" placeholder="例：夢の国" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full px-3 py-2" placeholder="一緒にお祝いしましょう！"></textarea>
            </div>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={handleGenerateLink}
              className="w-full py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform hover:scale-105 transition-transform"
            >
              💌 共有リンクを作成＆コピー
            </button>
            {copySuccess && <p className="mt-4 text-green-600 font-semibold">{copySuccess}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
