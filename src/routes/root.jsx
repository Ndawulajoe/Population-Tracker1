import { useNavigate} from 'react-router-dom';

import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
} from '@mantine/core';
import {
  IconBabyBottle,
  IconCross,
  IconUsers,
} from '@tabler/icons-react';

const mockdata = [
  { title: 'New Born', icon: IconBabyBottle, color: 'indigo',path:"/new-born" },
  { title: 'Death', icon: IconCross, color: 'violet',path:"/death" },
  { title: 'Population', icon: IconUsers, color: 'blue',path:"/population" },

];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
      
    },
  },
}));

export default function Root() {
  const { classes, theme } = useStyles();
  const navigate =useNavigate()

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item} onClick={()=>navigate(item.path)}>
      <item.icon color={theme.colors[item.color][6]} size="2rem"  />
      <Text size="xs" mt={7} >
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Click On new born or death if your inputing else check the on population  records </Text>
      </Group>
      <SimpleGrid cols={3} mt="md" >
        {items}
      </SimpleGrid>
    </Card>
  );
}