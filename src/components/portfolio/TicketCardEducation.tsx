'use client'

import React, { useRef, useId, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate, useSpring, animate } from 'framer-motion'
import { ChevronDown, BookOpen, FileText, Globe, CheckCircle2, ExternalLink } from 'lucide-react'

export interface TicketCardEducationProps {
  className?: string;
  title?: string;
  description?: string;
  tags?: string[];
  courses?: string[];
  courseCountText?: string;
  logoSrc?: string | null;
  logoAlt?: string;
  certificateText?: string;
  verifyText?: string;
  verifyColor?: string;
  verifyHoverColor?: string;
  onClick?: () => void;
  riseOnHover?: boolean;
  maxTilt?: number;
  hoverSpringConfig?: { stiffness?: number; damping?: number };
  officialUrl?: string;
  officialLogoSrc?: string | null;
  officialLogoAlt?: string;
  certificateUrl?: string;
  verificationUrl?: string;
  baseHeight?: number;
  // Enhanced Metadata & Thesis Project Props
  issuer?: string;
  date?: string;
  credentialId?: string;
  gpa?: string;
  projectTitle?: string;
  projectDetails?: string[];
  officialLogoStyle?: React.CSSProperties;
  headerLogoStyle?: React.CSSProperties;
  showBottomNotch?: boolean;
  hideSkillHeader?: boolean;
}

export function TicketCardEducation({
  className = "",
  title = "Education & Certification Track",
  description = "",
  tags = [],
  courses = [],
  courseCountText,
  logoSrc = "/logos/datacamp-sql-logo.png",
  logoAlt = "Logo",
  certificateText = "View Certificate",
  verifyText = "Verify Certificate",
  verifyColor = "#023047",
  verifyHoverColor = "#05608c",
  baseHeight,
  onClick,
  riseOnHover = true,
  maxTilt = 3,
  hoverSpringConfig = { stiffness: 120, damping: 20 },
  officialUrl,
  officialLogoSrc,
  officialLogoAlt,
  certificateUrl,
  verificationUrl,
  issuer,
  date,
  credentialId,
  gpa,
  projectTitle,
  projectDetails,
  officialLogoStyle,
  headerLogoStyle,
  showBottomNotch = true,
  hideSkillHeader = !showBottomNotch
}: TicketCardEducationProps) {
  // DOM element refs for dynamic scrollHeight and line-wrap measurement
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const curriculumListRef = useRef<HTMLDivElement>(null)
  const tagsListRef = useRef<HTMLDivElement>(null)

  const [measuredTitleHeight, setMeasuredTitleHeight] = useState(title.length > 48 ? 54 : 28)
  const [measuredDescHeight, setMeasuredDescHeight] = useState(87)
  const [measuredCurrHeight, setMeasuredCurrHeight] = useState(0)
  const [measuredTagsHeight, setMeasuredTagsHeight] = useState(23)
  const [hiddenTagsCount, setHiddenTagsCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const hasSubtitle = Boolean(issuer || date || gpa);
  const defaultHeaderBase = hasSubtitle ? 118 : 92;
  const titleLineExtra = Math.max(0, measuredTitleHeight - 28);
  const headerHeight = Math.max(defaultHeaderBase, defaultHeaderBase + titleLineExtra);

  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false)
  const [isTagsOpen, setIsTagsOpen] = useState(false)
  const [isHoverSupported, setIsHoverSupported] = useState(true)

  // Dynamically measure exact DOM heights of title, description, curriculum, and tags
  useEffect(() => {
    const updateHeights = () => {
      setIsMobile(window.innerWidth < 640)

      if (titleRef.current) {
        setMeasuredTitleHeight(titleRef.current.offsetHeight)
      }
      if (descriptionRef.current) {
        setMeasuredDescHeight(descriptionRef.current.scrollHeight)
      } else {
        setMeasuredDescHeight(0)
      }
      if (curriculumListRef.current) {
        setMeasuredCurrHeight(curriculumListRef.current.scrollHeight)
      }
      if (tagsListRef.current) {
        setMeasuredTagsHeight(tagsListRef.current.scrollHeight)
        const tagElements = Array.from(tagsListRef.current.children) as HTMLElement[]
        if (tagElements.length > 0) {
          const firstLineTop = tagElements[0].offsetTop
          const firstLineCount = tagElements.filter(el => el.offsetTop === firstLineTop).length
          setHiddenTagsCount(tagElements.length - firstLineCount)
        }
      }
    }

    updateHeights()
    window.addEventListener('resize', updateHeights)
    return () => window.removeEventListener('resize', updateHeights)
  }, [tags, courses, description, title, projectTitle, projectDetails])

  // Detect coarse pointer (mobile/touch devices without mouse hover)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(pointer: coarse)')
      setIsHoverSupported(!mediaQuery.matches)
      
      const handleMediaChange = (e: MediaQueryListEvent) => {
        setIsHoverSupported(!e.matches)
      }
      mediaQuery.addEventListener('change', handleMediaChange)
      return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  const clipId = useId()
  const curriculumId = `curriculum-${clipId}`
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const hasCurriculum = (courses && courses.length > 0) || Boolean(projectTitle && projectDetails && projectDetails.length > 0);
  const maxCurriculumHeight = 380;
  const tagsCollapsedHeight = 23;

  const cardRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Base fixed dimensions and dynamic container heights
  const accordionHeight = isCurriculumOpen ? Math.min(measuredCurrHeight, 380) : 0
  const tagsExpansionHeight = isTagsOpen ? Math.max(0, measuredTagsHeight - 23) : 0
  
  // Calculate thesis project container expansion height dynamically
  const thesisAccordionHeight = projectTitle && projectDetails && projectDetails.length > 0 ? 120 : 0
  
  const hasFooterActions = Boolean(certificateUrl || verificationUrl || officialUrl);
  const footerHeight = showBottomNotch ? 100 : (hasFooterActions ? 60 : 0);
  const hasDescription = Boolean(description && description.trim());
  const verticalPadding = isMobile ? 48 : 64; // 24px top + 24px bottom (mobile) / 32px top + 32px bottom (desktop)
  const gapSize = isMobile ? 12 : 16;

  // Calculate dynamic middle section height based on visible elements + exact outer padding + internal gaps
  let middleSectionHeight = verticalPadding;

  if (hasDescription) {
    middleSectionHeight += measuredDescHeight;
  }

  if (hasCurriculum) {
    if (hasDescription) middleSectionHeight += gapSize;
    middleSectionHeight += 44 + accordionHeight;
  }

  if (!hideSkillHeader) {
    if (hasDescription || hasCurriculum) middleSectionHeight += gapSize;
    middleSectionHeight += 14 + gapSize + tagsCollapsedHeight + tagsExpansionHeight;
  } else if (tags && tags.length > 0) {
    if (hasDescription || hasCurriculum) middleSectionHeight += gapSize;
    middleSectionHeight += (showBottomNotch || hasDescription ? tagsExpansionHeight : measuredTagsHeight);
  }

  const targetHeight = headerHeight + middleSectionHeight + footerHeight;
  
  // Base height override if explicitly passed as a prop for horizontal side-by-side alignment
  const calculatedBaseHeight = baseHeight || 0;
  const cardHeightRawValue = Math.max(calculatedBaseHeight, targetHeight);

  // Animated height state for smooth spring accordion transitions
  const [currentHeight, setCurrentHeight] = useState(cardHeightRawValue)

  useEffect(() => {
    const controls = animate(currentHeight, cardHeightRawValue, {
      type: 'spring',
      stiffness: 300,
      damping: 28,
      onUpdate: (latest) => setCurrentHeight(latest)
    })
    return () => controls.stop()
  }, [cardHeightRawValue])

  const H = currentHeight

  // Dynamic notch center calculations aligned precisely with header and footer dividers
  const topNotchCenter = headerHeight;
  const topNotchStart = topNotchCenter - 10;
  const topNotchEnd = topNotchCenter + 10;

  const bottomNotchCenter = H - 100;
  const bottomNotchStart = bottomNotchCenter - 10;
  const bottomNotchEnd = bottomNotchCenter + 10;

  const pathD = showBottomNotch
    ? `M 16 0 L 884 0 A 16 16 0 0 1 900 16 L 900 ${topNotchStart} C 890 ${topNotchStart}, 890 ${topNotchEnd}, 900 ${topNotchEnd} L 900 ${bottomNotchStart} C 890 ${bottomNotchStart}, 890 ${bottomNotchEnd}, 900 ${bottomNotchEnd} L 900 ${H - 16} A 16 16 0 0 1 884 ${H} L 16 ${H} A 16 16 0 0 1 0 ${H - 16} L 0 ${bottomNotchEnd} C 10 ${bottomNotchEnd}, 10 ${bottomNotchStart}, 0 ${bottomNotchStart} L 0 ${topNotchEnd} C 10 ${topNotchEnd}, 10 ${topNotchStart}, 0 ${topNotchStart} L 0 16 A 16 16 0 0 1 16 0 Z`
    : `M 16 0 L 884 0 A 16 16 0 0 1 900 16 L 900 ${topNotchStart} C 890 ${topNotchStart}, 890 ${topNotchEnd}, 900 ${topNotchEnd} L 900 ${H - 16} A 16 16 0 0 1 884 ${H} L 16 ${H} A 16 16 0 0 1 0 ${H - 16} L 0 ${topNotchEnd} C 10 ${topNotchEnd}, 10 ${topNotchStart}, 0 ${topNotchStart} L 0 16 A 16 16 0 0 1 16 0 Z`;

  const cornerArcY = (16 / H).toFixed(6)
  const topNotchStartY = (topNotchStart / H).toFixed(6)
  const topNotchEndY = (topNotchEnd / H).toFixed(6)
  const bottomNotchStartY = (bottomNotchStart / H).toFixed(6)
  const bottomNotchEndY = (bottomNotchEnd / H).toFixed(6)
  const bottomCornerArcStartY = ((H - 16) / H).toFixed(6)

  const clipPathD = showBottomNotch
    ? `M 0.017778 0 L 0.982222 0 A 0.017778 ${cornerArcY} 0 0 1 1 ${cornerArcY} L 1 ${topNotchStartY} C 0.988889 ${topNotchStartY}, 0.988889 ${topNotchEndY}, 1 ${topNotchEndY} L 1 ${bottomNotchStartY} C 0.988889 ${bottomNotchStartY}, 0.988889 ${bottomNotchEndY}, 1 ${bottomNotchEndY} L 1 ${bottomCornerArcStartY} A 0.017778 ${cornerArcY} 0 0 1 0.982222 1 L 0.017778 1 A 0.017778 ${cornerArcY} 0 0 1 0 ${bottomCornerArcStartY} L 0 ${bottomNotchEndY} C 0.011111 ${bottomNotchEndY}, 0.011111 ${bottomNotchStartY}, 0 ${bottomNotchStartY} L 0 ${topNotchEndY} C 0.011111 ${topNotchEndY}, 0.011111 ${topNotchStartY}, 0 ${topNotchStartY} L 0 ${cornerArcY} A 0.017778 ${cornerArcY} 0 0 1 0.017778 0 Z`
    : `M 0.017778 0 L 0.982222 0 A 0.017778 ${cornerArcY} 0 0 1 1 ${cornerArcY} L 1 ${topNotchStartY} C 0.988889 ${topNotchStartY}, 0.988889 ${topNotchEndY}, 1 ${topNotchEndY} L 1 ${bottomCornerArcStartY} A 0.017778 ${cornerArcY} 0 0 1 0.982222 1 L 0.017778 1 A 0.017778 ${cornerArcY} 0 0 1 0 ${bottomCornerArcStartY} L 0 ${topNotchEndY} C 0.011111 ${topNotchEndY}, 0.011111 ${topNotchStartY}, 0 ${topNotchStartY} L 0 ${cornerArcY} A 0.017778 ${cornerArcY} 0 0 1 0.017778 0 Z`;

  const xRaw = useMotionValue(0)
  const yRaw = useMotionValue(0)
  const x = useSpring(xRaw, { stiffness: 500, damping: 30 })
  const y = useSpring(yRaw, { stiffness: 500, damping: 30 })

  const tiltProgress = useMotionValue(0)
  const hoverProgress = useMotionValue(0)
  const hoverSpring = useSpring(hoverProgress, hoverSpringConfig)

  const baseRotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt])
  const baseRotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt])

  const rotateX = useTransform([baseRotateX, tiltProgress, hoverSpring], (vals: any[]) => vals[0] * vals[1] * vals[2]) as any
  const rotateY = useTransform([baseRotateY, tiltProgress, hoverSpring], (vals: any[]) => vals[0] * vals[1] * vals[2]) as any

  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareOpacity = useMotionValue(0)

  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowOpacity = useMotionValue(0)

  const cardY = useTransform(hoverSpring, [0, 1], [0, 0]);
  const liftZ = useTransform(hoverSpring, [0, 1], [0, 35]);

  const cardZ = useTransform([x, y, tiltProgress, liftZ], (vals: any[]) => {
    const [currX, currY, tp, lz] = vals
    const rx = currY * -2 * maxTilt * tp
    const ry = currX * 2 * maxTilt * tp
    const radX = (Math.abs(rx) * Math.PI) / 180
    const radY = (Math.abs(ry) * Math.PI) / 180
    const maxZ = Math.sin(radX) * 150 + Math.sin(radY) * 450
    return lz - (maxZ * 0.3)
  })

  const shadowZ = useTransform(hoverSpring, [0, 1], [-5, -150])

  const titleTransform = useTransform(hoverSpring, (val) => val === 0 ? "none" : `translateZ(${val * 10}px)`)
  const middleTransform = useTransform(hoverSpring, (val) => val === 0 ? "none" : `translateZ(${val * 6}px)`)
  const tagTransform = useTransform(hoverSpring, (val) => val === 0 ? "none" : `translateZ(${val * 2}px)`)
  const bottomTransform = useTransform(hoverSpring, (val) => val === 0 ? "none" : `translateZ(${val * 8}px)`)
  const barcodeTransform = useTransform(hoverSpring, (val) => val === 0 ? "none" : `translateZ(${val * 2}px)`)

  const handleMouseEnter = () => {
    if (!isHoverSupported) return
    xRaw.stop()
    yRaw.stop()
    tiltProgress.stop()

    if (riseOnHover) {
      hoverProgress.set(1)
    }
    animate(tiltProgress, 1, {
      type: 'spring',
      stiffness: 150,
      damping: 20
    })
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverSupported || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()

    const relativeX = (event.clientX - rect.left) / rect.width
    const relativeY = (event.clientY - rect.top) / rect.height

    xRaw.set(relativeX - 0.5)
    yRaw.set(relativeY - 0.5)

    glareX.set(relativeX * 100)
    glareY.set(relativeY * 100)
    glareOpacity.set(1)

    glowX.set(event.clientX - rect.left)
    glowY.set(event.clientY - rect.top)
    glowOpacity.set(1)
  }

  const handleMouseLeave = () => {
    if (!isHoverSupported) return
    animate(xRaw, 0, {
      type: 'spring',
      ...hoverSpringConfig
    })
    animate(yRaw, 0, {
      type: 'spring',
      ...hoverSpringConfig
    })
    glareOpacity.set(0)
    glowOpacity.set(0)
    
    if (riseOnHover) {
      hoverProgress.set(0)
      animate(tiltProgress, 0, {
        type: 'spring',
        ...hoverSpringConfig
      })
    } else {
      tiltProgress.set(0)
    }
  }

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${useTransform(glareOpacity, [0, 1], [0, 0.04])}), transparent 60%)`
  const glowBg = useMotionTemplate`radial-gradient(120px circle at ${glowX}px ${glowY}px, rgba(33, 158, 188, ${useTransform(glowOpacity, [0, 1], [0, 0.03])}), transparent 85%)`

  const shadowActiveProgress = useTransform([tiltProgress, hoverSpring], (vals: any[]) => vals[0] * vals[1])
  const shadowRotateX = useTransform([baseRotateX, shadowActiveProgress], (vals: any[]) => vals[0] * vals[1])
  const shadowRotateY = useTransform([baseRotateY, shadowActiveProgress], (vals: any[]) => vals[0] * vals[1])

  const aoX = useTransform([x, shadowActiveProgress], (vals: any[]) => 1 + (vals[0] * 1.5) * vals[1])
  const aoY = useTransform([hoverSpring, y, shadowActiveProgress], (vals: any[]) => {
    const [hp, ty, tp] = vals
    const liftOffset = (1 - hp) * 4 + hp * 6
    const tiltOffset = (ty * 1.5) * tp
    return liftOffset + tiltOffset
  })
  const aoBlur = useTransform(hoverSpring, [0, 1], [4, 7])
  const aoBlurFilter = useMotionTemplate`blur(${aoBlur}px)`
  const aoOpacity = useTransform(hoverSpring, [0, 1], [0.28, 0.14])
  const aoScale = useTransform(hoverSpring, [0, 1], [0.995, 1.002])
  const aoSkewX = useTransform([x, shadowActiveProgress], (vals: any[]) => (vals[0] * 1.5) * vals[1])
  const aoSkewY = useTransform([y, shadowActiveProgress], (vals: any[]) => (vals[0] * 0.75) * vals[1])

  const sharpX = useTransform([x, shadowActiveProgress, hoverSpring], (vals: any[]) => {
    const [currX, tp, hp] = vals
    const baseOffset = hp * 5
    return baseOffset - (currX * 12) * tp
  })
  const sharpY = useTransform([y, shadowActiveProgress, hoverSpring], (vals: any[]) => {
    const [currY, tp, hp] = vals
    const baseOffset = hp * 8
    return baseOffset - (currY * 20) * tp
  })
  const sharpBlur = useTransform(hoverSpring, [0, 1], [3, 9])
  const sharpBlurFilter = useMotionTemplate`blur(${sharpBlur}px)`
  const sharpOpacity = useTransform(hoverSpring, [0, 1], [0, 0.18])
  const sharpScale = useTransform(hoverSpring, [0, 1], [0.99, 1.005])
  const sharpSkewX = useTransform(shadowRotateX, (rx: any) => -rx * 0.2)

  const softX = useTransform([x, shadowActiveProgress, hoverSpring], (vals: any[]) => {
    const [currX, tp, hp] = vals
    const baseOffset = hp * 12
    return baseOffset + (currX * 12) * tp
  })
  const softY = useTransform([y, shadowActiveProgress, hoverSpring], (vals: any[]) => {
    const [currY, tp, hp] = vals
    const baseOffset = 6 + hp * 30
    return baseOffset + (currY * 12) * tp
  })
  const softBlur = useTransform(hoverSpring, [0, 1], [10, 45])
  const softBlurFilter = useMotionTemplate`blur(${softBlur}px)`
  const softOpacity = useTransform(hoverSpring, [0, 1], [0, 0.15])
  const softScale = useTransform(hoverSpring, [0, 1], [0.98, 1.03])
  const softSkewX = useTransform(shadowRotateX, (rx: any) => -rx * 0.45)
  const softSkewY = useTransform(shadowRotateY, (ry: any) => ry * 0.25)

  // JSON-LD Structured Data Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": title,
    "description": description,
    "credentialCategory": "Professional Certificate",
    "recognizedBy": {
      "@type": "Organization",
      "name": issuer || logoAlt || "Educational Institution"
    },
    "url": officialUrl || verificationUrl || certificateUrl
  }

  const effectiveCourseCountText = courseCountText || (courses.length > 0 ? `Course Curriculum (${courses.length} Courses)` : 'Course Curriculum');

  return (
    <div className="w-full flex justify-center select-text">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full"
        style={{ maxWidth: '900px', height: `${H}px`, perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d={clipPathD} />
            </clipPath>
          </defs>
        </svg>
        
        {/* Ambient Occlusion Shadow */}
        <motion.div
          style={{
            scale: aoScale,
            x: aoX,
            y: aoY,
            z: shadowZ,
            skewX: aoSkewX,
            skewY: aoSkewY,
            filter: aoBlurFilter,
            opacity: aoOpacity,
            willChange: 'transform'
          }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <svg
            className="w-full h-full"
            viewBox={`0 0 900 ${H}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d={pathD} fill="#1a1410" />
          </svg>
        </motion.div>

        {/* Sharp Shadow */}
        <motion.div
          style={{
            scale: sharpScale,
            x: sharpX,
            y: sharpY,
            z: shadowZ,
            skewX: sharpSkewX,
            skewY: shadowRotateY,
            filter: sharpBlurFilter,
            opacity: sharpOpacity,
            willChange: 'transform'
          }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <svg
            className="w-full h-full"
            viewBox={`0 0 900 ${H}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d={pathD} fill="#1a1410" />
          </svg>
        </motion.div>

        {/* Soft Shadow */}
        <motion.div
          style={{
            scale: softScale,
            x: softX,
            y: softY,
            z: shadowZ,
            skewX: softSkewX,
            skewY: softSkewY,
            filter: softBlurFilter,
            opacity: softOpacity,
            willChange: 'transform'
          }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <svg
            className="w-full h-full"
            viewBox={`0 0 900 ${H}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d={pathD} fill="#1a1410" />
          </svg>
        </motion.div>

        {/* Card Body */}
        <motion.div
          ref={cardRef}
          onClick={onClick}
          style={{
            y: cardY,
            z: cardZ,
            rotateX: isHoverSupported ? rotateX : 0,
            rotateY: isHoverSupported ? rotateY : 0,
            transformStyle: 'preserve-3d',
          }}
          className={`relative w-full h-full ${onClick ? 'cursor-pointer' : 'cursor-default'} z-10 ${className}`}
        >
          {/* Card Background Geometry */}
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            <svg
              className="w-full h-full"
              viewBox={`0 0 900 ${H}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d={pathD}
                fill="#FAF9F6"
                stroke="#E8E4DD"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1={headerHeight}
                x2="888"
                y2={headerHeight}
                stroke="#D0CBC2"
                strokeWidth="2"
                strokeDasharray="3 6"
              />
              {showBottomNotch && (
                <line
                  x1="12"
                  y1={H - 100}
                  x2="888"
                  y2={H - 100}
                  stroke="#D0CBC2"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                />
              )}
            </svg>
          </div>

          {/* Paper Texture Overlay */}
          <div
            className="absolute inset-0 bg-noise pointer-events-none opacity-[0.9] z-10 mix-blend-multiply overflow-hidden" 
            style={{ clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}
          />

          {/* Glare and Glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay overflow-hidden"
            style={{ 
              background: glareBg,
              clipPath: `url(#${clipId})`,
              WebkitClipPath: `url(#${clipId})`
            }}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 mix-blend-screen overflow-hidden"
            style={{ 
              background: glowBg,
              clipPath: `url(#${clipId})`,
              WebkitClipPath: `url(#${clipId})`
            }}
          />

          {/* Parallax Content Container */}
          <div className="absolute inset-0 z-40 flex flex-col" style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            
            {/* Top Title Section */}
            <motion.div 
              className="w-full flex items-center justify-between p-6 sm:p-8 relative"
              style={{ 
                height: `${headerHeight}px`,
                transform: titleTransform,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col flex-1 max-w-[75%] mr-4 justify-center">
                <h3 ref={titleRef} className="text-lg sm:text-xl md:text-2xl font-black text-neutral-800 tracking-tight leading-[1.15] uppercase antialiased">
                  {title}
                </h3>
                
                {/* Enhanced Issuer / Date / GPA Metadata Badges */}
                {(issuer || date || gpa) && (
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 sm:mt-2 font-mono text-[11px] text-neutral-500 font-bold uppercase tracking-wider">
                    {issuer && <span className="bg-[#E5E0D7]/60 text-neutral-700 px-1.5 py-0.5 rounded-xs">{issuer}</span>}
                    {gpa && <span className="bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/30 px-1.5 py-0.5 rounded-xs font-bold">GPA: {gpa}</span>}
                    {date && <span className="text-neutral-500">· {date}</span>}
                  </div>
                )}
              </div>

              {logoSrc && (
                <div 
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <img 
                    src={logoSrc} 
                    alt={logoAlt || 'Logo'} 
                    className="w-auto object-contain"
                    style={{ 
                      height: '34px',
                      ...headerLogoStyle,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  />
                </div>
              )}
            </motion.div>

            {/* Middle Section */}
            <motion.div 
              className={`w-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col ${hideSkillHeader ? 'justify-center' : 'gap-3 sm:gap-4'} overflow-hidden`}
              style={{ 
                height: `${H - headerHeight - footerHeight}px`,
                transform: middleTransform,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {hasDescription && (
                <div 
                  ref={descriptionRef}
                  className="text-neutral-600 font-normal antialiased text-justify shrink-0 space-y-1.5"
                  style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.45',
                    WebkitFontSmoothing: 'subpixel-antialiased',
                  }}
                >
                  {description.split('\n').map((line, i) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;
                    const isBullet = trimmed.startsWith('•');
                    const isHeaderBold = trimmed.startsWith('**') && trimmed.endsWith('**');

                    if (isHeaderBold) {
                      return (
                        <div key={i} className="font-bold text-neutral-800 mt-2 text-left">
                          {trimmed.slice(2, -2)}
                        </div>
                      );
                    }

                    if (isBullet) {
                      const bulletText = trimmed.replace(/^•\s*/, '');
                      return (
                        <div key={i} className="flex items-start gap-1.5 text-left pl-1">
                          <span className="text-[#FF5B00] font-bold mt-[1px]">•</span>
                          <div className="flex-1">
                            {bulletText.split('**').map((part, idx) =>
                              idx % 2 === 1 ? (
                                <strong key={idx} className="font-bold text-neutral-800">
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <p key={i}>
                        {line.split('**').map((part, idx) =>
                          idx % 2 === 1 ? (
                            <strong key={idx} className="font-bold text-neutral-800">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Course Curriculum / Thesis Details Collapsible */}
              {hasCurriculum && (
                <motion.div 
                  className="border border-[#E8E4DD] rounded-sm overflow-hidden w-full flex flex-col font-mono text-[13px] bg-white shadow-sm z-50 shrink-0"
                  style={{ transform: tagTransform }}
                >
                  <button
                    aria-expanded={isCurriculumOpen}
                    aria-controls={curriculumId}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsCurriculumOpen(!isCurriculumOpen);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5 sm:py-3 min-h-[44px] bg-[#F3F1EC] hover:bg-[#E5E0D7] text-neutral-800 font-bold item-hover select-text cursor-pointer text-left shadow-xs shrink-0"
                  >
                    <div className="flex items-center gap-2 text-neutral-700">
                      <BookOpen className="h-4 w-4 text-[#FF5B00] select-none" />
                      <span>{projectTitle || effectiveCourseCountText}</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 select-none ${isCurriculumOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  <motion.div
                    id={curriculumId}
                    role="region"
                    initial={{ height: 0 }}
                    animate={{ 
                      height: isCurriculumOpen ? Math.min(measuredCurrHeight, maxCurriculumHeight) : 0
                    }}
                    transition={
                      isCurriculumOpen
                        ? { type: 'spring', stiffness: 300, damping: 28 }
                        : { duration: 0.22, ease: [0.4, 0, 0.2, 1] }
                    }
                    className="overflow-hidden"
                  >
                    <div ref={curriculumListRef} className="px-4 pt-[14px] pb-[14px] bg-white border-t border-[#E8E4DD] select-text cursor-text max-h-[380px] overflow-y-auto ticket-scrollbar">
                      {courses.length > 0 ? (
                        <ul className="columns-2 gap-x-6 space-y-1.5 text-neutral-600 font-normal leading-tight text-[12px]">
                          {courses.map((course, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 break-inside-avoid">
                              <span className="text-[#FF5B00] font-bold">{idx + 1}.</span>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      ) : projectDetails && projectDetails.length > 0 ? (
                        <div className="space-y-2 text-neutral-600 font-normal leading-relaxed text-[12px]">
                          {projectDetails.map((detail, idx) => {
                            const trimmed = detail.trim();
                            const isSectionHeader = /^\d+\.\s+/.test(trimmed);
                            const isBullet = trimmed.startsWith('•');

                            if (isSectionHeader) {
                              return (
                                <div key={idx} className="font-bold text-neutral-800 pt-2 pb-0.5 border-b border-neutral-100 text-[12.5px]">
                                  {trimmed}
                                </div>
                              );
                            }
                            if (isBullet) {
                              return (
                                <div key={idx} className="flex items-start gap-1.5 pl-2 text-neutral-700">
                                  <span className="text-[#FF5B00] font-bold mt-[1px]">•</span>
                                  <span>{trimmed.replace(/^•\s*/, '')}</span>
                                </div>
                              );
                            }
                            return (
                              <p key={idx} className={idx === 0 ? "font-semibold text-neutral-700 italic" : "text-neutral-600"}>
                                {trimmed}
                              </p>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {!hideSkillHeader && (
                <div className="w-full flex items-center justify-between shrink-0">
                  <div 
                    className="font-mono font-bold text-neutral-600 uppercase tracking-widest text-left"
                    style={{ 
                      fontSize: '14px',
                      lineHeight: '1',
                      WebkitFontSmoothing: 'subpixel-antialiased',
                    }}
                  >
                    Technical Skill
                  </div>

                  {(hiddenTagsCount > 0 || isTagsOpen) && (
                    <button
                      aria-expanded={isTagsOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsTagsOpen(!isTagsOpen);
                      }}
                      className="px-2 py-0.5 font-mono font-bold uppercase tracking-wider text-[#FF5B00] bg-[#FF5B00]/10 border border-[#FF5B00]/30 hover:bg-[#FF5B00]/20 rounded-sm cursor-pointer item-hover antialiased select-none inline-flex items-center gap-1 shrink-0"
                      style={{ fontSize: '11px', lineHeight: '1.2' }}
                    >
                      <span>{isTagsOpen ? 'SHOW LESS' : `+${hiddenTagsCount} MORE`}</span>
                      <motion.span
                        animate={{ rotate: isTagsOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="inline-block text-[10px] leading-none"
                      >
                        ▾
                      </motion.span>
                    </button>
                  )}
                </div>
              )}
              
              <motion.div 
                initial={false}
                animate={{ height: hideSkillHeader ? 'auto' : (isTagsOpen ? measuredTagsHeight : tagsCollapsedHeight) }}
                transition={
                  (hideSkillHeader || isTagsOpen)
                    ? { type: 'spring', stiffness: 300, damping: 28 }
                    : { duration: 0.22, ease: [0.4, 0, 0.2, 1] }
                }
                className="overflow-hidden w-full shrink-0"
              >
                <div 
                  ref={tagsListRef}
                  className="flex flex-wrap gap-1.5"
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  {tags.map((tag) => (
                    <motion.span 
                      key={tag}
                      className="px-2.5 py-0.5 font-mono font-bold uppercase tracking-wider text-[#f5f5f5] bg-[#404040] rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:bg-[#5a5a5a] item-hover antialiased"
                      style={{ 
                        fontSize: '12px',
                        lineHeight: '1.2',
                        transform: tagTransform,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Actions Section */}
            {footerHeight > 0 && (
              <motion.div 
                className="w-full px-6 sm:px-8 flex items-center justify-between select-none"
                style={{ 
                  height: `${footerHeight}px`,
                  transform: bottomTransform,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
              <div 
                className="flex items-center gap-3"
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {certificateUrl && (
                  <motion.a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onMouseEnter={() => setHoveredButton('view')}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="px-3.5 py-2 text-[13px] font-mono font-bold uppercase tracking-wider text-[#f5f5f5] rounded-sm item-hover antialiased shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] cursor-pointer inline-flex items-center gap-1.5"
                    style={{
                      backgroundColor: hoveredButton === 'view' ? '#ff7c33' : '#FF5B00',
                      transform: barcodeTransform as any,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    title="View local certificate PDF document"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>{certificateText}</span>
                  </motion.a>
                )}

                {verificationUrl && (
                  <motion.a
                    href={verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onMouseEnter={() => setHoveredButton('verify')}
                    onMouseLeave={() => setHoveredButton(null)}
                    className="px-3.5 py-2 text-[13px] font-mono font-bold uppercase tracking-wider text-[#f5f5f5] rounded-sm item-hover antialiased shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] cursor-pointer inline-flex items-center gap-1.5"
                    style={{
                      backgroundColor: hoveredButton === 'verify' ? (verifyHoverColor || '#05608c') : (verifyColor || '#023047'),
                      transform: barcodeTransform as any,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    title="Verify credential on issuer portal"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{verifyText}</span>
                  </motion.a>
                )}
              </div>

              {/* Visit Official Page Link */}
              {officialUrl && (
                <motion.a
                  href={officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="group flex items-center gap-2 text-[13px] font-mono font-bold uppercase tracking-wider text-[#64748b] hover:text-[#023047] item-hover cursor-pointer antialiased"
                  style={{
                    transform: barcodeTransform as any,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  title="Open official course track webpage"
                >
                  <span className="hidden sm:inline">Visit Official Page</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                  {(officialLogoSrc || logoSrc) && (
                    <img 
                      src={(officialLogoSrc || logoSrc) as string} 
                      alt={officialLogoAlt || logoAlt || 'Logo'} 
                      className="h-[22px] w-auto object-contain opacity-70 group-hover:opacity-100 item-hover"
                      style={{
                        ...officialLogoStyle,
                        transform: 'translateZ(1px)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    />
                  )}
                </motion.a>
              )}
            </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
