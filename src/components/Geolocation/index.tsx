"use client"

import { IGeoLocation, getGeolocation } from "@/utils/getGeolocation";
import { useEffect, useState } from "react";

export default function Geolocation() {
    const [location, setLocation] = useState<IGeoLocation | null>(null);

    useEffect(() => {
      getGeolocation()
        .then((data: IGeoLocation) => {
          setLocation(data);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        {location && (
          <p>
             {location.city}
             {location.state}
          </p>
        )}
      </div>
    );
  }
  