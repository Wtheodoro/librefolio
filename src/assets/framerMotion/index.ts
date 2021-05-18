export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },

  in: {
    opacity: 1,
    scale: 1
  },

  out: {
    opacity: 0,
    scale: 0.8
  }
}

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: .5
}

export const pageStyle = {
  position: "absolute"
}