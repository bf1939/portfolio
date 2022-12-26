import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const myTheme = {
  dark: false,
  colors: {
    background: "#ECECE7",
    surface: "#795548",
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
