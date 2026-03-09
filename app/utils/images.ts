// 图片路径处理工具函数
// 用于GitHub Pages部署时的路径修复

const BASE_PATH = "/";

export function getImagePath(path: string): string {
  // 如果路径已经包含basePath，直接返回
  if (path.startsWith(BASE_PATH)) {
    return path;
  }

  // 如果是绝对路径（以/开头），添加basePath
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }

  // 相对路径，添加basePath和/
  return `${BASE_PATH}/${path}`;
}

// 预定义的图片路径常量
export const IMAGES = {
  // Hero images
  HERO_1: getImagePath("/images/heros/olena-bohovyk-XttWKETqCCQ-unsplash.png"),
  HERO_2: getImagePath("/images/heros/ivana-cajina-dnL6ZIpht2s-unsplash.png"),
  HERO_3: getImagePath("/images/heros/ivana-cajina-_7LbC5J-jw4-unsplash.png"),

  // Digital Workers images
  DIGITAL_WORKERS_VIDEO: getImagePath("/videos/automate_business.mov"),
  DIGITAL_WORKERS_1: getImagePath("/images/digital-workers-image-1.png"),
  DIGITAL_WORKERS_2: getImagePath("/images/digital-workers-image-2.png"),
  DIGITAL_WORKERS_3: getImagePath("/images/digital-workers-image-3.png"),

  // Analytics video
  ANALYTICS_VIDEO: getImagePath("/images/Reinvent-Analytics.mov"),

  // UX images and video
  UX_VIDEO_1: getImagePath("/images/ux-1.mov"),
  UX_VIDEO_2: getImagePath("/images/ux-2.mov"),
  UX_IMAGE_3: getImagePath("/images/ux-image-3.png"),

  // Transform image
  TRANSFORM_IMAGE: getImagePath("/images/transform-image.png"),

  // Company video
  COMPANY_VIDEO: getImagePath("/videos/company.mp4"),

  // Campaign
  CAMPAIGN_VIDEO_PLACEHOLDER: getImagePath("/images/campaign/video-placeholder.jpg"),
} as const;
