import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-accent via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              PreFlight
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            פלטפורמת הטיסה המובילה
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-accent font-semibold">
            לקהילת DCS World ישראל
          </h3>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            הצטרפו לקהילת הטייסים המתקדמת בישראל. קורסים מקצועיים, אימונים אישיים עם מדריכים מוסמכים, ולוח אירועים קהילתי פעיל.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/courses"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
            >
              <span className="relative z-10">צפה בקורסים</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/auth/login"
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/30"
            >
              התחברות
            </Link>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              מה תלמדו אצלנו
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">קורסים מקצועיים</h3>
                <p className="text-muted-foreground leading-relaxed">
                  מקצועות טיסה מתקדמים כולל F-16, F/A-18, BVR Combat ועוד. הדרכה מקיפה עם סימולציות מציאותיות.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👨‍✈️</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">מדריכים מוסמכים</h3>
                <p className="text-muted-foreground leading-relaxed">
                  צוות מדריכים מנוסה עם אלפי שעות טיסה. אימונים אישיים המותאמים לרמה ולצרכים שלכם.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">אימונים טקטיים</h3>
                <p className="text-muted-foreground leading-relaxed">
                  תרגולים מבצעיים, משימות קבוצתיות ואירועים קהילתיים. התנסות אמיתית בתנאי קרב.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
              המספרים מדברים בעד עצמם
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-muted-foreground font-semibold">טייסים פעילים</div>
            </div>
            <div className="group relative">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-muted-foreground font-semibold">קורסים</div>
            </div>
            <div className="group relative">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-muted-foreground font-semibold">מדריכים</div>
            </div>
            <div className="group relative">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-muted-foreground font-semibold">שעות תוכן</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary to-accent/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
              מוכנים להמריא?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            הצטרפו היום לקהילת הטייסים המובילה בישראל והתחילו את הדרך להפוך לטייס קרב מקצועי.
          </p>
          <Link 
            href="/auth/register"
            className="group relative px-12 py-6 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-black text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 inline-block"
          >
            <span className="relative z-10">הרשמה חינם</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
