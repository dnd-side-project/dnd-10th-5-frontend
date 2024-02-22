import { useState } from 'react';

export default function useDisclosure(initialIsOpen = false) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return { isOpen, onOpen, onClose };
}
