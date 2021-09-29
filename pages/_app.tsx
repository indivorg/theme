import NextApp from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../src/theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
