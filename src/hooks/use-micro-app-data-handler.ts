import { MicroAppCommunicationChannel } from "@/generated/proto/element";
import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";
import { useGlobalDataStore } from "../stores";

export const useMicroAppDataHandler = () => {
  const globalDataStore = useGlobalDataStore();
  const { setGlobalDataState } = globalDataStore;

  const microAppDataHandler = (p: MicroAppSinigleDataPayload) => {
    const { payload, channel } = p;
    switch (channel) {
      case MicroAppCommunicationChannel.MAIN_VUE_CHANNEL1: {
        alert(`[Vue] 接收到主应用的数据: ${JSON.stringify(payload, null, 2)}`);
        break;
      }
    }
  };

  const microAppGlobalDataHandler = (payload: MicroAppGlobalDataPayload) => {
    setGlobalDataState(payload);
  };

  return { microAppDataHandler, microAppGlobalDataHandler };
};
