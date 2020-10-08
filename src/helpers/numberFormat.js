export default function getNumberFormat (val) {
  switch (typeof val) {
    case 'number':
      return new Intl.NumberFormat().format(val)
    default:
      val = 0
  }
}
