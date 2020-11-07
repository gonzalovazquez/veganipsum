import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
/** Material UI Components */
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
/** Custom Components */
import todoAPI from '../api/todo'
import TodoComponent from '../components/Todo/Todo'

type Todos = {
  userId: number
  id: number
  title: string
  completed: boolean
}

/**
 * Main Index Page to render on homepage
 */
function IndexPage({ todos }) {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            Hello
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            World
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <TodoComponent
              todos={todos}
              // deleteTodo={(id) => setTodos(todos.filter((itm) => itm.id !== id))}
            />
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const todos: Todos[] = await todoAPI()
  // By returning { props: todos }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todos,
    }
  }
}

/**
 * propTypes
 * @property {function} todoAPI - API to retrieve Todos.
 */
IndexPage.propTypes = {
  todoAPI: PropTypes.func,
}

export default IndexPage
