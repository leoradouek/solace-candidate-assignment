import { useEffect, useState } from "react";

interface UseAdvocatesParams {
  search?: string;
  page?: number;
  limit?: number;
}

export function useAdvocates({search = ""}: UseAdvocatesParams) {
  const [advocates, setAdvocates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/advocates?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAdvocates(data.data);
        setTotalCount(data.totalCount);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search]);

  return { advocates, loading, totalCount, error };
}
