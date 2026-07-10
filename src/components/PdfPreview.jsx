import { useEffect, useState } from 'react'

function PdfPreview({ fileUrl, fileName = 'resume.pdf', triggerLabel = 'View Resume', open, onClose }) {
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = isControlled ? open : internalOpen
  const closeOverlay = isControlled ? onClose : () => setInternalOpen(false)

  // Only manage scroll-lock / Escape ourselves when self-contained.
  // In controlled mode the parent already owns this (see App.jsx).
  useEffect(() => {
    if (isControlled || !isOpen) return undefined

    document.body.classList.add('resume-open')
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setInternalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('resume-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isControlled, isOpen])

  return (
    <>
      {!isControlled && (
        <button type="button" className="btn-resume" onClick={() => setInternalOpen(true)}>
          {triggerLabel}
        </button>
      )}

      {isOpen && (
        <div
          className="pdf-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${fileName} preview`}
        >
          <div className="pdf-actions">
            <span className="pdf-filename">{fileName}</span>

            <div className="pdf-actions-buttons">
              <button type="button" className="resume-action secondary" onClick={closeOverlay}>
                Close
              </button>
            </div>
          </div>

          <div className="pdf-frame-shell">
            <iframe src={fileUrl} title={fileName} className="pdf-frame" />
          </div>
        </div>
      )}
    </>
  )
}

export default PdfPreview