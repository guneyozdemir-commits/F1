import { useEffect, useState } from 'react';
import { Box, Text, Group } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MotionDiv = motion.div;

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const difference = Math.max(0, target - now);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  };
};

const NumberTransition = ({ value }: { value: number }) => (
  <AnimatePresence mode="popLayout">
    <MotionDiv
      key={value}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        fontWeight: 500,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#15151E',
        lineHeight: 1,
        letterSpacing: '-0.02em'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {value.toString().padStart(2, '0')}
    </MotionDiv>
  </AnimatePresence>
);

export const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds }
  ];

  return (
    <Group gap="md" justify="center" style={{ flexWrap: 'wrap' }}>
      {timeUnits.map((unit, index) => (
        <Box
          key={unit.label}
          style={{
            textAlign: 'center',
            minWidth: 'clamp(70px, 20vw, 100px)',
            position: 'relative',
            height: 'clamp(70px, 20vw, 90px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.5rem'
          }}
        >
          <Box style={{ height: 'clamp(40px, 15vw, 56px)', position: 'relative', width: '100%', overflow: 'hidden' }}>
            <NumberTransition value={unit.value} />
          </Box>
          <Text
            size="sm"
            style={{
              color: '#15151E',
              opacity: 0.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
              marginTop: '0.5rem',
              fontWeight: 400,
              letterSpacing: '0.02em',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
            }}
          >
            {unit.label}
          </Text>
        </Box>
      ))}
    </Group>
  );
};