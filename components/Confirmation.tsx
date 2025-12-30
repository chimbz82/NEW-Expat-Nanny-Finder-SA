import React from 'react';
import { CheckCircle2, Mail, Users, FileText, Home } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { PlanType } from '../types';

interface ConfirmationProps {
  plan: PlanType;
  email: string;
  onReset: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ plan, email, onReset }) => {
  return (
    <div className="max-w-xl mx-auto animate-fade-in-up text-center pt-8">
      
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6 ring-1 ring-green-500/40">
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </div>

      <h2 className="text-3xl font-bold text-white mb-2">
        {plan === PlanType.PRIORITY ? 'Priority ' : ''}Onboarding Confirmed
      </h2>
      <p className="text-slate-400 mb-8">
        Capacity check passed. You have secured a {plan.toLowerCase()} spot in the queue.
      </p>

      <Card className="p-8 text-left mb-8">
        <h3 className="text-white font-semibold mb-4 border-b border-white/10 pb-4">Next Steps</h3>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <Mail className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Check your email</h4>
              <p className="text-slate-400 text-xs mt-1">We've sent a receipt and summary to <span className="text-white">{email}</span>.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <Users className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Agency Introduction</h4>
              <p className="text-slate-400 text-xs mt-1">
                {plan === PlanType.PRIORITY 
                  ? 'Within 24 hours, a priority partner agency will contact you via WhatsApp or Email.' 
                  : 'A partner agency will contact you within 2-3 business days.'}
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <FileText className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Prepare Documents</h4>
              <p className="text-slate-400 text-xs mt-1">Have your ID/Passport copy ready. The agency will request this for their KYC process.</p>
            </div>
          </li>
        </ul>
      </Card>

      <Button onClick={onReset} variant="secondary" className="gap-2">
        <Home className="w-4 h-4" /> Return to Home
      </Button>
    </div>
  );
};

export default Confirmation;