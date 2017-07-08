import React from 'react';
import {Grid, Message} from 'semantic-ui-react';

export default props => {
  return !!props.authError
    ? (
      <Grid.Row>
        <Grid.Column>
          <Message negative>
            <Message.Header>Auth Error</Message.Header>
            <p>{props.authError.message}</p>
          </Message>
        </Grid.Column>
      </Grid.Row>
    )
    : null;
}