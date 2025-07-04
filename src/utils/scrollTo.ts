export function scrollToAndClose(
    href: string,
    onClose: () => void,
    options: ScrollIntoViewOptions = { behavior: "smooth" }
  ) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView(options);
    setTimeout(onClose, 100);
  }