export default function getNumberFormat (val) {
  return new Intl.NumberFormat().format(val)
}
