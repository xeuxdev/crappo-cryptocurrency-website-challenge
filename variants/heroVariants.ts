const heroVariant = {
  blackFriday: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  },
  heroText: {
    hide: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  },
  heroPara: {
    hide: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  },
  heroImage: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  },
}
export default heroVariant
