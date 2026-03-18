import { Variants, Transition } from 'framer-motion'

// macOS-style easing curve (similar to ease-in-out but more refined)
export const macOSEase = [0.4, 0.0, 0.2, 1] as const

// Standard smooth transition
export const EASE = [0.2, 0, 0.2, 1] as const

export const smoothTransition: Transition = {
    duration: 0.3,
    ease: EASE
} as const

export const macOSTransition: Transition = {
    duration: 0.4,
    ease: macOSEase
} as const

// Dropdown animation variants
export const dropdownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        transition: smoothTransition
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: smoothTransition
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        transition: smoothTransition
    }
}

// Slide in from top variants
export const slideInTopVariants: Variants = {
    hidden: {
        y: -20,
        opacity: 0,
        transition: smoothTransition
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: smoothTransition
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: smoothTransition
    }
}

// Fade in with scale variants
export const fadeInScaleVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        transition: smoothTransition
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: smoothTransition
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.2, ease: "easeIn" }
    }
}

// macOS-style fade in from bottom (for scroll-triggered content)
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        transition: macOSTransition
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: macOSTransition
    }
}

// Card hover effect (macOS Dock-style)
// Note: boxShadow is handled via CSS transitions for smoother animation
export const cardHoverVariants: Variants = {
    initial: {
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: macOSEase
        }
    },
    hover: {
        y: 0,
        scale: 1.01,
        transition: {
            duration: 0.4,
            ease: macOSEase
        }
    }
}

// Stagger configuration for lists/grids
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: macOSTransition
    }
}

// Button press effect
export const buttonPressVariants: Variants = {
    initial: { scale: 1 },
    tap: {
        scale: 0.98,
        transition: { duration: 0.1, ease: macOSEase }
    }
}

// Spring transition for macOS-style fluidity
export const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30
} as const

// Organic unfolding dropdown variants
export const organicDropdownVariants: Variants = {
    hidden: {
        opacity: 0,
        scaleY: 0,
        scaleX: 0.95,
        transformOrigin: "top", // Ensure it grows from the top
        transition: {
            duration: 0.2,
            ease: macOSEase
        }
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8
        }
    },
    exit: {
        opacity: 0,
        scaleY: 0,
        scaleX: 0.95,
        transition: {
            duration: 0.2,
            ease: macOSEase
        }
    }
}
