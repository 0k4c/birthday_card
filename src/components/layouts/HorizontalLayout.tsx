import { Theme } from "../../themes";

interface LayoutProps {
  theme: Theme;
  name: string;
  date: string;
  time: string;
  location: string;
  message: string;
}

const HorizontalLayout: React.FC<LayoutProps> = ({ theme, name, date, time, location, message }) => {
  const cardStyles = {
    backgroundImage: theme.backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.fontColor,
    fontFamily: theme.fontFamily,
  };

  return (
    <div 
      className="w-full max-w-xl aspect-[16/9] rounded-lg shadow-2xl flex items-center justify-center p-8 transition-all duration-500"
      style={cardStyles}
    >
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Happy Birthday</h2>
          <p className="text-xl mb-6">{name || '〇〇さん'}</p>
        </div>
        <div className="text-left">
          <p className="text-md mb-4">{message || 'メッセージを入力...'}</p>
          <p className="text-sm"><strong>Date:</strong> {date || 'YYYY-MM-DD'}</p>
          <p className="text-sm"><strong>Time:</strong> {time || 'HH:MM'}</p>
          <p className="text-sm"><strong>Location:</strong> {location || '場所を入力...'}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalLayout;
