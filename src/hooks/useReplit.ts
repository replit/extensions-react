import { useContext } from "react";
import { ReplitContext } from "src/state";

/**
 * A React hook that initializes and passes the Replit API wrapper to a component.
 */
export function useReplit() {
  const context = useContext(ReplitContext)

  return context;
}
