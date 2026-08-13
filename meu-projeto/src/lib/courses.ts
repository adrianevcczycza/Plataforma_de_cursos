import { fallbackCourses } from "./fallback-courses";

export type Course = {
  id: string;
  name: string;
  description: string;
  price: number;
  date: string;
  location: string;
  availableSpots: number;
  category: string;
  image: string;
  featured: boolean;
};

const API_URL = process.env.EVENTS_API_URL ?? "https://dynamic-events-api.onrender.com/api/eventos";

function text(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) if (typeof record[key] === "string" && record[key]) return record[key] as string;
  return "";
}

function number(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const value = Number(record[key]);
    if (Number.isFinite(value)) return value;
  }
  return 0;
}

function normalize(item: unknown): Course | null {
  if (!item || typeof item !== "object") return null;
  const record = item as Record<string, unknown>;
  const id = text(record, "id", "_id", "identificador", "evento_id");
  if (!id) return null;
  const remoteImage = text(record, "imagem", "image", "imagem_url", "imageUrl");
  return {
    id,
    name: text(record, "nome", "name", "titulo", "title") || "Curso WEG Academy",
    description: text(record, "descricao", "description"),
    price: number(record, "preco", "price", "valor"),
    date: text(record, "data", "date", "data_inicio", "startDate"),
    location: text(record, "local", "location") || "Local a confirmar",
    availableSpots: number(record, "vagas_disponiveis", "vagas", "available_spots", "availableSpots"),
    category: text(record, "categoria", "category"),
    image: remoteImage || "/placeholder-curso.jpg",
    featured: Boolean(record.destaque ?? record.featured),
  };
}

export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch(API_URL, { next: { revalidate: 300 }, signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`API respondeu com status ${response.status}`);
    const payload: unknown = await response.json();
    const raw = Array.isArray(payload) ? payload : (payload as Record<string, unknown>)?.eventos ?? (payload as Record<string, unknown>)?.data;
    if (!Array.isArray(raw)) throw new Error("Formato de resposta inesperado");
    const courses = raw.map(normalize).filter((item): item is Course => item !== null);
    return courses.length ? courses : fallbackCourses;
  } catch (error) {
    console.error("Não foi possível carregar a API de eventos:", error);
    return fallbackCourses;
  }
}

export async function getCourse(id: string) {
  const courses = await getCourses();
  return courses.find((course) => course.id === id);
}
