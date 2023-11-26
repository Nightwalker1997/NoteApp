"use client";
import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props{
    _id: string;
}

const DeleteBTN : FC<Props> = ({_id}) => {
    const router = useRouter();
    const deleteFromMonogDB = async() => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_NOTE_BASE_URL}/api/notes?id=${_id}`, {method: "DELETE"}); 
            if(res.ok) {
                router.refresh();
            }
        }
        catch (err) {
            console.error(err);
        }
    };

    return(
        <span>
            <FontAwesomeIcon 
                icon={faTrash} 
                onClick={() => {
                    deleteFromMonogDB();}}
            />
        </span>
    );
}

export default DeleteBTN;