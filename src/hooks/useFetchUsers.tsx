import axios from 'axios';
import { useState } from 'react'
import { UserPlaceholder } from '../types/user'

export const useFetchUsers = () => {
    const [userList, setUserList] = useState<UserPlaceholder[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        setIsLoading(true);
        setIsError(false);

        axios
            // .get<UserCustom[]>("http://localhost:3000/api/users")
            .get<UserPlaceholder[]>("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                const users = result.data.map((user) => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    website: user.website,
                }));
                setUserList(users);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    };

    return { userList, isLoading, isError, onClickFetchUser }
}
