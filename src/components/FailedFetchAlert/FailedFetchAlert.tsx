import React, { ComponentProps } from 'react';

import Alert from 'src/components/Alert';

type NetworkAlertProps = {
  heading: ComponentProps<typeof Alert>['heading'];
  headingAs: ComponentProps<typeof Alert>['headingAs'];
};

function FailedFetchAlert({ heading }: NetworkAlertProps) {
  return (
    <Alert
      heading={heading}
      description={
        <p>
          You can try to refresh the page, but please{' '}
          <a href="https://iterano.slack.com/archives/C01AMCX2E7M">
            contact one of the administrators
          </a>{' '}
          if the issue still persists.
        </p>
      }
      headingAs="h2"
    />
  );
}

export default FailedFetchAlert;
