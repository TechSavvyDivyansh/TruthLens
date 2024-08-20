"use client"
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IconCamera } from '@tabler/icons-react'; 
import { useTheme } from 'next-themes';

interface CameraCaptureProps {
  onCapture?: (file: File) => void;
}

export const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onCapture && onCapture(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { theme, setTheme } = useTheme();

  return (
    <div className={`w-[15%] mx-auto rounded-3xl ${theme === 'dark' ? 'border' : 'border border-black'}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment" 
        onChange={handleCapture}
        className="hidden"
      />
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        className="p-8 rounded-lg cursor-pointer flex flex-col items-center"
      >
        <IconCamera className="h-8 w-8" />
        <p className="mt-2">Capture</p>
      </motion.div>
      {image && (
        <motion.img
          src={image as string}
          alt="Captured"
          className="mt-4 w-64 h-64 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
};
