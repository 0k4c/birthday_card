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
  const [isCardOpen, setIsCardOpen] = useState(false);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const LayoutComponent = layouts[selectedLayout].component;

  return (
    <main
      className="flex min-h-screen flex-col items-center p-4 sm:p-8 transition-all duration-500"
      style={{
        backgroundImage: selectedTheme.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">
        {/* --- Editor Section --- */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            招待状を作成
          </h1>

          {/* Layout Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">レイアウトを選択</h2>
            <div className="flex justify-center gap-4">
              {(Object.keys(layouts) as LayoutKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedLayout(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${selectedLayout === key ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {layouts[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">テーマを選択</h2>
            <div className="flex justify-center gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`w-16 h-16 rounded-full border-4 ${selectedTheme.id === theme.id ? 'border-pink-500' : 'border-gray-300'}`}
                  style={{ backgroundImage: theme.backgroundImage, backgroundSize: 'cover' }}
                  aria-label={theme.name}
                ></button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">誕生日を迎える人</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm" placeholder="例：山田花子" />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">日時</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">時間</label>
              <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">場所</label>
              <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm" placeholder="例：夢の国" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
              <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm" placeholder="一緒にお祝いしましょう！"></textarea>
            </div>
          </form>
        </div>

        {/* --- Preview Section --- */}
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-white text-center mb-4 bg-black/50 px-4 py-2 rounded">ライブプレビュー</h2>
            <div className="scene w-full max-w-xl">
              <div className={`card ${isCardOpen ? 'is-flipped' : ''}`} onClick={() => setIsCardOpen(!isCardOpen)}>
                <div className="card__face card__face--front flex justify-center items-center rounded-lg shadow-2xl" style={{backgroundImage: selectedTheme.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <p className="text-2xl font-bold p-4 rounded-lg bg-black/50" style={{color: selectedTheme.fontColor}}>タップして開く</p>
                </div>
                <div className="card__face card__face--back">
                  <LayoutComponent 
                      theme={selectedTheme} 
                      name={name} 
                      date={date} 
                      time={time} 
                      location={location} 
                      message={message} 
                  />
                </div>
              </div>
            </div>
            <button onClick={() => setIsCardOpen(false)} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md">カードを閉じる</button>
        </div>

      </div>
    </main>
  );
}
