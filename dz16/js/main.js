const selectAlarm = document.querySelectorAll('select');
const currentTime = document.querySelector('h1');
const setAlarmBtn = document.querySelector('button');
const settingAlarm = document.querySelector('.setting-alarm');
console.log(selectAlarm);

let alarmTime,
   ringtone = new Audio('./Radar-1.mp3'),
   alarmSet = false;

for (let i = 23; i >= 0; i-- ){
   i = i < 10 ? '0' + i : i;
   let option = `<option value="${i}">${i}</option>`;
   selectAlarm[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 59; i >= 0; i--){
   i = i < 10 ? '0' + i : i;
   let option = `<option value="${i}">${i}</option>`;
   selectAlarm[1].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 59; i >= 0; i--){
   i = i < 10 ? '0' + i : i;
   let option = `<option value="${i}">${i}</option>`;
   selectAlarm[2].firstElementChild.insertAdjacentHTML('afterend', option);
}
setInterval(() => {
   let timeClock = new Date(),
      h = timeClock.getHours(),
      m = timeClock.getMinutes(),
      s = timeClock.getSeconds()
   h = h === 0 ? h = 12 : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
   currentTime.innerHTML = `${h}:${m}:${s}`;
   if (alarmTime == `${h}:${m}:${s}`) {
      ringtone.play();
      ringtone.loop = true;
   }
   }
, 1000);

function setAlarm() {
   if (alarmSet) {
      alarmTime = '';
      ringtone.pause();
      setAlarmBtn.innerText = 'Enable alarm';
      return alarmSet = false;
   }

   let time = `${selectAlarm[0].value}:${selectAlarm[1].value}:${selectAlarm[2].value}`
   console.log(time);

   if (time.includes("hour") || time.includes("min") || time.includes("sec")) {
      return alert('Сheck the data');
   }

   alarmTime = time;
   setAlarmBtn.innerText = 'Turn off the alarm';
   alarmSet = true;

}
setAlarmBtn.addEventListener('click', setAlarm);

