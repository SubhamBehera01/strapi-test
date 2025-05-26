pipeline {
    agent any

    environment {
        IMAGE_NAME = "strapi-test"  // or "nextjs-test" based on the repo you want to use
        AWS_REGION = "ap-south-1"
        AWS_ACCOUNT_ID = "130013148969"
        ECR_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${IMAGE_NAME}"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git credentialsId: 'subham', url: 'https://github.com/SubhamBehera01/strapi-test', branch: 'master'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME} .'
                }
            }
        }

        stage('Login to ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}'
                }
            }
        }

        stage('Tag and Push Image') {
            steps {
                script {
                    sh '''
                        docker tag ${IMAGE_NAME}:latest ${ECR_REPO}:latest
                        docker push ${ECR_REPO}:latest
                    '''
                }
            }
        }
    }
}
