import { HandshakeStatus } from "@replit/extensions";
import { createContext } from "react";
import { UseReplitFailure, UseReplitLoading, UseReplitReady } from "src/types";

export const ReplitContext = createContext<UseReplitFailure | UseReplitLoading | UseReplitReady>({
  status: HandshakeStatus.Loading,
  error: null,
  filePath: null,
  replit: null,
});