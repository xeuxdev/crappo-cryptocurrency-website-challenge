export const earningRateVariant = {
  revenue: {
    hide: { opacity: 0, y: -150 },
    show: { opacity: 1, y: 0, transition: { duration: 1.75, delay: 0.5 } },
  },
  calculate: {
    hide: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.75, delay: 0.15 },
    },
  },
  head: {
    hide: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5 },
    },
  },
}
