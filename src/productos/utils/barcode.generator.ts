export function generarCodigoBarras(ultimoCodigo: string | null): string {
  const prefix = 'LIC';
  const nextNumber = ultimoCodigo
    ? parseInt(ultimoCodigo.split('-')[1], 10) + 1
    : 1;

  return `${prefix}-${nextNumber.toString().padStart(6, '0')}`;
}