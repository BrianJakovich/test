import { ServiceBuilder } from '@backstage/backend-common';
import { AwsServicesClient } from './AwsServicesClient';

export const awsServicesService = ServiceBuilder.forPlugin('aws-services')
  .addRoutes(new AwsServicesClient())
  .build();
