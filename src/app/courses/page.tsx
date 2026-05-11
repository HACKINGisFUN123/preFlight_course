import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "F-16 Basic Flight",
      description: "למידת יסודות הטיסה ב-F-16 Fighting Falcon",
      level: "מתחיל",
      duration: "8 שעות",
      lessons: 12,
      image: "🛩️"
    },
    {
      id: 2,
      title: "F/A-18 Advanced",
      description: "טיסה מתקדמת ב-F/A-18 Hornet",
      level: "מתקדם",
      duration: "12 שעות",
      lessons: 18,
      image: "🚀"
    },
    {
      id: 3,
      title: "BVR Combat",
      description: "לחימה מעבר לטווח ראייה",
      level: "מתקדם",
      duration: "10 שעות",
      lessons: 15,
      image: "🎯"
    },
    {
      id: 4,
      title: "Air-to-Ground",
      description: "תקיפות קרקע והפצצות מדויקות",
      level: "בינוני",
      duration: "6 שעות",
      lessons: 10,
      image: "💣"
    },
    {
      id: 5,
      title: "Navigation Systems",
      description: "ניווט מתקדם ומערכות ניווט",
      level: "בינוני",
      duration: "4 שעות",
      lessons: 8,
      image: "🧭"
    },
    {
      id: 6,
      title: "Formation Flying",
      description: "טיסה במבנה וטקטיקות קבוצתיות",
      level: "מתקדם",
      duration: "8 שעות",
      lessons: 12,
      image: "✈️"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
            קורסי טיסה
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            בחרו מתוך מגוון קורסי טיסה מקצועיים, מרמת מתחיל ועד טייס קרב מתקדם
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground font-semibold rounded-lg transition-colors"
          >
            חזור לדף הבית
          </Link>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="group relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl border border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {course.image}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{course.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      {course.lessons} שיעורים
                    </span>
                  </div>
                  
                  <Link 
                    href={`/courses/${course.id}`}
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    צפה בקורס
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
