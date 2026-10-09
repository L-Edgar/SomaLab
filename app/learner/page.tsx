import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import avatar from '../../public/avatar.png'
import logo from '../../public/logo.png'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600", "700"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"] });

interface ContinueLearning {
  subject: string;
  courseTitle: string;
  lessonTitle: string;
  progress: number; // 0–100
  href: string;
}

interface CourseChipData {
  name: string;
  slug: string;
  active?: boolean;
}

interface ActivityItem {
  label: string;
  timestamp: string;
}

interface LearnerDashboardProps {
  learnerName: string;
  avatarSrc?: string;
  notificationCount?: number;
  continueLearning?: ContinueLearning;
  courses?: CourseChipData[];
  recentActivity?: ActivityItem[];
}

const defaultCourses: CourseChipData[] = [
  { name: "Mathematics", slug: "mathematics" },
  { name: "Physics", slug: "physics", active: true },
  { name: "Chemistry", slug: "chemistry" },
];

const defaultActivity: ActivityItem[] = [
  { label: "Completed quiz — Laws of Reflection", timestamp: "2h ago" },
  { label: "Started lesson — Refractive Index", timestamp: "Yesterday" },
  { label: "Enrolled in Chemistry — Acids & Bases", timestamp: "Aug 12" },
];

export default function LearnerDashboard({
  learnerName,
  avatarSrc,
  notificationCount = 0,
  continueLearning,
  courses = defaultCourses,
  recentActivity = defaultActivity,
}: LearnerDashboardProps) {
  return (
    <div className="min-h-screen bg-[#FBFCFE]">
      <DashboardHeader avatarSrc={avatarSrc} notificationCount={5} />

      <main className="mx-auto max-w-5xl px-6 py-8">
        <h1 className={`${spaceGrotesk.className} mb-1 text-2xl text-[#1B2A4A]`}>
          Welcome back, Edgar
        </h1>
        <p className="mb-8 text-sm text-[#5B6B8C]">Here's where you left off.</p>

        {continueLearning && (
          <section className="mb-9">
            <SectionLabel>Continue Learning</SectionLabel>
            <ContinueLearningCard {...continueLearning} />
          </section>
        )}

        <section className="mb-9">
          <SectionLabel>My Courses</SectionLabel>
          <div className="flex flex-wrap gap-2.5">
            {courses.map((course) => (
              <CourseChip key={course.slug} {...course} />
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Recent Activity</SectionLabel>
          <div className="rounded-2xl border border-[#D7DEEA] bg-white px-5">
            {recentActivity.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between py-3.5 ${
                  i !== recentActivity.length - 1 ? "border-b border-[#E9EEF5]" : ""
                }`}
              >
                <span className="text-sm text-[#1B2A4A]">{item.label}</span>
                <span className="text-xs text-[#5B6B8C]">{item.timestamp}</span>
              </div>
            ))}
            {recentActivity.length === 0 && (
              <p className="py-6 text-center text-sm text-[#5B6B8C]">No activity yet.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${plexMono.className} mb-3 text-[11px] uppercase tracking-[0.12em] text-[#5B6B8C]`}>
      {children}
    </p>
  );
}

function ContinueLearningCard({ subject, courseTitle, lessonTitle, progress, href }: ContinueLearning) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl border border-[#D7DEEA] bg-white p-5">
      <div className="min-w-0 flex-1">
        <span className="inline-block rounded-md bg-[#E7EEFE] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#2E6FF2]">
          Physics
        </span>
        <h3 className={`${spaceGrotesk.className} mb-2.5 mt-2 truncate text-[15px] text-[#1B2A4A]`}>
          Refraction — Lenses
        </h3>
        <div className="mb-1.5 h-2 w-full max-w-xs overflow-hidden rounded-full bg-[#E9EEF5]">
          <div
            className="h-full rounded-full bg-[#12A671] transition-all"
            style={{ width: `${Math.min(100, Math.max(0, 70))}%` }}
          />
        </div>
        <span className="text-xs text-[#5B6B8C]">70% complete</span>
      </div>
      <Link
        href={href}
        className="shrink-0 rounded-lg bg-[#2E6FF2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#255ed9]"
      >
        Continue
      </Link>
    </div>
  );
}

function CourseChip({ name, slug, active }: CourseChipData) {
  return (
    <Link
      href={`/subjects/${slug}`}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-[#E4F6EE] text-[#12A671]"
          : "bg-[#E7EEFE] text-[#2E6FF2] hover:bg-[#d9e5fd]"
      }`}
    >
      {name}
    </Link>
  );
}

function DashboardHeader({ avatarSrc, notificationCount }: { avatarSrc?: string; notificationCount: number }) {
  return (
    <header className="border-b border-[#D7DEEA] bg-[#FBFCFE]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          
            <Image
              src={logo}
              alt="logo"
              width={34}
              height={34}
              className="h-14 w-14 rounded-lg object-contain"
              priority
            />
          
          <span className={`${spaceGrotesk.className} text-lg tracking-[-0.01em] text-[#1B2A4A]`}>
            SomaLab
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Notifications${notificationCount ? ` (${notificationCount} unread)` : ""}`}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#D7DEEA] text-[#1B2A4A]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M6 10a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
              <path d="M10 20a2 2 0 0 0 4 0" />
            </svg>
            {notificationCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#2E6FF2] text-[9px] font-bold text-white">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

          <Link href="/profile" aria-label="Profile">
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt="Profile"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border border-[#D7DEEA] object-cover"
              />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7DEEA] bg-[#E4E9F1] text-xs font-semibold text-[#5B6B8C]">
                ··
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
