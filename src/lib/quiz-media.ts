import type { QuizMedia, QuizVisual } from "@/core/quiz/types";

const SIZE = { width: 1200, height: 900 } as const;

function visual(
  src: string,
  zh: string,
  en: string,
  focus: QuizVisual["focus"] = { x: 50, y: 50 },
): QuizVisual {
  return {
    src: `/quiz-media/${src}.webp`,
    ...SIZE,
    alt: { zh, en },
    focus,
  };
}

export const QUIZ_MEDIA = {
  "animal-personality": {
    cover: visual(
      "animal-personality/cover",
      "晨光中的林间空地，四条不同方向的小径在中央相遇。",
      "A sunlit forest clearing where four distinct paths meet at the center.",
    ),
    byResult: {
      LI: visual(
        "animal-personality/lion-drive",
        "暖光越过岩石照向开阔道路，像一种准备向前的行动力。",
        "Warm light crossing a stone toward an open path, suggesting readiness to act.",
        { x: 58, y: 48 },
      ),
      DO: visual(
        "animal-personality/dog-connection",
        "两盏柔和的灯在同一张长椅旁彼此照亮，象征稳定连接。",
        "Two gentle lamps illuminating each other beside one bench, suggesting steady connection.",
      ),
      CA: visual(
        "animal-personality/cat-independence",
        "安静窗边留着一处独立坐席，远处是舒展的暮色。",
        "A quiet window seat set apart against an expansive evening view.",
        { x: 44, y: 48 },
      ),
      OW: visual(
        "animal-personality/owl-observation",
        "夜色书桌上，一束灯光落在层叠石片与远处月影之间。",
        "On a night desk, a focused light falls between layered stones and a distant moon.",
      ),
      MIXED: visual(
        "animal-personality/mixed-rhythm",
        "四种颜色的路径在安静庭院中交织，又各自保留去向。",
        "Four colored paths weave through a quiet courtyard while keeping their own directions.",
      ),
    },
  },
  "emotion-regulation": {
    cover: visual(
      "emotion-regulation/cover",
      "一只透明容器接住雨水，旁边的水面逐渐恢复平静。",
      "A translucent vessel gathering rain beside water that is gradually becoming still.",
    ),
    byResult: {
      CR: visual(
        "emotion-regulation/reappraisal",
        "同一束光穿过两层透明玻璃后，在墙上形成新的柔和色彩。",
        "One beam of light passing through two glass layers and becoming a new, softer color on the wall.",
      ),
      ES: visual(
        "emotion-regulation/containment",
        "深色容器暂时收拢流动的水，出口仍保留一线空间。",
        "A dark vessel temporarily holding flowing water while leaving a narrow outlet open.",
      ),
      AC: visual(
        "emotion-regulation/acceptance",
        "雨滴落进宽阔水面，涟漪被完整容纳并慢慢散开。",
        "Raindrops entering a broad pool, their ripples fully held as they slowly widen.",
      ),
    },
  },
  "attachment-style": {
    cover: visual(
      "attachment-style/cover",
      "两座安静小岛由一条可进可退的木桥连接。",
      "Two quiet islands connected by a wooden bridge with room to move either way.",
    ),
    byResult: {
      SE: visual(
        "attachment-style/secure",
        "两座平台之间的桥稳稳连接，桥边仍各有舒展空间。",
        "A steady bridge joins two platforms while each side keeps room of its own.",
      ),
      AN: visual(
        "attachment-style/anxious",
        "一盏近处的灯伸向远方微弱灯光，中间的水面泛起密集波纹。",
        "A nearby lamp reaching toward a faint distant light across water filled with close ripples.",
        { x: 46, y: 52 },
      ),
      AV: visual(
        "attachment-style/avoidant",
        "一座平台向后退入安静树影，仍能看见对岸的光。",
        "One platform rests back in quiet shade while the light across the water remains visible.",
      ),
      DI: visual(
        "attachment-style/disorganized",
        "一条桥在靠近与折返之间形成曲折路径，水面同时明暗交错。",
        "A bridge bends between approach and retreat over water patterned with light and shadow.",
      ),
      MIXED: visual(
        "attachment-style/mixed",
        "多条长度不同的桥连接一组小岛，每条路都保留自己的节奏。",
        "Bridges of different lengths connect a group of islands, each route keeping its own rhythm.",
      ),
    },
  },
  "life-satisfaction": {
    cover: visual(
      "life-satisfaction/cover",
      "日光落在一张有植物、杯子和空白纸页的日常桌面上。",
      "Daylight falling across an everyday table with a plant, a cup, and an open blank page.",
    ),
    byScoreBand: {
      low: visual(
        "life-satisfaction/low-friction",
        "桌面上几件物品彼此挤压，窗边仍留着一小块明亮空间。",
        "Several objects crowd one another on a table while a small clear space remains by the window.",
      ),
      moderate: visual(
        "life-satisfaction/mixed-ground",
        "半明半暗的桌面上，日常物件逐渐找到各自的位置。",
        "Everyday objects gradually finding their places across a table divided between light and shade.",
      ),
      high: visual(
        "life-satisfaction/supported-growth",
        "明亮桌面上的植物舒展生长，周围物件留有从容间距。",
        "A plant opening into the light on an uncluttered table with generous space around it.",
      ),
    },
  },
} satisfies Record<string, QuizMedia>;

export function getQuizMedia(quizId: string): QuizMedia | undefined {
  return QUIZ_MEDIA[quizId as keyof typeof QUIZ_MEDIA];
}

export function getQuizCover(quizId: string): QuizVisual | undefined {
  return getQuizMedia(quizId)?.cover;
}
