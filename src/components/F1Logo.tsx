import { Image } from '@mantine/core';
import { motion } from 'framer-motion';
import f1Logo from '../assets/F1.svg.webp';

export const F1Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
        width: '100%',
        padding: '0 1rem'
      }}
    >
      <Image 
        src={f1Logo} 
        alt="F1 Logo" 
        style={{
          width: 'clamp(120px, 30vw, 200px)',
          height: 'auto',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </motion.div>
  );
};