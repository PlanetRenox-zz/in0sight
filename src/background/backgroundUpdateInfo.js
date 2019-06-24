// Update Notes
browser.runtime.onInstalled.addListener(listener);

function listener(details)
{
  if (details.reason === "install")
  {
    browser.tabs.create(
    {
      url: "https://planetrenox.com/repos/in0sight/wiki/UpdateNotes"
    });
  }
}
