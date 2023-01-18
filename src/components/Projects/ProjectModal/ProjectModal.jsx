import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import './ProjectModal.css';

function ProjectModal(props) {

    const data = props.data;

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id ="projectmodal-bootstrap-overrides"
        >
            <Modal.Header>
                <CloseButton variant="white" onClick={props.onHide}/>
            </Modal.Header>
            <Modal.Body>
                <img   src={data.image} alt={data.projectName} width="100%" height="100%"></img>
            </Modal.Body>
        </Modal>
    );
}

export default ProjectModal;