import { defineStore } from "pinia";
import { GlobalData } from "@/generated/proto/global_data_pb";
import { ref } from "vue";

export const useGlobalDataStore = defineStore("globalData", () => {
  const globalData = ref<GlobalData.AsObject>({ counter: 0 });

  function setGlobalData(data: GlobalData.AsObject) {
    globalData.value = data;
  }

  return {
    globalData,
    setGlobalData,
  };
});
