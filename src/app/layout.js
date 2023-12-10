import Logo from './components/layouts/Logo';
import './globals.css';
import { SearchContextProvider } from './contexts/SearchContext';

export const metadata = {
  title: 'Культура стиля',
  description: 'Интернет-магазин кроссовок',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SearchContextProvider>
          <div className="max-w-base mx-auto overflow-hidden">
            <Logo />
            <main>{children}</main>
          </div>
        </SearchContextProvider>
      </body>
    </html>
  );
}
