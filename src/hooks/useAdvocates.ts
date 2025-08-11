import { Advocate } from "@/types/advocates";
import { useEffect, useState } from "react";

interface UseAdvocatesParams {
  search?: string;
  page?: number;
  limit?: number;
}

export function useAdvocates({search = ""}: UseAdvocatesParams) {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/advocates?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAdvocates(data.data);
        setTotalCount(data.data.length);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search]);

  return { advocates, loading, totalCount, error };
}
