import React from 'react';
import { ArrowRight, Shield, CheckCircle2, MapPin, Globe2, Scale } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="animate-fade-in">
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <Shield className="w-3 h-3 text-green-400" />
            Vetted nanny & housekeeper agencies
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Find a trusted nanny in South Africa <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">without the stress.</span>
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            We match expat families with vetted professional nanny agencies who handle interviews, checks, and contracts. No scams, no guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onStart} className="gap-2">
              Start your nanny search <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              60–90 second intake form
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Matches only vetted agencies
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MapPin className="w-3 h-3" />
            Popular hubs: Cape Town • Johannesburg • Durban • Pretoria • Sandton
          </div>
        </div>

        <div className="relative hidden lg:block">
          {/* Abstract visual element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          
          <Card className="p-8 relative z-10 space-y-6 max-w-md mx-auto">
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10">
                   <span className="text-xl">🇿🇦</span>
                </div>
                <div>
                   <h3 className="text-white font-semibold">Expat Specialists</h3>
                   <p className="text-slate-400 text-sm mt-1">Our partner agencies understand the specific needs of international families living in South Africa.</p>
                </div>
             </div>
             <div className="h-px bg-white/10 w-full"></div>
             <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">1</div>
                   Tell us your requirements
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">2</div>
                   We route to a vetted agency
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                   <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">3</div>
                   Agency manages the placement
                </div>
             </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why families trust Expat Nanny Finder</h2>
          <p className="text-slate-400 text-lg">
            South Africa has exceptional childcare talent, but finding vetted professionals can be daunting for newcomers. We bridge that gap with safety and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-green-500/5 rounded-3xl blur-xl group-hover:bg-green-500/10 transition-colors"></div>
            <Card className="p-8 h-full relative border-green-500/10 hover:border-green-500/30">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1623] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-900/20">
                <Shield className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strictly Vetted Agencies</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We do not list unverified individuals. We only match you with established agencies that conduct rigorous criminal background checks, reference validation, and in-person interviews.
              </p>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
            <Card className="p-8 h-full relative border-blue-500/10 hover:border-blue-500/30">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1623] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
                <Globe2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built for Expats</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We understand international standards. Whether you need travel-ready staff, specific language skills, or experience with diverse cultural nuances, we route you to agencies who "get it".
              </p>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/5 rounded-3xl blur-xl group-hover:bg-purple-500/10 transition-colors"></div>
            <Card className="p-8 h-full relative border-purple-500/10 hover:border-purple-500/30">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1623] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-900/20">
                <Scale className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance & Contracts</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Navigating South African labor law (BCEA) can be complex. Our partners facilitate compliant employment contracts, UIF registration guidance, and fair salary benchmarking.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-8 pb-12">
        <h2 className="text-2xl font-bold text-white">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">1. Tell us what you need</h3>
            <p className="text-slate-400 text-sm">Share your childcare requirements, schedule, living arrangements, and preferences.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">2. We match you</h3>
            <p className="text-slate-400 text-sm">Your request is routed to a vetted local agency experienced with expat families.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">3. Agency handles the rest</h3>
            <p className="text-slate-400 text-sm">They manage interviews, background checks, contracts, and placements directly with you.</p>
          </Card>
        </div>
        <p className="text-center text-slate-500 text-xs">
          Expat Nanny Finder is a referral platform. We are not an employer, recruiter, or placement agency.
        </p>
      </section>
    </div>
  );
};

export default Hero;