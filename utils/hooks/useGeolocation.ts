import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [pos, setPos] = useState<any>({});
  const [permittedStatus, setPermittedStatus] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPos({ lat: position.coords.latitude, lng: position.coords.longitude });
          setPermittedStatus(true);
        },
        (error) => {
          setPermittedStatus(false);
          return;
        }
      );
    } else {
      setPermittedStatus(false);
    }
  }, []);

  return { pos, permittedStatus };
}
