window.onload = () => {
    
    const scrollContainerDriver = document.querySelector('.__DriversContainer-Content--Cards');

    scrollContainerDriver.addEventListener('wheel', function (e) {
        e.wheelDelta > 0 ? scrollContainerDriver.scrollLeft -= 100 : scrollContainerDriver.scrollLeft += 100;
    }, { passive: true });

}