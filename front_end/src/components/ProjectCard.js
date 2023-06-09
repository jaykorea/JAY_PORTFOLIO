import { Col, Modal, Button} from "react-bootstrap";
import { useState } from "react";
import './css/modal-custom.css';

export const ProjectCard = ({ 
  title, 
  thumbnail_title,
  thumbnail, 
  thumbnail_description, 
  main_body,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleModalShow}>
        <img src={thumbnail} alt={thumbnail_title} />
        <div className="proj-txtx">
          <h4>{thumbnail_title}</h4>
          <span>{thumbnail_description}</span>
        </div>
      </div>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header title>
              <Modal.Title><h2>{title}</h2></Modal.Title> 
          </Modal.Header>
            <Modal.Body>
              {main_body && <span>{main_body}</span>}
              {/* Add more project information as needed */}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </Col>
  );
};