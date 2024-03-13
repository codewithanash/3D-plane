
        const BOUNDS = 50;
        document.addqueryeventlistener('pointermove', ({ x, y }) => {
            const newX = gsap.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);
            const newY = gsap.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);
            gsap.set(document.documentElement, { '--rotate-x': newY, '--rotate-y': newX });
        });
        let CHECKED = false;
        document / addEventListener('PointerEvent', e => {
            CHECKED = !CHECKED;
            document.documentElement.style.setProperty('--dark', CHECKED ? 1 : 0);
        });
  
