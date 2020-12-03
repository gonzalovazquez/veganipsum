import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
/** Material UI Components */
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Input,
  Card,
  CardContent,
  Box
} from "@material-ui/core";

/** Custom Components */
import todoAPI from "../api/todo";
import TodoComponent from "../components/Todo/Todo";
import veganIpsumGenerator from "../utils/veganipsumGenerator";

/** Mock */
import fruits from "../mocks/fruits";

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/**
 * Main Index Page to render on homepage
 */
function IndexPage() {
  const [size, setSize] = React.useState("long");
  const [repeat, setRepeat] = React.useState(5);
  const [text, setText] = React.useState({ __html: " " });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize((event.target as HTMLInputElement).value);
  };

  const handleRepeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(event.target.value);
  };

  const generateText = () => {
    setText({ __html: " " });
    const generatedOutput = veganIpsumGenerator(size, repeat);
    setText(generatedOutput);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Veganipsum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1} bgcolor="grey.300">
            <Typography variant="h1" component="h2" gutterBottom>
              Veganipsum
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1} bgcolor="grey.300">
            <Typography variant="h3" component="h3" gutterBottom>
              Tired of how boring Lorem Ipsum got?
            </Typography>
            <Typography variant="body1" gutterBottom>
              How about using auto-generated text that will actually make people
              love your project even more?
              <Typography variant="caption" display="block">
                Pretty sweet, right?
              </Typography>
            </Typography>
          </Box>
          <Box p={1} bgcolor="grey.300"></Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <Box p={1} bgcolor="grey.300">
            <Input
              type="number"
              defaultValue="5"
              value={repeat}
              onChange={handleRepeat}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1} bgcolor="grey.300">
            <FormControl component="fieldset" id="size-selection">
              <RadioGroup
                aria-label="size"
                name="size"
                value={size}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Large"
                  control={<Radio />}
                  label="Large"
                />
                <FormControlLabel
                  value="Medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel
                  value="Small"
                  control={<Radio />}
                  label="Small"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => generateText()}
            >
              Generate
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1}>
            <Card>
              <CardContent>
                <div dangerouslySetInnerHTML={text} />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}

/**
 * propTypes
 * @property {function} todoAPI - API to retrieve Todos.
 */
IndexPage.propTypes = {
  todoAPI: PropTypes.func
};

export default IndexPage;
