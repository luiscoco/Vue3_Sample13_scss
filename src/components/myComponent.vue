<template>
  <div class="my-component">
    <h1>{{ message }}</h1>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "../my-component.scss";
import { changeColor } from "../my-component";

const message = ref("Hello, Vue 3!");
</script>
