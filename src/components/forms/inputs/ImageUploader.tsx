import React from 'react';

interface ImageUploaderProps {
  onImagesChange: (images: string[]) => void;
}

/**
 * ImageUploader component to upload images
 * @param param onImagesChange 
 * @returns ImageUploader component
 */
export const ImageUploader = ({ onImagesChange }: ImageUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      onImagesChange(files);
    }
  };

  return (
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      className="border rounded p-2 w-full"
    />
  );
};
