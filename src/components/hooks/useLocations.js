import { useState, useEffect } from 'react';

export const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllLocations = async () => {
      let all = [];
      let nextUrl = 'https://rickandmortyapi.com/api/location';

      while (nextUrl) {
        const res = await fetch(nextUrl);
        const data = await res.json();
        all = [...all, ...data.results];
        nextUrl = data.info.next;
      }

      setLocations(all);
      setIsLoading(false);
    };

    fetchAllLocations();
  }, []);

  return { locations, isLoading };
};
