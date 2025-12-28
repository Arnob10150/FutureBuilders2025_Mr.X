import { useState } from "react";
import { HEALTH_FACILITIES } from "@/lib/medicalData";
import { Search, MapPin, Phone, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function Facilities() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"All" | "Hospital" | "Clinic">("All");

  const filteredFacilities = HEALTH_FACILITIES.filter(facility => {
    const matchesSearch = facility.name.toLowerCase().includes(search.toLowerCase()) || 
                          facility.district.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "All" || facility.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pt-6">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="mb-6 pt-6 md:pt-0">
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Health Facilities</h1>
          <p className="text-slate-500">Find hospitals and clinics available offline.</p>
        </div>

        {/* Search & Filter */}
        <div className="sticky top-[70px] z-30 bg-slate-50 pb-4">
            <div className="flex gap-3 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or district..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm"
                    />
                </div>
                <button className="bg-white px-4 rounded-xl border border-slate-200 shadow-sm text-slate-600 hover:bg-slate-50">
                    <Filter className="w-5 h-5" />
                </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {["All", "Hospital", "Clinic"].map(type => (
                    <button
                        key={type}
                        onClick={() => setFilterType(type as any)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                            filterType === type 
                            ? "bg-primary text-white shadow-md shadow-primary/20" 
                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>

        {/* List */}
        <div className="grid gap-4">
            {filteredFacilities.map((facility, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={facility.id}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg text-slate-900">{facility.name}</h3>
                                {facility.emergency && (
                                    <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-red-100">
                                        Emergency
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                {facility.district} • {facility.type}
                            </div>
                        </div>
                        <a 
                            href={`tel:${facility.phone}`}
                            className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full hover:bg-emerald-100 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-slate-50">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Services</p>
                        <div className="flex flex-wrap gap-2">
                            {facility.services.map((service, i) => (
                                <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}

            {filteredFacilities.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-slate-400">No facilities found matching your criteria.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
