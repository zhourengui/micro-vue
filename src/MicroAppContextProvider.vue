<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useGlobalDataStore } from "./stores";
import { GlobalDataPayload, SingleDataPayload } from "./interfaces";

defineOptions({ name: "MicroAppContextProvider" });

const globalDataStore = useGlobalDataStore();
const { setGlobalDataState } = globalDataStore;

function globalDataListener(payload: GlobalDataPayload) {
  setGlobalDataState(payload);
}

function dataListener(payload: SingleDataPayload) {
  alert(`[Vue] 接收到主应用的数据: ${JSON.stringify(payload, null, 2)}`);
}

onMounted(() => {
  window.microApp?.addGlobalDataListener?.(globalDataListener, true);
  window?.microApp?.addDataListener?.(dataListener, true);
});

onBeforeUnmount(() => {
  window.microApp?.removeGlobalDataListener?.(globalDataListener);
  window?.microApp?.removeDataListener?.(dataListener);
});
</script>

<template>
  <slot />
</template>
