import Event from '@/event'
export default function switchPages (namePage, paramPage) {
  Event.$emit('switchPages', namePage, paramPage)
}
