import { ref } from "vue";

export const changeColor = () => {
  color.value = color.value === "red" ? "blue" : "red";
};

export const color = ref("red");
