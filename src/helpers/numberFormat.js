export default function getNumberFormat (val) {
  console.log(typeof (val))
  if (typeof val === 'number') {
    return new Intl.NumberFormat().format(val)
  }
}
