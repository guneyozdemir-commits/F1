import { useEffect, useRef, useState } from 'react';
import { Button, Container, Group, Paper, Slider, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { Circuit, GhostCar, LapTime } from '../types';
// import * as d3 from 'd3';

interface TrackVisualizationProps {
  track: Circuit;
  onBack: () => void;
}

// Mock data - this would come from an API
const mockLapTimes: LapTime[] = [
  {
    driverId: 'VER',
    driverName: 'Max Verstappen',
    team: 'Red Bull Racing',
    year: 2023,
    lapTime: 80500, // 1:20.500
    sectors: [24100, 28200, 28200],
  },
  // Add more lap times
];

export default function TrackVisualization({ track, onBack }: TrackVisualizationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ghostCars, setGhostCars] = useState<GhostCar[]>([]);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // const calculatePosition = (progress: number, path: SVGPathElement): { x: number; y: number } => {
  //   const length = path.getTotalLength();
  //   const point = path.getPointAtLength(length * progress);
  //   return { x: point.x, y: point.y };
  // };

  useEffect(() => {
    // Initialize ghost cars
    const initialGhostCars: GhostCar[] = mockLapTimes.map((lapTime) => ({
      driverId: lapTime.driverId,
      driverName: lapTime.driverName,
      team: lapTime.team,
      position: { x: 0, y: 0, progress: 0 },
      delta: 0,
      currentLapTime: 0,
    }));
    setGhostCars(initialGhostCars);
  }, [track]);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min(elapsed / 90000, 1); // 90 seconds animation

      if (newProgress >= 1) {
        setIsPlaying(false);
        return;
      }

      setProgress(newProgress);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <Container size="xl" py="xl">
      <Group justify="space-between" mb="xl">
        <Button variant="subtle" onClick={onBack}>
          ← Back to Track Selection
        </Button>
        <Title order={2}>{track.name}</Title>
      </Group>

      <Paper shadow="sm" p="md" withBorder>
        <svg
          width="100%"
          height="60vh"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={track.trackPath}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
          {ghostCars.map((car) => (
            <motion.circle
              key={car.driverId}
              cx={car.position.x}
              cy={car.position.y}
              r="2"
              fill={car.team === 'Red Bull Racing' ? '#0600EF' : '#DC0000'}
            />
          ))}
        </svg>

        <Group justify="center" gap="xl" mt="md">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="filled"
            color={isPlaying ? 'red' : 'blue'}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button
            onClick={() => {
              setProgress(0);
              setIsPlaying(false);
              startTimeRef.current = undefined;
            }}
            variant="light"
          >
            Reset
          </Button>
        </Group>

        <Slider
          value={progress * 100}
          onChange={(value) => {
            setProgress(value / 100);
            setIsPlaying(false);
          }}
          mt="md"
          label={(value) => `${value.toFixed(1)}%`}
          marks={[
            { value: 0, label: '0%' },
            { value: 25, label: '25%' },
            { value: 50, label: '50%' },
            { value: 75, label: '75%' },
            { value: 100, label: '100%' },
          ]}
        />
      </Paper>

      <Paper shadow="sm" p="md" mt="xl" withBorder>
        <Title order={3} mb="md">Leaderboard</Title>
        {ghostCars.map((car, index) => (
          <Group key={car.driverId} justify="space-between" mb="xs">
            <Text>
              {index + 1}. {car.driverName} ({car.team})
            </Text>
            <Text>
              +{car.delta.toFixed(3)}s
            </Text>
          </Group>
        ))}
      </Paper>
    </Container>
  );
}

