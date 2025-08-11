import { Advocate } from "@/types/advocates";
import { useEffect, useState } from "react";
import {formatPhoneNumber, formatSpecialtiesAlphabetically} from "../utils/formatAdvocates"

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
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
    fetch(`/api/advocates?search=${search}`)
     .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
          // Format phone number
        const formattedData = data?.data?.map((advocate: Advocate) => ({
          ...advocate,
          phoneNumber: formatPhoneNumber(advocate.phoneNumber?.toString()),
          specialties: formatSpecialtiesAlphabetically(advocate.specialties)
        }));
        setAdvocates(formattedData);
        setSuccess(true)
        setTotalCount(formattedData.length);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search]);

  return { advocates, loading, totalCount, error, success };
}
