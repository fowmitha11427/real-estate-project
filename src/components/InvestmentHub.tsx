import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, BarChart3, DollarSign } from 'lucide-react';
import { useTheme } from '../lib/context';

export default function InvestmentHub() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'mortgage' | 'roi' | 'appreciation'>('mortgage');
  
  // Mortgage Calculator
  const [propertyPrice, setPropertyPrice] = useState(10000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // ROI Calculator
  const [purchasePrice, setPurchasePrice] = useState(10000000);
  const [annualRent, setAnnualRent] = useState(600000);
  const [annualExpenses, setAnnualExpenses] = useState(120000);

  // Appreciation
  const [currentValue, setCurrentValue] = useState(10000000);
  const [appreciationRate, setAppreciationRate] = useState(5);
  const [years, setYears] = useState(10);

  const mortgageResult = useMemo(() => {
    const principal = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const payments = loanTerm * 12;
    const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
    return {
      monthly: monthly.toFixed(0),
      total: (monthly * payments).toFixed(0),
      principal: principal.toFixed(0),
      downPaymentAmount: (propertyPrice * downPayment / 100).toFixed(0)
    };
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const roiResult = useMemo(() => {
    const netIncome = annualRent - annualExpenses;
    const roi = (netIncome / purchasePrice) * 100;
    return {
      netIncome: netIncome.toFixed(0),
      roi: roi.toFixed(2),
      capRate: ((netIncome / purchasePrice) * 100).toFixed(2)
    };
  }, [purchasePrice, annualRent, annualExpenses]);

  const appreciationResult = useMemo(() => {
    const futureValue = currentValue * Math.pow(1 + appreciationRate / 100, years);
    const gain = futureValue - currentValue;
    return {
      futureValue: futureValue.toFixed(0),
      gain: gain.toFixed(0),
      percentageGain: ((gain / currentValue) * 100).toFixed(1)
    };
  }, [currentValue, appreciationRate, years]);

  const formatCurrency = (val: string) => {
    const num = parseFloat(val);
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num.toFixed(0)}`;
  };

  const tabs = [
    { id: 'mortgage' as const, label: 'Mortgage', icon: Calculator },
    { id: 'roi' as const, label: 'ROI Calculator', icon: BarChart3 },
    { id: 'appreciation' as const, label: 'Appreciation', icon: TrendingUp },
  ];

  const inputClass = `w-full py-3 px-4 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
    isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 text-gray-800 border border-gray-200'
  }`;
  const labelClass = `text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`;

  return (
    <section id="investments" className={`py-24 md:py-32 ${isDark ? 'bg-black-luxury' : 'bg-gray-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Smart Investing</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Investment Hub
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Powerful tools to analyze and optimize your luxury real estate investments.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-black-luxury shadow-lg shadow-gold/20'
                  : isDark
                    ? 'bg-white/5 text-white/60 border border-white/10 hover:border-gold/30'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gold/30'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-6 md:p-10 ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}
        >
          {activeTab === 'mortgage' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Property Price ($)</label>
                  <input type="number" value={propertyPrice} onChange={e => setPropertyPrice(Number(e.target.value))} className={inputClass} />
                  <input type="range" min={1000000} max={100000000} step={500000} value={propertyPrice} onChange={e => setPropertyPrice(Number(e.target.value))} className="w-full mt-2 accent-gold" />
                </div>
                <div>
                  <label className={labelClass}>Down Payment ({downPayment}%)</label>
                  <input type="range" min={5} max={50} value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} className="w-full accent-gold" />
                </div>
                <div>
                  <label className={labelClass}>Interest Rate ({interestRate}%)</label>
                  <input type="range" min={1} max={15} step={0.1} value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full accent-gold" />
                </div>
                <div>
                  <label className={labelClass}>Loan Term ({loanTerm} years)</label>
                  <input type="range" min={5} max={30} step={5} value={loanTerm} onChange={e => setLoanTerm(Number(e.target.value))} className="w-full accent-gold" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className={`rounded-xl p-6 space-y-4 ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}`}>
                  <div className="text-center mb-6">
                    <DollarSign size={32} className="text-gold mx-auto mb-2" />
                    <span className={`text-3xl font-bold font-[Playfair_Display] ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                      {formatCurrency(mortgageResult.monthly)}
                    </span>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Monthly Payment</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">{formatCurrency(mortgageResult.downPaymentAmount)}</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Down Payment</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">{formatCurrency(mortgageResult.principal)}</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Loan Amount</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center col-span-2 ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">{formatCurrency(mortgageResult.total)}</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Total Payment Over {loanTerm} Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roi' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Purchase Price ($)</label>
                  <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Annual Rental Income ($)</label>
                  <input type="number" value={annualRent} onChange={e => setAnnualRent(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Annual Expenses ($)</label>
                  <input type="number" value={annualExpenses} onChange={e => setAnnualExpenses(Number(e.target.value))} className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className={`rounded-xl p-6 ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}`}>
                  <div className="text-center mb-6">
                    <BarChart3 size={32} className="text-gold mx-auto mb-2" />
                    <span className={`text-4xl font-bold font-[Playfair_Display] ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                      {roiResult.roi}%
                    </span>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Annual ROI</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">{formatCurrency(roiResult.netIncome)}</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Net Annual Income</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">{roiResult.capRate}%</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Cap Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appreciation' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Current Property Value ($)</label>
                  <input type="number" value={currentValue} onChange={e => setCurrentValue(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Annual Appreciation Rate ({appreciationRate}%)</label>
                  <input type="range" min={1} max={15} step={0.5} value={appreciationRate} onChange={e => setAppreciationRate(Number(e.target.value))} className="w-full accent-gold" />
                </div>
                <div>
                  <label className={labelClass}>Investment Period ({years} years)</label>
                  <input type="range" min={1} max={30} value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-gold" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className={`rounded-xl p-6 ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}`}>
                  <div className="text-center mb-6">
                    <TrendingUp size={32} className="text-gold mx-auto mb-2" />
                    <span className={`text-3xl font-bold font-[Playfair_Display] ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                      {formatCurrency(appreciationResult.futureValue)}
                    </span>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Projected Value in {years} Years</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">+{formatCurrency(appreciationResult.gain)}</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Total Gain</p>
                    </div>
                    <div className={`p-3 rounded-lg text-center ${isDark ? 'bg-white/[0.03]' : 'bg-white'}`}>
                      <span className="text-gold font-bold text-sm">+{appreciationResult.percentageGain}%</span>
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Total Return</p>
                    </div>
                  </div>
                  {/* Simple bar chart */}
                  <div className="mt-6 flex items-end gap-1 h-24">
                    {Array.from({ length: Math.min(years, 15) }).map((_, i) => {
                      const val = currentValue * Math.pow(1 + appreciationRate / 100, i + 1);
                      const maxVal = currentValue * Math.pow(1 + appreciationRate / 100, Math.min(years, 15));
                      const height = (val / maxVal) * 100;
                      return (
                        <div key={i} className="flex-1 bg-gold/20 rounded-t-sm relative group" style={{ height: `${height}%` }}>
                          <div className="absolute inset-0 bg-gold/40 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
