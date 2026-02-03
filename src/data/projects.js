import { Cloud, Shield, Database, Server, Layout, Activity } from 'lucide-react';

export const projects = [
  {
    id: "self-healing-eks",
    title: "Self-Healing EKS Remediation Engine",
    description: "Event-driven AIOps framework to automate incident response, reducing MTTR from 20m to <60s.",
    details: "Designed an event-driven AIOps framework on AWS. Implemented CloudWatch Anomaly Detection to identify CPU/Memory spikes deviating from baselines. Engineered automated remediation workflows using EventBridge and Lambda to gracefully restart stuck pods and scale node groups without human intervention. Integrated Prometheus AlertManager to trigger self-healing scripts for 5xx errors.",
    tech: ["AIOps", "AWS Lambda", "EventBridge", "Python", "CloudWatch"],
    status: "Testing", // Almost Finished
    icon: Activity // Fixed: Using the imported component directly
  },
  {
    id: "infra-eks-provisioner",
    title: "Infrastructure EKS Provisioner",
    description: "Production-grade Kubernetes cluster on AWS using modular Terraform with VPC & IRSA.",
    details: "Architected a production-grade Kubernetes cluster. Implemented precise IAM roles using IRSA (IAM Roles for Service Accounts) to enforce least-privilege access, eliminating long-term credentials. Designed a secure network topology with NAT Gateways and private subnets to isolate worker nodes from public internet access.",
    tech: ["Terraform", "AWS EKS", "VPC", "IAM (IRSA)"],
    status: "Production", // Completed
    icon: Server
  },
  {
    id: "devsecops-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    description: "Secure pipeline integrating Trivy and Snyk for automated container scanning and OIDC auth.",
    details: "Engineered a secure CI/CD pipeline. Automated the build-and-push workflow for Docker images to ECR, implementing a Quality Gate that blocks deployments if critical vulnerabilities are detected by Trivy or Snyk. Configured OIDC (OpenID Connect) for secure, password-less authentication between GitHub Actions and AWS.",
    tech: ["GitHub Actions", "Trivy", "Snyk", "Docker", "OIDC"],
    status: "Building", // In Progress
    icon: Shield
  },
  {
    id: "fastapi-mongo-service",
    title: "Scalable Data Management API",
    description: "High-throughput Async REST API using FastAPI and MongoDB with Docker Multi-Stage builds.",
    details: "Developed a high-throughput REST API using FastAPI (Asynchronous) to handle non-blocking I/O. Implemented Docker Multi-Stage Builds to minimize attack surface and reduce image size by 60%. Designed a robust data layer with MongoDB and Pydantic for strict schema validation.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    status: "Production", // Completed
    icon: Database
  },
  {
    id: "portfolio-console",
    title: "Operator Console Portfolio",
    description: "React-based interactive terminal and dashboard interface for showcasing engineering projects.",
    details: "Built a responsive, theme-aware portfolio that mimics a developer console. Features include a functional terminal, data visualization widgets, and a file-system navigation structure. Deployed via GitHub Actions.",
    tech: ["React", "Tailwind", "Vite"],
    status: "Deployed", // Completed
    icon: Layout
  }
];