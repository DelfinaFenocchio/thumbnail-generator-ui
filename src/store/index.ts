import { type PaletteMode } from '@mui/material';
import { create } from 'zustand';

interface IStore {
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
}
const useStore = create<IStore>((set, get) => ({
  themeMode: 'dark',
  toggleThemeMode: () => {
    const theme = get().themeMode;
    set({ themeMode: theme === 'light' ? 'dark' : 'light' });
  },
}));

export default useStore;
