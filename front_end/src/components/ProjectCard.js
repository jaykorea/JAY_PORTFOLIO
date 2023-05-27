import { Col, Modal, Button} from "react-bootstrap";
import { useState } from "react";
import './css/modal-custom.css';

export const ProjectCard_temp = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}


export const ProjectCard = ({ title, thumbnail, thumbnail_description, videoUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4, description1_title, description1, description2_title, description2, description3_title, description3, description4_title, description4 }) => {
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
        <img src={thumbnail} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{thumbnail_description}</span>
        </div>
      </div>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header tiitle>
              <Modal.Title><h2>{title}</h2></Modal.Title> 
          </Modal.Header>
            <Modal.Body>
              {description1_title && <h3>{description1_title}</h3>}
              {description1 && <span>{description1}</span>} 
              {videoUrl && (
                <video className="project-video" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {imgUrl1 && <img src={imgUrl1} alt={title} />}
              {description2 && <span>{description2}</span>}
              {imgUrl2 && <img src={imgUrl2} alt={title} />}
              {description3 && <span>{description3}</span>}
              {imgUrl3 && <img src={imgUrl3} alt={title} />}
              {description4 && <span>{description4}</span>}
              {imgUrl4 && <img src={imgUrl4} alt={title} />}
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