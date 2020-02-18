import React, { useCallback, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import Timeline3 from './Timeline3';
import Timeline from './Timeline';

const ModalTimeline = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(!open), [open]);

  // console.log('item.childItems', item.childItems);

  return (
    <div className="float-right">
      <FontAwesomeIcon color="gray" icon={faCommentDots} onClick={toggle} size={"xs"} style={{cursor: "pointer"}} />
      <Modal returnFocusAfterClose isOpen={open} className="modal-lg modal-dialog-scrollable">
        <ModalHeader toggle={toggle}>
          <h4>{`${item.title} Projects`}</h4>
        </ModalHeader>
        <ModalBody>
          {/*{item.childItems.map(e => (<div>{e.contents}</div>))}*/}
          <Timeline items={item.childItems}/>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalTimeline;