import { Link } from "wouter";
import { Stethoscope, MapPin, Phone, ShieldCheck, WifiOff, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] pb-24 md:pb-12 bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-600 text-white pt-10 pb-20 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4 border border-white/20">
            <WifiOff className="w-4 h-4" /> Works Offline
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Healthcare access for <br className="hidden md:block"/>everyone, anywhere.
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl md:mx-0 mx-auto">
            Instant AI-powered symptom analysis and offline medical guidance for rural communities in Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/checkup">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1 duration-200">
                    <Stethoscope className="w-5 h-5" /> Start Checkup
                </button>
            </Link>
            <Link href="/facilities">
                <button className="bg-blue-700/50 backdrop-blur-sm text-white border border-blue-400/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700/70 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    <MapPin className="w-5 h-5" /> Find Hospitals
                </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard 
            icon={ShieldCheck}
            title="AI Expert System"
            desc="Intelligent symptom analysis using advanced medical algorithms."
            color="bg-emerald-500"
          />
          <FeatureCard 
            icon={WifiOff}
            title="Offline First"
            desc="Access medical database and facilities without internet."
            color="bg-amber-500"
          />
          <FeatureCard 
            icon={Phone}
            title="Emergency Support"
            desc="Quick access to ambulance, police, and fire services."
            color="bg-red-500"
          />
        </div>
      </div>

      {/* Recent Activity / Prompt */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-800">Why HealthBridge?</h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                 <h3 className="text-xl font-bold text-primary mb-3">Bridging the Gap</h3>
                 <p className="text-slate-600 leading-relaxed mb-6">
                    In rural Bangladesh, access to doctors can be hours away. HealthBridge provides immediate guidance, helping you decide if you can treat at home or need to travel for urgent care.
                 </p>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">Free</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">No Ads</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">Private</span>
                 </div>
            </div>
            <div className="md:w-1/2 bg-blue-50 rounded-2xl p-6 w-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Activity className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900">Health Stat</div>
                        <div className="text-xs text-slate-500">Rural Healthcare Access</div>
                    </div>
                </div>
                <div className="text-4xl font-display font-bold text-primary mb-1">65%</div>
                <p className="text-sm text-slate-600">of rural population lacks immediate access to qualified doctors.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-gray-200`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
