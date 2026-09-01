const LIMA_OFFSET = '-05:00';

export function getLimaDateParts() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Lima',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = formatter.formatToParts(now);

  return {
    year: Number(parts.find((p) => p.type === 'year')?.value),
    month: Number(parts.find((p) => p.type === 'month')?.value),
    day: Number(parts.find((p) => p.type === 'day')?.value),
  };
}

export function parseLimaDate(dateString: string): Date {
  return new Date(`${dateString}T00:00:00${LIMA_OFFSET}`);
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function getLimaPeriodRange(
  period: string,
  from?: string,
  to?: string,
): { startDate: Date; endDate: Date } {
  const { year, month, day } = getLimaDateParts();
  const todayStr = `${year}-${pad(month)}-${pad(day)}`;
  const today = parseLimaDate(todayStr);

  let startDate: Date;
  let endDate: Date;

  switch (period) {
    case 'week': {
      const dayOfWeek = today.getUTCDay();
      startDate = new Date(today);
      startDate.setUTCDate(today.getUTCDate() - dayOfWeek);
      endDate = new Date(startDate);
      endDate.setUTCDate(startDate.getUTCDate() + 6);
      endDate.setUTCHours(23, 59, 59, 999);
      break;
    }
    case 'month': {
      const startStr = `${year}-${pad(month)}-01`;
      startDate = parseLimaDate(startStr);
      const lastDay = new Date(year, month, 0).getDate();
      endDate = new Date(`${year}-${pad(month)}-${pad(lastDay)}T23:59:59${LIMA_OFFSET}`);
      break;
    }
    case 'specific-date':
      startDate = from ? parseLimaDate(from) : today;
      endDate = new Date(startDate);
      endDate.setUTCHours(23, 59, 59, 999);
      break;
    case 'range':
      startDate = from ? parseLimaDate(from) : parseLimaDate(`${year}-${pad(month)}-01`);
      endDate = to ? new Date(`${to}T23:59:59${LIMA_OFFSET}`) : new Date();
      break;
    default: // 'day'
      startDate = today;
      endDate = new Date(today);
      endDate.setUTCHours(23, 59, 59, 999);
  }

  return { startDate, endDate };
}