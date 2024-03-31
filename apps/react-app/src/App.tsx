import { Grid } from '@mui/material';

import HomePage from './components/HomePage';
import PostPage from './components/PostPage';

function App() {
  return (
    <Grid container id="app" direction="column" height="100vh" flexWrap="nowrap">
      <Grid item flexGrow={1}>
        <HomePage />
        <PostPage />
      </Grid>
    </Grid>
  );
}

export default App;
