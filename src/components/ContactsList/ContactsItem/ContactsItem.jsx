import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations-contacts';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import CloseButton from 'react-bootstrap/CloseButton';

export const ContactsItem = ({ name, phone, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.contact__item}>
            <span>{name}</span>
            <span className={s.phone}>{phone}</span>
            <CloseButton
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
            />
            {/* <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
            >
                Delete
            </button> */}
        </div>
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
