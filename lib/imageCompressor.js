/**
 * Client-Side Image Compressor — Krishna Textiles
 *
 * Converts ANY uploaded image (JPEG, PNG, WEBP, AVIF, BMP, GIF, etc.)
 * strictly to WebP format and compresses it to strictly below 500 KB.
 *
 * Requirements:
 *   1. All image formats MUST be converted to WebP (data:image/webp;base64,...).
 *   2. All image sizes MUST be strictly below 500 KB (< 480 KB safety threshold).
 */

export const STRICT_MAX_KB = 480; // Strictly below 500 KB limit (leaves safe margin)
const MAX_DIMENSION = 1600;       // Max width/height in px for crisp high-DPI display
const MIN_DIMENSION = 120;        // Safety floor for scaling

export function supportsWebP() {
  if (typeof document === 'undefined') return false;
  try {
    const c = document.createElement('canvas');
    c.width = 1;
    c.height = 1;
    return c.toDataURL('image/webp').startsWith('data:image/webp');
  } catch {
    return false;
  }
}

export function getByteSize(dataUrl) {
  if (!dataUrl) return 0;
  const commaIdx = dataUrl.indexOf(',');
  const b64 = commaIdx > -1 ? dataUrl.slice(commaIdx + 1) : dataUrl;
  return Math.round((b64.length * 3) / 4);
}

function readFileAsDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = (e) => resolve(e.target?.result);
    reader.readAsDataURL(blob);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onerror = () => reject(new Error('Failed to load image into memory'));
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export async function compressImage(file, maxKB = STRICT_MAX_KB) {
  if (!file || !(file instanceof Blob || (typeof file.type === 'string' && file.type.startsWith('image/')))) {
    throw new Error('Selected file is not an image');
  }

  const effectiveMaxKB = Math.min(Math.max(10, Number(maxKB) || STRICT_MAX_KB), STRICT_MAX_KB);
  const targetBytes = effectiveMaxKB * 1024;

  if (file.type === 'image/webp' && file.size > 0 && file.size <= targetBytes) {
    const directUrl = await readFileAsDataURL(file);
    if (typeof directUrl === 'string' && directUrl.startsWith('data:image/webp')) {
      return directUrl;
    }
  }

  const initialDataUrl = await readFileAsDataURL(file);
  const img = await loadImage(initialDataUrl);

  let origWidth = img.naturalWidth || img.width;
  let origHeight = img.naturalHeight || img.height;

  if (!origWidth || !origHeight) {
    throw new Error('Unable to determine image dimensions');
  }

  let width = origWidth;
  let height = origHeight;
  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    const ratio = Math.min(MAX_DIMENSION / width, MAX_DIMENSION / height);
    width = Math.max(1, Math.round(width * ratio));
    height = Math.max(1, Math.round(height * ratio));
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    throw new Error('Could not obtain canvas 2D rendering context');
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);

  const format = 'image/webp';

  let quality = 0.86;
  let dataUrl = canvas.toDataURL(format, quality);

  if (!dataUrl.startsWith('data:image/webp')) {
    dataUrl = canvas.toDataURL('image/webp', quality);
  }

  while (getByteSize(dataUrl) > targetBytes && quality > 0.20) {
    quality = Math.max(0.18, Math.round((quality - 0.08) * 100) / 100);
    dataUrl = canvas.toDataURL(format, quality);
  }

  if (getByteSize(dataUrl) <= targetBytes) {
    return dataUrl;
  }

  let currentWidth = width;
  let currentHeight = height;
  let scaleStep = 0.85;

  while (
    getByteSize(dataUrl) > targetBytes &&
    (currentWidth > MIN_DIMENSION || currentHeight > MIN_DIMENSION)
  ) {
    currentWidth = Math.max(MIN_DIMENSION, Math.round(currentWidth * scaleStep));
    currentHeight = Math.max(MIN_DIMENSION, Math.round(currentHeight * scaleStep));

    canvas.width = currentWidth;
    canvas.height = currentHeight;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, currentWidth, currentHeight);
    ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

    quality = 0.75;
    dataUrl = canvas.toDataURL(format, quality);

    while (getByteSize(dataUrl) > targetBytes && quality > 0.20) {
      quality = Math.max(0.18, Math.round((quality - 0.10) * 100) / 100);
      dataUrl = canvas.toDataURL(format, quality);
    }
  }

  if (getByteSize(dataUrl) > targetBytes) {
    let emergencyScale = 0.70;
    while (getByteSize(dataUrl) > targetBytes && currentWidth > 64 && currentHeight > 64) {
      currentWidth = Math.max(64, Math.round(currentWidth * emergencyScale));
      currentHeight = Math.max(64, Math.round(currentHeight * emergencyScale));

      canvas.width = currentWidth;
      canvas.height = currentHeight;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'medium';
      ctx.clearRect(0, 0, currentWidth, currentHeight);
      ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

      dataUrl = canvas.toDataURL(format, 0.20);
      emergencyScale -= 0.10;
    }
  }

  return dataUrl;
}

export async function compressImageDetails(file, maxKB = STRICT_MAX_KB) {
  const dataUrl = await compressImage(file, maxKB);
  const sizeBytes = getByteSize(dataUrl);
  return {
    dataUrl,
    sizeBytes,
    sizeKb: Math.round(sizeBytes / 1024),
    format: 'webp',
  };
}

export default compressImage;
