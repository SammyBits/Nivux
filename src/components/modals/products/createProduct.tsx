import { NewProduct } from "../../../data/models/ProductModel";
import { ModalContent } from "./ModalContent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewProduct) => void;
}
/**
 * Modal component to create a new product
 * @param 
 * @returns 
 */
export const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <ModalContent onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
