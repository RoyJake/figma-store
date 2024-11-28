'use client'

import "./globals.css";
import { Provider } from "react-redux"
import { store } from "./lib/redux/redux_store.ts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
      <body>
        {children}
      </body>
      </Provider>
    </html>
  );
}
