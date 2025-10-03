import React from 'react'
import { useFetchUsers } from './hooks/useFetchUsers'

const AppCustom = () => {
    const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

    return (
        <div>
            <button onClick={onClickFetchUser}>ユーザー取得</button>
            {isError && <p style={{ color: "red" }}>エラーが発生しました。</p>}
            {isLoading ? (
                <p>データ取得中です</p>
            ) : (
                userList.map((user) => (
                    <p key={user.id}>{`${user.id}: ${user.name} (email: ${user.email}) (phone: ${user.phone})`}</p>
                ))
            )}
        </div>
    )
}

export default AppCustom