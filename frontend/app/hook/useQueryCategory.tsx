import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useQueryCategory= () => {
    const {data, isLoading} = useQuery({
        queryKey: ["category"],
        queryFn: async() => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")

            return response.data
        }
    })

    return {data, isLoading};
}