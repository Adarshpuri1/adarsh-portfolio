import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    let mouseX = 0, mouseY = 0
    let outlineX = 0, outlineY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX - 4}px`
      dot.style.top = `${mouseY - 4}px`
    }

    const animate = () => {
      outlineX += (mouseX - outlineX - 16) * 0.15
      outlineY += (mouseY - outlineY - 16) * 0.15
      outline.style.left = `${outlineX}px`
      outline.style.top = `${outlineY}px`
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      outline.style.transform = 'scale(2)'
      outline.style.borderColor = 'rgba(99,102,241,1)'
      dot.style.transform = 'scale(0)'
    }

    const onMouseLeaveLink = () => {
      outline.style.transform = 'scale(1)'
      outline.style.borderColor = 'rgba(99,102,241,0.6)'
      dot.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMouseMove)
    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  )
}
