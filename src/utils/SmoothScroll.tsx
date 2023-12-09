function SmoothScroll(e: any) {
  e.preventDefault();

  const targetId = e.currentTarget?.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  const sections: any = {
    Home: targetElement?.offsetTop! - 100,
    Services: targetElement?.offsetTop! - 100,
  };

  if (targetElement) {
    const offsetTop = sections[targetId];

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
export { SmoothScroll };
