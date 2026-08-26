/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10171A",
        panel: "#182220",
        panel2: "#1D2926",
        line: "#26332F",
        paper: "#EDE6D6",
        "paper-dim": "#8FA39A",
        ember: "#E8763D",
        "ember-dim": "#B85A2C",
        streak: "#4FB286",
        flag: "#F2C94C",
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter Variable'", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
