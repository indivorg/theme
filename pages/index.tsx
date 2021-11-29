import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
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
import { ColorPalette, TypeScale } from '@theme-ui/style-guide';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import type { Theme } from 'theme-ui';
import { BaseStyles, ThemeProvider } from 'theme-ui';
import { theme as baseTheme } from '../src/theme';
import { scaleAsArray } from '../src/utils';

const Sheet: React.FC<{ theme: Theme; name: string }> = ({
  theme = baseTheme,
  name = 'Base',
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Bjerk Theme</title>
        </Head>
        <Flex as="main" sx={{ gap: 4, flexDirection: 'column' }}>
          <Box as="header" sx={{ color: 'text' }}>
            <Container>
              <Heading as="h1" variant="title" sx={{ py: 4 }}>
                Bjerk {name} Theme
              </Heading>
              <Flex sx={{ gap: 3, alignItems: 'center' }}>
                <NavLink href="https://github.com/indivorg/theme">
                  GitHub
                </NavLink>
                <NavLink href="https://npmjs.com/package/@indivorg/theme">
                  NPM
                </NavLink>
                <Link href="/">Base Theme</Link>
                <Link href="/web">Web Theme</Link>
              </Flex>
            </Container>
          </Box>
          <Card>
            <Heading>Text styles</Heading>
            <Grid gap={4}>
              {Object.keys(theme.text).map(key => {
                const Component = key.toLowerCase().includes('head')
                  ? Heading
                  : Text;
                return (
                  <Flex
                    key={key}
                    sx={{
                      gap: 3,
                      flexDirection: 'column',
                    }}
                  >
                    <Text sx={{ color: 'secondary' }}>{key}</Text>
                    <Component variant={key}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet neque ultricies, mollis leo quis, luctus magna.'
                      }
                    </Component>
                    <Divider />
                  </Flex>
                );
              })}
            </Grid>
          </Card>
          <Card>
            <Heading>Base styles</Heading>
            <Box as={BaseStyles}>
              <p>
                This is a whole paragraph of text, include{' '}
                <code>code like this</code>, as well as{' '}
                <a href="https://hackclub.com/">
                  <code>linked code</code>
                </a>
                {' & '}
                <a href="https://hackclub.com/">regular links</a>. The paragraph
                ended up being 1 sentence, but now I guess it’s{' '}
                <strong>two</strong>.
              </p>
              <pre>
                <code>Here’s a code block! No highlighting to be found.</code>
              </pre>
            </Box>
          </Card>
          <Card>
            <Heading>Buttons</Heading>
            <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
              {Object.keys(theme.buttons).map(key => (
                <Button key={key} variant={key}>
                  {key} btn
                </Button>
              ))}
            </Flex>
          </Card>
          <Card>
            <Heading>Buttons with Icon</Heading>
            <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
              {Object.keys(theme.buttons).map(key => (
                <Button key={key} variant={key}>
                  {key} btn
                  <HiArrowRight />
                </Button>
              ))}
            </Flex>
          </Card>
          <Card>
            <Heading>Disabled Buttons</Heading>
            <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
              {Object.keys(theme.buttons).map(key => (
                <Button key={key} variant={key} disabled>
                  {key} btn
                </Button>
              ))}
            </Flex>
          </Card>

          <Card>
            <Heading>Spacing</Heading>
            <Flex sx={{ flexWrap: 'wrap', gap: 4 }}>
              {scaleAsArray(theme.space).map((s, key) => (
                <Box key={key} sx={{ textAlign: 'center' }}>
                  {key}
                  <Box key={s} sx={{ width: s, height: s, bg: 'text' }} />
                  {s}
                </Box>
              ))}
            </Flex>
          </Card>
          <Card>
            <Heading>Forms</Heading>
            <Grid gap={3} columns={[null, 2]} as="form">
              <Label>
                Full name
                <Input placeholder="Zach Latta" />
              </Label>
              <Label>
                How are you primarily associated with Bjerk?
                <Select>
                  <option value="" disabled hidden>
                    Select one…
                  </option>
                  <option value="club-leader">I lead a club</option>
                  <option value="club-member">I am a club member</option>
                  <option value="slack-member">I am active on Slack</option>
                  <option value="alum">I am a Bjerk alum</option>
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
          </Card>

          <Card>
            <Heading>Badges</Heading>
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
          </Card>
          <Card>
            <Heading>Colors</Heading>
            <ColorPalette
              omit={[
                'modes',
                'placeholder',
                'twitter',
                'instagram',
                'facebook',
              ]}
            />
          </Card>
          <Card>
            <Heading>Type scale</Heading>
            <TypeScale />
          </Card>
          <Card>
            <Heading>Theme Object</Heading>
            <Text as="pre" variant="styles.pre">
              {JSON.stringify(theme, null, 2)}
            </Text>
          </Card>
        </Flex>
      </Container>
    </ThemeProvider>
  );
};

export default Sheet;
