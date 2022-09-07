export const startMiningvariant = {
  left: {
    hide: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, delay: 1.15, ease: "easeInOut" },
    },
  },
  right: {
    hide: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.75, delay: 1.75, ease: "easeInOut" },
    },
  },

  fade: {
    hide: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.75, ease: "easeInOut" },
    },
  },
}
