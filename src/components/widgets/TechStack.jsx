import React from 'react';
// Using stable icons (FontAwesome + Simple Icons) to prevent crashes
import { 
  FaAws, FaLinux, FaDocker, FaPython, FaGitAlt, FaJenkins, FaChartLine 
} from "react-icons/fa";
import { 
  SiTerraform, SiKubernetes, SiGithubactions, SiSonarqube, SiSnyk, 
  SiHelm, SiPrometheus, SiGrafana, SiPandas, SiScikitlearn, 
  SiJupyter, SiGnubash, SiOpenid 
} from "react-icons/si";

const TechStack = () => {
  const categories = [
    {
      id: "infra",
      label: "Infrastructure & Cloud",
      groupColor: "text-blue-400",
      items: [
        { name: "AWS (EKS, VPC, IAM, S3)", icon: FaAws, color: "text-[#FF9900]" },
        { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
        { name: "Linux", icon: FaLinux, color: "text-[#FCC624]" },
        { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" }
      ]
    },
    {
      id: "devsecops",
      label: "DevSecOps & CI/CD",
      groupColor: "text-green-400",
      items: [
        { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-white" },
        { name: "Jenkins", icon: FaJenkins, color: "text-[#D24939]" },
        { name: "SonarQube", icon: SiSonarqube, color: "text-[#4E9BCD]" },
        { name: "Trivy", icon: FaChartLine, color: "text-blue-300" }, 
        { name: "Snyk", icon: SiSnyk, color: "text-[#4C4A73]" },
        { name: "OIDC", icon: SiOpenid, color: "text-[#F78C40]" },
        { name: "Helm", icon: SiHelm, color: "text-[#0F1689]" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
        { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" }
      ]
    },
    {
      id: "aiops",
      label: "AIOps & Automation",
      groupColor: "text-purple-400",
      items: [
        { name: "CloudWatch Anomaly", icon: FaChartLine, color: "text-[#FF9900]" },
        { name: "AWS Lambda", icon: FaAws, color: "text-[#FF9900]" },
        { name: "Systems Manager", icon: FaAws, color: "text-gray-400" },
        { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
        { name: "Bash Scripting", icon: SiGnubash, color: "text-gray-300" }
      ]
    },
    {
      id: "data",
      label: "Data Science",
      groupColor: "text-yellow-400",
      items: [
        { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
        { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626]" },
        { name: "Stat Analysis (IIITB)", icon: FaChartLine, color: "text-yellow-500" }
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

            {/* Tools Container - Changed from GRID to FLEX-WRAP for variable widths */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tool, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 p-1.5 bg-gray-800/40 border border-gray-700/50 rounded hover:bg-gray-800 hover:border-gray-600 transition-colors group cursor-default"
                >
                  <div className="p-1 bg-black/30 rounded shrink-0">
                    <tool.icon size={14} className={`${tool.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  {/* 'whitespace-nowrap' keeps text on one line, but flex lets container grow */}
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