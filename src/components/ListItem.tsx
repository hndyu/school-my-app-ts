import React, { FC } from 'react'
import type { UserPlaceholder } from '../types/user'

export const ListItem: FC<UserPlaceholder> = (props) => {
    const { id, name, email, phone, website } = props;

    return (
        <p>
            {id}:{name} (email: {email}) (phone: {phone}) (website: {website})
        </p>
    )
}

// ListItem.defaultProps = {
//     personalColor: "grey"
// };