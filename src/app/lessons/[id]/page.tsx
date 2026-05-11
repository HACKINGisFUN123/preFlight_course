import Link from "next/link";

export default function LessonPage({ params }: { params: { id: string } }) {
  const lessonNumber = parseInt(params.id);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Lesson Header */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/courses/1"
                className="text-accent hover:text-orange-600 font-semibold transition-colors"
              >
                ← חזור לקורס
              </Link>
              <div className="text-muted-foreground">|</div>
              <h1 className="text-2xl font-bold">שיעור {lessonNumber}: היכרות עם המטוס</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">התקדמות: 25%</span>
              <div className="w-32 bg-secondary rounded-full h-2">
                <div className="bg-gradient-to-r from-accent to-orange-600 h-2 rounded-full" style={{width: "25%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">נגן וידאו</h3>
                    <p className="text-muted-foreground">כאן יוצג סרטון השיעור</p>
                  </div>
                </div>
                
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-foreground">שיעור {lessonNumber}: היכרות עם המטוס</h2>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 text-accent bg-secondary border-border rounded focus:ring-accent" />
                      <span className="text-foreground font-semibold">סיימתי שיעור</span>
                    </label>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-semibold text-foreground mb-4">תוכן השיעור</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      בשיעור זה נלמד את יסודות הטיסה ב-F-16 Fighting Falcon. נכיר את מערכות המטוס, נלמד כיצד להפעיל אותו ונתרגל את הפקדים הבסיסיים.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2">נושאים שיכוסו:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                      <li>היכרות עם תא הטייס</li>
                      <li>מערכות אוויוניקה בסיסיות</li>
                      <li>הפעלת מנועים ומערכות</li>
                      <li>בדיקות טרום-טיסה</li>
                      <li>היכרות עם מכשירי הניווט</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2">מטרות השיעור:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      בסיום שיעור זה, התלמיד יוכל לזהות את כל מערכות המטוס העיקריות, לבצע בדיקות טרום-טיסה שגרתיות, ולהבין את עקרונות הפעלת המטוס.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl border border-border sticky top-4">
                <h3 className="text-xl font-bold text-foreground mb-6">שיעורים בקורס</h3>
                
                <div className="space-y-3">
                  {Array.from({ length: 12 }, (_, i) => (
                    <Link 
                      key={i}
                      href={`/lessons/${i + 1}`}
                      className={`block p-3 rounded-lg transition-colors ${
                        i + 1 === lessonNumber
                          ? 'bg-accent/20 border border-accent'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          i < 3 ? 'bg-accent text-foreground' : 'bg-secondary text-muted-foreground'
                        }`}>
                          {i < 3 ? '✓' : i + 1}
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold text-sm ${i + 1 === lessonNumber ? 'text-accent' : 'text-foreground'}`}>
                            שיעור {i + 1}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {i === 0 ? "היכרות עם המטוס" : i === 1 ? "מערכות בסיסיות" : i === 2 ? "הפעלת מנועים" : `נושא מתקדם ${i}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Link 
                    href={`/lessons/${Math.min(lessonNumber + 1, 12)}`}
                    className="w-full py-3 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    שיעור הבא →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
