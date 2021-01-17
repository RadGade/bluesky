import db  from "./db";
import { v4 as uuidv4 } from "uuid";
import { SEA } from "gun";
async function addUserInfo({bio, pub, firstname, lastname, handle, email, pair}) {
  var encryptmail = await SEA.encrypt(email, pair)
  var info = {
    bio: bio,
    firstname: firstname,
    lastname : lastname,
    handle : handle,
    email: encryptmail,
    pub: pub
  };
  console.log(info)
  var BioAck = new Promise((res, rej) => {
    db.user()
      .get("Bio", (ack) => {
        console.log(ack)
      })
      .put(info, (ack) => {
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
      .get("ProfilePic")
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
  var bp = new Promise((res, rej) => {
    db.user()
      .get("Bio")
      .get("BackgroundPic")
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

  return bp;
}

export { addUserInfo, uploadProfilePic, uploadBackgroundPic };
