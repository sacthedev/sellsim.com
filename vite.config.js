import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
//const targetURL = "https://www.motorola.com/us/smartphones-moto-g-power/p";
// const targetURL = "https://www.gsmarena.com/motorola_moto_g_power-10076.php";

export default defineConfig({
  plugins: [reactRefresh()],
});
