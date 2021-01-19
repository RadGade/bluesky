import { SkynetClient } from "skynet-js";

const client  = new SkynetClient("https://siasky.net/");

function uploadImage (file) {
    const upload = new Promise((res, rej) => {
        client.uploadFile(file).then((ack) => {
            var hash = ack.split(":")
            console.log(hash[1]);
            return res(hash[1]);
        }).catch((err) => {
            console.log(err);
            return rej(ack);
        });
    });

    return upload;
};

export default uploadImage;