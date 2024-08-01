import { GlobalData } from "@/generated/proto/global_data_pb";
import { useGlobalDataStore } from "@/src/stores/global-data-store";
import { onBeforeUnmount, onMounted } from "vue";

export const useMicroApp = () => {
  const globalDataStore = useGlobalDataStore();
  const { setGlobalData } = globalDataStore;

  function globalDataListener(globalData: GlobalData.AsObject) {
    setGlobalData(globalData);
  }

  onMounted(() => {
    window.microApp?.addGlobalDataListener?.(globalDataListener, true);
  });

  onBeforeUnmount(() => {
    window.microApp?.removeGlobalDataListener?.(globalDataListener);
  });
};
