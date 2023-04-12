chrome.contextMenus.create({
  id: "download-with-onethingpcs",
  title: "Download magnet link with onethingpcs",
  contexts: ["link"],
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  if ("download-with-onethingpcs" === info.menuItemId) {
    chrome.windows.create({
      focused: true,
      height: 800,
      width: 600,
      url: "https://h5-ocapp.onethingpcs.com/vPages/webapp/#/addTask",
      type: "popup"
    });
  }
});