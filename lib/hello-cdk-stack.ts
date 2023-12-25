import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
//import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyBucket', {
      bucketName: 'myserverless-kadirig',
           
    })
    }
}
