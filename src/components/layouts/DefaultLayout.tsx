import { Theme } from "../../themes";

interface LayoutProps {
  theme: Theme;
  name: string;
  date: string;
  time: string;
  location: string;
  message: string;
}

const DefaultLayout: React.FC<LayoutProps> = ({ theme, name, date, time, location, message }) => {
  const cardStyles = {
    backgroundImage: theme.backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.fontColor,
    fontFamily: theme.fontFamily,
  };

  return (
    <div 
      className="w-full max-w-md aspect-[9/16] rounded-lg shadow-2xl flex flex-col justify-between p-8 text-center transition-all duration-500"
      style={cardStyles}
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold mb-4">Happy Birthday</h2>
        <p className="text-3xl mb-6">{name || '〇〇さん'}</p>
        <p className="text-xl mb-2">{message || 'メッセージを入力...'}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-lg"><strong>Date:</strong> {date || 'YYYY-MM-DD'}</p>
        <p className="text-lg"><strong>Time:</strong> {time || 'HH:MM'}</p>
        <p className="text-lg"><strong>Location:</strong> {location || '場所を入力...'}</p>
      </div>
    </div>
  );
};

export default DefaultLayout;
