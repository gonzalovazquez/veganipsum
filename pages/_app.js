/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* istanbul ignore file */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

/**
 * Define theme for starter-kit
 * Documentation: https://material-ui.com/customization/themes/
 * Colour Pallet: https://color.adobe.com/create/color-wheel/
 */
const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

export default class NextAppTemplate extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  renderHead() {
    return (
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
    )
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        {this.renderHead()}
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    )
  }
}
