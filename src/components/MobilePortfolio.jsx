import { Fragment, useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function MobilePortfolio({content}) {
  const {text, header, image, link, linkText} = content
    let linkTextDisplay = 'Launch Repositories'
    if(linkText.length>1){ linkTextDisplay=linkText}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mobile" >
        <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{header}</Card.Title>
                    <Button variant="primary" onClick={handleShow}>
                         Explore
                    </Button>
                </Card.Body>
      </Card>
      

      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{header}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {text}
          </p> 
          
         <Link className='launch-repos' to={link}>{linkTextDisplay}</Link>
        
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobilePortfolio;