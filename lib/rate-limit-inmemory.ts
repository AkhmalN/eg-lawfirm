type RateEntry = {
  count: number;
  firstRequest: number;
};

const rateMap = new Map<string, RateEntry>();

export function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry) {
    rateMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  if (now - entry.firstRequest > windowMs) {
    rateMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  if (entry.count >= limit) return false;

  entry.count++;
  return true;
}
