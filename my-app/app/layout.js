import "./globals.css";
import "./style/style.css";
import HEADER from "./component/include/Header";
import FOOTER from "./component/include/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HEADER />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
