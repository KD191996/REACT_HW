import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemText,
    Button,
    Typography,
    Box,
} from '@mui/material';
import { deleteContact } from '../store/slices/contactSlices.js';
import routerNames from '../routerConfig/routerNames.js';

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    return (
        <Box mt={4}>
            <Typography variant="h3" align="center">Contacts</Typography>
            <Button
                component={Link}
                to={routerNames.addPage}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
                Add Contact
            </Button>
            <List>
                {contacts.map((contact) => (
                    <ListItem key={contact.id}>
                        <ListItemText
                            primary={contact.name}
                            secondary={contact.phoneNumber}
                        />
                        <Button
                            component={Link}
                            to={`${routerNames.editPage.replace(':id', contact.id)}`}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => dispatch(deleteContact(contact.id))}
                            color="error"
                        >
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ContactList;