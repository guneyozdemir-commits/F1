import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextRace } from './components/NextRace';
import { motion } from 'framer-motion';
import '@mantine/core/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const MotionDiv = motion.div;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <div className="app" style={{
          minHeight: '100vh',
          background: '#ffffff',
          color: '#15151E',
          fontFamily: 'Titillium Web, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle gradient overlay */}
          <MotionDiv
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at center, rgba(15, 128, 255, 0.03) 0%, transparent 50%)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Content */}
          <NextRace />
        </div>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;