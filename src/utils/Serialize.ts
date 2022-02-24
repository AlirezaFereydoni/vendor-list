interface iSerialize {
  [key: string]: string;
}

const Serialize = (obj: iSerialize) => {
  var str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export default Serialize;
