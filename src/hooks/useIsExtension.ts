import { HandshakeStatus } from "@replit/extensions";
import { useReplit } from "./useReplit";

export default function useIsExtension(): undefined | boolean {
  const { status } = useReplit();

  switch (status) {
    case HandshakeStatus.Ready:
      return true;
    case HandshakeStatus.Error:
      return false;
    default:
      return undefined;
  }
}
