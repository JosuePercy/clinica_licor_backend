export function generateBarcode(lastCode: string | null): string {
  const prefix = 'LIC';
  const nextNumber = lastCode
    ? parseInt(lastCode.split('-')[1], 10) + 1
    : 1;

  return `${prefix}-${nextNumber.toString().padStart(6, '0')}`;
}