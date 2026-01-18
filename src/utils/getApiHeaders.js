export const getApiHeaders = (
    method='GET',
    url="",
    data={},
    headers={
        accept: 'application/json',
        'content-type': 'application/json',
    },
) => {

    if(method === "GET") {
        return {
            method,
            url: `${import.meta.env.VITE_API_BASE_URL}${url ?? ''}`,
            params: data,
            headers,
        }
    } else {
        return {
            method,
            url: `${import.meta.env.VITE_API_BASE_URL}${url ?? ''}`,
            data: data,
            headers,
        }
    }
    
}