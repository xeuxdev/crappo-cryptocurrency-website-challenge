export const earningRateVariant = {
  numbers: {
    hide: { opacity: 0, y: 150 },
    show: { opacity: 1, y: 0, transition: { duration: 1.75 } },
  },
  illustration: {
    hide: { opacity: 0, y: -150, scale: 0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.75, delay: 0.15 },
    },
  },
  head: {
    hide: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, delay: 0.25 },
    },
  },
  para: {
    hide: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.75, delay: 0.15 },
    },
  },
}
