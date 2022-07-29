import { useEffect, useState } from "react";
import useGeoLocation from "./useGeolocation";

export function getDistance(pointA: any, pointB: any) {
  const lat1 = pointA.lat / (180 / Math.PI);
  const lng1 = pointA.lng / (180 / Math.PI);
  const lat2 = pointB.lat / (180 / Math.PI);
  const lng2 = pointB.lng / (180 / Math.PI);
  const distance = 1609.344 * 3963 * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1));
  return distance;
}

export default function useDistance({ lat, lng }: any) {
  const { pos: currPos, permittedStatus } = useGeoLocation();

  const [distance, setDistance] = useState<any>(null);
  useEffect(() => {
    if (permittedStatus && currPos) {
      setDistance(getDistance({ lat, lng }, currPos));
    }
  }, [permittedStatus, currPos]);

  return { distance, permittedStatus };
}
