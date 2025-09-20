"use client";

import { useState } from 'react';
import { themes, Theme } from '../themes';

export default function Home() {
  // State for the selected theme
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);

  // State for the form inputs
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const cardStyles = {
    backgroundImage: selectedTheme.backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: selectedTheme.fontColor,
    fontFamily: selectedTheme.fontFamily,
  };

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
            <div className="w-full max-w-md aspect-[9/16] rounded-lg shadow-2xl flex flex-col justify-between p-8 text-center transition-all duration-500" style={cardStyles}>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h2 className="text-4xl font-bold mb-4">Happy Birthday</h2>
                    <p className="text-2xl mb-6">{name || '〇〇さん'}</p>
                    <p className="text-lg mb-2">{message || 'メッセージを入力...'}</p>
                </div>
                <div className="flex-shrink-0">
                    <p className="text-lg"><strong>Date:</strong> {date || 'YYYY-MM-DD'}</p>
                    <p className="text-lg"><strong>Time:</strong> {time || 'HH:MM'}</p>
                    <p className="text-lg"><strong>Location:</strong> {location || '場所を入力...'}</p>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}