import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  Award, 
  BarChart3, 
  Shield, 
  FileText,
  Clock,
  CheckCircle,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Separate dashboards for Students, Faculty, and Administrators with appropriate permissions and workflows.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Activity Management",
      description: "Upload and track conferences, workshops, certifications, internships, and leadership roles.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Award,
      title: "Digital Certificates",
      description: "Generate verified digital portfolios and certificates for academic and professional achievements.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time performance tracking with beautiful charts and comprehensive reporting tools.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Shield,
      title: "Faculty Approval",
      description: "Streamlined approval workflow for faculty to verify and validate student submissions.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: FileText,
      title: "NAAC/NIRF Ready",
      description: "Automated report generation for NAAC, AICTE, and NIRF compliance and accreditation.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Live notifications and updates for submissions, approvals, and important announcements.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Robust validation system ensuring data accuracy and integrity across all submissions.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Globe,
      title: "LMS Integration",
      description: "Seamless integration with existing Learning Management Systems and ERP platforms.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Comprehensive Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage student activities, track achievements, 
            and generate compliance reports in one unified platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bounce-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;