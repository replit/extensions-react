import { useState, useEffect, useRef, useMemo } from "react";
import { getHandshakeStatus } from "src/state";
import { HandshakeStatus } from "@replit/extensions";
import * as replit from '@replit/extensions'
import { UseReplitReady, UseReplitFailure, UseReplitLoading } from "src/types";

/**
 * A React hook that initializes and passes the Replit API wrapper to a component.
 */
export function useReplit() {
  const [status, setStatus] = useState<HandshakeStatus>(getHandshakeStatus());
  const [error, setError] = useState<Error | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const runRef = useRef(0);

  useEffect(() => {
    // Avoids duplicate runs of init
    if (runRef.current === 1) {
      return;
    }
    runRef.current += 1;

    if (status === HandshakeStatus.Ready) {
      return;
    }

    let dispose: (() => void) | null = () => {};

    (async () => {
      try {
        dispose = (await replit.init()).dispose;
        setFilePath(await replit.me.filePath());
        setStatus(HandshakeStatus.Ready);
      } catch (e) {
        setError(e as Error);
        setStatus(HandshakeStatus.Error);
      }
    })();

    return () => {
      dispose?.();
    };
  }, []);

  return useMemo(() => {
    if (status === HandshakeStatus.Ready) {
      return { status, error, filePath, replit } as UseReplitReady;
    } else if (status === HandshakeStatus.Error) {
      return { status, error, filePath, replit: null } as UseReplitFailure;
    } else {
      return { status, error, filePath, replit: null } as UseReplitLoading;
    }
  }, [status, error, filePath, replit]);
}
