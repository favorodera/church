export default function (element: HTMLElement, watcher: Ref<boolean>) {
    
  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        watcher.value = true
      }
      else {
        watcher.value = false
      }

    })
    
  })

  observer.observe(element)
}
