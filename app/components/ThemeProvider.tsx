'use client';

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We use React.ComponentProps to dynamically infer the types directly from the provider
// instead of trying to import a buried type declaration file.
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}