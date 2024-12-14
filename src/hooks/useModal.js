import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeContent, setActiveContent] = useState(""); // Store the content (description)

  const openModal = (content) => {
    setActiveContent(content); // Pass the entire project object
    setShowModal(true);
  };
  

  const closeModal = () => {
    setShowModal(false);
    setActiveContent(""); // Clear content when modal closes
  };

  return {
    showModal,
    activeContent,
    openModal,
    closeModal,
  };
};

export default useModal;
