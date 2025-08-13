import { useQuery } from '@tanstack/react-query';
import { Grid, Card, Text, Button, Container, Badge, Table, Group, Stack, Image } from '@mantine/core';
import '@mantine/core/styles/Image.css';
import type { Circuit } from '../types';
import { motion } from 'framer-motion';
import { circuits } from '../data/circuits';
import f1Logo from '../assets/f1-logo.png';
import '@mantine/core/styles/Grid.css';
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/Text.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Table.css';
import '@mantine/core/styles/Badge.css';


interface TrackSelectorProps {
  onTrackSelect: (track: Circuit) => void;
}

export default function TrackSelector({ onTrackSelect }: TrackSelectorProps) {
  const { data: circuitData } = useQuery({
    queryKey: ['circuits'],
    queryFn: () => Promise.resolve(circuits),
    initialData: circuits,
  });

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div style={{ 
          backgroundColor: 'black',
          padding: '20px',
          marginBottom: '2rem',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Image 
            src={f1Logo} 
            alt="Formula 1" 
            width={200}
            height={80}
            fit="contain"
          />
        </div>
        <Grid>
          {circuitData.map((circuit) => (
            <Grid.Col key={circuit.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card shadow="md" padding="lg" radius="lg" withBorder>
                  <Card.Section>
                    <div style={{ padding: '1rem', backgroundColor: '#f8f9fa' }}>
                      <svg
                        width="100%"
                        height="200"
                        viewBox="-10 -10 120 120"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <path
                          d={circuit.trackPath}
                          stroke="#E10600"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Card.Section>

                  <Group justify="space-between" mt="md">
                    <Text fw={700} size="lg">
                      {circuit.name}
                    </Text>
                    <Badge color="blue" variant="light">
                      {new Date(circuit.raceDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Badge>
                  </Group>

                  <Text size="sm" c="dimmed" mt="xs">
                    {circuit.country}
                  </Text>

                  <Group gap="xs" mt="md">
                    <Text size="sm">Length: {circuit.length}km</Text>
                    <Text size="sm">•</Text>
                    <Text size="sm">Corners: {circuit.corners}</Text>
                    <Text size="sm">•</Text>
                    <Text size="sm">First GP: {circuit.firstGP}</Text>
                  </Group>

                  <Table mt="md" style={{ fontSize: '0.875rem' }}>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Driver</Table.Th>
                        <Table.Th>Team</Table.Th>
                        <Table.Th>Time</Table.Th>
                        <Table.Th>Year</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {circuit.lapRecords.slice(0, 3).map((record, idx) => (
                        <Table.Tr key={idx}>
                          <Table.Td>{record.driverName}</Table.Td>
                          <Table.Td>{record.team}</Table.Td>
                          <Table.Td>{record.time}</Table.Td>
                          <Table.Td>{record.year}</Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>

                  <Button
                    variant="filled"
                    color="blue"
                    fullWidth
                    mt="lg"
                    radius="md"
                    onClick={() => onTrackSelect(circuit)}
                  >
                    Select Track
                  </Button>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

