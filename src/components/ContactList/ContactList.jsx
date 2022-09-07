import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getContacts, deleteContact } from 'redux/operations';
import s from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const onDelete = id => {
        dispatch(deleteContact(id));
    };

    const visibleList = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
    );

    return visibleList.length > 0 ? (
        <ul className={s.list}>
            {visibleList.map(({ name, phone, id }) => (
                <li className={s.item} key={id}>
                    <p>
                        {name} : {phone}
                    </p>
                    <button
                        className={s.button}
                        type="button"
                        title="delete contact"
                        onClick={() => onDelete(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    ) : (
        <div className={s.list}>Contacts is empty</div>
    );
};

export default ContactList;
