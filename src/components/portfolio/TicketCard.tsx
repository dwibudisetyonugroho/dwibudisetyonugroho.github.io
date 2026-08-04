'use client'

import React from 'react'
import { TicketCardEducation, TicketCardEducationProps } from './TicketCardEducation'

export type TicketCardProps = TicketCardEducationProps

export function TicketCard({
  className = "",
  title = "Explore Profile",
  tags = ["data", "analyst"],
  description = "",
  issuer = "",
  logoSrc = null,
  certificateText = "",
  verifyText = "",
  onClick,
  riseOnHover = true,
  maxTilt = 3,
  hoverSpringConfig = { stiffness: 120, damping: 20 },
  showBottomNotch = false,
  ...restProps
}: TicketCardProps) {
  return (
    <TicketCardEducation
      className={className}
      title={title}
      tags={tags}
      description={description}
      issuer={issuer}
      logoSrc={logoSrc}
      certificateText={certificateText}
      verifyText={verifyText}
      onClick={onClick}
      riseOnHover={riseOnHover}
      maxTilt={maxTilt}
      hoverSpringConfig={hoverSpringConfig}
      showBottomNotch={showBottomNotch}
      {...restProps}
    />
  )
}
