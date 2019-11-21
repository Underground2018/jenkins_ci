pipeline {
    agent {
        docker {
            image 'node:lts-alpine3.9'
        }
    }
    stages {
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
        stage('Lint Code') {
            steps {
                sh 'npm run pretest'
            }
        }
    }
}