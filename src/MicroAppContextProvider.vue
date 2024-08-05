<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useMicroAppDataHandler } from "./hooks";

defineOptions({ name: "MicroAppContextProvider" });

const { microAppDataHandler, microAppGlobalDataHandler } =
  useMicroAppDataHandler();

onMounted(() => {
  window.microApp?.addGlobalDataListener?.(microAppGlobalDataHandler, true);
  window?.microApp?.addDataListener?.(microAppDataHandler, true);
});

onBeforeUnmount(() => {
  window.microApp?.removeGlobalDataListener?.(microAppGlobalDataHandler);
  window?.microApp?.removeDataListener?.(microAppDataHandler);
});
</script>

<template>
  <slot />
</template>
