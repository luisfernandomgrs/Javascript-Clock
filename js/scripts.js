const clock = {

    deg : 6,
    hr : document.querySelector('#hr'),
    mn : document.querySelector('#mn'),
    sc : document.querySelector('#sc'),

    setCurrentTime() 
    {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * clock.deg;
        let ss = day.getSeconds() * clock.deg;

        clock.hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
        clock.mn.style.transform = `rotateZ(${mm}deg)`;
        clock.sc.style.transform = `rotateZ(${ss}deg)`;
    },
}