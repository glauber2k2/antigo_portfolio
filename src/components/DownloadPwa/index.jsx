'use client'

import { Download, DownloadSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'

function DownloadPWA() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault()
    setDeferredPrompt(e)
    setIsInstallable(true)
  }

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuário aceitou a instalação do PWA')
        } else {
          console.log('Usuário rejeitou a instalação do PWA')
        }

        setDeferredPrompt(null)
      })
    }
  }

  return (
    <div>
      {isInstallable && (
        <button onClick={handleInstallClick} className='flex items-center justify-center gap-1 border-none text-white font-medium text-base cursor-pointer'>
          <DownloadSimple className='w-6 h-6'/>
          Instalar</button>
      )}
    </div>
  )
}

export default DownloadPWA
