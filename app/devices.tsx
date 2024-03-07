"use client";
import { useMediaDevices } from "react-media-devices";

export default function MediaDevices() {
  const { devices, loading } = useMediaDevices({
    constraints: { video: true, audio: false },
    onError: (error) => {
      debugger;
      alert(error);
    },
  });

  console.log({ loading });

  return (
    <>
      <p>loading: {loading + ""}</p>
      {devices?.map((d) => (
        <li key={d.deviceId}>{d.label}</li>
      ))}
    </>
  );
}
