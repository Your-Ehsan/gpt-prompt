import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "AI — Prompt",
  description: "Prompts using AI — Chat GPT-3",
};

const RootLayout = ({ children })  => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {/* Add gradients to background using global css classes */}
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
}

export default RootLayout