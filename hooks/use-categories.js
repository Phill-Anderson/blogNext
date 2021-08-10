import useSWR from "swr";

export const useCategories = (categories) => {
    const { data, error } = useSWR(`/api/categories`, {
        initialData: categories,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            console.log("error try....");
            // Never retry on 404.
            if (error.status === 404) return;

            // Never retry for a specific key.
            if (key === "/api/user") return;

            // Only retry up to 10 times.
            if (retryCount >= 10) return;

            // Retry after 5 seconds.
            setTimeout(() => revalidate({ retryCount: retryCount + 1 }), 9000);
        },
        //refreshInterval: 1,
    });

    return {
        data,
        isLoading: !error && !data,
        error,
    };
};