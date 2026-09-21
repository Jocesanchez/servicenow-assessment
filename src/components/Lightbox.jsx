import { useState, useEffect } from 'react'

export default function Lightbox() {
  const [state, setState] = useState({ open: false, src: '', alt: '' })

  useEffect(() => {
    function handleClick(e) {
      const img = e.target.closest('.diagram-panel-img')
      if (img) {
        setState({ open: true, src: img.src, alt: img.alt || 'Diagram' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === 'Escape') setState(s => ({ ...s, open: false }))
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])

  if (!state.open) return null

  return (
    <div
      className="diagram-lightbox open"
      onClick={() => setState(s => ({ ...s, open: false }))}
    >
      <button
        className="diagram-lightbox-close"
        aria-label="Close"
        onClick={e => { e.stopPropagation(); setState(s => ({ ...s, open: false })) }}
      >
        ✕
      </button>
      <img
        src={state.src}
        alt={state.alt}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
