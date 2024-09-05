const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const dailyTime = document.querySelectorAll('.daily-time')
const weeklyTime = document.querySelectorAll('.weekly-time')
const monthlyTime = document.querySelectorAll('.monthly-time')
const yesterday = document.querySelectorAll('.yesterday')
const lastWeek = document.querySelectorAll('.last-week')
const lastMonth = document.querySelectorAll('.last-month')

daily.addEventListener('click', () => {
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')

    dailyTime.forEach((time) => {
        time.classList.remove('hidden')
    })

    weeklyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    monthlyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    yesterday.forEach((previous) => {
        previous.classList.remove('hidden')
    })

    lastWeek.forEach((previous) => {
        previous.classList.add('hidden')
    })

    lastMonth.forEach((previous) => {
        previous.classList.add('hidden')
    })
})

weekly.addEventListener('click', () => {
    daily.classList.remove('active')
    weekly.classList.add('active')
    monthly.classList.remove('active')

    dailyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    weeklyTime.forEach((time) => {
        time.classList.remove('hidden')
    })

    monthlyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    yesterday.forEach((previous) => {
        previous.classList.add('hidden')
    })

    lastWeek.forEach((previous) => {
        previous.classList.remove('hidden')
    })

    lastMonth.forEach((previous) => {
        previous.classList.add('hidden')
    })
})

monthly.addEventListener('click', () => {
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.add('active')

    dailyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    weeklyTime.forEach((time) => {
        time.classList.add('hidden')
    })

    monthlyTime.forEach((time) => {
        time.classList.remove('hidden')
    })

    yesterday.forEach((previous) => {
        previous.classList.add('hidden')
    })

    lastWeek.forEach((previous) => {
        previous.classList.add('hidden')
    })

    lastMonth.forEach((previous) => {
        previous.classList.remove('hidden')
    })
})
