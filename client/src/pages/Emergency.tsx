import { Phone, ShieldAlert, Truck, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Emergency() {
  const emergencyContacts = [
    {
      name: "National Emergency",
      number: "999",
      icon: ShieldAlert,
      color: "bg-red-500",
      desc: "Police, Ambulance, Fire"
    },
    {
      name: "Health Call Center",
      number: "16263",
      icon: Phone,
      color: "bg-emerald-500",
      desc: "24/7 Medical Advice"
    },
    {
      name: "Ambulance Service",
      number: "999",
      icon: Truck,
      color: "bg-blue-500",
      desc: "Urgent Transport"
    },
    {
      name: "Fire Service",
      number: "102",
      icon: Flame,
      color: "bg-orange-500",
      desc: "Fire & Rescue"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pt-6">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 mb-8 text-center mt-6 md:mt-0">
            <h1 className="text-2xl font-display font-bold text-red-700 mb-2">Emergency Resources</h1>
            <p className="text-red-600/80">
                If you are in immediate danger, do not use the app. Call emergency services immediately.
            </p>
        </div>

        <div className="grid gap-4">
            {emergencyContacts.map((contact, index) => (
                <motion.a
                    key={index}
                    href={`tel:${contact.number}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md hover:border-red-100 transition-all group"
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform`}>
                            <contact.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">{contact.name}</h3>
                            <p className="text-slate-500 text-sm">{contact.desc}</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-xl text-xl font-bold text-slate-800 border border-slate-100 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                        {contact.number}
                    </div>
                </motion.a>
            ))}
        </div>

        {/* SMS Simulator Teaser */}
        <div className="mt-12 bg-white rounded-3xl p-6 border border-slate-200">
             <h2 className="text-xl font-bold text-slate-900 mb-4">SMS Simulation</h2>
             <p className="text-slate-500 mb-6">
                 In rural areas with no internet, our system can work via SMS. Try the simulator below.
             </p>
             <div className="bg-slate-100 rounded-2xl p-4 font-mono text-sm text-slate-600 mb-4">
                 User: HELP fever headache<br/>
                 System: Possible: Flu (High). Visit Dr. Khan at 017...
             </div>
             <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
                 Open SMS Simulator
             </button>
        </div>
      </div>
    </div>
  );
}
