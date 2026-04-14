import { StoreProvider } from "@/lib/StoreContext";
import "./global.css";

export const metadata = {
  title: "PredictAI",
  description: "Predictive Maintenance Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
