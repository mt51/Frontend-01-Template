function encodeUTF8(text) {
  const code = encodeURI(text);
  const bytes = [];
  for (let i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          bytes.push(hex);
          i += 2;
      } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}