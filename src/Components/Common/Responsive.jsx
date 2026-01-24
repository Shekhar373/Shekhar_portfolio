useGSAP(() => {
    const mm = gsap.matchMedia();
  
    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {
  
      const { isDesktop, isMobile } = context.conditions;
  
      gsap.from(".title", {
        y: isDesktop ? 200 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".title",
          start: isDesktop ? "top 70%" : "top 85%",
          invalidateOnRefresh: true,
        }
      });
  
    });
  
    return () => mm.revert();
  }, []);