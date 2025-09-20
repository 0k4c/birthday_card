export interface Theme {
  id: string;
  name: string;
  backgroundImage: string;
  fontColor: string;
  buttonColor: string;
  fontFamily: string;
}

export const themes: Theme[] = [
  {
    id: 'castle',
    name: 'シンデレラ城',
    backgroundImage: 'url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    fontColor: '#333333',
    buttonColor: 'bg-blue-400',
    fontFamily: 'serif',
  },
  {
    id: 'forest',
    name: '魔法の森',
    backgroundImage: 'url("https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    fontColor: '#ffffff',
    buttonColor: 'bg-green-500',
    fontFamily: 'sans-serif',
  },
  {
    id: 'starlight',
    name: '星空の夜',
    backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    fontColor: '#ffffff',
    buttonColor: 'bg-purple-500',
    fontFamily: 'cursive',
  },
];
