// popup.js
document.addEventListener("DOMContentLoaded", () => {
  const parseButton = document.getElementById("btn-parse")
  const downloadButton = document.getElementById("btn-dn")
  const formContainer = document.getElementById("form-container")
  const loadingContainer = document.getElementById("loading-container")
  const progressText = document.getElementById("progress-text")
  const messageArea = document.getElementById("message-area")
  const activeReminder = document.getElementById("active-reminder")
  const historyBtn = document.getElementById("btn-history")
  const postfixInput = document.getElementById("search")
  const delimiterInput = document.getElementById("delimiter")
  const fromNumInput = document.getElementById("fromNum")
  const toNumInput = document.getElementById("toNum")
  const messageButtons = document.getElementById("message-buttons")
  const btnHistoryMessage = document.getElementById("btn-history-message")
  const btnGotoLinkedin = document.getElementById("goto-linkedin")
  const emailPreview = document.getElementById("email-preview-value")
  const firstNameCharsInput = document.getElementById("firstNameChars")
  const lastNameCharsInput = document.getElementById("lastNameChars")
  const swapNamesCheck = document.getElementById("swapNames")
  let totalPages = 1
  let totalPeople = 0
  let lastPagesDone = 0

  function setVisibility(el, show) {
    if (!el) return
    if (show) {
      el.classList.add("visible")
      el.classList.remove("hidden")
      el.style.display = ""
    } else {
      el.classList.remove("visible")
      el.classList.add("hidden")
      el.style.display = "none"
    }
  }

  function setParsingUIState(isParsing) {
    setVisibility(formContainer, !isParsing)
    setVisibility(historyBtn.closest(".form-group"), !isParsing)
    setVisibility(loadingContainer, isParsing)
    loadingContainer.style.display = isParsing ? "flex" : "none"
    setVisibility(activeReminder, isParsing)
    setVisibility(messageArea, false)
    messageButtons.style.display = "none"
    ;[postfixInput, delimiterInput, fromNumInput, toNumInput, parseButton, downloadButton, historyBtn].forEach(el => {
      if (el) el.disabled = isParsing
    })
  }

  function updateProgressBar(pagesDone) {
    const percent = Math.round((pagesDone / totalPages) * 100)
    document.getElementById("progress-bar-inner").style.width = percent + "%"
    progressText.textContent = `Pages collected: ${pagesDone} / ${totalPages} (${percent}%)`
    progressText.style.color = "#6b7280"
    progressText.style.fontSize = "13px"
  }

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0]
    const isPeopleSearch = tab && tab.url && tab.url.match(/linkedin\.com\/search\/results\/people\//)
    setVisibility(messageArea, !isPeopleSearch)
    setVisibility(formContainer, isPeopleSearch)
    setVisibility(historyBtn.closest(".form-group"), isPeopleSearch)
    setVisibility(loadingContainer, false)
    setVisibility(activeReminder, false)
    messageButtons.style.display = !isPeopleSearch ? "" : "none"
    if (!isPeopleSearch) {
      messageArea.innerHTML = `
        <div class="modern-warning">
          <div class="modern-warning-title">Please switch to a LinkedIn People Search tab.</div>
        </div>
      `
      document.body.style.height = "450px"
      document.documentElement.style.height = "450px"
      setTimeout(() => {
        if (btnGotoLinkedin) {
          btnGotoLinkedin.onclick = () => {
            window.open("https://www.linkedin.com/search/results/people/", "_blank")
          }
        }
        if (btnHistoryMessage) {
          btnHistoryMessage.onclick = () => {
            chrome.tabs.create({ url: chrome.runtime.getURL("history.html") })
          }
        }
      }, 0)
    } else {
      messageButtons.style.display = "none"
      document.body.style.height = "600px"
      document.documentElement.style.height = "600px"
      chrome.runtime.sendMessage({ action: "getParseState" }, response => {
        if (response && response.inProgress) {
          totalPages = response.totalPages
          lastPagesDone = response.pagesDone
          totalPeople = response.totalPeople
          setParsingUIState(true)
          updateProgressBar(lastPagesDone)
          document.getElementById("people-count").textContent = `People: ${totalPeople}`
        } else {
          setParsingUIState(false)
        }
      })
    }
  })

  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get({ 
      postfix: "example.com", 
      delimiter: "",
      firstNameChars: 1,
      lastNameChars: 0,
      swapNames: false
    }, result => {
      postfixInput.value = result.postfix
      delimiterInput.value = result.delimiter
      firstNameCharsInput.value = result.firstNameChars
      lastNameCharsInput.value = result.lastNameChars
      swapNamesCheck.checked = result.swapNames
      updateEmailPreview()
    })
  } else {
    postfixInput.value = "example.com"
    delimiterInput.value = ""
    firstNameCharsInput.value = 1
    lastNameCharsInput.value = 0
    swapNamesCheck.checked = false
  }

  postfixInput.addEventListener("input", e => {
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ postfix: e.target.value })
    }
    updateEmailPreview()
  })

  delimiterInput.addEventListener("input", e => {
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ delimiter: e.target.value })
    }
    updateEmailPreview()
  })

  firstNameCharsInput.addEventListener("input", e => {
    const val = parseInt(e.target.value, 10)
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ firstNameChars: isNaN(val) ? 1 : val })
    }
    updateEmailPreview()
  })

  lastNameCharsInput.addEventListener("input", e => {
    const val = parseInt(e.target.value, 10)
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lastNameChars: isNaN(val) ? 0 : val })
    }
    updateEmailPreview()
  })

  swapNamesCheck.addEventListener("change", e => {
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ swapNames: e.target.checked })
    }
    updateEmailPreview()
  })

  chrome.runtime.onMessage.addListener(message => {
    if (message.action === "broadcastProgress") {
      lastPagesDone = message.pagesDone
      updateProgressBar(lastPagesDone)
    }
    if (message.action === "broadcastCount") {
      totalPeople = message.peopleCount
      document.getElementById("people-count").textContent = `People: ${totalPeople}`
    }
    if (message.action === "saveSearchHistory") {
      restoreFormAfterSave()
    }
  })

  parseButton.addEventListener("click", () => {
    const fromNum = parseInt(fromNumInput.value, 10) || 1
    const toNum = parseInt(toNumInput.value, 10) || 1
    totalPages = Math.max(1, toNum - fromNum + 1)
    const postfix = postfixInput.value.trim()
    const delimiter = delimiterInput.value.trim()
    const firstNameChars = parseInt(firstNameCharsInput.value, 10)
    const lastNameChars = parseInt(lastNameCharsInput.value, 10)
    const swapNames = swapNamesCheck.checked === true
    
    const safeFirstNameChars = isNaN(firstNameChars) ? 1 : firstNameChars
    const safeLastNameChars = isNaN(lastNameChars) ? 0 : lastNameChars
    
    if (chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ 
        postfix: postfix,
        delimiter: delimiter,
        firstNameChars: safeFirstNameChars,
        lastNameChars: safeLastNameChars,
        swapNames: swapNames
      })
    }
    chrome.runtime.sendMessage({
      action: "startParse",
      from: fromNum,
      to: toNum,
      postfix: postfix,
      delimiter: delimiter,
      firstNameChars: safeFirstNameChars,
      lastNameChars: safeLastNameChars,
      swapNames: swapNames
    }).catch(() => {})
    setParsingUIState(true)
    document.getElementById("progress-bar-inner").style.width = "0%"
    progressText.textContent = "LeakedIn is starting..."
  })

  downloadButton.addEventListener("click", () => {})

  historyBtn.addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("history.html") })
  })

  function restoreFormAfterSave() {
    setParsingUIState(false)
  }

  function updateEmailPreview() {
    const postfix = postfixInput.value.trim() || "example.com"
    const delimiter = delimiterInput.value || ""
    const firstNameChars = parseInt(firstNameCharsInput.value, 10)
    const lastNameChars = parseInt(lastNameCharsInput.value, 10)
    const swapNames = swapNamesCheck.checked === true
    
    let firstName = "john"
    let lastName = "smith"
    
    if (!isNaN(firstNameChars) && firstNameChars > 0) {
      firstName = "john".substring(0, firstNameChars)
    }
    
    if (!isNaN(lastNameChars) && lastNameChars > 0) {
      lastName = "smith".substring(0, lastNameChars)
    }
    
    let email
    if (swapNames) {
      email = `${lastName}${delimiter}${firstName}@${postfix}`
    } else {
      email = `${firstName}${delimiter}${lastName}@${postfix}`
    }
    emailPreview.textContent = email.toLowerCase()
  }
})
