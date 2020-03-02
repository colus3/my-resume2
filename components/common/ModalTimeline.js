import React, { useCallback, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Timeline from './Timeline';

const ModalTimeline = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(!open), [open]);

  // const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div className="float-right">
      <FontAwesomeIcon className="d-print-none" color="gray" icon={faInfoCircle} onClick={toggle} size={"xs"} style={{cursor: "pointer"}} />
      <Modal isOpen={open} className="modal-lg modal-dialog-scrollable">
        <ModalHeader toggle={toggle}>
          <h4>{`${item.title}`}</h4>
        </ModalHeader>
        <ModalBody>
          <Timeline items={item.childItems}/>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalTimeline;