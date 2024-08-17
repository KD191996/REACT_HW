import RouterNames from './routerNames.js';
import ContactForm from '../components/ContactForm.jsx';
import ContactList from '../components/ContactList.jsx';

const routerObjects = [
    {
        id: 0,
        path: RouterNames.homePage,
        element: <ContactList />,
    },
    {
        id: 1,
        path: RouterNames.addPage,
        element: <ContactForm />,
    },
    {
        id: 2,
        path: RouterNames.editPage,
        element: <ContactForm />,
    },
];

export default routerObjects;