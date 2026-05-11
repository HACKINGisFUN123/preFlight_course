import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
            PreFlight
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-secondary">
            פלטפורמת הטיסה המובילה לקהילת DCS World ישראל
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted max-w-2xl mx-auto">
            הצטרפו לקהילת הטייסים המתקדמת בישראל. קורסים מקצועיים, אימונים אישיים עם מדריכים מוסמכים, ולוח אירועים קהילתי פעיל.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses"
              className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              צפה בקורסים
            </Link>
            <Link 
              href="/auth/login"
              className="px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-colors"
            >
              התחברות
            </Link>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background/90 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            מה תלמדו אצלנו
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary p-8 rounded-lg border border-border">
              <div className="text-accent text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-4">קורסים מקצועיים</h3>
              <p className="text-muted">
                מקצועות טיסה מתקדמים כולל F-16, F/A-18, BVR Combat ועוד. הדרכה מקיפה עם סימולציות מציאותיות.
              </p>
            </div>
            
            <div className="bg-primary p-8 rounded-lg border border-border">
              <div className="text-accent text-4xl mb-4">👨‍✈️</div>
              <h3 className="text-xl font-semibold mb-4">מדריכים מוסמכים</h3>
              <p className="text-muted">
                צוות מדריכים מנוסה עם אלפי שעות טיסה. אימונים אישיים המותאמים לרמה ולצרכים שלכם.
              </p>
            </div>
            
            <div className="bg-primary p-8 rounded-lg border border-border">
              <div className="text-accent text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">אימונים טקטיים</h3>
              <p className="text-muted">
                תרגולים מבצעיים, משימות קבוצתיות ואירועים קהילתיים. התנסות אמיתית בתנאי קרב.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            המספרים מדברים בעד עצמם
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted">טייסים פעילים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted">קורסים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-muted">מדריכים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted">שעות תוכן</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להמריא?
          </h2>
          <p className="text-lg mb-8 text-muted">
            הצטרפו היום לקהילת הטייסים המובילה בישראל והתחילו את הדרך להפוך לטייס קרב מקצועי.
          </p>
          <Link 
            href="/auth/register"
            className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors inline-block"
          >
            הרשמה חינם
          </Link>
        </div>
      </section>
    </div>
  );
}
