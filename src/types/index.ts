import replit, { HandshakeStatus } from "@replit/extensions";

export interface UseReplitReady {
  status: HandshakeStatus.Ready;
  error: null;
  filePath: string;
  replit: typeof replit;
}

export interface UseReplitLoading {
  status: HandshakeStatus.Loading;
  error: null;
  filePath: null;
  replit: null;
}

export interface UseReplitFailure {
  status: HandshakeStatus.Error;
  error: Error;
  filePath: null;
  replit: null;
}
