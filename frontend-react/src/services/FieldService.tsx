import { Field } from "../models/Field";

export function useFieldService() {
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const fetchFieldsByPreset = async (presetName: string) => {
    const response = await fetch(serverUrl + "/fields/" + presetName, {
      method: "GET",
      credentials: "include", // dodaje ciasteczka
    });
    if (response.ok) {
      return (await response.json()) as Field[];
    }
    return [];
  };

  return { fetchFieldsByPreset };
}
