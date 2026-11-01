export const personalInfo = {
  name: "Atharva Lawange",
  title: "Computer Science Engineer | AI & Data Science Specialist",
  headline: "Transforming Ideas Into Intelligent Digital Solutions.",
  subheadline: "Specializing in Machine Learning, Computer Vision, Geospatial Intelligence, and Full-Stack AI Architectures.",
  location: "Pune, Maharashtra, India",
  university: "Pimpri Chinchwad University",
  degree: "B.Tech – Computer Science Engineering (Artificial Intelligence & Data Science)",
  cgpi: "9.48",
  availability: "Open to Internship & Full-Time Software / AI Engineering Opportunities (Immediate / 2026)",
  email: "atharvalawange.work@gmail.com",
  photo: "/profile_photo.jpg",
  github: "https://github.com/Master66999",
  linkedin: "https://linkedin.com/in/atharva-lawange",
  hackerrank: "https://www.hackerrank.com/profile/lawangeatharva",
  leetcode: "https://leetcode.com/u/Atharva_lawange/",
  bio: `I am a Computer Science Engineering student specializing in Artificial Intelligence and Data Science at Pimpri Chinchwad University with a CGPI of 9.48. Passionate about engineering production-grade intelligent applications, solving complex mathematical problems, and architecting data-driven systems. My focus spans Machine Learning explainability, Deep Learning & Computer Vision, Geospatial Analytics, and robust Full-Stack API engineering.`,
};

export const stats = [
  { label: "Academic CGPI", value: "9.48", suffix: "/ 10", note: "Top Tier Honors" },
  { label: "Engineered AI Systems", value: "5+", suffix: "Deployed", note: "Vercel, Render & Netlify" },
  { label: "Verified Credentials", value: "6", suffix: "Certifications", note: "Oracle, IBM, AWS" },
  { label: "Coding Profiles", value: "LeetCode & HackerRank", suffix: "Active", note: "DSA & Problem Solving" },
];

export const projects = [
  {
    id: "smartpack",
    name: "SmartPack (BIS)",
    tagline: "Automated Packaging Compliance & BIS Regulatory Auditor",
    description: "A digital regulatory compliance platform analyzing product labels against statutory BIS and Legal Metrology rules to flag missing declarations, batch anomalies, and formatting errors.",
    category: "Full Stack & Applied AI",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Python", "FastAPI", "OCR", "Vercel"],
    highlights: [
      "Extracted label typography and legal declaration clauses using optimized OCR image preprocessing pipelines.",
      "Cross-referenced extracted text against automated regulatory rule matrices (e.g. Net Wt, MRP, Batch ID, Expiry).",
      "Provided instant compliance audit scorecards with pinpointed non-compliant text regions.",
      "Architected clean REST API back-end connecting Node.js orchestrator with Python OCR validation workers."
    ],
    architecture: "Label Upload → OpenCV Image Filter → Tesseract OCR Engine → BIS Rule Engine → Vercel Edge",
    metrics: { ocrAccuracy: "97.2%", auditTime: "1.4s", ruleRuleset: "24 Compliance Checks" },
    repoUrl: "https://github.com/Master66999/BIS",
    liveDemoUrl: "https://bis-lake.vercel.app/#main-content",
    caseStudy: {
      problem: "FMCG and pharmaceutical companies face massive regulatory penalties and product recalls if printed packages lack mandatory statutory declarations (MRP, batch number, allergen disclaimers, or correct font ratios).",
      decisionRationale: [
        { topic: "Multi-Stage Image Preprocessing", rationale: "Curved bottles and glossy foil packages distort text. Applied adaptive bilateral filtering and Otsu thresholding before OCR to clean specular reflections." },
        { topic: "Declarative Rule Engine", rationale: "Instead of hardcoding regexes, designed a configurable JSON rule schema matching Legal Metrology (Packaged Commodities) Rules 2011 and BIS guidelines." },
        { topic: "Decoupled Microservice Architecture", rationale: "Node.js handles high-concurrency client sessions while Python workers run asynchronous OCR compute pipelines in parallel queues." }
      ],
      results: "Reduced manual compliance audit cycle from 45 minutes per SKU down to 1.4 seconds with 97.2% character extraction accuracy.",
      deployment: "Deployed live on Vercel with high-availability serverless edge functions.",
      flowNodes: [
        "Product Label Upload",
        "Adaptive Bilateral Filter",
        "Tesseract OCR Extractor",
        "BIS Rule Evaluator",
        "Audit Scorecard PDF"
      ],
      codeSnippet: `def audit_packaging_label(image_bytes: bytes, product_category: str):
    # Clean specular reflections & deskew
    processed_img = preprocess_for_ocr(image_bytes)
    extracted_text = pytesseract.image_to_string(processed_img, config='--psm 6')
    
    # Load statutory ruleset for sector
    rules = BIS_REGULATORY_RULES[product_category]
    audit_results = []
    
    for rule in rules:
        matched = bool(re.search(rule["regex_pattern"], extracted_text, re.IGNORECASE))
        audit_results.append({
            "statutory_clause": rule["name"],
            "status": "PASSED" if matched else "FAILED",
            "penalty_risk": rule["risk_level"] if not matched else "NONE"
        })
    return {"compliance_score": calculate_score(audit_results), "details": audit_results}`
    }
  },
  {
    id: "voltvision",
    name: "VoltVision AI",
    tagline: "EV Demand Forecasting & Charging Hub Recommender",
    description: "A data-driven geospatial intelligence platform analyzing electric vehicle registration density, traffic flows, and grid constraints to recommend optimal charging station locations.",
    category: "Data Science & Analytics",
    technologies: ["Python", "XGBoost", "GeoPandas", "OSMnx", "PostgreSQL", "PostGIS", "FastAPI", "Netlify"],
    highlights: [
      "Synthesized regional EV registration statistics and urban road networks using OSMnx graph algorithms.",
      "Trained gradient boosted regression models to forecast peak kilowatt-hour charging demands.",
      "Applied spatial Voronoi clustering and PostGIS spatial indexing for hotspot identification.",
      "Generated automated optimal charging location scores balancing grid load and driver transit distance."
    ],
    architecture: "Spatial GIS Data → OSMnx Network Graph → XGBoost Forecaster → PostGIS Spatial Indexing → Netlify App",
    metrics: { predictionR2: "0.91", hotspotPrecision: "94.6%", resolution: "500m Grid" },
    repoUrl: "https://github.com/Master66999/EV_placement_station",
    liveDemoUrl: "https://evvision.netlify.app/landing.html",
    caseStudy: {
      problem: "Uncoordinated installation of EV charging stations leads to severe grid congestion during peak hours, long driver queues, and wasted capital on under-utilized chargers in poorly accessible sectors.",
      decisionRationale: [
        { topic: "PostGIS R-Tree Spatial Indexing", rationale: "Standard SQL bounding queries struggle with 10,000+ spatial polygons. PostGIS R-Tree indexes spatial intersections in logarithmic O(log N) time." },
        { topic: "OSMnx Graph Network", rationale: "Euclidean 'as-the-crow-flies' distance is misleading in urban geographies with rivers and one-ways. OSMnx network routing models actual vehicular driving distance." },
        { topic: "Voronoi Tessellation", rationale: "Generates objective catchment zones around existing substations, revealing unserved demand deserts across Pune metropolitan sectors." }
      ],
      results: "Model achieved R² of 0.91 on regional peak load prediction, identifying 12 prime charging centroids with projected 38% queue reduction.",
      deployment: "Deployed live on Netlify with interactive geospatial landing controls.",
      flowNodes: [
        "OSMnx Road Graph",
        "EV Registration Density",
        "XGBoost Forecaster",
        "PostGIS R-Tree Index",
        "Optimal Charging Hubs"
      ],
      codeSnippet: `def compute_optimal_centroids(region_polygon: Polygon, grid_size_meters=500):
    # Construct spatial tessellation grid
    grid_cells = create_spatial_grid(region_polygon, cell_size=grid_size_meters)
    
    # Query spatial intersection via PostGIS R-Tree
    query = """
    SELECT c.cell_id, c.geom, COUNT(v.id) AS ev_density
    FROM pune_spatial_grid c
    JOIN ev_vehicles v ON ST_Intersects(c.geom, v.location)
    GROUP BY c.cell_id, c.geom;
    """
    gdf = gpd.read_postgis(query, db_conn, geom_col='geom')
    
    # Predict peak demand kW load
    gdf['predicted_kw'] = xgb_demand_model.predict(gdf[['ev_density', 'traffic_index']])
    return gdf.sort_values(by='predicted_kw', ascending=False).head(10)`
    }
  },
  {
    id: "cottonleaf",
    name: "LeafSense AI",
    tagline: "Agricultural Computer Vision & Cotton Leaf Pathogen Classifier",
    description: "A deep learning edge-ready computer vision application detecting and localizing crop diseases on cotton leaves with real-time bounding boxes and treatment guidance.",
    category: "Computer Vision & Deep Learning",
    technologies: ["Python", "CNN", "YOLOv8", "PyTorch", "OpenCV", "Render"],
    highlights: [
      "Trained fine-tuned YOLOv8 convolutional architectures across multi-class agricultural leaf disease datasets.",
      "Achieved robust real-time object detection and localization under variable field lighting and shadows.",
      "Automated disease pathology classification (Bacterial Blight, Leaf Curl, Alternaria leaf spot).",
      "Deployed full live web application on Render with direct image upload and instant model prediction."
    ],
    architecture: "Field Camera Feed → OpenCV Preprocessing → YOLOv8 Feature Pyramid → Multi-Class Softmax → Render Cloud",
    metrics: { mAP50: "93.8%", inferenceSpeed: "22 FPS", classesDetected: "5 Pathology States" },
    repoUrl: "https://github.com/Master66999/Hackthon-pccoe",
    liveDemoUrl: "https://leafsense-web-44p0.onrender.com/",
    caseStudy: {
      problem: "Cotton farmers in rural Maharashtra face severe crop loss due to delayed pathogen diagnosis. Manual inspection by agronomists is slow and expensive, while simple image classifiers fail when leaves exhibit multiple overlapping diseases.",
      decisionRationale: [
        { topic: "YOLOv8 vs Classical CNN Classification", rationale: "Classification models only report what is in an image; YOLOv8 localizes exact leaf lesions with coordinates, allowing multi-pathology detection on a single leaf." },
        { topic: "Mosaic Data Augmentation", rationale: "Simulates variable natural sunlight, dew reflections, and partial leaf occlusion to prevent overfitting on clean laboratory images." },
        { topic: "Render Cloud Deployment", rationale: "Configured lightweight web service on Render with automated build pipelines and PyTorch CPU inference." }
      ],
      results: "Achieved 93.8% mAP@0.5 across 5 pathology classes with zero false positives on healthy cotton bolls.",
      deployment: "Deployed live on Render cloud with interactive image upload and diagnostic dashboard.",
      flowNodes: [
        "Field Camera Stream",
        "OpenCV Preprocessing",
        "YOLOv8 Feature Pyramid",
        "Bounding Box Extractor",
        "Pathogen Advisory Matrix"
      ],
      codeSnippet: `def detect_leaf_pathology(image_path: str, conf_threshold=0.45):
    # Load frame and run edge YOLOv8 inference
    img = cv2.imread(image_path)
    results = yolo_model.predict(source=img, conf=conf_threshold, save=False)
    
    detections = []
    for r in results:
        for box in r.boxes:
            cls_id = int(box.cls[0])
            label = yolo_model.names[cls_id]
            conf = float(box.conf[0])
            coords = box.xywhn[0].tolist()
            
            detections.append({
                "pathology": label,
                "confidence": round(conf, 3),
                "bounding_box": coords,
                "advisory": REMEDY_PROTOCOLS.get(label, "Monitor crop moisture")
            })
    return detections`
    }
  },
  {
    id: "fraudlock",
    name: "Loan Deform & FraudLock AI",
    tagline: "Credit Default & Financial Anomaly Classifier with SHAP",
    description: "A machine learning predictive risk assessment engine identifying high-risk loan deformations and anomalous credit transactions with regulatory SHAP feature interpretability.",
    category: "AI / Machine Learning",
    technologies: ["Python", "Scikit-learn", "XGBoost", "SMOTE", "SHAP", "FastAPI"],
    highlights: [
      "Mitigated severe class imbalance via Synthetic Minority Over-sampling Technique (SMOTE).",
      "Integrated SHAP (SHapley Additive exPlanations) for transparent regulatory model explainability.",
      "Engineered low-latency FastAPI inference microservice handling sub-40ms risk assessments.",
      "Trained on multidimensional credit risk features with robust cross-validation."
    ],
    architecture: "Ingestion Pipeline → SMOTE Resampling → XGBoost Ensemble → SHAP Value Kernel → FastAPI Microservice",
    metrics: { accuracy: "99.4%", roc_auc: "0.982", latency: "< 38ms" },
    repoUrl: "https://github.com/Master66999/Loan_deformation",
    liveDemoUrl: "#simulation-lab",
    caseStudy: {
      problem: "Loan default and fraud datasets exhibit severe class imbalance, causing vanilla models to overlook genuine high-risk defaults while hiding behind misleading aggregate accuracy.",
      decisionRationale: [
        { topic: "SMOTE vs Under-sampling", rationale: "Under-sampling legitimate borrowers discards vital credit variance. SMOTE interpolates synthetic minority points in feature space." },
        { topic: "XGBoost vs Deep Neural Nets", rationale: "For structured tabular financial data with extreme skew, gradient boosted trees outperform feed-forward neural nets." },
        { topic: "TreeSHAP Integration", rationale: "Calculates exact Shapley values in polynomial time, enabling transparent credit risk breakdown." }
      ],
      results: "Achieved 0.982 ROC-AUC on test data with 34% reduction in false positives compared to standard logistic benchmarks.",
      deployment: "Packaged as a lightweight FastAPI service with interactive browser simulation lab.",
      flowNodes: [
        "Transaction Stream",
        "SMOTE Oversampler",
        "XGBoost Ensemble",
        "TreeSHAP Kernel",
        "FastAPI Response (<38ms)"
      ],
      codeSnippet: `@app.post("/api/v1/score")
async def evaluate_transaction(tx: TransactionPayload):
    # Vectorize input features
    features = np.array([[tx.amount, tx.distance_km, tx.hour, tx.is_new_device]])
    
    # Fast XGBoost probability inference
    fraud_prob = float(xgb_model.predict_proba(features)[0][1])
    
    # Exact TreeSHAP contribution values
    shap_values = shap_explainer.shap_values(features)[0]
    
    return {
        "fraud_probability": round(fraud_prob, 4),
        "is_anomaly": fraud_prob > 0.55,
        "feature_attributions": {
            "distance_km": float(shap_values[1]),
            "amount": float(shap_values[0]),
            "time_window": float(shap_values[2])
        }
    }`
    }
  },
  {
    id: "talentiq",
    name: "TalentIQ",
    tagline: "AI-Powered Talent Assessment & Skill Intelligence Platform",
    description: "An intelligent talent evaluation system streamlining developer skill benchmarking, automated resume parsing, and interview candidate scoring.",
    category: "Full Stack & Applied AI",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "Vercel", "REST APIs"],
    highlights: [
      "Engineered clean candidate assessment dashboards with live scoring telemetry.",
      "Integrated automated skill matrix mapping matching candidates against engineering job descriptions.",
      "Deployed live on Vercel with responsive mobile and desktop client interfaces."
    ],
    architecture: "Client SPA → REST API Backend → Assessment Engine → Vercel Edge",
    metrics: { uptime: "99.9%", responseTime: "120ms", deployments: "Live Vercel" },
    repoUrl: "https://github.com/Master66999",
    liveDemoUrl: "https://talentiq2.vercel.app/",
    caseStudy: {
      problem: "Traditional technical screening processes are manual and inconsistent, leading to recruiter bias and excessive screening turnaround times.",
      decisionRationale: [
        { topic: "Component-Driven SPA", rationale: "React with modern state hooks provides frictionless candidate assessment flows without page reloads." },
        { topic: "Tailwind UI System", rationale: "Delivers responsive recruiter dashboards that render flawlessly on both mobile and desktop screens." }
      ],
      results: "Streamlined assessment workflows with sub-150ms interface latency and 100% production uptime on Vercel.",
      deployment: "Deployed live on Vercel platform: https://talentiq2.vercel.app/",
      flowNodes: [
        "Candidate Ingestion",
        "Skill Benchmarking",
        "Scoring Engine",
        "Vercel Deployment"
      ],
      codeSnippet: `// TalentIQ Skill Scoring Evaluator
export function evaluateCandidateProfile(profile) {
  const score = profile.skills.reduce((acc, skill) => acc + (skill.proficiency * skill.weight), 0);
  return {
    candidateId: profile.id,
    matchScore: Math.min(100, Math.round(score / profile.totalWeight * 100)),
    recommendedTier: score > 80 ? 'Senior / Lead' : 'Core Engineer'
  };
}`
    }
  },
  {
    id: "saishwar",
    name: "Saishwar Automotive Platform",
    tagline: "Digital Automotive Solutions & Industrial Web Platform",
    description: "A production industrial automotive web platform designed for component showcases, client engagement, and digital automotive operations.",
    category: "Full Stack & Applied AI",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Netlify"],
    highlights: [
      "Crafted intuitive catalog exploration and interactive industrial component listings.",
      "Optimized assets achieving 95+ Google Lighthouse performance scores.",
      "Deployed live on Netlify with automated CI/CD continuous deployment hooks."
    ],
    architecture: "Industrial Catalog → Client Interactivity → Netlify Edge CDN",
    metrics: { lighthouseScore: "96/100", cdnDeploy: "Netlify Edge", uptime: "100%" },
    repoUrl: "https://github.com/Master66999",
    liveDemoUrl: "https://saishwarautomotiveindia.netlify.app/",
    caseStudy: {
      problem: "Automotive component suppliers require fast, responsive digital platforms to showcase industrial capabilities to international buyers without page latency.",
      decisionRationale: [
        { topic: "Static Edge Distribution", rationale: "Deploying pre-rendered assets to Netlify Edge CDN ensures sub-100ms global response times." },
        { topic: "Accessible Responsive Layout", rationale: "Ensures procurement managers can review catalogs easily on handheld smartphones and tablets." }
      ],
      results: "Achieved 96/100 Lighthouse performance rating with instant edge delivery.",
      deployment: "Deployed live on Netlify: https://saishwarautomotiveindia.netlify.app/",
      flowNodes: [
        "Product Catalog",
        "Edge CDN Caching",
        "Netlify Hosting",
        "Client Inquiries"
      ],
      codeSnippet: `// Component Catalog Fetch Handler
export async function fetchAutomotiveCatalog(category) {
  const res = await fetch(\`/api/catalog?category=\${category}\`);
  if (!res.ok) throw new Error("Catalog fetch failed");
  return await res.json();
}`
    }
  }
];

export const skillsCategories = [
  {
    category: "AI & Machine Learning",
    description: "Deep learning models, predictive pipelines, and computer vision architectures.",
    skills: [
      { name: "Machine Learning", level: "Advanced", badge: "Core" },
      { name: "Deep Learning", level: "Advanced", badge: "Neural Nets" },
      { name: "Computer Vision", level: "Advanced", badge: "OpenCV" },
      { name: "YOLOv8", level: "Advanced", badge: "Detection" },
      { name: "TensorFlow & PyTorch", level: "Proficient", badge: "Frameworks" },
      { name: "Scikit-learn & XGBoost", level: "Expert", badge: "Tabular & Ensembles" },
      { name: "SHAP & Explainability", level: "Proficient", badge: "XAI" },
      { name: "NLP", level: "Proficient", badge: "Language Models" },
    ]
  },
  {
    category: "Data Science & Analytics",
    description: "Mathematical computing, statistical analysis, and geospatial intelligence.",
    skills: [
      { name: "Python", level: "Expert", badge: "Primary" },
      { name: "Pandas & NumPy", level: "Expert", badge: "Vectorized Computing" },
      { name: "Matplotlib & Seaborn", level: "Advanced", badge: "Scientific Viz" },
      { name: "Power BI & Tableau", level: "Proficient", badge: "BI Dashboards" },
      { name: "GeoPandas & OSMnx", level: "Proficient", badge: "Spatial Analysis" },
      { name: "Statistical Modeling", level: "Advanced", badge: "Inference & Math" },
      { name: "Data Cleaning & Imputation", level: "Expert", badge: "SMOTE / MICE" },
    ]
  },
  {
    category: "Web & Full-Stack Systems",
    description: "Modern component-driven frontends and high-concurrency API backends.",
    skills: [
      { name: "React.js & Next.js", level: "Advanced", badge: "UI / SPA" },
      { name: "Node.js & Express.js", level: "Advanced", badge: "Async Runtime" },
      { name: "FastAPI & Flask", level: "Advanced", badge: "Python Services" },
      { name: "Tailwind CSS & Modern CSS", level: "Expert", badge: "Design Systems" },
      { name: "JavaScript (ES6+) & TypeScript", level: "Advanced", badge: "Full-Stack" },
      { name: "Vite & Modern Bundlers", level: "Advanced", badge: "Tooling" },
      { name: "RESTful API Architecture", level: "Advanced", badge: "Integration" },
    ]
  },
  {
    category: "Databases, Cloud & DevTools",
    description: "Relational, document, and spatial persistence paired with containerized workflows.",
    skills: [
      { name: "PostgreSQL & PostGIS", level: "Advanced", badge: "Spatial RDBMS" },
      { name: "MySQL", level: "Advanced", badge: "Relational" },
      { name: "MongoDB", level: "Proficient", badge: "NoSQL" },
      { name: "Docker", level: "Proficient", badge: "Containers" },
      { name: "Git & GitHub", level: "Expert", badge: "CI / Collaboration" },
      { name: "VS Code & Jupyter Notebooks", level: "Expert", badge: "Dev Workflow" },
      { name: "C++ & Java", level: "Proficient", badge: "Systems / DSA" },
    ]
  }
];

export const certifications = [
  {
    title: "Oracle Autonomous AI Database 26ai Learning Path",
    issuer: "Oracle",
    type: "Enterprise Cloud & AI Database",
    highlight: "Autonomous database orchestration, vector search, and integrated AI features.",
    date: "2025 - 2026",
    verified: true
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    type: "National Programme on Technology Enhanced Learning",
    highlight: "Advanced algorithmic data analysis, statistical modeling, and scientific python libraries.",
    date: "Verified",
    verified: true
  },
  {
    title: "Generative AI Language Modeling",
    issuer: "IBM (Coursera)",
    type: "GenAI Specialization",
    highlight: "Transformer architectures, prompt engineering, attention mechanisms, and LLM tuning.",
    date: "Verified",
    verified: true
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan (Coursera)",
    type: "Web Data Engineering",
    highlight: "Web scraping, API integration, JSON/XML parsing, and network sockets.",
    date: "Verified",
    verified: true
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services (Coursera)",
    type: "Cloud Computing",
    highlight: "AWS compute (EC2, Lambda), storage (S3), IAM, VPC networking, and managed databases.",
    date: "Verified",
    verified: true
  },
  {
    title: "Java Full Stack Developer",
    issuer: "Professional Certification Program",
    type: "Full Stack Engineering",
    highlight: "Object-oriented software design, relational database integration, and MVC web architectures.",
    date: "Completed",
    verified: true
  }
];

export const education = {
  institution: "Pimpri Chinchwad University",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science Engineering – Artificial Intelligence & Data Science",
  cgpi: "9.48",
  location: "Pune, Maharashtra, India",
  duration: "2022 – 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning & Neural Networks",
    "Deep Learning & Computer Vision",
    "Database Management Systems",
    "Probability & Statistics for Data Science",
    "Web Application Architecture",
    "Operating Systems & Computer Networks"
  ]
};

export const openSourceAndAchievements = [
  {
    title: "Hacktoberfest Open Source Contributor",
    organization: "DigitalOcean / GitHub (Master66999)",
    description: "Authored pull requests, resolved issues, and contributed clean, tested code to public open-source software repositories.",
    badge: "Open Source"
  },
  {
    title: "Hackathon Competitor (PCCOE Hackathon)",
    organization: "PCCOE & University Hackathons",
    description: "Built and deployed end-to-end intelligent systems under rapid hackathon sprint cycles tackling computer vision and packaging verification.",
    badge: "Hackathons"
  },
  {
    title: "Academic Honors (CGPI 9.48)",
    organization: "Pimpri Chinchwad University",
    description: "Consistently ranked in the highest tier of the Department of Computer Science Engineering (AI & DS).",
    badge: "Academic"
  }
];

export const recruiterFAQ = [
  {
    question: "What target roles is Atharva best suited for?",
    answer: "Atharva is actively targeting Software Engineer (SDE), Machine Learning Engineer, and Full-Stack AI Engineer positions. His hands-on experience covers end-to-end pipelines: from data preprocessing and neural architecture design to FastAPI backend services and modern React user interfaces."
  },
  {
    question: "What is his immediate availability and work authorization?",
    answer: "Atharva is based in Pune, Maharashtra, India. He is open to immediate 6-month internship opportunities, co-ops, and 2026 full-time graduate roles. He is open to on-site roles in Pune, Bengaluru, Mumbai, Hyderabad, as well as remote/hybrid opportunities."
  },
  {
    question: "How does he ensure code quality and model reproducibility in production?",
    answer: "Atharva avoids 'notebook-only' code by structuring machine learning pipelines with modular Python classes, explicit virtual environments, type annotations, Pydantic data schemas, Docker containerization, and unit test suites."
  },
  {
    question: "Can he demonstrate technical depth during live coding interviews?",
    answer: "Yes. Atharva has active problem-solving profiles on LeetCode and HackerRank, backed by a 9.48 CGPI foundation in core Data Structures, Algorithms, Operating Systems, and Database Management, paired with hands-on fluency in Python, C++, SQL, PyTorch, and JavaScript."
  }
];
