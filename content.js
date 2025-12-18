if (typeof window.nonLatinToLatinMap === "undefined") {
  window.nonLatinToLatinMap = {
    "А": "A",   "Б": "B",   "В": "V",   "Г": "G",   "Д": "D",   "Е": "E",   "Ё": "Yo",
    "Ж": "Zh",  "З": "Z",   "И": "I",   "Й": "Y",   "К": "K",   "Л": "L",   "М": "M",
    "Н": "N",   "О": "O",   "П": "P",   "Р": "R",   "С": "S",   "Т": "T",   "У": "U",
    "Ф": "F",   "Х": "Kh",  "Ц": "Ts",  "Ч": "Ch",  "Ш": "Sh",  "Щ": "Shch", "Ъ": "",
    "Ы": "Y",   "Ь": "",    "Э": "E",   "Ю": "Yu",  "Я": "Ya",
    "а": "a",   "б": "b",   "в": "v",   "г": "g",   "д": "d",   "е": "e",   "ё": "yo",
    "ж": "zh",  "з": "z",   "и": "i",   "й": "y",   "к": "k",   "л": "l",   "м": "m",
    "н": "n",   "о": "o",   "п": "p",   "р": "r",   "с": "s",   "т": "t",   "у": "u",
    "ф": "f",   "х": "kh",  "ц": "ts",  "ч": "ch",  "ш": "sh",  "щ": "shch", "ъ": "",
    "ы": "y",   "ь": "",    "э": "e",   "ю": "yu",  "я": "ya",
    "Ґ": "G",   "ґ": "g",   "Є": "Ye",  "є": "ye",  "І": "I",   "і": "i",   "Ї": "Yi",
    "ї": "yi",  "Ў": "U",   "ў": "u",
    "Α": "A",   "Β": "B",   "Γ": "G",   "Δ": "D",   "Ε": "E",   "Ζ": "Z",   "Η": "E",
    "Θ": "Th",  "Ι": "I",   "Κ": "K",   "Λ": "L",   "Μ": "M",   "Ν": "N",   "Ξ": "X",
    "Ο": "O",   "Π": "P",   "Ρ": "R",   "Σ": "S",   "Τ": "T",   "Υ": "Y",   "Φ": "F",
    "Χ": "Ch",  "Ψ": "Ps",  "Ω": "O",
    "α": "a",   "β": "b",   "γ": "g",   "δ": "d",   "ε": "e",   "ζ": "z",   "η": "e",
    "θ": "th",  "ι": "i",   "κ": "k",   "λ": "l",   "μ": "m",   "ν": "n",   "ξ": "x",
    "ο": "o",   "π": "p",   "ρ": "r",   "σ": "s",   "ς": "s",   "τ": "t",   "υ": "y",
    "φ": "f",   "χ": "ch",  "ψ": "ps",  "ω": "o",
    "א": "a",   "ב": "b",   "ג": "g",   "ד": "d",   "ה": "h",   "ו": "v",   "ז": "z",
    "ח": "kh",  "ט": "t",   "י": "y",   "כ": "k",   "ך": "k",   "ל": "l",   "מ": "m",
    "ם": "m",   "נ": "n",   "ן": "n",   "ס": "s",   "ע": "a",   "פ": "p",   "ף": "p",
    "צ": "tz",  "ץ": "tz",  "ק": "k",   "ר": "r",   "ש": "sh",  "ת": "t",
    "ְ": "", "ֱ": "", "ֲ": "", "ֳ": "", "ִ": "", "ֵ": "", "ֶ": "", "ַ": "",
    "ָ": "", "ֹ": "", "ֻ": "", "ּ": "", "ֽ": "",
    "ا": "a",   "أ": "a",   "إ": "i",   "آ": "aa",  "ب": "b",   "ت": "t",   "ث": "th",
    "ج": "j",   "ح": "h",   "خ": "kh",  "د": "d",   "ذ": "dh",  "ر": "r",   "ز": "z",
    "س": "s",   "ش": "sh",  "ص": "s",   "ض": "d",   "ط": "t",   "ظ": "z",   "ع": "a",
    "غ": "gh",  "ف": "f",   "ق": "q",   "ك": "k",   "ل": "l",   "م": "m",   "ن": "n",
    "ه": "h",   "و": "w",   "ي": "y",   "ى": "a",   "ء": "'",   "ئ": "'",   "ؤ": "'",
    "ة": "h",
    "َ": "", "ً": "", "ُ": "", "ٌ": "", "ِ": "", "ٍ": "", "ْ": "", "ّ": "",
    "Ա": "A",   "Բ": "B",   "Գ": "G",   "Դ": "D",   "Ե": "Ye",  "Զ": "Z",   "Է": "E",
    "Ը": "E",   "Թ": "T",   "Ժ": "Zh",  "Ի": "I",   "Լ": "L",   "Խ": "Kh",  "Ծ": "Ts",
    "Կ": "K",   "Հ": "H",   "Ձ": "Dz",  "Ղ": "Gh",  "Ճ": "Ch",  "Մ": "M",   "Յ": "Y",
    "Ն": "N",   "Շ": "Sh",  "Ո": "O",   "Չ": "Ch",  "Պ": "P",   "Ջ": "J",   "Ռ": "R",
    "Ս": "S",   "Վ": "V",   "Տ": "T",   "Ր": "R",   "Ց": "Ts",  "Ւ": "U",   "Փ": "P",
    "Ք": "Q",   "Օ": "O",   "Ֆ": "F",
    "ա": "a",   "բ": "b",   "գ": "g",   "դ": "d",   "ե": "ye",  "զ": "z",   "է": "e",
    "ը": "e",   "թ": "t",   "ժ": "zh",  "ի": "i",   "լ": "l",   "խ": "kh",  "ծ": "ts",
    "կ": "k",   "հ": "h",   "ձ": "dz",  "ղ": "gh",  "ճ": "ch",  "մ": "m",   "յ": "y",
    "ն": "n",   "շ": "sh",  "ո": "o",   "չ": "ch",  "պ": "p",   "ջ": "j",   "ռ": "r",
    "ս": "s",   "վ": "v",   "տ": "t",   "ր": "r",   "ց": "ts",  "ւ": "u",   "փ": "p",
    "ք": "q",   "օ": "o",   "ֆ": "f"
  }
}
function transliterateNonLatin(text) {
  return Array.from(text).map(char => {
    if (window.nonLatinToLatinMap.hasOwnProperty(char)) {
      return window.nonLatinToLatinMap[char]
    }
    return char
  }).join("")
}
function sleepRandom(minMs, maxMs) {
  const delta = maxMs - minMs
  const rnd = Math.floor(Math.random() * (delta + 1)) + minMs
  return new Promise(resolve => setTimeout(resolve, rnd))
}
async function parseCurrentPage(postfix, delimiter, emailSettings) {
  const results = document.querySelectorAll('div[data-view-name="people-search-result"]')
  const users = []
  results.forEach(result => {
    const titleLink = result.querySelector('a[data-view-name="search-result-lockup-title"]')
    if (!titleLink) return
    const fullNameRaw = titleLink.textContent.trim()
    const fullName = transliterateNonLatin(fullNameRaw)
    let link = titleLink.getAttribute("data-original-url") || titleLink.href
    if (link) {
      link = link.split("?")[0]
    }
    const allParagraphs = Array.from(result.querySelectorAll("p"))
    let info = ""
    let geoloc = ""
    let current = ""
    const contentParagraphs = allParagraphs.filter(p => {
      const text = p.innerText.trim()
      if (p.querySelector('a[data-view-name="search-result-lockup-title"]')) return false
      if (!text || text.match(/^[•\s]*\d(st|nd|rd|th)\+?$/)) return false
      return true
    })
    contentParagraphs.forEach((p, index) => {
      const text = p.innerText.trim().replace(/\n+/g, "; ").replace(/\s+/g, " ").replace(/;\s+;/g, ";").trim()
      if (!text) return
      if (text.startsWith("Current:") || text.startsWith("Past:")) {
        current = text
      }
      else if (index === 0) {
        info = text
      }
      else if (index === 1 && !text.startsWith("Current:") && !text.startsWith("Past:")) {
        geoloc = text
      }
    })
    const words = fullName.split(" ")
    let email = ""
    let cleanPostfix = postfix ? postfix.replace(/^@/, "") : "example.com"
    
    if (words.length >= 2) {
      let firstName = words[0]
      let lastName = words[words.length - 1]
      
      if (emailSettings) {
        const firstNameChars = typeof emailSettings.firstNameChars === 'number' ? emailSettings.firstNameChars : 1
        const lastNameChars = typeof emailSettings.lastNameChars === 'number' ? emailSettings.lastNameChars : 0
        const swapNames = emailSettings.swapNames === true
        
        if (firstNameChars > 0) {
          firstName = firstName.substring(0, firstNameChars)
        }
        
        if (lastNameChars > 0) {
          lastName = lastName.substring(0, lastNameChars)
        }
        
        if (swapNames) {
          email = `${lastName}${delimiter}${firstName}@${cleanPostfix}`.toLowerCase()
        } else {
          email = `${firstName}${delimiter}${lastName}@${cleanPostfix}`.toLowerCase()
        }
      } else {
        email = `${firstName[0]}${delimiter}${lastName}@${cleanPostfix}`.toLowerCase()
      }
    } else if (words.length === 1) {
      email = `${words[0]}@${cleanPostfix}`.toLowerCase()
    }
    users.push({ email, name: fullName, link, info, geoloc, current })
  })
  return users
}
function toTSV(allUsers, postfix, delimiter) {
  const header = ["Email", "Full Name", "Location", "Current Job", "Info", "Link"]
  const rows = [header]
  allUsers.forEach(u => {
   
    rows.push([u.email, u.name, u.geoloc, u.current, u.info, u.link])
  })
  return rows.map(r => r.join("\t")).join("\n")
}
function triggerDownload(tsvContent, filename) {
  const blob = new Blob([new TextEncoder().encode(tsvContent)], {
    type: "text/tab-separated-values;charset=utf-8"
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
if (typeof window.leakedInParseInProgress === "undefined") {
  window.leakedInParseInProgress = false
}
async function waitForSearchResults() {
  for (let i = 0; i < 20; i++) {
    const results = document.querySelectorAll('div[data-view-name="people-search-result"]')
    if (results.length > 0) {
      await new Promise(r => setTimeout(r, 500))
      return true
    }
    await new Promise(r => setTimeout(r, 300))
  }
  return false
}
async function clickPageButton(pageNum) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const selector = `button[aria-label="Page ${pageNum}"]:not([disabled])`
    const btn = document.querySelector(selector)
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "center" })
      btn.click()
      await new Promise(r => setTimeout(r, 1000))
      await waitForSearchResults()
      await new Promise(r => setTimeout(r, 500))
      return true
    }
    window.scrollBy(0, window.innerHeight)
    await sleepRandom(800, 1500)
  }
  return false
}
async function leakedInParseListener(request, sender, sendResponse) {
  if (request.action === "startParse") {
    if (window.leakedInParseInProgress) return
    window.leakedInParseInProgress = true
    const { from, to, postfix, delimiter } = request
    const firstNameChars = isNaN(request.firstNameChars) ? 1 : request.firstNameChars
    const lastNameChars = isNaN(request.lastNameChars) ? 0 : request.lastNameChars
    const swapNames = request.swapNames === true
    const emailSettings = { firstNameChars, lastNameChars, swapNames }
    let allUsers = []
    let totalPeopleCount = 0
    let pagesDone = 0
    if (from > 1) {
      await clickPageButton(from)
    } else {
      await waitForSearchResults()
      await new Promise(r => setTimeout(r, 500))
    }
    let pageNum = from
    while (pageNum <= to) {
      window.scrollTo(0, 0)
      await new Promise(r => setTimeout(r, 300))
      window.scrollTo(0, document.body.scrollHeight)
      await new Promise(r => setTimeout(r, 500))
      window.scrollTo(0, 0)
      await new Promise(r => setTimeout(r, 300))
      const users = await parseCurrentPage(postfix, delimiter, emailSettings)
      allUsers = allUsers.concat(users)
      totalPeopleCount += users.length
      pagesDone++
      chrome.runtime.sendMessage({ action: "updateProgress", pagesDone }).catch(() => {})
      chrome.runtime.sendMessage({ action: "updatePeopleCount", peopleCount: totalPeopleCount }).catch(() => {})
      if (pageNum === to) break
      const nextPage = pageNum + 1
      const found = await clickPageButton(nextPage)
      if (!found) break
      pageNum++
    }
    const tsv = toTSV(allUsers, postfix, delimiter)
    const date = new Date().toISOString().split("T")[0]
    const filename = `leakedin-${postfix}-${allUsers.length}-${date}.tsv`
    try {
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)
      const keyword = params.get("keywords") || ""
      let companyIds = []
      let companyNamesArray = []
      const companyParam = params.get("currentCompany")
      if (companyParam) {
        try {
          companyIds = JSON.parse(companyParam)
        } catch (e) {
          companyIds = companyParam.replace(/\[|\]|"/g, "").split(",").filter(x => x)
        }
      }
      let needToCloseDropdown = false
      const allFilterButtons = document.querySelectorAll('div[data-view-name="search-filter-top-bar-select"]')
      for (const btn of allFilterButtons) {
        const label = btn.querySelector("label")
        if (label && label.innerText.includes("Current companies")) {
          const checkbox = btn.querySelector('input[type="checkbox"]')
          if (checkbox && checkbox.checked && btn.getAttribute("aria-expanded") === "false") {
            btn.click()
            needToCloseDropdown = true
            await new Promise(r => setTimeout(r, 800))
            break
          }
        }
      }
      const checkedCompanyItems = document.querySelectorAll('div[data-view-name="search-filter-top-bar-menu-item"][aria-checked="true"]')
      checkedCompanyItems.forEach(item => {
        const paragraphs = item.querySelectorAll("p")
        paragraphs.forEach(p => {
          const text = p.innerText.trim()
          if (text && text.length > 1 && text.length < 100 && !text.match(/^\d+$/) && !text.includes('•') && !companyNamesArray.includes(text)) {
            companyNamesArray.push(text)
          }
        })
      })
      if (needToCloseDropdown) {
        for (const btn of allFilterButtons) {
          const label = btn.querySelector("label")
          if (label && label.innerText.includes("Current companies") && btn.getAttribute("aria-expanded") === "true") {
            btn.click()
            await new Promise(r => setTimeout(r, 200))
            break
          }
        }
      }
      let companyNamesString = ""
      if (companyNamesArray.length > 0 && companyIds.length > 0) {
        companyNamesString = `${companyNamesArray.join(", ")} [${companyIds.join(", ")}]`
      } else if (companyNamesArray.length > 0) {
        companyNamesString = companyNamesArray.join(", ")
      } else if (companyIds.length > 0) {
        companyNamesString = `[${companyIds.join(", ")}]`
      }
      chrome.runtime.sendMessage({
        action: "saveSearchHistory",
        data: {
          date: new Date().toISOString(),
          keyword: keyword || "",
          companyIds: companyIds || [],
          companyNames: companyNamesString,
          employees: allUsers.length,
          entries: allUsers,
          postfix: postfix
        }
      }).catch(() => {})
    } catch (e) {}
    chrome.runtime.sendMessage({ action: "openHistory" }).catch(() => {})
    chrome.runtime.sendMessage({ action: "leakedinDone" }).catch(() => {})
    window.leakedInParseInProgress = false
  }
}
if (window.leakedInListenerAdded) {
  chrome.runtime.onMessage.removeListener(window.leakedInParseListenerRef)
}
chrome.runtime.onMessage.addListener(leakedInParseListener)
window.leakedInParseListenerRef = leakedInParseListener
window.leakedInListenerAdded = true
