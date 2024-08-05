<script setup lang="ts">
import { storeToRefs } from "pinia";
import HelloWorld from "./components/HelloWorld.vue";
import MicroAppContextProvider from "./MicroAppContextProvider.vue";
import { useGlobalDataStore } from "./stores/global-data-store";
import { useMicroApp } from "./hooks";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";

const { globalDataState } = storeToRefs(useGlobalDataStore());
const { forceDispatch } = useMicroApp();
</script>

<template>
  <MicroAppContextProvider>
    <div class="flex flex-col items-center">
      MicroAppCommunication:
      {{ JSON.stringify(globalDataState, null, 2) }}

      <button
        @click="
          () =>
            forceDispatch({
              payload: { random: Math.random() },
              channel: MicroAppCommunicationChannel.VUE_MAIN_CHANNEL1,
            })
        "
      >
        向主应用发送数据
      </button>
      <div class="flex flex-col items-center">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue" />
      </div>
    </div>
  </MicroAppContextProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
