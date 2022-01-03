import React, { useState } from 'react';
import { Button, Card, Container, Modal } from '@techlink/ui-kits';
import '@techlink/ui-kits/dist/index.css';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Container>
      <div className='App'>
        <h2>Hello World!</h2>
        <Button
          label={'Click Me'}
          onClick={() => {
            setShowModal(!showModal);
            console.log('Clicked');
          }}
        />
        <Card title={'Hello World!'} footer={<>Hello WOrld!</>}>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci animi eum hic inventore labore libero, natus quibusdam. Ab
            autem consequatur error hic placeat. Possimus?
          </p>
        </Card>

        <Modal
          visible={showModal}
          onClose={() => setShowModal(false)}
          title={'Hello World!'}
        />
      </div>
    </Container>
  );
};

export default App;
