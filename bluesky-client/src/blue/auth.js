import db  from "./db";
import {addUserInfo} from './bio'
import { v4 as uuidv4 } from "uuid";

console.log(db)
function auth({alias, pass}) {
  var user = new Promise((res, rej) => {
    db.user().auth(alias, pass, (ack) => {
      console.log(alias, pass)
      if (ack.err) {
        return rej(ack.err);
      } else {
        db.user().recall({ sessionStorage: true }, (user) => {
          console.log("recall", user.put.alias);
        });
        window.sessionStorage.setItem("isAuth", true);
        window.sessionStorage.setItem("pair", JSON.stringify(ack.put))
        window.sessionStorage.setItem("user", ack.put.pub);
        window.sessionStorage.setItem("epub", ack.sea.epub);
        return res(ack);
      }
    });
  });

  return user;
}

function create({handle, pass, firstname, lastname, email}) {
  var user = new Promise((res, rej) => {
    db.user().create(handle, pass, async (ack) => {
      if (ack.err) {
        return rej(ack.err);
      } else {
        console.log(ack)
         window.sessionStorage.setItem("user", ack.pub);
          await auth({alias : handle, pass : pass}).then((ack) => {
            console.log(ack)
             addUserInfo({handle : handle, firstname : firstname, lastname: lastname, email: email, pub: ack.put.pub, bio : "", pair: ack.sea}) //don't remove this or the whole code base will crash
          })
        return res(ack);
      }
    });
  });

  return user;
} 

export { auth, create };
