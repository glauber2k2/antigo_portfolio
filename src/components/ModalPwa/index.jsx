import { DeviceMobile } from 'phosphor-react'
import { useEffect, useState } from 'react'

function ModalPwa() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [hasShownModal, setHasShownModal] = useState(false)

  useEffect(() => {
    // Verifica se o modal já foi mostrado anteriormente
    const hasShownModalPreviously = localStorage.getItem('hasShownModal')
    if (!hasShownModalPreviously) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }

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
          console.log('Usuário recusou a instalação do PWA')
        }

        setDeferredPrompt(null)
        setHasShownModal(true)
        // Marca que o modal já foi mostrado para que ele não apareça novamente
        localStorage.setItem('hasShownModal', 'true')
      })
    }
  }

  const handleCancelClick = () => {
    setHasShownModal(true)
    // Marca que o modal já foi mostrado para que ele não apareça novamente
    localStorage.setItem('hasShownModal', 'true')
  }

  return (
    <div>
      {hasShownModal === false && isInstallable && (
        <div className='fixed inset-2 flex items-end sm:items-start justify-center z-50 text-purple-500'>
          <div className='bg-zinc-900 shadow-purple-900 sm:mt-4 w-screen flex flex-col sm:gap-4 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-md'>
            <p className='text-lg mb-4 flex items-center gap-2 font-bold'>
              <DeviceMobile className='w-12 h-12 sm:w-8 sm:h-8 -mt-4 sm:mt-0' />
              Instale nosso aplicativo para uma melhor experiência!
            </p>
            <div className='flex justify-end gap-2'>
              <button
                className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleInstallClick}
              >
                Instalar PWA
              </button>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleCancelClick}
              >
                Recusar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalPwa
