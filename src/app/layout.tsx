
import { globalStyles } from "../styles/global";
import { ButtonWhatsapp } from "../components/ButtonWhatsapp/";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: {
    default: "Wizen",
    template: "%s | Wizen",
  },
};

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
 
        <ButtonWhatsapp />
       
      </body>
    </html>
  );
}
