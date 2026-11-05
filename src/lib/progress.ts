export const confidenceLabels = {
  notyet: 'Not yet',
  sortof: 'Sort of',
  yes: 'Got it',
};
export type Confidence = keyof typeof confidenceLabels;

export type ProgressLesson = {
  id: string;
  number: number;
  unit: string;
  title: string;
  taskIds: string[];
};

function read(key: string) {
  try {
    return localStorage.getItem(`pah:${key}`);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(`pah:${key}`, value);
  } catch {}
}

export function recordLessonOpened(id: string) {
  write(`opened:${id}`, '1');
}

export function recordTaskPassed(lessonId: string, taskId: string) {
  write(`passed:${lessonId}:${taskId}`, '1');
}

export function getConfidence(id: string): Confidence | null {
  const value = read(`rating:${id}`);
  return value && Object.hasOwn(confidenceLabels, value) ? (value as Confidence) : null;
}

export function saveConfidence(id: string, value: Confidence) {
  write(`rating:${id}`, value);
}

export function lessonProgress(lesson: ProgressLesson) {
  const total = lesson.taskIds.length;
  const passed = lesson.taskIds.filter((taskId) => read(`passed:${lesson.id}:${taskId}`) === '1').length;
  const confidence = getConfidence(lesson.id);
  const started = passed > 0 || confidence !== null || read(`opened:${lesson.id}`) === '1';
  const complete = total > 0 && passed === total;
  return { passed, total, confidence, complete, status: complete ? 'Complete' : started ? 'In progress' : 'Not started' };
}

export function progressCsv(lessons: ProgressLesson[]) {
  const exported = new Date().toISOString();
  const rows = [
    ['Lesson', 'Unit', 'Title', 'Status', 'Tasks passed', 'Total tasks', 'Confidence', 'Exported at (UTC)'],
    ...lessons.map((lesson) => {
      const result = lessonProgress(lesson);
      return [
        lesson.number, lesson.unit, lesson.title, result.status, result.passed, result.total,
        result.confidence ? confidenceLabels[result.confidence] : '', exported,
      ];
    }),
  ];
  return '\uFEFF' + rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\r\n') + '\r\n';
}
