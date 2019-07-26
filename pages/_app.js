import App, { Container } from 'next/app'
import React from 'react'
import theme from 'theme/defaultTheme'
import { ThemeProvider } from 'styled-components'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}