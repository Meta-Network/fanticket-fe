import axios from "axios";

export const rawClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

export const swrFetcher = (url: string) => rawClient.get(url).then(res => res.data)

export class BackendClient {
    static async getTokenList() {
        return rawClient.get('/token');
    }
}