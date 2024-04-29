pipeline {
  agent any

  stages {
    stage("Checkout") {
      steps {
        checkout scm
      }
    }

    stage("Test") {
      steps {
        bat 'npm install' // Install dependencies using npm (Windows)
        bat 'npm test' // Run tests using npm (Windows)
      }
    }

    stage("Build") {
      steps {
        bat 'npm run build' // Build the project using npm (Windows)
      }
    }
  }
}


