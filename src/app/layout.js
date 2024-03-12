import ReduxProvider from "@/store/Provider";

export const metadata = {
  title: "Your App",
  description: "This is a example for use redux in next.js versión 13 >=",
};

export default function RootLayout({ children }) {
  return (

<html lang="en">
        <body >
        <ReduxProvider>
          {children}
          </ReduxProvider>
        </body>
      </html>
      
  );
}