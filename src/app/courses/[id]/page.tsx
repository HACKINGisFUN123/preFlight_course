import Link from "next/link";

export default function CoursePage({ params }: { params: { id: string } }) {
  // Mock course data - in real app this would come from database
  const courseData = {
    "1": {
      title: "F-16 Basic Flight",
      description: "למידת יסודות הטיסה ב-F-16 Fighting Falcon",
      level: "מתחיל",
      duration: "8 שעות",
      lessons: 12,
      image: "🛩️",
      overview: "קורס מקיף המלמד את כל יסודות הטיסה במטוס ה-F-16, מהפעלת המערכות ועד טיסה בסיסית ונחיתה."
    },
    "2": {
      title: "F/A-18 Advanced",
      description: "טיסה מתקדמת ב-F/A-18 Hornet",
      level: "מתקדם",
      duration: "12 שעות",
      lessons: 18,
      image: "🚀",
      overview: "קורס מתקדם המתמקד בטכניקות טיסה מורכבות, לחימה אווירית ומערכות נשק מתקדמות."
    }
  };

  const course = courseData[params.id as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">קורס לא נמצא</h1>
          <p className="text-muted-foreground mb-8">הקורס שחיפשת אינו קיים במערכת.</p>
          <Link 
            href="/courses"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg transition-colors"
          >
            חזור לקורסים
          </Link>
        </div>
      </div>
    );
  }

  const lessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: i + 1,
    title: `שיעור ${i + 1}: ${i === 0 ? "היכרות עם המטוס" : i === 1 ? "מערכות בסיסיות" : i === 2 ? "הפעלת מנועים" : `נושא מתקדם ${i}`}`,
    duration: `${20 + i * 5} דקות`,
    completed: i < 3
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Course Header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <Link 
                  href="/courses"
                  className="text-accent hover:text-orange-600 font-semibold transition-colors"
                >
                  ← חזור לקורסים
                </Link>
              </div>
              
              <div className="text-8xl mb-6 transform hover:scale-110 transition-transform duration-300">
                {course.image}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
                {course.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold">
                  {course.level}
                </span>
                <span className="px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-semibold">
                  {course.duration}
                </span>
                <span className="px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-semibold">
                  {course.lessons} שיעורים
                </span>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                {course.overview}
              </p>
            </div>
            
            <div className="lg:w-96">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">התקדמות הקורס</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">התקדמות כללית</span>
                    <span className="text-accent font-bold">25%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-gradient-to-r from-accent to-orange-600 h-3 rounded-full" style={{width: "25%"}}></div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                  המשך לשיעור הבא
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-foreground">שיעורי הקורס</h2>
          
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="group bg-gradient-to-r from-primary to-secondary p-6 rounded-xl border border-border hover:border-accent transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      lesson.completed 
                        ? 'bg-accent text-foreground' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {lesson.completed ? '✓' : lesson.id}
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg ${lesson.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/lessons/${lesson.id}`}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      lesson.completed
                        ? 'bg-secondary text-muted-foreground'
                        : 'bg-accent text-white hover:bg-orange-600'
                    }`}
                  >
                    {lesson.completed ? 'צפה שוב' : 'התחל למוד'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
