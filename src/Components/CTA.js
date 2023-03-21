import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function CTA() {
    const [show, setShow] = useState(true);

    return (
      <div style={{ textAlign: 'center' }}>
        <Alert show={show} variant="success" style={{ margin: '50px 85px' }}>
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button 
                    onClick={
                        () => setShow(true)
                    }
                    style={{
                        marginBottom: '50px'
                    }}
                    >
                        Show Alert
                    </Button>}
      </div>
    );
}
