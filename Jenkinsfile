pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.9'
        }
    }
    stages {
        stage('Run NPM INSTALL') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run NPM audit') {
            steps {
                sh 'npm audit'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test code') {
            steps {
                sh 'npm run start'
            }
        }
    }
}