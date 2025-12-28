import { useState } from "react";
import { analyzeSymptoms, assessSeverity, type AIAnalysisResult } from "@/lib/ai";
import { useCreateHealthRecord } from "@/hooks/use-health-records";
import { SymptomResultCard } from "@/components/SymptomResultCard";
import { Loader2, ArrowRight, AlertCircle, RefreshCw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Checkup() {
  const [symptoms, setSymptoms] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AIAnalysisResult[] | null>(null);
  const { mutate: saveRecord } = useCreateHealthRecord();

  const handleAnalyze = () => {
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    setResults(null);

    // Simulate AI processing delay for UX
    setTimeout(() => {
      const analysis = analyzeSymptoms(symptoms);
      setResults(analysis);
      
      const severity = assessSeverity(analysis);
      
      // Save to database
      saveRecord({
        symptoms: symptoms,
        diagnosis: analysis,
        severity: severity.level
      });

      setIsAnalyzing(false);
    }, 1500);
  };

  const severityAssessment = results ? assessSeverity(results) : null;

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pt-6">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 pt-6 md:pt-0">
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Symptom Checker</h1>
          <p className="text-slate-500">Describe your symptoms below for an AI-powered assessment.</p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-8">
            <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">
                How are you feeling today?
            </label>
            <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g. I have had a high fever for 2 days, severe headache, and body pain..."
                className="w-full min-h-[140px] p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 placeholder:text-slate-400 resize-none text-lg"
            />
            
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !symptoms.trim()}
                    className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                >
                    {isAnalyzing ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" /> Analyzing...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5" /> Analyze Symptoms
                        </>
                    )}
                </button>
            </div>
        </div>

        {/* Results Section */}
        <AnimatePresence>
            {results && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-800">Analysis Results</h2>
                        <button 
                            onClick={() => { setResults(null); setSymptoms(""); }}
                            className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
                        >
                            <RefreshCw className="w-4 h-4" /> Reset
                        </button>
                    </div>

                    {/* Overall Severity Badge */}
                    {severityAssessment && (
                        <div className={`mb-6 p-4 rounded-2xl border flex items-start gap-4 ${
                            severityAssessment.level === "HIGH" ? "bg-red-50 border-red-200" :
                            severityAssessment.level === "MODERATE" ? "bg-amber-50 border-amber-200" :
                            "bg-emerald-50 border-emerald-200"
                        }`}>
                            <div className={`p-2 rounded-full shrink-0 ${
                                severityAssessment.level === "HIGH" ? "bg-red-100 text-red-600" :
                                severityAssessment.level === "MODERATE" ? "bg-amber-100 text-amber-600" :
                                "bg-emerald-100 text-emerald-600"
                            }`}>
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg ${
                                    severityAssessment.level === "HIGH" ? "text-red-700" :
                                    severityAssessment.level === "MODERATE" ? "text-amber-700" :
                                    "text-emerald-700"
                                }`}>
                                    Severity: {severityAssessment.level}
                                </h3>
                                <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                                    {severityAssessment.description} Please review the matches below carefully.
                                </p>
                            </div>
                        </div>
                    )}

                    {results.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
                            <p className="text-slate-500">No specific conditions matched your description.</p>
                            <p className="text-sm text-slate-400 mt-2">Try describing your symptoms with more detail.</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {results.map((result, idx) => (
                                <SymptomResultCard key={result.condition.id} result={result} index={idx} />
                            ))}
                        </div>
                    )}

                    <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                        <p className="text-blue-800 font-medium mb-4">
                            This is an AI simulation. Always consult a real doctor for serious health concerns.
                        </p>
                        <a href="/facilities" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                            Find nearby doctors <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
