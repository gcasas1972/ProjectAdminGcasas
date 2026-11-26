import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestor de proyectos",
  description: "Administración de proyectos, objetivos, materiales y colaboradores",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
