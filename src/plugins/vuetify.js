import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const myTheme = {
  dark: false,
  colors: {
    background: "#ffffff",
    surface: "#14243e",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,
    },
  },
});
