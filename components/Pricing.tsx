import React from 'react';
import { ArrowLeft, Check, Lock, Loader2 } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { PlanType } from '../types';

interface PricingProps {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  onPay: () => void;
  onBack: () => void;
  isProcessing: boolean;
}

const Pricing: React.FC<PricingProps> = ({ selectedPlan, onSelectPlan, onPay, onBack, isProcessing }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <button onClick={onBack} className="text-slate-500 hover:text-white flex items-center gap-2 text-sm mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to details
        </button>
        <h2 className="text-3xl font-bold text-white mb-2">Step 2 · Onboarding & Pricing</h2>
        <p className="text-slate-400">A one-time fee to qualify your request and route it to a suitable agency.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Value Prop Side */}
        <div className="space-y-6">
           <Card className="p-6 bg-blue-900/10 border-blue-500/20">
             <h3 className="text-xl font-bold text-white mb-2">Family onboarding, done properly.</h3>
             <p className="text-slate-300 text-sm leading-relaxed mb-4">
               We aren't a generic job board. We are a specialized referral service. The onboarding fee ensures:
             </p>
             <ul className="space-y-3">
               {[
                 "Detailed requirement matching for your specific city",
                 "Routing to a vetted agency partner with capacity",
                 "Filtering of unserious requests ensures agencies respond faster",
                 "Support if you need re-matching within 14 days"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                   <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-blue-400" />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
           </Card>

           <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h4 className="text-white font-semibold text-sm mb-1">Refund Policy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The fee is fully refundable if we cannot refer your request to a suitable agency within 72 hours. Once a referral is made, the fee is non-refundable as the service has been delivered.
              </p>
           </div>
        </div>

        {/* Pricing Selection Side */}
        <div className="space-y-4">
          
          {/* Standard Plan */}
          <div 
            onClick={() => onSelectPlan(PlanType.STANDARD)}
            className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 ${
              selectedPlan === PlanType.STANDARD 
                ? 'bg-white/10 border-white/40' 
                : 'bg-[#0B1623] border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white">Standard</h3>
                <p className="text-sm text-slate-400">Standard routing queue</p>
              </div>
              <div className="text-xl font-bold text-white">R299</div>
            </div>
          </div>

          {/* Priority Plan */}
          <div 
            onClick={() => onSelectPlan(PlanType.PRIORITY)}
            className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-200 ${
              selectedPlan === PlanType.PRIORITY 
                ? 'bg-green-500/10 border-green-500 ring-1 ring-green-500/20' 
                : 'bg-[#0B1623] border-white/10 hover:border-white/20'
            }`}
          >
            <div className="absolute -top-3 left-6 bg-green-500 text-[#03240d] text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-green-900/50">
              RECOMMENDED
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-white text-lg">Priority</h3>
                <p className="text-sm text-green-200/70">Bypasses seasonal backlog</p>
              </div>
              <div className="text-2xl font-bold text-green-400">R499</div>
            </div>
            <ul className="space-y-2 mb-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-green-500" /> Priority agency matching
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-green-500" /> 24hr response target
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <Button 
              onClick={onPay} 
              fullWidth 
              disabled={isProcessing}
              className="text-lg py-4 shadow-xl shadow-green-900/20"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  Pay {selectedPlan === PlanType.STANDARD ? 'R299' : 'R499'} & Get Started
                </>
              )}
            </Button>
            <div className="flex justify-center items-center gap-2 mt-4 text-xs text-slate-500">
              <Lock className="w-3 h-3" />
              Secure 256-bit encrypted checkout via PayStack/Yoco (Mock)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;