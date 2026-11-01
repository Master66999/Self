import React, { useEffect, useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  Mail,
  MapPin,
  FileCode,
  Eye,
  Sparkles,
  Award
} from 'lucide-react';
import { personalInfo, education, projects, skillsCategories, certifications } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  const [copiedTxt, setCopiedTxt] = useState(false);
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'text'
  const [styleMode, setStyleMode] = useState('modern'); // 'modern' | 'classic'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Plain Text formatted strictly for Applicant Tracking Systems (Workday, Lever, Greenhouse)
  const plainTextResume = `${personalInfo.name.toUpperCase()}
Pune, Maharashtra, India | Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
LeetCode: ${personalInfo.leetcode} | HackerRank: ${personalInfo.hackerrank}

==================================================
PROFESSIONAL SUMMARY
==================================================
Computer Science Engineering student specializing in Artificial Intelligence and Data Science at Pimpri Chinchwad University (CGPI: 9.48 / 10.0). Proven track record engineering and deploying production machine learning pipelines, deep learning computer vision architectures (YOLOv8), geospatial demand forecasting (OSMnx/PostGIS), and low-latency REST APIs (FastAPI/Node.js). Experienced in class-imbalanced modeling with SMOTE and explainable AI with TreeSHAP.

==================================================
EDUCATION
==================================================
Pimpri Chinchwad University, Pune, Maharashtra, India
Bachelor of Technology (B.Tech) - Computer Science & Engineering (AI & Data Science)
CGPI: 9.48 / 10.0 (Top Tier Honors) | 2022 - 2026
Key Coursework: Data Structures & Algorithms, Machine Learning & Neural Networks, Deep Learning & Computer Vision, Database Management Systems, Operating Systems, Computer Networks.

==================================================
TECHNICAL SKILLS
==================================================
- Programming Languages: Python, C++, SQL, JavaScript (ES6+), HTML5, CSS3, PHP
- AI & Deep Learning: Machine Learning, Computer Vision (YOLOv8, OpenCV), PyTorch, TensorFlow, Scikit-learn, TreeSHAP, SMOTE, NLP
- Data Science & Geospatial: GeoPandas, OSMnx, PostGIS, Pandas, NumPy, Matplotlib, Power BI, Tableau, Spatial Voronoi
- Web Development & APIs: FastAPI, Flask, Node.js, Express.js, React.js, Tailwind CSS, REST APIs, WebSockets
- Databases & DevTools: PostgreSQL, MySQL, MongoDB, Docker, Git, GitHub Actions, Linux, VS Code, Vercel, Netlify, Render

==================================================
FEATURED ENGINEERING PROJECTS
==================================================
1. SmartPack (BIS Regulatory & Packaging Compliance Auditor)
Technologies: HTML5, CSS3, JavaScript, Node.js, Python, FastAPI, Tesseract OCR, Vercel
Live URL: https://bis-lake.vercel.app/#main-content | GitHub: https://github.com/Master66999/BIS
- Engineered automated packaging verification pipeline using OpenCV preprocessing and Tesseract OCR, achieving 97.2% character extraction accuracy on curved & reflective label surfaces.
- Implemented declarative JSON rule-validation engine cross-referencing mandatory statutory declarations (MRP, batch ID, expiry, net weight) under BIS Legal Metrology 2011.
- Decoupled client orchestration from asynchronous Python OCR compute workers, reducing total audit latency to 1.4s per label.

2. VoltVision AI (EV Demand Forecasting & Optimal Charging Hub Recommender)
Technologies: Python, XGBoost, GeoPandas, OSMnx, PostgreSQL, PostGIS, FastAPI, Netlify
Live URL: https://evvision.netlify.app/landing.html | GitHub: https://github.com/Master66999/EV_placement_station
- Synthesized regional EV vehicle registries and municipal road networks using OSMnx graph algorithms and PostGIS spatial indexing.
- Trained XGBoost regression models on traffic density and spatial features to forecast peak kilowatt-hour charging demands with R² 0.924.
- Applied spatial Voronoi tessellation to generate automated optimal charging hub recommendations balancing grid load and driver transit distance.

3. LeafSense AI (Agricultural Computer Vision & Cotton Leaf Pathogen Classifier)
Technologies: Python, CNN, YOLOv8, PyTorch, OpenCV, Render
Live URL: https://leafsense-web-44p0.onrender.com/ | GitHub: https://github.com/Master66999/Hackthon-pccoe
- Fine-tuned YOLOv8 convolutional neural network across multi-class agricultural pathogen datasets, achieving 93.8% mAP@50 under variable lighting and shadows.
- Automated real-time localized bounding box detection for Bacterial Blight, Leaf Curl, and Alternaria leaf spot with sub-40ms frame inference.
- Deployed full production web service on Render with drag-and-drop image inference and automated pathology health scorecards.

4. Loan Deform & FraudLock AI (Credit Default & Financial Anomaly Classifier with SHAP)
Technologies: Python, Scikit-learn, XGBoost, SMOTE, TreeSHAP, FastAPI
GitHub: https://github.com/Master66999/Loan_deformation
- Solved severe 99.8% class imbalance on multi-attribute financial credit records using SMOTE and cost-sensitive XGBoost classification (0.912 AUC-ROC).
- Integrated TreeSHAP (SHapley Additive exPlanations) to provide transparent, mathematically provable feature attribution scorecards ensuring complete regulatory compliance.
- Engineered high-concurrency FastAPI inference microservice delivering sub-40ms risk scoring for incoming credit applications.

==================================================
CERTIFICATIONS
==================================================
- Oracle Autonomous AI Database 26ai Learning Path - Oracle
- Python for Data Science - NPTEL
- Generative AI Language Modeling - IBM (Coursera)
- Using Python to Access Web Data - University of Michigan (Coursera)
- AWS Cloud Technical Essentials - Amazon Web Services (Coursera)
- Java Full Stack Developer - Professional Certification Program

==================================================
ACHIEVEMENTS & OPEN SOURCE
==================================================
- Hacktoberfest Open Source Contributor (GitHub: Master66999): Authored PRs and committed clean code to public open-source repos.
- Academic Honors: Top 1% of CSE (AI & DS) department with CGPI 9.48 / 10.0 at Pimpri Chinchwad University.
- PCCOE Hackathon Finalist: Engineered real-time agricultural pathogen detection AI under 24-hour sprint.
`;

  const handlePrint = () => {
    sounds.playSuccess();
    setViewMode('visual');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleDownloadFile = () => {
    sounds.playSuccess();
    // Builds a top-tier, Ivy League / FAANG-standard standalone HTML resume with embedded fonts & print styling
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atharva_Lawange_Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      margin: 0;
      padding: 30px 20px;
      background: #F1F5F9;
      color: #0F172A;
      line-height: 1.45;
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }
    .action-bar {
      max-width: 8.5in;
      margin: 0 auto 20px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FFFFFF;
      padding: 12px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      border: 1px solid #E2E8F0;
    }
    .action-bar span {
      font-weight: 600;
      font-size: 13px;
      color: #0F172A;
    }
    .btn-print {
      background: #059669;
      color: #FFFFFF;
      border: none;
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .btn-print:hover { background: #047857; }
    .resume-sheet {
      max-width: 8.5in;
      margin: 0 auto;
      background: #FFFFFF;
      padding: 0.6in 0.7in;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border-radius: 4px;
      border: 1px solid #E2E8F0;
    }
    .header {
      text-align: center;
      margin-bottom: 16px;
      padding-bottom: 14px;
      border-bottom: 2px solid #0F172A;
    }
    .header h1 {
      font-size: 26px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin: 0 0 4px 0;
      color: #0F172A;
    }
    .header .subtitle {
      font-size: 13px;
      font-weight: 600;
      color: #047857;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .header .contact-row {
      font-size: 12px;
      color: #475569;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    .header .contact-row a {
      color: #0F172A;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid #CBD5E1;
    }
    .header .contact-row a:hover { color: #059669; border-color: #059669; }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: #0F172A;
      border-bottom: 1.5px solid #0F172A;
      padding-bottom: 3px;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    .profile-summary {
      font-size: 12.5px;
      color: #334155;
      line-height: 1.5;
      margin: 0;
      text-align: justify;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 8px;
      margin-bottom: 2px;
    }
    .entry-title {
      font-size: 13px;
      font-weight: 700;
      color: #0F172A;
    }
    .entry-role {
      font-size: 12.5px;
      font-weight: 500;
      color: #334155;
      font-style: italic;
    }
    .entry-meta {
      font-size: 12px;
      font-weight: 600;
      color: #0F172A;
      text-align: right;
    }
    .entry-date {
      font-size: 11.5px;
      color: #64748B;
      font-style: italic;
    }
    .entry-links {
      font-size: 11px;
      color: #64748B;
    }
    .entry-links a {
      color: #059669;
      text-decoration: none;
      font-weight: 600;
      margin-left: 6px;
    }
    .entry-links a:hover { text-decoration: underline; }
    ul {
      margin: 4px 0 6px 18px;
      padding: 0;
    }
    li {
      margin-bottom: 3px;
      font-size: 12.5px;
      color: #334155;
      line-height: 1.45;
    }
    li strong {
      color: #0F172A;
      font-weight: 600;
    }
    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 4px;
    }
    .skill-line {
      font-size: 12.5px;
      color: #334155;
      line-height: 1.45;
    }
    .skill-line strong {
      color: #0F172A;
      font-weight: 600;
    }
    @media print {
      body {
        background: #FFFFFF !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      .action-bar { display: none !important; }
      .resume-sheet {
        box-shadow: none !important;
        border: none !important;
        padding: 0.4in 0.5in !important;
        max-width: 100% !important;
      }
      @page {
        size: letter;
        margin: 0.4in 0.5in;
      }
    }
  </style>
</head>
<body>

  <!-- Screen Action Bar -->
  <div class="action-bar">
    <div>
      <span>Atharva Lawange — ATS Resume</span>
      <span style="color: #059669; font-size: 11px; margin-left: 8px;">✓ 100% ATS Parser Ready</span>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="btn-print" onclick="window.print()">
        🖨️ Print / Save as PDF
      </button>
    </div>
  </div>

  <!-- Authentic Visual ATS Resume Sheet -->
  <div class="resume-sheet">
    
    <!-- Header -->
    <div class="header">
      <h1>Atharva Lawange</h1>
      <div class="subtitle">Computer Science Engineer | AI & Data Science Specialist</div>
      <div class="contact-row">
        <span>Pune, Maharashtra, India</span>
        <span>•</span>
        <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
        <span>•</span>
        <a href="${personalInfo.linkedin}" target="_blank">LinkedIn</a>
        <span>•</span>
        <a href="${personalInfo.github}" target="_blank">GitHub</a>
        <span>•</span>
        <a href="${personalInfo.leetcode}" target="_blank">LeetCode</a>
        <span>•</span>
        <a href="${personalInfo.hackerrank}" target="_blank">HackerRank</a>
      </div>
    </div>

    <!-- Professional Profile -->
    <div class="section-title">Professional Summary</div>
    <p class="profile-summary">
      Computer Science Engineering student specializing in Artificial Intelligence and Data Science at Pimpri Chinchwad University (CGPI: 9.48 / 10.0). Proven track record engineering and deploying production machine learning pipelines, deep learning computer vision architectures (YOLOv8), geospatial demand forecasting (OSMnx/PostGIS), and low-latency REST APIs (FastAPI/Node.js). Experienced in class-imbalanced modeling with SMOTE and explainable AI with TreeSHAP.
    </p>

    <!-- Education -->
    <div class="section-title">Education</div>
    <div class="entry-header">
      <div>
        <span class="entry-title">${education.institution}</span> — Pune, Maharashtra, India<br>
        <span class="entry-role">${education.degree} (${education.branch})</span>
      </div>
      <div class="entry-meta">
        CGPI: ${education.cgpi} / 10.0 <span style="color: #059669;">(Honors)</span><br>
        <span class="entry-date">${education.duration}</span>
      </div>
    </div>
    <div style="font-size: 12px; color: #475569; margin-top: 3px;">
      <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Machine Learning, Deep Learning & Computer Vision, DBMS, Operating Systems, Computer Networks.
    </div>

    <!-- Technical Skills -->
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-line"><strong>Programming Languages:</strong> Python, C++, SQL, JavaScript (ES6+), HTML5, CSS3, PHP</div>
      <div class="skill-line"><strong>AI & Deep Learning:</strong> Machine Learning, Computer Vision (YOLOv8, OpenCV), PyTorch, TensorFlow, Scikit-learn, TreeSHAP, SMOTE, NLP</div>
      <div class="skill-line"><strong>Data Science & Geospatial:</strong> GeoPandas, OSMnx, PostGIS, Pandas, NumPy, Matplotlib, Power BI, Tableau, Spatial Voronoi</div>
      <div class="skill-line"><strong>Web & Microservices:</strong> FastAPI, Flask, Node.js, Express.js, React.js, Tailwind CSS, REST APIs</div>
      <div class="skill-line"><strong>Databases & DevTools:</strong> PostgreSQL, MySQL, MongoDB, Docker, Git, GitHub Actions, Linux, VS Code, Vercel, Netlify, Render</div>
    </div>

    <!-- Featured Projects -->
    <div class="section-title">Featured Engineering Projects</div>

    <!-- Project 1 -->
    <div class="entry-header">
      <div>
        <span class="entry-title">SmartPack (BIS)</span> — <span class="entry-role">Automated Packaging Compliance & BIS Regulatory Auditor</span>
      </div>
      <div class="entry-links">
        <a href="https://bis-lake.vercel.app/#main-content" target="_blank">[Live Demo]</a>
        <a href="https://github.com/Master66999/BIS" target="_blank">[GitHub]</a>
      </div>
    </div>
    <div style="font-size: 11.5px; color: #047857; font-weight: 600; margin-bottom: 2px;">
      Tech Stack: Python, FastAPI, Tesseract OCR, Node.js, Express, OpenCV, Vercel
    </div>
    <ul>
      <li>Engineered automated packaging inspection pipeline using <strong>OpenCV preprocessing</strong> and <strong>Tesseract OCR</strong>, achieving <strong>97.2% character extraction accuracy</strong> on curved & reflective label surfaces.</li>
      <li>Implemented declarative <strong>JSON rule-validation engine</strong> cross-referencing mandatory statutory declarations (MRP, batch ID, expiry, net weight) under BIS Legal Metrology 2011.</li>
      <li>Decoupled client orchestration from asynchronous Python OCR compute workers, reducing total audit latency to <strong>1.4s per label</strong>.</li>
    </ul>

    <!-- Project 2 -->
    <div class="entry-header">
      <div>
        <span class="entry-title">VoltVision AI</span> — <span class="entry-role">EV Demand Forecasting & Optimal Charging Hub Recommender</span>
      </div>
      <div class="entry-links">
        <a href="https://evvision.netlify.app/landing.html" target="_blank">[Live Demo]</a>
        <a href="https://github.com/Master66999/EV_placement_station" target="_blank">[GitHub]</a>
      </div>
    </div>
    <div style="font-size: 11.5px; color: #047857; font-weight: 600; margin-bottom: 2px;">
      Tech Stack: Python, XGBoost, GeoPandas, OSMnx, PostgreSQL, PostGIS, FastAPI, Netlify
    </div>
    <ul>
      <li>Synthesized regional EV vehicle registries and municipal road networks using <strong>OSMnx graph algorithms</strong> and <strong>PostGIS spatial indexing</strong>.</li>
      <li>Trained <strong>XGBoost regression models</strong> on traffic density and spatial features to forecast peak kilowatt-hour charging demands with <strong>R² 0.924</strong>.</li>
      <li>Applied <strong>spatial Voronoi tessellation</strong> to generate automated optimal charging hub recommendations balancing grid load and driver transit distance.</li>
    </ul>

    <!-- Project 3 -->
    <div class="entry-header">
      <div>
        <span class="entry-title">LeafSense AI</span> — <span class="entry-role">Agricultural Computer Vision & Cotton Leaf Pathogen Classifier</span>
      </div>
      <div class="entry-links">
        <a href="https://leafsense-web-44p0.onrender.com/" target="_blank">[Live Demo]</a>
        <a href="https://github.com/Master66999/Hackthon-pccoe" target="_blank">[GitHub]</a>
      </div>
    </div>
    <div style="font-size: 11.5px; color: #047857; font-weight: 600; margin-bottom: 2px;">
      Tech Stack: Python, CNN, YOLOv8, PyTorch, OpenCV, FastAPI, Render
    </div>
    <ul>
      <li>Fine-tuned <strong>YOLOv8 convolutional architecture</strong> across multi-class agricultural pathogen datasets, achieving <strong>93.8% mAP@50</strong> under variable lighting and shadows.</li>
      <li>Automated real-time localized bounding box detection for Bacterial Blight, Leaf Curl, and Alternaria leaf spot with <strong>sub-40ms frame inference</strong>.</li>
      <li>Deployed full production web service on <strong>Render</strong> with drag-and-drop image inference and automated pathology health scorecards.</li>
    </ul>

    <!-- Project 4 -->
    <div class="entry-header">
      <div>
        <span class="entry-title">Loan Deform & FraudLock AI</span> — <span class="entry-role">Credit Default & Financial Anomaly Classifier with SHAP</span>
      </div>
      <div class="entry-links">
        <a href="https://github.com/Master66999/Loan_deformation" target="_blank">[GitHub]</a>
      </div>
    </div>
    <div style="font-size: 11.5px; color: #047857; font-weight: 600; margin-bottom: 2px;">
      Tech Stack: Python, Scikit-learn, XGBoost, SMOTE, TreeSHAP, FastAPI
    </div>
    <ul>
      <li>Solved severe <strong>99.8% class imbalance</strong> on multi-attribute financial credit records using <strong>SMOTE</strong> and cost-sensitive <strong>XGBoost classification</strong> (0.912 AUC-ROC).</li>
      <li>Integrated <strong>TreeSHAP (SHapley Additive exPlanations)</strong> to provide transparent, mathematically provable feature attribution scorecards ensuring complete regulatory compliance.</li>
      <li>Engineered high-concurrency <strong>FastAPI inference microservice</strong> delivering sub-40ms risk scoring for incoming credit applications.</li>
    </ul>

    <!-- Certifications -->
    <div class="section-title">Certifications</div>
    <ul>
      <li><strong>Oracle Autonomous AI Database 26ai Learning Path</strong> — Oracle</li>
      <li><strong>Python for Data Science</strong> — NPTEL</li>
      <li><strong>Generative AI Language Modeling</strong> — IBM (Coursera)</li>
      <li><strong>Using Python to Access Web Data</strong> — University of Michigan (Coursera)</li>
      <li><strong>AWS Cloud Technical Essentials</strong> — Amazon Web Services (Coursera)</li>
      <li><strong>Java Full Stack Developer</strong> — Professional Certification Program</li>
    </ul>

    <!-- Achievements & Open Source -->
    <div class="section-title">Achievements & Open Source</div>
    <ul>
      <li><strong>Hacktoberfest Open Source Contributor:</strong> Authored PRs and committed clean code to public open-source repos on GitHub (Master66999).</li>
      <li><strong>Academic Honors:</strong> Ranked in the highest tier of the Computer Science Engineering department with CGPI 9.48 / 10.0 at Pimpri Chinchwad University.</li>
      <li><strong>PCCOE Hackathon Finalist:</strong> Engineered real-time agricultural pathogen detection AI under a 24-hour hackathon sprint.</li>
    </ul>

  </div>

</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Atharva_Lawange_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyPlain = () => {
    sounds.playClick();
    navigator.clipboard.writeText(plainTextResume);
    setCopiedTxt(true);
    setTimeout(() => setCopiedTxt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container Card */}
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar (no-print) */}
        <div className="no-print flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200 gap-3">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                <span>ATS-Friendly Resume</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                  100% Parser Compliant
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Atharva_Lawange_Resume • Optimized for Workday, Greenhouse & Lever
              </div>
            </div>
          </div>

          {/* Action Tabs & Buttons */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            
            {/* View Mode Switcher */}
            <div className="flex p-0.5 rounded-xl bg-slate-200/80 text-xs font-mono mr-1">
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('visual');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  viewMode === 'visual' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                <span>Visual Sheet</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('text');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  viewMode === 'text' ? 'bg-white text-slate-900 shadow-soft-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Raw Text</span>
              </button>
            </div>

            {viewMode === 'text' ? (
              <button
                onClick={handleCopyPlain}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors shadow-soft-sm"
              >
                {copiedTxt ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTxt ? 'Copied' : 'Copy Text'}</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleDownloadFile}
                  title="Download clean standalone HTML resume file"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors shadow-soft-sm"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Download HTML</span>
                </button>

                <button
                  onClick={handlePrint}
                  title="Print to PDF via browser dialog"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all shadow-soft"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </>
            )}

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-3 sm:p-8 overflow-y-auto bg-slate-100/80 flex justify-center">
          
          {viewMode === 'text' ? (
            /* RAW PLAIN TEXT FORMAT FOR WORKDAY / ATS APPLICATION FORMS */
            <div className="w-full max-w-3xl bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-emerald-400 text-xs">
                <span>// Standard Plain-Text ATS Format • Safe for Direct Paste into Job Portals</span>
                <span className="text-slate-400">100% Parser Compliant</span>
              </div>
              <pre className="whitespace-pre-wrap select-all font-mono">{plainTextResume}</pre>
            </div>
          ) : (
            /* AUTHENTIC VISUAL ATS SHEET (TARGETED FOR PRINT VIA #printable-ats-resume) */
            <div 
              id="printable-ats-resume"
              className="w-full max-w-3xl bg-white text-slate-900 p-6 sm:p-12 shadow-soft-lg rounded-sm font-sans text-[13px] leading-relaxed select-text border border-slate-200"
            >
              {/* Header */}
              <div className="text-center pb-4 mb-3 border-b-2 border-slate-900">
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950 font-sans">
                  ATHARVA LAWANGE
                </h1>
                <div className="text-xs font-semibold text-emerald-700 mt-1 uppercase tracking-wider">
                  Computer Science Engineer | AI & Data Science Specialist
                </div>
                <div className="text-xs text-slate-600 mt-2 flex flex-wrap items-center justify-center gap-2 font-mono">
                  <span>Pune, Maharashtra, India</span>
                  <span>•</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-900 hover:text-emerald-700 underline">{personalInfo.email}</a>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-emerald-700 underline">LinkedIn</a>
                  <span>•</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-emerald-700 underline">GitHub</a>
                  <span>•</span>
                  <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-emerald-700 underline">LeetCode</a>
                  <span>•</span>
                  <a href={personalInfo.hackerrank} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-emerald-700 underline">HackerRank</a>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Professional Summary
                </h2>
                <p className="mt-2 text-slate-700 text-justify text-[12.5px] leading-relaxed">
                  Computer Science Engineering student specializing in Artificial Intelligence and Data Science at Pimpri Chinchwad University (CGPI: 9.48 / 10.0). Proven track record engineering and deploying production machine learning pipelines, deep learning computer vision architectures (YOLOv8), geospatial demand forecasting (OSMnx/PostGIS), and low-latency REST APIs (FastAPI/Node.js). Experienced in class-imbalanced modeling with SMOTE and explainable AI with TreeSHAP.
                </p>
              </div>

              {/* Education */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Education
                </h2>
                <div className="mt-2 flex justify-between items-start">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{education.institution}</div>
                    <div className="text-slate-700 italic text-[12px]">{education.degree} ({education.branch})</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-[12.5px]">CGPI: {education.cgpi} / 10.0 <span className="text-emerald-700 font-semibold">(Honors)</span></div>
                    <div className="text-slate-500 text-[11px]">{education.duration} • {education.location}</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Machine Learning, Deep Learning & Computer Vision, Database Management Systems, Operating Systems, Computer Networks.
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Technical Skills
                </h2>
                <div className="mt-2 space-y-1 text-[12px] text-slate-800">
                  <div><strong>Programming Languages:</strong> Python, C++, SQL, JavaScript (ES6+), HTML5, CSS3, PHP</div>
                  <div><strong>AI & Deep Learning:</strong> Machine Learning, Computer Vision (YOLOv8, OpenCV), PyTorch, TensorFlow, Scikit-learn, TreeSHAP, SMOTE, NLP</div>
                  <div><strong>Data Science & Geospatial:</strong> GeoPandas, OSMnx, PostGIS, Pandas, NumPy, Matplotlib, Power BI, Tableau, Spatial Voronoi</div>
                  <div><strong>Web & Microservices:</strong> FastAPI, Flask, Node.js, Express.js, React.js, Tailwind CSS, REST APIs</div>
                  <div><strong>Databases & DevTools:</strong> PostgreSQL, MySQL, MongoDB, Docker, Git, GitHub Actions, Linux, VS Code, Vercel, Netlify, Render</div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Featured Engineering Projects
                </h2>
                <div className="mt-3 space-y-3.5">
                  
                  {/* SmartPack */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold text-slate-900 text-[13px]">
                        SmartPack (BIS) — <span className="font-medium text-slate-700 italic">Automated Packaging Compliance Auditor</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-mono font-semibold flex items-center gap-2">
                        <a href="https://bis-lake.vercel.app/#main-content" target="_blank" rel="noreferrer" className="underline">[Live Demo]</a>
                        <a href="https://github.com/Master66999/BIS" target="_blank" rel="noreferrer" className="underline">[GitHub]</a>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono font-medium">
                      Python, FastAPI, Tesseract OCR, Node.js, OpenCV, Vercel
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-1 space-y-0.5 text-[12px] text-slate-700">
                      <li>Engineered automated packaging inspection pipeline using <strong>OpenCV preprocessing</strong> and <strong>Tesseract OCR</strong>, achieving <strong>97.2% character extraction accuracy</strong> on curved & reflective product labels.</li>
                      <li>Implemented declarative <strong>JSON rule-validation engine</strong> cross-referencing mandatory statutory declarations (MRP, batch ID, expiry, net weight) under BIS Legal Metrology 2011.</li>
                      <li>Decoupled client orchestration from asynchronous Python OCR compute workers, reducing total audit latency to <strong>1.4s per label</strong>.</li>
                    </ul>
                  </div>

                  {/* VoltVision */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold text-slate-900 text-[13px]">
                        VoltVision AI — <span className="font-medium text-slate-700 italic">EV Demand Forecasting & Optimal Charging Hub Recommender</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-mono font-semibold flex items-center gap-2">
                        <a href="https://evvision.netlify.app/landing.html" target="_blank" rel="noreferrer" className="underline">[Live Demo]</a>
                        <a href="https://github.com/Master66999/EV_placement_station" target="_blank" rel="noreferrer" className="underline">[GitHub]</a>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono font-medium">
                      Python, XGBoost, GeoPandas, OSMnx, PostgreSQL, PostGIS, FastAPI, Netlify
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-1 space-y-0.5 text-[12px] text-slate-700">
                      <li>Synthesized regional EV vehicle registries and municipal road networks using <strong>OSMnx graph algorithms</strong> and <strong>PostGIS spatial indexing</strong>.</li>
                      <li>Trained <strong>XGBoost regression models</strong> on traffic density and spatial features to forecast peak kilowatt-hour charging demands with <strong>R² 0.924</strong>.</li>
                      <li>Applied <strong>spatial Voronoi tessellation</strong> to generate automated optimal charging hub recommendations balancing grid load and driver transit distance.</li>
                    </ul>
                  </div>

                  {/* LeafSense */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold text-slate-900 text-[13px]">
                        LeafSense AI — <span className="font-medium text-slate-700 italic">Agricultural Computer Vision & Cotton Leaf Pathogen Classifier</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-mono font-semibold flex items-center gap-2">
                        <a href="https://leafsense-web-44p0.onrender.com/" target="_blank" rel="noreferrer" className="underline">[Live Demo]</a>
                        <a href="https://github.com/Master66999/Hackthon-pccoe" target="_blank" rel="noreferrer" className="underline">[GitHub]</a>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono font-medium">
                      Python, CNN, YOLOv8, PyTorch, OpenCV, FastAPI, Render
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-1 space-y-0.5 text-[12px] text-slate-700">
                      <li>Fine-tuned <strong>YOLOv8 convolutional architecture</strong> across multi-class agricultural pathogen datasets, achieving <strong>93.8% mAP@50</strong> under variable lighting and shadows.</li>
                      <li>Automated real-time localized bounding box detection for Bacterial Blight, Leaf Curl, and Alternaria leaf spot with <strong>sub-40ms frame inference</strong>.</li>
                      <li>Deployed full production web service on <strong>Render</strong> with drag-and-drop image inference and automated pathology health scorecards.</li>
                    </ul>
                  </div>

                  {/* Loan Deform */}
                  <div>
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold text-slate-900 text-[13px]">
                        Loan Deform & FraudLock AI — <span className="font-medium text-slate-700 italic">Credit Default & Financial Anomaly Classifier with SHAP</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-mono font-semibold flex items-center gap-2">
                        <a href="https://github.com/Master66999/Loan_deformation" target="_blank" rel="noreferrer" className="underline">[GitHub]</a>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono font-medium">
                      Python, Scikit-learn, XGBoost, SMOTE, TreeSHAP, FastAPI
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-1 space-y-0.5 text-[12px] text-slate-700">
                      <li>Solved severe <strong>99.8% class imbalance</strong> on multi-attribute financial credit records using <strong>SMOTE</strong> and cost-sensitive <strong>XGBoost classification</strong> (0.912 AUC-ROC).</li>
                      <li>Integrated <strong>TreeSHAP (SHapley Additive exPlanations)</strong> to provide transparent, mathematically provable feature attribution scorecards ensuring complete regulatory compliance.</li>
                      <li>Engineered high-concurrency <strong>FastAPI inference microservice</strong> delivering sub-40ms risk scoring for incoming credit applications.</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Certifications */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Certifications
                </h2>
                <ul className="list-disc list-outside pl-4 mt-2 space-y-0.5 text-[12px] text-slate-700">
                  {certifications.map((c, i) => (
                    <li key={i}>
                      <strong>{c.title}</strong> — {c.issuer}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Open Source */}
              <div className="mt-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-900 font-sans">
                  Achievements & Open Source
                </h2>
                <ul className="list-disc list-outside pl-4 mt-2 space-y-0.5 text-[12px] text-slate-700">
                  <li><strong>Hacktoberfest Open Source Contributor:</strong> Authored PRs and committed clean code to public open-source repos on GitHub (Master66999).</li>
                  <li><strong>Academic Honors:</strong> Ranked in the highest tier of the Computer Science Engineering department with CGPI 9.48 / 10.0 at Pimpri Chinchwad University.</li>
                  <li><strong>PCCOE Hackathon Finalist:</strong> Engineered real-time agricultural pathogen detection AI under a 24-hour hackathon sprint.</li>
                </ul>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
