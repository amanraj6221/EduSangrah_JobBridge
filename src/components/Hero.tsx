import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Brain, Users, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-background py-16 lg:py-20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-accent opacity-10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-light opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-light border border-primary/10 px-4 py-2 rounded-full shadow-soft">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-foreground">AI-Powered Student Hub</span>
              <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse" />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                Smart
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Education
                </span>
                <span className="block text-3xl lg:text-4xl font-medium text-muted-foreground">
                  for Tomorrow
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Revolutionary platform that transforms how educational institutions manage student achievements 
                and create digital portfolios with AI-driven insights.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/20 text-foreground hover:bg-primary/5 font-medium px-8 py-3 rounded-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">25K+</h3>
                <p className="text-sm text-muted-foreground font-medium">Active Students</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">500+</h3>
                <p className="text-sm text-muted-foreground font-medium">Institutions</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">98%</h3>
                <p className="text-sm text-muted-foreground font-medium">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Clean Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-elegant">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Student Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Progress Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-light p-4 rounded-xl border border-primary/10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Active Projects</p>
                        <p className="text-xl font-bold text-foreground">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-accent p-4 rounded-xl border border-primary/10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Achievements</p>
                        <p className="text-xl font-bold text-foreground">28</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gradient-light p-4 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Course Progress</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>

                {/* Analytics Preview */}
                <div className="bg-gradient-accent p-4 rounded-xl border border-primary/10">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Performance Analytics</p>
                      <p className="text-xs text-muted-foreground">AI-powered insights available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-xl shadow-soft">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-3 py-2 rounded-xl shadow-soft">
              <span className="text-sm font-medium text-foreground">NAAC Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;