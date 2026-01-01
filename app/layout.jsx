import "../styles/globals.css";
import RootClient from "../src/components/RootClient";

export const metadata = {
  title: "Locafy",
  description: "Home Maintenance Business Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
