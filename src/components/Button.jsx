import React from 'react'

export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  const base = 'btn'
  const vclass = variant === 'secondary' ? 'btn--secondary' : 'btn--primary'
  return (
    <button type={type} className={[base, vclass, className].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
