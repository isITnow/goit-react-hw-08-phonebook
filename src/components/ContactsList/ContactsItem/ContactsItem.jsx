import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations-contacts';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { selectIsLoading } from 'redux/contacts/selector-contacts';

export const ContactsItem = ({ name, phone, id }) => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <div className={s.contact__item}>
            <span>{name}</span>
            <span className={s.phone}>{phone}</span>
            <CloseButton
                disabled={isLoading}
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
            />
        </div>
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
