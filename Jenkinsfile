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
    }
}