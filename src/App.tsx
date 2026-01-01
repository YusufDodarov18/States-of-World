
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./theme/theme-provider";
import { router } from "./routes/route";

export default function App() {
  return (
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
