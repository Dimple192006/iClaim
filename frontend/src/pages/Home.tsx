import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Brain, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 opacity-10" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Insurance Claims, Automated & Intelligent
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              File claims in minutes, get approved in hours. Powered by AI and smart workflow automation.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/file-claim">
                <Button size="lg" className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white text-lg px-8 shadow-lg">
                  File a Claim
                </Button>
              </Link>
              <Link to="/customer">
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 text-lg px-8">
                  Track Your Claim
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-700">Why Choose iClaim?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Submit claims in under 5 minutes with our streamlined process
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent damage assessment and fraud detection
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Real-Time Updates</h3>
              <p className="text-sm text-muted-foreground">
                Track your claim status every step of the way
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Secure & Trusted</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level security for your sensitive information
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-700">How It Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-md">
                1
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Submit Your Claim</h3>
              <p className="text-sm text-muted-foreground">
                Fill out a simple form and upload photos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-md">
                2
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">AI Processing</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes and validates your claim instantly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-md">
                3
              </div>
              <h3 className="font-semibold mb-2 text-amber-700">Get Approved</h3>
              <p className="text-sm text-muted-foreground">
                Receive approval and payment in record time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers experiencing hassle-free claims
          </p>
          <Link to="/file-claim">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-amber-700 hover:bg-amber-100 shadow-lg">
              File Your First Claim
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
