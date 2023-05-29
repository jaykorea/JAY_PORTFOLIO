import { Col, Modal, Button} from "react-bootstrap";
import { useState } from "react";
import './css/modal-custom.css';
import ReactPlayer from 'react-player/youtube';

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

export const ProjectCard = ({ 
  title, 
  thumbnail, 
  thumbnail_description, 
  videoUrl1, video1_description, 
  imgUrl1, 
  imgUrl2, 
  imgUrl3,
  imgUrl3_description, 
  imgUrl3_1, 
  imgUrl3_2, 
  imgUrl3_2_description, 
  imgUrl3_3, 
  imgUrl3_3_description,
  imgUrl4,
  imgUrl4_1, 
  imgUrl4_description, 
  imgUrl10, 
  description1_title, 
  description1_sub_title, 
  description1, description2_title, 
  description2_sub_title, 
  description2, 
  description3_title, 
  description3_sub_title, 
  description3_sub_title1, 
  description3_sub_title2,
  description3, description3_1, 
  description3_2, 
  description4_title, 
  description4_sub_title, 
  description4, 
  description10_title, 
  description10_sub_title, 
  description10 
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
              {description1_sub_title && <h4>{description1_sub_title}</h4>}
              {imgUrl1 && <img src={imgUrl1} alt={title} />}
              {description1 && <span>{description1}</span>} 

              {description2_title && <h3>{description2_title}</h3>}
              {description2_sub_title && <h3>{description2_sub_title}</h3>}
              {/* {videoUrl1 && (
                <video className="project-video" controls autoPlay onLoadedMetadata={(e) => {e.target.playbackRate = 1.5; }}>
                  <source src={videoUrl1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )} */}
              {videoUrl1 && (
              <ReactPlayer
                className="project-video"
                url='https://youtu.be/D2tSbLXXLC4'
                controls
                playing
                playbackRate={1.25}
              />
              )}
              {video1_description && <span_sub>{video1_description}</span_sub>}
              {imgUrl2 && <img src={imgUrl2} alt={title} />}
              {description2 && <span>{description2}</span>}

              {description3_title && <h3>{description3_title}</h3>}
                {description3_sub_title && <h4>{description3_sub_title}</h4>}
                {imgUrl3 && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imgUrl3} alt={title} style={{ width: '95%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
                  </div>
                )}
                {imgUrl3_description && <span_sub>{imgUrl3_description}</span_sub>}
                {description3 && <span>{description3}</span>}
                {imgUrl3_1 && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imgUrl3_1} alt={title} style={{ width: '100%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
                  </div>
                )}
                {description3_sub_title1 && <h4>{description3_sub_title1}</h4>}
                {imgUrl3_2 && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imgUrl3_2} alt={title} style={{ width: '65%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
                  </div>
                )}
                {imgUrl3_2_description && <span_sub>{imgUrl3_2_description}</span_sub>}
                {description3_1 && <span>{description3_1}</span>}
                {description3_sub_title2 && <h4>{description3_sub_title2}</h4>}
                {imgUrl3_3 && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imgUrl3_3} alt={title} style={{ width: '90%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
                  </div>
                )}
                {imgUrl3_3_description && <span_sub>{imgUrl3_3_description}</span_sub>}
                {description3_2 && <span>{description3_2}</span>}

                {description4_title && <h3>{description4_title}</h3>}
                {description4_sub_title && <h4>{description4_sub_title}</h4>}
                {imgUrl4 && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={imgUrl4} alt={title} style={{ width: '95%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
                  </div>
                )}
                {imgUrl4_description && <span_sub>{imgUrl4_description}</span_sub>}
                {description4 && <span>{description4}</span>}


              {description10_title && <h3>{description10_title}</h3>}
              {description10_sub_title && <h4>{description10_sub_title}</h4>}
              {imgUrl10 && <img src={imgUrl10} alt={title} />}
              {description10 && <span>{description10}</span>}

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