import Logo from './components/layouts/Logo';
import './globals.css';
import { AppContextProvider } from './contexts/AppContext';

export const metadata = {
  title: 'Культура стиля',
  description: 'Интернет-магазин кроссовок',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <div className="max-w-base mx-auto overflow-hidden">
            <Logo />
            <main>{children}</main>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
