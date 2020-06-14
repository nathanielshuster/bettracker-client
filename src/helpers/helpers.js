export const getAwayTeam = (teams, homeTeam) => {
  let homeIndex = teams.indexOf(homeTeam)
  if (homeIndex === 0) {
    return teams[1]
  } else {
    return teams[0]
  }
}

export const isEvent = (userEvents, odd) => {
  const homeMatches = userEvents.filter(event => event.home_team === odd.home_team)
  return homeMatches.some( match => match.unix_time === odd.commence_time)
}

//DISPLAY
export const dateConverter = (unix) => {
  let a = new Date(unix * 1000);
  let month = a.getMonth() + 1;
  let date = a.getDate();
  let year = a.getFullYear().toString().slice(0,2)
  let time = month + '/' + date + '/' + year;
  return time;
}

export const timeConverter = (unix) => {
  let a = new Date(unix * 1000);
  let hour = a.getHours();
  let formatHour = hour
  let minute = "0" + a.getMinutes();
  let ampm = 'AM'

  if (formatHour > 12) {
    formatHour = formatHour - 12;
    ampm = 'PM'
  } else if (formatHour === 12) {
    formatHour = 12;
    ampm = 'PM'
  } else if (formatHour === 0) {
    formatHour = 12;
    ampm = 'AM'
  }

  let time = formatHour + ':' + minute.substr(-2) + ampm
  return time;
}

export const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export const convertHigh = (high) => {
  let num = high - 1
  let result = round(num * 100)
  return '+' + result
}

export const convertLow = (low) => {
  let num = 1 - low
  let result = round(100 / num)
  return result
}

export const formatLines = (homeLine, awayLine) => {
  if (awayLine > homeLine) {
    return convertHigh(awayLine) + ' ' + convertLow(homeLine)
  } else {
    return convertLow(awayLine) + ' ' + convertHigh(homeLine)
  }
}

//SANITIZE
export const getAwayLine = (teams, homeTeam, lines) => {
  let homeIndex = teams.indexOf(homeTeam)
  if (homeIndex === 0) {
    return lines[1]
  } else {
    return lines[0]
  }
}

export const getHomeLine = (teams, homeTeam, lines) => {
  let homeIndex = teams.indexOf(homeTeam)
  if (homeIndex === 0) {
    return lines[0]
  } else {
    return lines[1]
  }
}

export const sanitizeSites = (sites, teams, homeTeam) => {
  const result = []
  sites.forEach((site) => {
    let siteObj = {}
    siteObj.site_name = site.site_key
    siteObj.site_nice = site.site_nice
    siteObj.home_line = getHomeLine(teams, homeTeam, site.odds.h2h)
    siteObj.away_line = getAwayLine(teams, homeTeam, site.odds.h2h)
    result.push(siteObj)
  })
  return result
}
