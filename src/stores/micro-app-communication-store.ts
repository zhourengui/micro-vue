import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface MicroAppCommunicatioPayload {
  channel: MicroAppCommunicationChannel;
  payload: Record<PropertyKey, unknown>;
}

type MicroAppCommunicationState = Partial<{
  [K in MicroAppCommunicationChannel]: MicroAppCommunicatioPayload;
}>;

export const useMicroAppCommunicationStore = defineStore("globalData", () => {
  const microAppCommunicationState = ref<MicroAppCommunicationState>({});

  const globalDataState = computed(
    () =>
      microAppCommunicationState.value[
        MicroAppCommunicationChannel.MICRO_APP_COMMUNICATION_CHANNEL_GLOBAL_DATA
      ]
  );

  function setMicroAppCommunication(data: MicroAppCommunicationState) {
    microAppCommunicationState.value = data;
  }

  return {
    microAppCommunicationState,
    globalDataState,
    setMicroAppCommunication,
  };
});
