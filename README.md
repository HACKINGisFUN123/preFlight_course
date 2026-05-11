# PreFlight Course Platform

פלטפורמת למידה מתקדמת לקהילת DCS World ישראל

## תיאור הפרויקט

PreFlight היא פלטפורמת חינוכית מלאה לניהול קורסי טיסה ואימונים עבור קהילת DCS World בישראל. המערכת תומכת בעברית מלאה ובפריסה מימין לשמאל (RTL).

## תכונות עיקריות

- 🎓 **קטלוג קורסים** - מגוון קורסי טיסה (F-16, BVR Combat ועוד)
- 📹 **שיעורי וידאו** עם מעקב התקדמות
- 👨‍✈️ **מערכת הזמנות מדריכים** לאימונים אישיים
- 📅 **לוח אירועים קהילתי** עם RSVP
- 📚 **מרכז ידע** - הורדות צ'קליסטים, ליבריות ומשימות
- 🔐 **מערכת אימות מאובטחת** עם Supabase
- 🎨 **עיצוב אווירונאוטי כהה** עם תמיכה מלאה בעברית

## טכנולוגיות

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend/Auth**: Supabase
- **UI**: עיצוב RTL מלא, גופן Assistant לעברית
- **אבטחה**: הגנה מפני XSS ו-SQL Injection

## התקנה והפעלה

1. התקן את התלות:
```bash
npm install
```

2. צור קובץ `.env.local` עם המשתנים הבאים:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. הפעל את שרת הפיתוח:
```bash
npm run dev
```

4. פתח את [http://localhost:3000](http://localhost:3000)

## הגדרת Supabase

1. צור פרויקט חדש ב-[Supabase](https://supabase.com)
2. הפעל את Authentication עם Email/Password
3. צור את הטבלאות הנדרשות בעזרת קובץ ה-sql בתיקיית `database`
4. העתק את ה-URL וה-Anon Key לקובץ `.env.local`

## מבנה הפרויקט

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/         # דפי אימות
│   ├── dashboard/      # דף הבית
│   ├── courses/        # קטלוג קורסים
│   ├── lessons/        # צפייה בשיעורים
│   ├── instructors/    # הזמנת מדריכים
│   ├── calendar/       # לוח אירועים
│   ├── hub/           # מרכז ידע
│   └── admin/         # פאנל מנהלים
├── components/         # קומפוננטות גלובליות
├── lib/               # פונקציות עזר
└── types/             # טיפוסי TypeScript
```

## תרומה

הפרויקט פתוח לתרומות מהקהילה. אנא פתח פול לפני ביצוע שינויים משמעותיים.

## רישיון

MIT License
