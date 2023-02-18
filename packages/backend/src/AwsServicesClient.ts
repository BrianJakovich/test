import { Router } from 'express';
import { AwsCredentials } from './types';
import { getAWSCredentials, listAWSRegions } from './aws';

export class AwsServicesClient {
  async getAwsCredentials(): Promise<AwsCredentials> {
    return getAWSCredentials();
  }

  async getAwsRegions(): Promise<string[]> {
    return listAWSRegions();
  }

  createRouter(): Router {
    const router = Router();

    router.get('/aws/credentials', async (req, res) => {
      try {
        const credentials = await this.getAwsCredentials();
        res.status(200).json(credentials);
      } catch (error) {
        console.error('Error fetching AWS credentials:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    router.get('/aws/regions', async (req, res) => {
      try {
        const regions = await this.getAwsRegions();
        res.status(200).json(regions);
      } catch (error) {
        console.error('Error fetching AWS regions:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    return router;
  }
}
