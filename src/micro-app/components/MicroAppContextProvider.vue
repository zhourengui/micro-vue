<script setup lang="ts">
import {
  MicroAppCommunicatioPayload,
  useMicroAppCommunicationStore,
} from "@/src/stores/micro-app-communication-store";
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted, toRaw } from "vue";

defineOptions({ name: "MicroAppContextProvider" });

const store = useMicroAppCommunicationStore();
const { setMicroAppCommunication } = store;
const { microAppCommunicationState } = storeToRefs(store);

function globalDataListener(payload: MicroAppCommunicatioPayload) {
  setMicroAppCommunication({
    ...toRaw(microAppCommunicationState.value),
    [payload.channel]: payload,
  });
}

function dataListener(payload: MicroAppCommunicatioPayload) {
  setMicroAppCommunication({
    ...toRaw(microAppCommunicationState.value),
    [payload.channel]: payload,
  });
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
