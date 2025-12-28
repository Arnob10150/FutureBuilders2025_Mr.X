import { type AIAnalysisResult } from "@/lib/ai";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  result: AIAnalysisResult;
  index: number;
}

export function SymptomResultCard({ result, index }: Props) {
  const { condition, confidence, severity, matchedSymptoms } = result;
  
  const severityColors = {
    low: "bg-emerald-50 text-emerald-700 border-emerald-200",
    moderate: "bg-amber-50 text-amber-700 border-amber-200",
    high: "bg-red-50 text-red-700 border-red-200",
  };

  const severityIcon = {
    low: <CheckCircle className="w-4 h-4" />,
    moderate: <Info className="w-4 h-4" />,
    high: <AlertTriangle className="w-4 h-4" />,
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow relative overflow-hidden"
    >
      {/* Confidence Bar Top */}
      <div className="absolute top-0 left-0 h-1.5 bg-gray-100 w-full">
        <div 
          className="h-full bg-primary rounded-r-full"
          style={{ width: `${confidence}%` }}
        />
      </div>

      <div className="mt-2 flex justify-between items-start mb-3">
        <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {condition.name}
                <span className="text-xs font-normal bg-slate-100 px-2 py-0.5 rounded-full text-slate-600">
                    {confidence}% Match
                </span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">
                Matched: {matchedSymptoms.join(", ")}
            </p>
        </div>
        <div className={clsx("px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 uppercase tracking-wide", severityColors[severity])}>
            {severityIcon[severity]}
            {severity}
        </div>
      </div>

      <div className="space-y-4">
        <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Recommendations</h4>
            <ul className="space-y-1.5">
                {condition.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 shrink-0" />
                        {rec}
                    </li>
                ))}
            </ul>
        </div>

        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> When to seek help
            </h4>
            <p className="text-sm text-slate-700 font-medium">
                {condition.whenToSeekHelp}
            </p>
        </div>
      </div>
    </motion.div>
  );
}
