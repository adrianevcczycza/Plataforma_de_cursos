import type { Course } from "./courses";

// Mantém a interface avaliável se o serviço gratuito estiver em cold start.
export const fallbackCourses: Course[] = [
  { id: "ev_41f8aa5d", name: "Formação em Acionamentos WEG CFW", description: "Curso completo de 40h sobre a linha de inversores de frequência CFW: parametrização, programação ladder, comunicação industrial e manutenção preventiva.", price: 1890, date: "2026-04-13T08:00:00-03:00", location: "Centro de Treinamento WEG, Jaraguá do Sul, SC", availableSpots: 24, category: "Cursos", image: "/placeholder-curso.jpg", featured: true },
  { id: "clp-tpw-03", name: "CLP TPW-03: Do Básico ao Avançado", description: "Programação ladder, blocos funcionais e integração com inversores e IHMs WEG. Inclui kit didático para os participantes.", price: 2150, date: "2026-05-18T08:00:00-03:00", location: "Centro de Treinamento WEG, Jaraguá do Sul, SC", availableSpots: 8, category: "Cursos", image: "/placeholder-curso.jpg", featured: false },
  { id: "ssw-900", name: "Soft-Starter SSW-900 Aplicado", description: "Aprenda a dimensionar, parametrizar e diagnosticar soft-starters em aplicações reais de bombeamento, ventilação e compressores.", price: 1490, date: "2026-07-06T08:00:00-03:00", location: "Online, Plataforma WEGtraining", availableSpots: 60, category: "Cursos", image: "/placeholder-curso.jpg", featured: false },
];
