/**
 * Shared Ticket Card Vector & SVG Geometry Utilities
 */

export const DEFAULT_TICKET_PATH_D = "M 16 0 L 584 0 A 16 16 0 0 1 600 16 L 600 90 C 590 90, 590 110, 600 110 L 600 284 A 16 16 0 0 1 584 300 L 16 300 A 16 16 0 0 1 0 284 L 0 110 C 10 110, 10 90, 0 90 L 0 16 A 16 16 0 0 1 16 0 Z"

export const DEFAULT_TICKET_CLIP_PATH_OBJECT_BOUNDING_BOX = "M 0.026667 0 L 0.973333 0 A 0.026667 0.053333 0 0 1 1 0.053333 L 1 0.3 C 0.983333 0.3, 0.983333 0.366667, 1 0.366667 L 1 0.946667 A 0.026667 0.053333 0 0 1 0.973333 1 L 0.026667 1 A 0.026667 0.053333 0 0 1 0 0.946667 L 0 0.366667 C 0.016667 0.366667, 0.016667 0.3, 0 0.3 L 0 0.053333 A 0.026667 0.053333 0 0 1 0.026667 0 Z"

export function getDynamicTicketPathD(height: number, notchTop = 92, notchBottom = 100, radius = 16, width = 600) {
    return `M ${radius} 0 L ${width - radius} 0 A ${radius} ${radius} 0 0 1 ${width} ${radius} L ${width} ${notchTop} C ${width - 10} ${notchTop}, ${width - 10} ${notchBottom}, ${width} ${notchBottom} L ${width} ${height - notchBottom} C ${width - 10} ${height - notchBottom}, ${width - 10} ${height - notchTop}, ${width} ${height - notchTop} L ${width} ${height - radius} A ${radius} ${radius} 0 0 1 ${width - radius} ${height} L ${radius} ${height} A ${radius} ${radius} 0 0 1 0 ${height - radius} L 0 ${height - notchTop} C 10 ${height - notchTop}, 10 ${height - notchTop}, 0 ${height - notchBottom} L 0 ${notchBottom} C 10 ${notchBottom}, 10 ${notchTop}, 0 ${notchTop} L 0 ${radius} A ${radius} ${radius} 0 0 1 ${radius} 0 Z`
}
