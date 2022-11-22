import useSWR from "swr";

const response = (url: string) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Fetcher(endpoint: string) {
    const { data, error } = useSWR(`${API_URL}${endpoint}`, response);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}
