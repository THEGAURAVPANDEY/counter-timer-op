const dayselement = document.querySelector(".days");
const hourselement = document.querySelector(".hours");
const minuteelement = document.querySelector(".minutes");
const secondselement = document.querySelector(".seconds");
const h1 = document.querySelector("h1");
const countertimer = document.querySelector(".countertimer");

// calculation part
const second = 1000,
  minute = 60 * second,
  hours = 60 * minute,
  day = 24 * hours;

const timerfunction = () => {
  let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear();
  const entereddaY = prompt("enter day").padStart(2, "0");
  const enteredmonth = prompt("enter month").padStart(2, "0");

  now = `${mm}/${dd}/${yyyy}`;

  let targetdate = `${enteredmonth}/${entereddaY}/${yyyy}`;

  if (now > targetdate) {
    targetdate = `${enteredmonth}/${entereddaY}/${yyyy + 1}`;
  }

  const intervalId = setInterval(() => {
    const timer = new Date(targetdate).getTime();

    const today = new Date().getTime();

    const difference = timer - today;
    const leftday = Math.floor(difference / day);
    const lefthours = Math.floor((difference % day) / hours);
    const leftminutes = Math.floor((difference % hours) / minute);
    const leftseconds = Math.floor((difference % minute) / second);

    dayselement.innerText = leftday;
    hourselement.innerText = lefthours;
    minuteelement.innerText = leftminutes;
    secondselement.innerText = leftseconds;
    if (difference < 0) {
      countertimer.style.display = "none";
      h1.innerText = "time's up !!!!";
      clearInterval(intervalId);
    }
  }, 1000);
};
timerfunction();
