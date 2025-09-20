"use client";

import { useState } from 'react';
import { themes, Theme } from '../themes';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);

  return (
    <main
      className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24 transition-all duration-500"
      style={{
        backgroundImage: selectedTheme.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          style={{ color: selectedTheme.fontColor, fontFamily: selectedTheme.fontFamily }}
        >
          誕生日カード作成
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-center mb-4" style={{ color: selectedTheme.fontColor }}>テーマを選択</h2>
          <div className="flex justify-center gap-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className={`w-16 h-16 rounded-full border-2 ${selectedTheme.id === theme.id ? 'border-pink-500' : 'border-transparent'}`}
                style={{ backgroundImage: theme.backgroundImage, backgroundSize: 'cover' }}
                aria-label={theme.name}
              ></button>
            ))}
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium" style={{ color: selectedTheme.fontColor }}>
              誕生日を迎える人
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="例：山田花子"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium" style={{ color: selectedTheme.fontColor }}>
              日時
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium" style={{ color: selectedTheme.fontColor }}>
              時間
            </label>
            <input
              type="time"
              id="time"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium" style={{ color: selectedTheme.fontColor }}>
              場所
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="例：ディズニーランド"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium" style={{ color: selectedTheme.fontColor }}>
              メッセージ
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="誕生日おめでとう！"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${selectedTheme.buttonColor} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
            >
              プレビュー
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
