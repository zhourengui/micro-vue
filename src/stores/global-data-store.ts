import { defineStore } from "pinia";
import { ref } from "vue";
import { GlobalDataPayload } from "../interfaces";

export const useGlobalDataStore = defineStore("globalData", () => {
  const globalDataState = ref<GlobalDataPayload>({});

  function setGlobalDataState(data: GlobalDataPayload) {
    globalDataState.value = data;
  }

  return {
    globalDataState,
    setGlobalDataState,
  };
});
