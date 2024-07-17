import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { FileText, BarChart2, Settings, Users, Calendar, Briefcase } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const ProspectManagementComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [prospects, setProspects] = useState([
    { id: 1, company: 'TechCorp', status: 'Active', proposal: 'Pending' },
    { id: 2, company: 'GreenEnergy', status: 'New Lead', proposal: 'Not Started' },
    { id: 3, company: 'DataSystems', status: 'Negotiation', proposal: 'Signed' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Prospect Management</h2>
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">New Proposal</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Quick Start</button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Status</th>
            <th>Proposal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prospects.map(prospect => (
            <tr key={prospect.id}>
              <td>{prospect.company}</td>
              <td>{prospect.status}</td>
              <td>{prospect.proposal}</td>
              <td>
                <button className="text-blue-500 mr-2">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AnalysisToolsComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [seoData, setSeoData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateProposal = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSeoData({
        traffic: 10000,
        keywords: 500,
        backlinks: 1000
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Analysis and Proposal Tools</h2>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={generateProposal}
        disabled={isGenerating}
      >
        {isGenerating ? 'Generating...' : 'Generate AI Proposal'}
      </button>
      {seoData && (
        <div>
          <h3 className="font-bold mt-4">SEO Data:</h3>
          <p>Traffic: {seoData.traffic}</p>
          <p>Keywords: {seoData.keywords}</p>
          <p>Backlinks: {seoData.backlinks}</p>
        </div>
      )}
    </div>
  );
};

const ReportingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Reporting and Analytics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold">Summary Metrics</h3>
          <p>Total Proposals: 25</p>
          <p>Success Rate: 60%</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold">Performance Graph</h3>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            Graph Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "Somebody Digital - SEO Automation",
  companyName: "Somebody Digital",
  logo: "/path/to/somebody-digital-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Cristiano Winckler",
  dashboard: {
    tabs: [
      {
        id: "prospectManagement",
        label: "Prospect Management",
        description: "Manage prospects and proposals",
        icon: Briefcase
      },
      {
        id: "analysisTools",
        label: "Analysis Tools",
        description: "SEO analysis and proposal generation",
        icon: BarChart2
      },
      {
        id: "reporting",
        label: "Reporting",
        description: "Analytics and performance tracking",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      proposalStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8", "#C7D2FE"],
        data: [
          { name: 'Pending', value: 5 },
          { name: 'Active', value: 8 },
          { name: 'Closed', value: 3 },
        ]
      },
      monthlyPerformance: {
        type: "line",
        dataKeys: ["proposals", "closed"],
        colors: ["#4F46E5", "#10B981"],
        data: [
          { month: 'Jan', proposals: 10, closed: 3 },
          { month: 'Feb', proposals: 15, closed: 5 },
          { month: 'Mar', proposals: 20, closed: 8 },
          { month: 'Apr', proposals: 18, closed: 6 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      clientGrowth: {
        type: "bar",
        dataKeys: ["growth"],
        colors: ["#4F46E5"],
        data: [
          { year: '2020', growth: 20 },
          { year: '2021', growth: 35 },
          { year: '2022', growth: 50 },
          { year: '2023', growth: 75 },
        ]
      },
    }
  },
  clients: [
    { id: "techcorp", name: "TechCorp", industry: "Technology" },
    { id: "greenenergy", name: "GreenEnergy", industry: "Renewable Energy" },
    { id: "datasystems", name: "DataSystems", industry: "IT Services" },
  ],
  features: {
    dataImport: true,
    analytics: true,
    reporting: true,
    templates: true,
    aiProposalGeneration: true,
    seoDataCollection: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  prospectManagement: ProspectManagementComponent,
  analysisTools: AnalysisToolsComponent,
  reporting: ReportingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  proposalStatuses: ['Pending', 'Active', 'Closed'],
  seoMetrics: ['Traffic', 'Keywords', 'Backlinks', 'Domain Authority'],
  industryTypes: ['Technology', 'Renewable Energy', 'IT Services', 'E-commerce', 'Finance']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};