import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { FormData } from '../types';

interface IntakeFormProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ data, onChange, onNext, onBack }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    onChange(e.target.name as keyof FormData, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const inputClasses = "w-full p-3 rounded-xl border border-white/10 bg-[#0B1623] text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-colors placeholder:text-slate-600";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-2";

  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      <div className="mb-8">
        <button onClick={onBack} className="text-slate-500 hover:text-white flex items-center gap-2 text-sm mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </button>
        <h2 className="text-3xl font-bold text-white mb-2">Step 1 · Intake form</h2>
        <p className="text-slate-400">Tell us about your requirements so we can match you correctly.</p>
      </div>

      <Card className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* City */}
            <div>
              <label className={labelClasses}>City / Suburb</label>
              <select 
                name="city" 
                value={data.city} 
                onChange={handleChange} 
                className={inputClasses}
                required
              >
                <option value="" disabled>Select a location</option>
                <option value="Cape Town">Cape Town</option>
                <option value="Johannesburg">Johannesburg</option>
                <option value="Sandton">Sandton</option>
                <option value="Pretoria">Pretoria</option>
                <option value="Durban">Durban</option>
                <option value="Winelands">Stellenbosch / Winelands</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className={labelClasses}>Start Date</label>
              <input 
                type="date" 
                name="startDate"
                value={data.startDate}
                onChange={handleChange}
                className={`${inputClasses} [color-scheme:dark]`}
                required
              />
            </div>

            {/* Living Arrangement */}
            <div>
              <label className={labelClasses}>Living Arrangement</label>
              <select 
                name="livingArrangement"
                value={data.livingArrangement}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="Live-out">Live-out (Daily)</option>
                <option value="Live-in">Live-in</option>
              </select>
            </div>

            {/* Hours */}
            <div>
              <label className={labelClasses}>Hours Needed</label>
              <select 
                name="hoursNeeded"
                value={data.hoursNeeded}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="Full time">Full time (Mon-Fri)</option>
                <option value="Part time">Part time (1-3 days)</option>
                <option value="Ad-hoc">Ad-hoc / Babysitting</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className={labelClasses}>Monthly Budget Estimate (ZAR)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
                <input 
                  type="number" 
                  name="budget"
                  value={data.budget}
                  onChange={handleChange}
                  placeholder="e.g. 10000"
                  className={`${inputClasses} pl-8`}
                  required
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className={labelClasses}>WhatsApp Number</label>
              <input 
                type="tel" 
                name="whatsapp"
                value={data.whatsapp}
                onChange={handleChange}
                placeholder="+27..."
                className={inputClasses}
                required
              />
            </div>
            
            {/* Email - Full width on mobile, half on desktop if needed, but looks better full row here or half. Let's do full row for email to ensure visibility */}
            <div className="md:col-span-2">
              <label className={labelClasses}>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-slate-500 mb-6">
              * Salary estimates are flexible. You will negotiate the final contract directly with the agency/nanny.
            </p>
            <Button type="submit" fullWidth variant="secondary" className="gap-2 group">
              Continue · No payment yet 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default IntakeForm;