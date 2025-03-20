"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface MousePosition {
  x: number
  y: number
}

interface UseMouseParallaxOptions {
  sensitivity?: number
}

export function useMouseParallax<T extends HTMLElement>(
  options: UseMouseParallaxOptions = {},
): [RefObject<T>, MousePosition] {
  const { sensitivity = 1 } = options
  const ref = useRef<T>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { width, height } = ref.current.getBoundingClientRect()

    // Calculate mouse position as percentage of container
    const x = (clientX / width) * 100
    const y = (clientY / height) * 100

    setMousePosition({ x, y })
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return [ref, mousePosition]
}

