import { useState } from 'react';

export default function useDisclosure(initialIsOpen = false) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return { isOpen, onOpen, onClose, onToggle };
}
