import { useQuery } from '@tanstack/react-query';
import { Container, Text, Stack, Group, Box } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchCurrentSeasonRaces, getNextRace } from '../services/raceService';
import { CountdownTimer } from './CountdownTimer';
import { F1Logo } from './F1Logo';

const MotionDiv = motion.div;

const formatRaceDate = (dateTimeStr: string) => {
  const date = new Date(dateTimeStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };
  return date.toLocaleString(undefined, options);
};

export const NextRace = () => {
  const { data: races, isLoading, error } = useQuery({
    queryKey: ['races'],
    queryFn: fetchCurrentSeasonRaces,
    refetchInterval: 60000
  });

  if (isLoading) {
    return (
      <Container size="lg" py="xl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <Stack align="center">
          <F1Logo />
          <Text ta="center" style={{ color: '#15151E', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Loading next race information...</Text>
        </Stack>
      </Container>
    );
  }

  if (error) {
    return (
      <Container size="lg" py="xl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <Stack align="center">
          <F1Logo />
          <Text c="red" ta="center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Error loading race information</Text>
        </Stack>
      </Container>
    );
  }

  const nextRaceInfo = races ? getNextRace(races) : null;

  if (!nextRaceInfo) {
    return (
      <Container size="lg" py="xl" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <Stack align="center">
          <F1Logo />
          <Text ta="center" style={{ color: '#15151E', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>No upcoming races found</Text>
        </Stack>
      </Container>
    );
  }

  const { race } = nextRaceInfo;
  const raceDate = new Date(`${race.date}T${race.time}`);

  return (
    <Container fluid p={0} style={{ minHeight: '100vh', width: '100%' }}>
      <AnimatePresence>
        <MotionDiv
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '1rem',
            width: '100%'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Stack align="center" gap="xl" style={{ width: '100%', maxWidth: '800px', padding: '0 1rem' }}>
            <F1Logo />
            
            <MotionDiv
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.1,
                marginBottom: '1rem',
                color: '#15151E',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                letterSpacing: '-0.015em',
                width: '100%'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {race.raceName}
            </MotionDiv>

            <MotionDiv
              style={{
                color: '#15151E',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                maxWidth: '100%',
                fontWeight: 400,
                padding: '0 1rem'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {race.Circuit.circuitName}
            </MotionDiv>

            <Group gap="xs" justify="center" style={{ flexWrap: 'wrap' }}>
              <MotionDiv
                style={{
                  color: '#15151E',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  fontWeight: 400,
                  textAlign: 'center',
                  width: '100%'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {race.Circuit.Location.locality}, {race.Circuit.Location.country}
              </MotionDiv>
            </Group>

            <MotionDiv
              style={{
                color: '#15151E',
                opacity: 0.7,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                marginTop: '0.5rem',
                textAlign: 'center',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: 400,
                width: '100%',
                padding: '0 1rem'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {formatRaceDate(`${race.date}T${race.time}`)}
            </MotionDiv>

            <Box mt={40} style={{ width: '100%', overflow: 'hidden' }}>
              <CountdownTimer targetDate={raceDate} />
            </Box>
          </Stack>
        </MotionDiv>
      </AnimatePresence>
    </Container>
  );
};