import { atom } from "jotai";
import { HandshakeStatus } from "@replit/extensions";

export const HandshakeStatusAtom = atom<HandshakeStatus>(HandshakeStatus.Loading);