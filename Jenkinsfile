pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/salahEddine-Admou/docker-compose-lab.git'
        DOCKER_COMPOSE_PATH = 'docker-compose.yml' // Path to your Docker Compose file
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Build and Start Containers') {
            steps {
                echo 'Building and starting containers with Docker Compose...'
                script {
                    // Ensure the Docker daemon is running
                    sh 'docker info'
                }
                sh "docker-compose -f ${DOCKER_COMPOSE_PATH} up -d --build"
            }
        }
    }

}
