import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldAlert, 
  Zap, 
  Scan, 
  FileCheck2, 
  Sliders, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  MapPin, 
  Layers 
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function SimulationLab() {
  const [activeTab, setActiveTab] = useState('fraudlock');

  // FraudLock State
  const [amount, setAmount] = useState(2450);
  const [distanceKm, setDistanceKm] = useState(1200);
  const [hour, setHour] = useState(3);
  const [isNewDevice, setIsNewDevice] = useState(true);

  // Compute Fraud Probability dynamically
  const fraudScore = Math.min(
    99.8,
    Math.max(
      1.2,
      (amount > 1000 ? 30 : 5) +
      (distanceKm > 500 ? 35 : 5) +
      (hour >= 1 && hour <= 5 ? 20 : 2) +
      (isNewDevice ? 14 : -10)
    )
  );

  const isFraud = fraudScore > 55;

  // VoltVision State
  const puneLocations = [
    { id: 'hinjewadi', name: 'Hinjewadi IT Park Phase 1', evDensity: 'Extreme', peakDemand: '380 kW', recommendedStations: 4, gridCapacity: '88% Optimal' },
    { id: 'kothrud', name: 'Kothrud & Paud Road', evDensity: 'High', peakDemand: '240 kW', recommendedStations: 2, gridCapacity: '92% Optimal' },
    { id: 'vimannagar', name: 'Viman Nagar / Airport Hub', evDensity: 'Very High', peakDemand: '310 kW', recommendedStations: 3, gridCapacity: '84% Optimal' },
    { id: 'shivajinagar', name: 'Shivajinagar Interchange', evDensity: 'High', peakDemand: '260 kW', recommendedStations: 3, gridCapacity: '90% Optimal' },
  ];
  const [selectedLocation, setSelectedLocation] = useState(puneLocations[0]);

  // Cotton Leaf State
  const leafSamples = [
    { id: 'blight', name: 'Sample 01: Bacterial Blight', pathogen: 'Xanthomonas citri', confidence: '98.4%', bbox: { x: '25%', y: '28%', w: '48%', h: '46%' }, severity: 'High', treatment: 'Copper oxychloride 50 WP spray recommended' },
    { id: 'curl', name: 'Sample 02: Leaf Curl Virus', pathogen: 'Begomovirus', confidence: '96.2%', bbox: { x: '35%', y: '20%', w: '52%', h: '55%' }, severity: 'Critical', treatment: 'Control whitefly vector via systemic insecticides' },
    { id: 'healthy', name: 'Sample 03: Prime Healthy Cotton', pathogen: 'None (Healthy Tissue)', confidence: '99.1%', bbox: { x: '20%', y: '20%', w: '60%', h: '60%' }, severity: 'None', treatment: 'Standard moisture & nitrogen schedule' },
  ];
  const [selectedSample, setSelectedSample] = useState(leafSamples[0]);

  // SmartPack State
  const [packType, setPackType] = useState('pharma');

  return (
    <section id="simulation-lab" className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header with GSAP triggers */}
      <div className="gsap-section-header flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="gsap-header-badge inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            02 // INTERACTIVE ARCHITECTURE LAB
          </div>
          <h2 className="gsap-header-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Live Model Inference Sandboxes.
          </h2>
          <p className="gsap-header-sub mt-3 text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Test the machine learning pipelines, geospatial algorithms, and computer vision models I built directly in your browser.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
          {[
            { id: 'fraudlock', label: 'FraudLock (ML/SHAP)', icon: ShieldAlert },
            { id: 'voltvision', label: 'VoltVision (GIS/EV)', icon: Zap },
            { id: 'cottonleaf', label: 'Cotton Leaf (YOLOv8)', icon: Scan },
            { id: 'smartpack', label: 'SmartPack (OCR)', icon: FileCheck2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  active
                    ? 'bg-emerald-600 text-white font-semibold shadow-soft'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div className="gsap-simulation-container glass-card-elevated rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-soft-lg relative overflow-hidden bg-white">
        
        {/* ================= TAB 1: FRAUDLOCK AI ================= */}
        {activeTab === 'fraudlock' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                  Imbalanced Classification • SMOTE • TreeSHAP Interpretability
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  FraudLock AI: Real-Time Transaction Scoring
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                  Latency: 28ms (FastAPI)
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                  SMOTE Resampled
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sliders Input Panel */}
              <div className="lg:col-span-6 space-y-6 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-emerald-600" />
                    Transaction Parameters
                  </span>
                  <span className="text-xs font-mono text-slate-500">Test Stress Cases</span>
                </div>

                {/* Amount Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-600 font-medium">Transaction Amount</span>
                    <span className="text-emerald-700 font-bold">${amount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="8000"
                    step="50"
                    value={amount}
                    onChange={(e) => {
                      sounds.playClick();
                      setAmount(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>$10 (Micro)</span>
                    <span>$8,000 (Outlier)</span>
                  </div>
                </div>

                {/* Distance Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-600 font-medium">Distance Jump from Home Coordinates</span>
                    <span className="text-emerald-700 font-bold">{distanceKm.toLocaleString()} km</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5000"
                    step="50"
                    value={distanceKm}
                    onChange={(e) => {
                      sounds.playClick();
                      setDistanceKm(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>1 km (Local)</span>
                    <span>5,000 km (Cross-Border)</span>
                  </div>
                </div>

                {/* Time of Day */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-600 font-medium">Time of Transaction (24h)</span>
                    <span className="text-slate-900 font-bold">{hour}:00 hrs</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="23"
                    step="1"
                    value={hour}
                    onChange={(e) => {
                      sounds.playClick();
                      setHour(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>00:00 (Midnight)</span>
                    <span>12:00 (Noon)</span>
                    <span>23:00</span>
                  </div>
                </div>

                {/* Device Anomaly Toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-900">Unrecognized Hardware Fingerprint</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Simulates new IP, browser canvas hash, or proxy node</div>
                  </div>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setIsNewDevice(!isNewDevice);
                    }}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isNewDevice ? 'bg-emerald-600' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isNewDevice ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

              </div>

              {/* Output Inference & SHAP Explainability Breakdown */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Risk Gauge Card */}
                <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  isFraud 
                    ? 'bg-rose-50/80 border-rose-200' 
                    : 'bg-emerald-50/80 border-emerald-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isFraud ? (
                        <AlertTriangle className="w-7 h-7 text-rose-600" />
                      ) : (
                        <CheckCircle className="w-7 h-7 text-emerald-600" />
                      )}
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-medium">Model Decision</div>
                        <div className={`text-xl font-display font-extrabold ${isFraud ? 'text-rose-700' : 'text-emerald-800'}`}>
                          {isFraud ? 'FRAUDULENT ANOMALY' : 'LEGITIMATE TRANSACTION'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-slate-600 font-medium">Risk Score</div>
                      <div className="text-3xl font-display font-extrabold text-slate-900">
                        {fraudScore.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden border border-slate-200">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        isFraud ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-gradient-to-r from-teal-400 to-emerald-500'
                      }`}
                      style={{ width: `${fraudScore}%` }}
                    />
                  </div>
                </div>

                {/* SHAP Feature Contributions Waterfall */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-emerald-600" />
                      SHAP Explainability Vectors (Feature Impact)
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">f(x) Impact</span>
                  </div>

                  <div className="space-y-3.5 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-700 font-medium">V14: Geospatial Distance Shift ({distanceKm} km)</span>
                        <span className={distanceKm > 500 ? 'text-rose-600 font-bold' : 'text-emerald-700 font-bold'}>
                          {distanceKm > 500 ? '+0.42 (Risk)' : '-0.21 (Safe)'}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${distanceKm > 500 ? 'bg-rose-500 w-[75%]' : 'bg-emerald-500 w-[25%]'}`} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-700 font-medium">V4: Transaction Velocity & Amount (${amount})</span>
                        <span className={amount > 1500 ? 'text-rose-600 font-bold' : 'text-emerald-700 font-bold'}>
                          {amount > 1500 ? '+0.36 (Risk)' : '-0.15 (Safe)'}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${amount > 1500 ? 'bg-rose-500 w-[65%]' : 'bg-emerald-500 w-[30%]'}`} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-700 font-medium">V12: Nocturnal Time Window ({hour}:00 hrs)</span>
                        <span className={hour <= 5 ? 'text-amber-600 font-bold' : 'text-emerald-700 font-bold'}>
                          {hour <= 5 ? '+0.24 (Risk)' : '-0.08 (Safe)'}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${hour <= 5 ? 'bg-amber-500 w-[50%]' : 'bg-emerald-500 w-[15%]'}`} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-700 font-medium">V17: Device Hardware Signature</span>
                        <span className={isNewDevice ? 'text-rose-600 font-bold' : 'text-emerald-700 font-bold'}>
                          {isNewDevice ? '+0.19 (Unrecognized)' : '-0.30 (Trusted)'}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${isNewDevice ? 'bg-rose-500 w-[40%]' : 'bg-emerald-500 w-[45%]'}`} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-200 text-xs font-mono text-slate-600">
                    💡 <strong className="text-slate-900 font-semibold">Engineering Note:</strong> SHAP ensures compliance with financial fair-lending and anti-blackbox regulatory standards.
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= TAB 2: VOLTVISION AI ================= */}
        {activeTab === 'voltvision' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                  Geospatial Voronoi Clustering • OSMnx • PostGIS Spatial Indexing
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  VoltVision AI: Pune Urban EV Grid Forecaster
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                  500m Grid Cell Granularity
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                  Pune, India Coordinates
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Location Selector */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Select Pune Urban Sector:
                </div>
                {puneLocations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedLocation(loc);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedLocation.id === loc.id
                        ? 'bg-emerald-50/90 border-emerald-500 shadow-soft'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-sm font-bold text-slate-900 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        {loc.name}
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {loc.evDensity} Density
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-mono text-slate-600 flex items-center gap-4">
                      <span>Peak Demand: <strong className="text-slate-900">{loc.peakDemand}</strong></span>
                      <span>Stations: <strong className="text-emerald-700 font-bold">+{loc.recommendedStations}</strong></span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Spatial Visualizer Output */}
              <div className="lg:col-span-7 space-y-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    Optimal Charging Node Forecast ({selectedLocation.name})
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-700">PostGIS Index: R-Tree</span>
                </div>

                {/* Simulated Geospatial Graph */}
                <div className="relative h-48 rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
                  
                  {/* Heatmap rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-emerald-400/50 animate-ping opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-emerald-300/60 opacity-40" />

                  <div className="relative z-10 flex justify-between items-start text-xs font-mono">
                    <span className="text-slate-600 font-medium">Road Network: 4,820 Nodes</span>
                    <span className="text-emerald-700 font-bold">Recommended: {selectedLocation.recommendedStations} × 120kW DC Fast Hubs</span>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-center shadow-soft">
                      <div className="text-[10px] font-mono uppercase text-emerald-300 font-semibold">Centroid Node Coordinates</div>
                      <div className="text-xs font-mono font-bold">Lat 18.5204° N, Long 73.8567° E</div>
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-between text-xs font-mono text-slate-600">
                    <span>Grid Load Margin: <strong className="text-slate-900">{selectedLocation.gridCapacity}</strong></span>
                    <span>Transit Friction: Minimized</span>
                  </div>
                </div>

                {/* Quantitative Metric Badges */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Model R² Score</div>
                    <div className="text-lg font-mono font-bold text-emerald-700">0.912</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Peak Demand</div>
                    <div className="text-lg font-mono font-bold text-slate-900">{selectedLocation.peakDemand}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Queue Reduction</div>
                    <div className="text-lg font-mono font-bold text-emerald-700">38.4%</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= TAB 3: COTTON LEAF ANALYZER ================= */}
        {activeTab === 'cottonleaf' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                  YOLOv8 Convolutional Backbone • PyTorch Edge Inference • Agricultural Tech
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  Cotton Leaf Disease Vision Analyzer
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                  mAP@50: 93.8%
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                  22 FPS Edge
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sample Chooser */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Select Field Test Sample:
                </div>
                {leafSamples.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedSample(sample);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedSample.id === sample.id
                        ? 'bg-emerald-50/90 border-emerald-500 shadow-soft'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-emerald-600" />
                        {sample.name}
                      </div>
                      <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        sample.severity === 'Critical' ? 'bg-rose-100 text-rose-800' :
                        sample.severity === 'High' ? 'bg-amber-100 text-amber-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {sample.severity} Severity
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-mono text-slate-600">
                      Pathogen: <span className="text-slate-900 font-medium">{sample.pathogen}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Bounding Box Visualizer */}
              <div className="lg:col-span-7 space-y-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-semibold flex items-center gap-2">
                    <Scan className="w-4 h-4 text-emerald-600" />
                    Simulated YOLOv8 Detection View
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-700">Confidence: {selectedSample.confidence}</span>
                </div>

                {/* Simulated Camera Feed Frame */}
                <div className="relative h-56 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
                  
                  {/* Dynamic Bounding Box Overlay */}
                  <div 
                    className="absolute border-2 border-emerald-400 bg-emerald-500/20 rounded-lg transition-all duration-300 flex flex-col justify-between p-2 shadow-green-glow"
                    style={{
                      left: selectedSample.bbox.x,
                      top: selectedSample.bbox.y,
                      width: selectedSample.bbox.w,
                      height: selectedSample.bbox.h,
                    }}
                  >
                    <div className="inline-block self-start px-2 py-0.5 bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold rounded">
                      {selectedSample.pathogen.split(' ')[0]} ({selectedSample.confidence})
                    </div>
                    <div className="self-end text-[10px] font-mono text-emerald-300 font-bold">
                      IOU: 0.88
                    </div>
                  </div>

                  <div className="text-slate-400 font-mono text-xs">
                    [ Field Camera Feed Stream ]
                  </div>
                </div>

                {/* Treatment / Agronomic Advisory */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold mb-1">
                    Automated Agronomic Advisory:
                  </div>
                  <div className="text-xs text-slate-700 font-sans leading-relaxed">
                    {selectedSample.treatment}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= TAB 4: SMARTPACK COMPLIANCE ================= */}
        {activeTab === 'smartpack' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold">
                  OCR Text Pipeline • Legal Metrology Rules • FastAPI & Node.js
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  SmartPack: Packaging Label Compliance Auditor
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
                  24 Statutory Rules Checked
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Package Category:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setPackType('pharma');
                    }}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      packType === 'pharma' ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold' : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    Pharmaceutical Pack
                  </button>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setPackType('food');
                    }}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      packType === 'food' ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold' : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    FMCG Food Product
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-2">
                  <div className="text-slate-600 font-semibold">// OCR Extracted Text:</div>
                  <div className="bg-white p-3.5 rounded-lg text-slate-800 space-y-1 text-[11px] border border-slate-200 shadow-inner">
                    <div>"MRP: Rs. 185.00 (Incl. of all taxes)"</div>
                    <div>"Mfg Date: 10/2026 | Exp: 09/2028"</div>
                    <div>"Batch No: BN-99214-A"</div>
                    <div>"Net Qty: 200 ml"</div>
                    <div>"Lic No: 10014022003189"</div>
                  </div>
                </div>
              </div>

              {/* Compliance Checklist */}
              <div className="lg:col-span-7 space-y-3 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-800 font-semibold flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    Automated Statutory Compliance Scorecard
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold">100% Passed</span>
                </div>

                {[
                  { rule: "Mandatory Maximum Retail Price (MRP)", status: "Pass", note: "Explicitly declared with tax disclaimer" },
                  { rule: "Net Quantity Declarations", status: "Pass", note: "Complies with Legal Metrology Standard Units (ml)" },
                  { rule: "Batch ID & Date of Manufacture", status: "Pass", note: "Both timestamps parsed without OCR ambiguity" },
                  { rule: "Statutory License Number (FSSAI / FDA)", status: "Pass", note: "14-digit checksum verified against database" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-soft-sm">
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-900">{item.rule}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.note}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                      PASSED
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
