/* eslint-disable @typescript-eslint/no-explicit-any */
function getLocation(key: string): any | void {
  const _data = localStorage.getLocation(key);
  if (!_data) {
    return;
  }
  return JSON.parse(_data);
}

function setLocation(key: string, _data: any) {
  localStorage.setLocation(key, JSON.stringify(_data));
}

function delLocation(key: string) {
  localStorage.removeLocation(key);
}

export { getLocation, setLocation, delLocation };
