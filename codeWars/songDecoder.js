function songDecoder(song) {
  console.log(song);
  const songArray = song.split("");

  // // find WUB at start & end and remove them
  // if (songArray[0] === "W") {
  //   if (songArray[1] === "U") {
  //     if (songArray[2] === "B") {
  //       songArray.splice(0, 3);
  //     }
  //   }
  // }

  // if (songArray[songArray.length - 1] === "B") {
  //   if (songArray[songArray.length - 2] === "U") {
  //     if (songArray[songArray.length - 3] === "W") {
  //       songArray.splice(songArray.length - 3, 3);
  //     }
  //   }
  // }

  let wubIdentifier = [];
  const decodedString = [];

  const wubChecker = (char) => {
    if (char === "W" && wubIdentifier.length === 0) {
      wubIdentifier.push(char);
      console.log(`W identified! - wubIdentifier: ${wubIdentifier}`);
    } else if (char === "U" && wubIdentifier.length === 1) {
      wubIdentifier.push(char);
      console.log(`U identified! - wubIdentifier: ${wubIdentifier}`);
    } else if (char === "B" && wubIdentifier.length === 2) {
      wubIdentifier.push(char);
      console.log(`B identified! - wubIdentifier: ${wubIdentifier}`);
    } else if (wubIdentifier.length > 0) {
      console.log(`false alarm, adding missing letters: `);
      console.log(wubIdentifier);
      decodedString.push(...wubIdentifier);
      wubIdentifier = [];
      console.log(`current decoded string: ${decodedString.join("")}`);
      wubChecker(char);
      // decodedString.push(char);
    } else {
      decodedString.push(char);
    }
  };

  for (let i = 0; i < songArray.length; i++) {
    const char = songArray[i];
    console.log(`currentChar: ${char}`);

    wubChecker(char);

    console.log(`current decoded string: ${decodedString.join("")}`);

    if (wubIdentifier.length === 3) {
      console.log(`WUB identified! - wubIdentifier: ${wubIdentifier}`);
      wubIdentifier = [];
      if (decodedString[decodedString.length - 1] !== " ") {
        decodedString.push(" ");
      }
    }
  }

  console.log(decodedString.join("").trim());
  // find WUBs inside the string and replace them with a space
}

songDecoder(
  "WUBYYRTSMNWUWUBWUBWUBCWUBWUBWUBCWUBWUBWUBFSYUINDWOBVWUBWUBWUBFWUBWUBWUBAUWUBWUBWUBVWUBWUBWUBJB"
);
