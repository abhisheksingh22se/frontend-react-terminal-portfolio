import React from 'react';
import { 
  FaAws, FaLinux, FaDocker, FaPython, FaGitAlt, FaJenkins, FaChartLine, FaBell, FaShieldAlt
} from "react-icons/fa";
import { 
  SiTerraform, SiKubernetes, SiGithubactions, SiSonarqube, SiSnyk, 
  SiHelm, SiPrometheus, SiGrafana, SiPandas, SiScikitlearn, 
  SiJupyter, SiGnubash, SiOpenid 
} from "react-icons/si";

const TechStack = () => {
  const categories = [
    {
      id: "observability",
      label: "Reliability & Observability",
      groupColor: "text-purple-400",
      items: [
        { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
        { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" },
        { name: "CloudWatch Anomaly", icon: FaChartLine, color: "text-[#FF9900]" },
        { name: "AlertManager", icon: FaBell, color: "text-[#E6522C]" },
        { name: "AWS EventBridge", icon: FaAws, color: "text-[#FF9900]" }
      ]
    },
    {
      id: "iac",
      label: "Infrastructure as Code",
      groupColor: "text-blue-400",
      items: [
        { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
        { name: "AWS (EKS, VPC, IAM)", icon: FaAws, color: "text-[#FF9900]" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
        { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
        { name: "Helm", icon: SiHelm, color: "text-[#0F1689]" },
        { name: "Linux Admin", icon: FaLinux, color: "text-[#FCC624]" }
      ]
    },
    {
      id: "devsecops",
      label: "DevSecOps & CI/CD",
      groupColor: "text-green-400",
      items: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-white" },
        { name: "Snyk", icon: SiSnyk, color: "text-[#4C4A73]" },
        { name: "Trivy (Zero-Trust)", icon: FaShieldAlt, color: "text-blue-300" },
        { name: "OIDC Federation", icon: SiOpenid, color: "text-[#F78C40]" },
        { name: "SonarQube", icon: SiSonarqube, color: "text-[#4E9BCD]" },
        { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" }
      ]
    },
    {
      id: "automation",
      label: "Automation & Data",
      groupColor: "text-yellow-400",
      items: [
        { name: "Python / Boto3", icon: FaPython, color: "text-[#3776AB]" },
        { name: "Bash Scripting", icon: SiGnubash, color: "text-gray-300" },
        { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-[#F7931E]" }
      ]
    }
  ];

  return (
    <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-5 border-b border-gray-800 pb-2">
        <SiGnubash size={16} className="text-green-500" />
        <h3 className="font-bold text-gray-200 tracking-wide text-sm uppercase">Technical Arsenal</h3>
      </div>

      {/* List Layout */}
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            
            {/* Category Label */}
            <h4 className={`text-[11px] font-bold font-mono uppercase mb-3 ${cat.groupColor} flex items-center gap-2`}>
              <span className="w-1 h-3 bg-current rounded-sm opacity-50"/>
              {cat.label}
            </h4>

            {/* Tools Container */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tool, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-1.5 bg-gray-800/40 border border-gray-700/50 rounded hover:bg-gray-800 hover:border-gray-600 transition-colors group cursor-default"
                >
                  <div className="p-1 bg-black/30 rounded shrink-0">
                    <tool.icon size={14} className={`${tool.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="text-[10px] text-gray-400 group-hover:text-gray-200 font-medium whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;