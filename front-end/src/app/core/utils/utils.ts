export class Utils {
  public static firstUpperCase(s: string): string {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  }
}