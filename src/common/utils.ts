import { app } from 'electron';

export function toCamelCase(str: string, mark: string = '_') {
    const regexp: RegExp = new RegExp(`${mark}\\w`, 'g');
    return str.replace(regexp, (a: string, b: any) => a.slice(1).toUpperCase());
}

export function isDev() {
    return !app.isPackaged;
}
export function isProd() {
    return process.env.NODE_ENV !== 'development' || app.isPackaged;
}

export function emptyCall(): void {}

export function isPicture(fileOrDirUrl: string): boolean {
    return ['bmp', 'jpg', 'png', 'jpeg', 'exif', 'psd', 'webp', 'tif', 'tiff', 'gif'].some(suffix => fileOrDirUrl.endsWith(suffix));
}

export function extractDirUrlFromKey(key: string): string {
    return key.slice(0, key.lastIndexOf('|'));
}

export function extractSuffixFromKey(key: string): string {
    return key.slice(key.lastIndexOf('|'));
}

export function extractDirNameFromKey(key: string): string {
    const url = extractDirUrlFromKey(key);
    return (url.match(/[^\\/]+$/) || []).pop();
}
