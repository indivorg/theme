import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  // Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
} from '@theme-ui/components';
import { BaseStyles } from 'theme-ui';
import Head from 'next/head';
import theme from '../src/theme';
import { TypeScale, ColorPalette } from '@theme-ui/style-guide';
import { HiArrowRight } from 'react-icons/hi';

const DocsPage = () => (
  <Container sx={{ bg: 'muted' }}>
    <Head>
      <title>Indiv Theme</title>
    </Head>
    <Box as="header" sx={{ color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4] }}>
        <Heading as="h1" variant="title" color="primary">
          Indiv Theme
        </Heading>
        <Grid
          gap={4}
          columns="auto auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            fontSize: 2,
            mt: 3,
            mb: 2,
          }}
        >
          <NavLink href="https://github.com/indivorg/theme">GitHub</NavLink>
          <NavLink href="https://npmjs.com/package/@indivno/theme">NPM</NavLink>
        </Grid>
      </Container>
    </Box>
    <Box as="main" sx={{ bg: 'background', color: 'text' }}>
      <Container>
        <Heading variant="headline">Text</Heading>
        <Card>
          {Object.keys(theme.text).map(key => {
            const Component = key.includes('head') ? Heading : Text;
            return (
              <Component key={key} variant={key}>
                {key}
              </Component>
            );
          })}
        </Card>
        <Card as={BaseStyles}>
          <p>
            This is a whole paragraph of text, include{' '}
            <code>code like this</code>, as well as{' '}
            <a href="https://hackclub.com/">
              <code>linked code</code>
            </a>
            {' & '}
            <a href="https://hackclub.com/">regular links</a>. The paragraph
            ended up being 1 sentence, but now I guess it’s <strong>two</strong>
            .
          </p>
          <pre>
            <code>Here’s a code block! No highlighting to be found.</code>
          </pre>
        </Card>
        <Heading variant="headline">Buttons</Heading>
        <Card>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {Object.keys(theme.buttons).map(key => (
              <Box key={key}>
                <Button variant={key} sx={{ mr: 3, mb: 3 }}>
                  {key} btn
                </Button>
              </Box>
            ))}
          </Flex>
        </Card>
        <Heading variant="headline">Buttons with Icon</Heading>
        <Card>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {Object.keys(theme.buttons).map(key => (
              <Box key={key}>
                <Button variant={key} sx={{ mr: 3, mb: 3 }}>
                  {key} btn
                  <HiArrowRight />
                </Button>
              </Box>
            ))}
          </Flex>
        </Card>
        <Heading variant="headline">Cards</Heading>
        {/* <Grid
          columns={[null, 2, 3]}
          gap={3}
          sx={{ code: { mt: 1, ml: -1, fontSize: 0 } }}
        >
          {Object.keys(theme.cards).map(key => (
            <Card variant={key} key={key} p={[3, 4]}>
              {key}
            </Card>
          ))}
        </Grid>
        <Heading variant="headline">Forms</Heading> */}
        <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
          <Label>
            Full name
            <Input placeholder="Zach Latta" />
          </Label>
          <Label>
            How are you primarily associated with Indiv?
            <Select>
              <option value="" disabled hidden>
                Select one…
              </option>
              <option value="club-leader">I lead a club</option>
              <option value="club-member">I am a club member</option>
              <option value="slack-member">I am active on Slack</option>
              <option value="alum">I am a Indiv alum</option>
              <option value="none">None of the above</option>
            </Select>
          </Label>
          <Label variant="labelHoriz">
            <Checkbox />
            Remember me
          </Label>
          <Flex sx={{ flexWrap: 'wrap' }}>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Alpha
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Bravo
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Label>
            Why do you want to come?
            <Textarea placeholder="Write a few sentences." />
          </Label>
          <Label>
            Slider
            <Slider color="secondary" />
          </Label>
          <Button
            as="button"
            type="submit"
            children="RSVP"
            sx={{ gridColumn: [null, 'span 2'] }}
          />
        </Grid>
        <Heading variant="headline">Badges</Heading>
        {Object.keys(theme.badges).map(key => (
          <Badge
            key={key}
            variant={key}
            mr={3}
            color={key === 'outline' ? 'muted' : null}
          >
            {key}
          </Badge>
        ))}
        <Heading variant="headline">Colors</Heading>
        <ColorPalette
          omit={['modes', 'placeholder', 'twitter', 'instagram', 'facebook']}
        />
        <TypeScale />
        <Text as="pre" variant="styles.pre">
          {JSON.stringify(theme, null, 2)}
        </Text>
      </Container>
    </Box>
  </Container>
);

export default DocsPage;
