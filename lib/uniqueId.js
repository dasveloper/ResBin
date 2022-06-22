import { customAlphabet } from "nanoid";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const uniqueId = customAlphabet(alphabet, 24);

export default uniqueId;
