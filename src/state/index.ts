import { HandshakeStatus } from "@replit/extensions";

let handshakeStatus: HandshakeStatus = HandshakeStatus.Loading;

export const setHandshakeStatus = (status: HandshakeStatus) => {
  handshakeStatus = status;
};

export const getHandshakeStatus = () => handshakeStatus;
