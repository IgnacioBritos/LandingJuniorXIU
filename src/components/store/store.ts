import { create } from 'zustand';

interface ThemeState {
  theme: boolean;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: JSON.parse(localStorage.getItem('theme') || 'true'), // Default to true if no value in localStorage
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.theme;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return { theme: newTheme };
    });
  },
}));
    