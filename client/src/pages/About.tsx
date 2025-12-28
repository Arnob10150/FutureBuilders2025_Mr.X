export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pt-6">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="prose prose-slate prose-headings:font-display prose-headings:font-bold prose-h2:text-primary max-w-none bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-6 md:mt-0">
          
          <h1>About Mr.X's HealthBridge</h1>
          
          <h2>The Problem</h2>
          <p>
            In rural Bangladesh, millions lack immediate access to qualified doctors. Many rely on untrained village practitioners or delay treatment until it's too late. Internet connectivity is often spotty or non-existent in these deep rural pockets.
          </p>

          <h2>Our Solution</h2>
          <p>
            Mr.X's HealthBridge is an offline-first Progressive Web App (PWA) that brings medical expertise to the pocket of every rural citizen. It uses a lightweight, on-device AI expert system to analyze symptoms and provide immediate guidance without needing an internet connection.
          </p>

          {/* MANDATORY AI DISCLOSURE */}
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 not-prose my-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. AI Tools Disclosure (MANDATORY)</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Development & Code Generation:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
                        <li><strong>Replit Agent / Bolt.new</strong> - Full application scaffolding</li>
                        <li><strong>Claude AI (Anthropic)</strong> - System architecture, algorithms, documentation</li>
                        <li><strong>GitHub Copilot</strong> - Code completion (if applicable)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-2">AI Implementation in Application:</h3>
                    <p className="text-sm text-slate-700 mb-3">Our application uses <strong>Rule-Based Artificial Intelligence</strong> (Expert System), which includes:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
                        <li><strong>Pattern Recognition Algorithm</strong> - Matches user symptoms against medical database</li>
                        <li><strong>Fuzzy String Matching</strong> (Levenshtein Distance) - Handles typos and variations</li>
                        <li><strong>Natural Language Processing</strong> - Extracts medical keywords from free text</li>
                        <li><strong>Decision Tree Logic</strong> - Determines diagnosis based on symptom combinations</li>
                        <li><strong>Confidence Scoring System</strong> - Calculates match probability using weighted algorithms</li>
                        <li><strong>Severity Classification</strong> - Multi-factor risk assessment algorithm</li>
                        <li><strong>Recommendation Engine</strong> - Context-aware treatment suggestions</li>
                    </ol>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Why Rule-Based AI?</h3>
                    <p className="text-sm text-slate-700 mb-2">We chose rule-based AI over machine learning because:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
                        <li>✅ More accurate for medical diagnosis</li>
                        <li>✅ Explainable and trustworthy results</li>
                        <li>✅ Works perfectly offline</li>
                        <li>✅ No training data required</li>
                        <li>✅ Medically validated logic</li>
                        <li>✅ Used in professional medical systems (MYCIN, CADUCEUS)</li>
                    </ul>
                </div>

                <p className="text-sm font-medium text-slate-800 italic border-t border-blue-200 pt-4 mt-4">
                    This is <strong>legitimate AI</strong> - rule-based expert systems are a foundational AI technique used in real-world medical diagnosis systems.
                </p>
            </div>
          </div>
          
          <h2>Team & Credits</h2>
          <p>Built for the hackathon by Mr.X.</p>

        </div>
      </div>
    </div>
  );
}
