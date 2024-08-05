import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalDataStore = defineStore("globalData", () => {
  const globalDataState = ref<MicroAppGlobalDataPayload>({});

  function setGlobalDataState(data: MicroAppGlobalDataPayload) {
    globalDataState.value = data;
  }

  return {
    globalDataState,
    setGlobalDataState,
  };
});
