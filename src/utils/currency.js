const formatter = new Intl.NumberFormat('en-En', {
  currency: 'USD',
  style: 'currency',
});

export function currency(value) {
  return formatter.format(value);
}
