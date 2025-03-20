"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterTextProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterPhrase?: number
  delayAfterDelete?: number
  className?: string
}

export default function TypewriterText({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterPhrase = 2000,
  delayAfterDelete = 500,
  className = "",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  // Use a ref to track if component is mounted
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (isWaiting) return

    const currentPhrase = phrases[currentPhraseIndex]

    const timer = setTimeout(
      () => {
        if (!isMounted.current) return

        if (!isDeleting) {
          // Typing effect
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))

          // If we've typed the full phrase
          if (displayText.length === currentPhrase.length) {
            setIsWaiting(true)
            setTimeout(() => {
              if (!isMounted.current) return
              setIsWaiting(false)
              setIsDeleting(true)
            }, delayAfterPhrase)
          }
        } else {
          // Deleting effect
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))

          // If we've deleted the full phrase
          if (displayText.length === 0) {
            setIsDeleting(false)
            setIsWaiting(true)
            setTimeout(() => {
              if (!isMounted.current) return
              setIsWaiting(false)
              setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
            }, delayAfterDelete)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [
    displayText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
    delayAfterDelete,
    isWaiting,
  ])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="whitespace-nowrap">{displayText}</span>
    </span>
  )
}

