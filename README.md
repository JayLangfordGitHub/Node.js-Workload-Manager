# College Workload Manager

This project is a workload manager application for managing and tracking college tasks. It's a full stack Node.js application, containerized with Docker and managed by Kubernetes. This README provides information on the purpose of the project, the technologies used, and how to get it up and running.

## Overview

The College Workload Manager is designed to provide students with a tool for organizing their college workload. The application uses a simple Express.js server and is deployed as a set of Docker containers managed by a Kubernetes cluster. This allows for excellent portability and scalability, with the ability to handle increased load during peak usage times.

## Technologies Used

- **Node.js & Express.js**: Used for building the application's server-side logic.
- **Docker**: Used for packaging the application and its dependencies into a standardized unit for software development.
- **Kubernetes (Minikube)**: Used for automating deployment, scaling, and management of the application's Docker containers.
- **VirtualBox**: Used as the hypervisor for creating the virtual environment where Minikube runs.

## Running the Project

Ensure you have Docker, Minikube, and VirtualBox installed on your system. Then:

1. Clone this repository to your local machine.
2. Navigate to the repository in the terminal.
3. Use the command `minikube start` to start the Kubernetes cluster.
4. Apply the Kubernetes deployment configuration with `kubectl apply -f deployment.yaml`.
5. Apply the Kubernetes service configuration with `kubectl apply -f service.yaml`.

The application should now be running and accessible through the load balancer service. You can verify the status of the deployment and service using `kubectl get deployments` and `kubectl get services` respectively.
