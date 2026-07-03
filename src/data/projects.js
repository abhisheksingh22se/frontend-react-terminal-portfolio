import { Cloud, Shield, Database, Server, Layout, Activity, Code } from 'lucide-react';

export const projects = [
  {
    id: "devsecops-pipeline",
    title: "DevSecOps CI/CD & GitOps Infrastructure",
    description: "End-to-end declarative GitOps pipeline on AWS EKS with a 100% CVE block rate.",
    details: "Architected a declarative GitOps pipeline using GitHub Actions and ArgoCD to securely build, deploy, and monitor containerized applications. Enforced strict shift-left security by integrating Trivy and Snyk for automated CVE blocking, alongside passwordless AWS OIDC authentication. Instrumented the environment with the Prometheus and Grafana stack for real-time observability.",
    tech: ["GitHub Actions", "ArgoCD", "AWS EKS", "Trivy", "Prometheus"],
    status: "Production", 
    icon: Shield,
    github: "https://github.com/abhisheksingh22se/devsecops-cicd-pipeline.git"
  },
  {
    id: "smart-score-cli",
    title: "Smart Score CLI & Web3 Action",
    description: "Automated security scoring tool for Solidity smart contracts acting as a CI/CD quality gate.",
    details: "Developed a specialized CLI tool that scores Solidity smart contracts on security and efficiency metrics, successfully translating rigorous academic thesis research into deployable enterprise software. Engineered a multi-stage Docker build to minimize container footprint and integrated the tool as a reusable GitHub Action to act as an automated pipeline quality gate.",
    tech: ["Python", "Docker", "GitHub Actions", "Pydantic", "Hardhat"],
    status: "Deployed",
    icon: Code,
    github: "https://github.com/abhisheksingh22se/smart-score-cli" 
  },
  {
    id: "self-healing-eks",
    title: "Event-Driven AIOps Remediation Engine",
    description: "Serverless Kubernetes operator automating incident response, reducing MTTR by 97%.",
    details: "Architected an event-driven framework acting as a serverless Kubernetes operator to automate incident response and node recovery workflows. Reduced infrastructure MTTR from 20 minutes to under 60 seconds by automatically resolving high CPU/Memory events and clearing false-positive alerts utilizing CloudWatch anomaly telemetry.",
    tech: ["AIOps", "AWS Lambda", "EventBridge", "Python Boto3"],
    status: "AIOps", 
    icon: Activity,
    github: "https://github.com/abhisheksingh22se/automation-lambda-aiops-remediator.git"
  },
  {
    id: "infra-eks-provisioner",
    title: "Infrastructure EKS Provisioner",
    description: "Modular IaC provisioning a production-grade, multi-AZ AWS environment.",
    details: "Designed modular Infrastructure-as-Code (IaC) via Terraform to provision a production-grade, multi-AZ AWS environment with private subnets and NAT gateways. Deployed a zero-trust architecture by enforcing least-privilege network isolation and eliminating long-lived credentials via IAM Roles for Service Accounts (IRSA).",
    tech: ["Terraform", "AWS EKS", "VPC", "IAM (IRSA)"],
    status: "Production",
    icon: Server,
    github: "https://github.com/abhisheksingh22se/infrastructure-eks-terraform-provisioner.git"
  },
  {
    id: "fastapi-mongo-service",
    title: "High-Throughput FastAPI Microservice",
    description: "Production-grade REST API optimized for non-blocking I/O and high concurrency.",
    details: "Developed a production-grade, asynchronous REST API optimized for non-blocking I/O and high-concurrency data ingestion. Implemented strict schema validation using Pydantic and containerized the backend architecture to ensure rapid, domain-agnostic deployment across cloud environments.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    status: "Production",
    icon: Database,
    github: "https://github.com/abhisheksingh22se/backend-fastapi-mongo-service.git"
  }
];