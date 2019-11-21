pipeline {
    agent {
        docker {
            image 'nodejs:latest'
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