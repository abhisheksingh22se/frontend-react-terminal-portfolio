import { Cloud, Shield, Database, Server, Layout, Activity } from 'lucide-react';

export const projects = [
  {
    id: "self-healing-eks",
    title: "Self-Healing EKS Remediation Engine",
    description: "Event-driven AIOps framework automating incident response, reducing MTTR by 97% (sub-60s).",
    details: "Architected an event-driven AIOps framework on AWS that reduced Mean Time to Recovery (MTTR) from 20 minutes to under 60 seconds. Implemented CloudWatch Anomaly Detection to cut false-positive alerts by 40%. Engineered automated remediation workflows using EventBridge and Lambda to gracefully restart stuck pods and scale node groups, maintaining 99.9% availability during chaos testing.",
    tech: ["AIOps", "AWS Lambda", "EventBridge", "Python", "CloudWatch"],
    status: "AIOps", 
    icon: Activity,
    github: "https://github.com/abhisheksingh22se/automation-lambda-aiops-remediator.git"
  },
  {
    id: "infra-eks-provisioner",
    title: "Infrastructure EKS Provisioner",
    description: "Production-grade Kubernetes environment deployed in <12 mins via modular Terraform.",
    details: "Architected a production-grade Kubernetes cluster capable of deploying from zero in under 12 minutes. Implemented Zero-Trust security using IRSA (IAM Roles for Service Accounts) to enforce least-privilege access, eliminating long-term static credentials. Designed a secure network topology with NAT Gateways and private subnets passing simulated network penetration checks.",
    tech: ["Terraform", "AWS EKS", "VPC", "IAM (IRSA)"],
    status: "Production",
    icon: Server,
    github: "https://github.com/abhisheksingh22se/infrastructure-eks-terraform-provisioner.git"
  },
  {
    id: "devsecops-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    description: "'Shift-Left' security pipeline with Trivy/Snyk gating, achieving 100% block rate on critical CVEs.",
    details: "Engineered a secure CI/CD pipeline in GitHub Actions. Implemented a strict Quality Gate that blocks deployments if critical vulnerabilities are detected by Trivy or Snyk. Configured OIDC (OpenID Connect) for secure, password-less authentication, removing all static AWS credentials from the pipeline. Reduced container image sizes by 60% via multi-stage builds.",
    tech: ["GitHub Actions", "Trivy", "Snyk", "Docker", "OIDC"],
    status: "Finalizing", 
    icon: Shield,
    github: "https://github.com/abhisheksingh22se/devsecops-ci-cd-pipeline.git"
  },
  {
    id: "fastapi-mongo-service",
    title: "Scalable Data Management API",
    description: "High-throughput Async REST API sustaining 500+ concurrent requests with zero blocking I/O.",
    details: "Developed a high-throughput REST API using FastAPI (Asynchronous) to handle non-blocking I/O. Implemented Docker Multi-Stage Builds to minimize attack surface and reduce production image size to under 80MB, lowering storage costs and cutting cold-start times. Designed a robust data layer with MongoDB and Pydantic for strict schema validation.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    status: "Production",
    icon: Database,
    github: "https://github.com/abhisheksingh22se/backend-fastapi-mongo-service.git"
  },
  {
    id: "portfolio-console",
    title: "Operator Console Portfolio",
    description: "React-based interactive terminal and SRE telemetry dashboard interface.",
    details: "Built a responsive, theme-aware portfolio that mimics a Site Reliability Engineering console. Features include a functional command-line terminal with custom SRE metrics output, real-time data visualization widgets for SLO tracking, and a file-system navigation structure.",
    tech: ["React", "Tailwind", "Vite", "Lucide Icons"],
    status: "Deployed",
    icon: Layout,
    github: "https://github.com/abhisheksingh22se/frontend-react-terminal-portfolio.git"
  }
];