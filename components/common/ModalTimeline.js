import React, { useCallback, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

const ModalTimeline = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <div className="float-right">
      <FontAwesomeIcon color="gray" icon={faCommentDots} onClick={toggle} size={"xs"} style={{cursor: "pointer"}} />
      <Modal returnFocusAfterClose isOpen={open}>
        <ModalHeader toggle={toggle}>
          {item}
        </ModalHeader>
        <ModalBody>
          blah, blah, blah
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalTimeline;