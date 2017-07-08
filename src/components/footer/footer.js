import React from 'react';
import { Grid } from 'semantic-ui-react';

import './footer.css';

export default props => (
  <Grid className="footer">
    <Grid.Row color="violet">
      <Grid.Column>
        <div>
          This is a footer!!!
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);