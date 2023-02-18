import { useState, useEffect } from 'react';
import { Alert, Box, Grid, Paper, Typography } from '@material-ui/core';
import { useApi } from '@backstage/core';
import { AwsCredentials } from '../../types';

export interface AwsServicesProps {
  entity: Entity;
}

export function AwsServices(props: AwsServicesProps) {
  const { entity } = props;
  const [error, setError] = useState<Error | null>(null);
  const [credentials, setCredentials] = useState<AwsCredentials | null>(null);
  const api = useApi();

  useEffect(() => {
    api
      .request<{ data: AwsCredentials }>(
        `/aws-services/aws/credentials?entity=${entity.metadata.name}`,
      )
      .then(response => setCredentials(response.data))
      .
