import db  from "./db";
import { v4 as uuidv4 } from "uuid";
import { SEA } from "gun";
async function addUserInfo({bio, pub, firstname, lastname, handle, email, pair}) {
  var encryptmail = await SEA.encrypt(email, pair)
  var info = {
    bio: bio,
    coverPhoto : "",
    avatar : "",
    firstname: firstname,
    lastname : lastname,
    handle : handle,
    email: encryptmail,
    location: null,
    website: null,
    dob : null,
    followersCount : 0,
    followingCount : 0,
    tweetsCount : 0,
    pub: pub
  };
  console.log(info)
  var BioAck = new Promise((res, rej) => {
    db.user()
      .get("Bio", (ack) => {
        console.log(ack)
      })
      .set(info, (ack) => {
        if (ack.err) {
          console.log(ack);
          return rej(ack);
        } else {
          console.log(ack);
          return res(ack);
        }
      });
  });

  return BioAck;
}

function uploadProfilePic(dataURI) {
  var pp = new Promise((res, rej) => {
    db.user()
      .get("Bio")
      .get("avatar")
      .put(dataURI, (ack) => {
        if (ack.err) {
          console.log(ack);
          return rej(ack);
        } else {
          console.log(ack);
          return res(ack);
        }
      });
  });

  return pp;
}

function uploadBackgroundPic(dataURI) {
  var pp = new Promise((res, rej) => {
    db.user()
      .get("Bio")
      .get("coverPhoto")
      .put(dataURI, (ack) => {
        if (ack.err) {
          console.log(ack);
          return rej(ack);
        } else {
          console.log(ack);
          return res(ack);
        }
      });
  });

  return pp;
}

export { addUserInfo, uploadProfilePic, uploadBackgroundPic };
