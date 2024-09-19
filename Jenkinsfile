pipeline {
    agent any

    stages{
        stage ('Build Image'){
            steps{
                script{
                    dockerapp = docker.Build("bennerleon/hub" , '-f ./src/Dockerfile ./src')
                }
            }
        }
    }
}