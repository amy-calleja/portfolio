import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icons({name}) {
    return(
        <FontAwesomeIcon icon={name} className="icons" />
    );
}