`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SakhiShield - Women Safety & Empowerment Platform</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Toast Notification -->
    <div id="toast" class="toast"></div>

    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="logo-text">
                        <h1>SakhiShield</h1>
                        <p class="tagline">Prevention + Empowerment</p>
                    </div>
                </div>

                <nav class="desktop-nav">
                    <button class="nav-btn active" data-tab="route">
                        <i class="fas fa-route"></i>
                        <span>Route Safety</span>
                    </button>
                    <button class="nav-btn" data-tab="sos">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Emergency SOS</span>
                    </button>
                    <button class="nav-btn" data-tab="network">
                        <i class="fas fa-users"></i>
                        <span>Help Network</span>
                    </button>
                    <button class="nav-btn" data-tab="empower">
                        <i class="fas fa-star"></i>
                        <span>Empowerment</span>
                    </button>
                </nav>

                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <nav class="mobile-nav" id="mobileNav">
                <button class="nav-btn active" data-tab="route">
                    <i class="fas fa-route"></i>
                    <span>Route Safety</span>
                </button>
                <button class="nav-btn" data-tab="sos">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Emergency SOS</span>
                </button>
                <button class="nav-btn" data-tab="network">
                    <i class="fas fa-users"></i>
                    <span>Help Network</span>
                </button>
                <button class="nav-btn" data-tab="empower">
                    <i class="fas fa-star"></i>
                    <span>Empowerment</span>
                </button>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="heroSection">
        <div class="container">
            <h2>Safety Through Prevention & Empowerment</h2>
            <p class="hero-subtitle">AI-powered safety platform for women</p>
            <p class="hero-features">🚨 Predict Risk • 🆘 Instant Help • 🤝 Community Support • 🌱 Growth</p>
        </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Route Safety Checker Tab -->
        <section class="tab-content active" id="routeTab">
            <div class="container">
                <div class="section-header">
                    <h2>Smart Route Safety Checker</h2>
                    <p>Shifting safety from reaction to prediction</p>
                </div>

                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-navigation"></i>
                        <h3>Check Your Route Safety</h3>
                    </div>
                    <div class="card-body">
                        <div class="input-group">
                            <i class="fas fa-map-pin"></i>
                            <input type="text" id="destinationInput" placeholder="Enter your destination...">
                            <button class="btn btn-primary" id="checkSafetyBtn">Check Safety</button>
                        </div>
                    </div>
                </div>

                <!-- Safety Result -->
                <div class="safety-result" id="safetyResult" style="display: none;">
                    <div class="card result-card">
                        <div class="card-body">
                            <div class="result-header">
                                <div class="result-icon" id="resultIcon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="result-info">
                                    <h3 id="resultLevel">Safe</h3>
                                    <p id="resultScore">Safety Score: 85/100</p>
                                </div>
                            </div>

                            <div class="progress-bar">
                                <div class="progress-fill" id="progressFill"></div>
                            </div>

                            <div class="result-details">
                                <div class="result-column">
                                    <h4><i class="fas fa-exclamation-triangle"></i> Risk Factors</h4>
                                    <ul id="riskFactors"></ul>
                                </div>
                                <div class="result-column">
                                    <h4><i class="fas fa-check-circle"></i> Recommendations</h4>
                                    <ul id="recommendations"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box info-blue">
                    <strong>How it works:</strong> Our AI analyzes crime data, lighting conditions, crowd density, 
                    and time of day to provide real-time safety insights for your route.
                </div>
            </div>
        </section>

        <!-- Emergency SOS Tab -->
        <section class="tab-content" id="sosTab">
            <div class="container">
                <div class="section-header">
                    <h2>One-Tap Emergency Alert</h2>
                    <p>Help is just one tap away</p>
                </div>

                <div class="sos-grid">
                    <div class="card">
                        <div class="card-header emergency-header">
                            <i class="fas fa-exclamation-circle"></i>
                            <h3>Emergency SOS</h3>
                        </div>
                        <div class="card-body sos-body">
                            <div class="silent-mode">
                                <label class="switch">
                                    <input type="checkbox" id="silentModeToggle">
                                    <span class="slider"></span>
                                </label>
                                <span id="silentModeLabel">
                                    <i class="fas fa-volume-up"></i> Silent Mode
                                </span>
                            </div>

                            <button class="sos-button" id="sosButton">
                                <i class="fas fa-exclamation-circle"></i>
                                <span>SOS</span>
                            </button>

                            <p class="sos-info" id="sosInfo">🔊 Tap to send emergency alert</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3>Alert Contains</h3>
                        </div>
                        <div class="card-body">
                            <div class="alert-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Live Location</h4>
                                    <p>Real-time GPS coordinates</p>
                                </div>
                            </div>
                            <div class="alert-item">
                                <i class="fas fa-user"></i>
                                <div>
                                    <h4>Your Name & Photo</h4>
                                    <p>Easy identification</p>
                                </div>
                            </div>
                            <div class="alert-item">
                                <i class="fas fa-comment"></i>
                                <div>
                                    <h4>Custom Message</h4>
                                    <p>"I need help urgently!"</p>
                                </div>
                            </div>

                            <div class="contacts-section">
                                <h4>Alert Sent To:</h4>
                                <div class="contact-item">
                                    <div>
                                        <strong>Mom</strong>
                                        <p>Mother</p>
                                    </div>
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-item">
                                    <div>
                                        <strong>Priya</strong>
                                        <p>Best Friend</p>
                                    </div>
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-item">
                                    <div>
                                        <strong>Rahul</strong>
                                        <p>Brother</p>
                                    </div>
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="contact-item volunteers">
                                    <div>
                                        <strong>Nearby Volunteers</strong>
                                        <p>12 available nearby</p>
                                    </div>
                                    <i class="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box info-red">
                    <strong>⚠️ Important:</strong> This is a demo. In emergency, also call 112 (India Emergency Number) 
                    or 1091 (Women Helpline).
                </div>
            </div>
        </section>

        <!-- Help Network Tab -->
        <section class="tab-content" id="networkTab">
            <div class="container">
                <div class="section-header">
                    <h2>Women-for-Women Help Network</h2>
                    <p>Community-based safety is powerful safety</p>
                </div>

                <div class="card network-info">
                    <div class="card-body network-header-body">
                        <div class="network-stats">
                            <i class="fas fa-shield-alt"></i>
                            <div>
                                <h3>24/7 Support Network</h3>
                                <p>156 verified volunteers in your area</p>
                            </div>
                        </div>
                        <div class="anonymous-toggle">
                            <span>Anonymous Request</span>
                            <label class="switch">
                                <input type="checkbox" id="anonymousToggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="category-tabs">
                    <button class="category-btn active" data-category="all">
                        <i class="fas fa-users"></i> All
                    </button>
                    <button class="category-btn" data-category="walk-along">
                        <i class="fas fa-walking"></i> Walk-Along
                    </button>
                    <button class="category-btn" data-category="cab-sharing">
                        <i class="fas fa-car"></i> Cab Sharing
                    </button>
                    <button class="category-btn" data-category="late-night">
                        <i class="fas fa-moon"></i> Late Night
                    </button>
                </div>

                <div class="volunteers-list" id="volunteersList">
                    <!-- Volunteers will be populated by JavaScript -->
                </div>

                <div class="stats-grid">
                    <div class="stat-card stat-green">
                        <div class="stat-number">156</div>
                        <div class="stat-label">Active Volunteers</div>
                    </div>
                    <div class="stat-card stat-blue">
                        <div class="stat-number">2,340</div>
                        <div class="stat-label">Women Helped</div>
                    </div>
                    <div class="stat-card stat-purple">
                        <div class="stat-number">4.8★</div>
                        <div class="stat-label">Average Rating</div>
                    </div>
                </div>

                <div class="info-box info-purple">
                    <strong>💜 Join as a Volunteer:</strong> Help other women in your community. 
                    All volunteers are verified through background checks and training programs.
                </div>
            </div>
        </section>

        <!-- Empowerment Hub Tab -->
        <section class="tab-content" id="empowerTab">
            <div class="container">
                <div class="section-header">
                    <h2>Empowerment Hub</h2>
                    <p>Safety + Growth = True Empowerment</p>
                </div>

                <div class="empower-tabs">
                    <button class="empower-tab-btn active" data-empower="schemes">
                        <i class="fas fa-award"></i> Govt Schemes
                    </button>
                    <button class="empower-tab-btn" data-empower="learning">
                        <i class="fas fa-book"></i> Free Learning
                    </button>
                    <button class="empower-tab-btn" data-empower="career">
                        <i class="fas fa-chart-line"></i> Career Guide
                    </button>
                    <button class="empower-tab-btn" data-empower="stories">
                        <i class="fas fa-heart"></i> Success Stories
                    </button>
                </div>

                <!-- Government Schemes -->
                <div class="empower-content active" id="schemesContent">
                    <div class="schemes-grid" id="schemesGrid">
                        <!-- Populated by JavaScript -->
                    </div>
                </div>

                <!-- Free Learning -->
                <div class="empower-content" id="learningContent">
                    <div class="learning-list" id="learningList">
                        <!-- Populated by JavaScript -->
                    </div>
                    <div class="info-box info-blue" style="margin-top: 24px;">
                        <strong>💡 Tip:</strong> Complete 3 courses to get a verified certificate and 
                        access to exclusive job opportunities!
                    </div>
                </div>

                <!-- Career Guide -->
                <div class="empower-content" id="careerContent">
                    <div class="career-grid">
                        <div class="card career-card card-purple">
                            <div class="card-body career-body">
                                <i class="fas fa-chart-line career-icon"></i>
                                <h3>Financial Literacy</h3>
                                <p>Learn budgeting, investing, and wealth creation</p>
                                <button class="btn btn-outline">Explore</button>
                            </div>
                        </div>
                        <div class="card career-card card-blue">
                            <div class="card-body career-body">
                                <i class="fas fa-award career-icon"></i>
                                <h3>Skill Development</h3>
                                <p>Tech, design, and business skills for 2025</p>
                                <button class="btn btn-outline">Explore</button>
                            </div>
                        </div>
                        <div class="card career-card card-green">
                            <div class="card-body career-body">
                                <i class="fas fa-book career-icon"></i>
                                <h3>Entrepreneurship</h3>
                                <p>Start and scale your own business</p>
                                <button class="btn btn-outline">Explore</button>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="margin-top: 24px;">
                        <div class="card-header">
                            <h3>Quick Career Tips</h3>
                        </div>
                        <div class="card-body">
                            <div class="career-tips">
                                <div class="tip-item">
                                    <div class="tip-number">1</div>
                                    <div>
                                        <h4>Network Actively</h4>
                                        <p>Join women professional groups on LinkedIn</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-number">2</div>
                                    <div>
                                        <h4>Upskill Continuously</h4>
                                        <p>Dedicate 30 mins daily to learning new skills</p>
                                    </div>
                                </div>
                                <div class="tip-item">
                                    <div class="tip-number">3</div>
                                    <div>
                                        <h4>Build Your Brand</h4>
                                        <p>Share your expertise through blogs or social media</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Success Stories -->
                <div class="empower-content" id="storiesContent">
                    <div class="stories-list" id="storiesList">
                        <!-- Populated by JavaScript -->
                    </div>
                    <div class="card story-cta">
                        <div class="card-body">
                            <h3>Share Your Success Story</h3>
                            <p>Inspire thousands of women with your journey</p>
                            <button class="btn btn-secondary">Submit Your Story</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>About SakhiShield</h3>
                    <p>An AI-powered platform shifting women's safety from reaction to prediction.</p>
                </div>
                <div class="footer-column">
                    <h3>Emergency Numbers</h3>
                    <p>🚨 Police: 100</p>
                    <p>🚑 Emergency: 112</p>
                    <p>👩 Women Helpline: 1091</p>
                </div>
                <div class="footer-column">
                    <h3>Features</h3>
                    <p>Route Safety Checker</p>
                    <p>Emergency SOS</p>
                    <p>Help Network</p>
                    <p>Empowerment Hub</p>
                </div>
                <div class="footer-column">
                    <h3>Tech Stack</h3>
                    <p>HTML5 + CSS3</p>
                    <p>Vanilla JavaScript</p>
                    <p>AI-Powered Analytics</p>
                    <p>Real-time Alerts</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>This is just a proto</p>
                <p>Made with 💜 for women's safety and empowerment | © 2026 SakhiShield</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`
