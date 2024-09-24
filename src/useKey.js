import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      const closeModal = function (e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      };
      document.addEventListener("keydown", closeModal);

      return () => document.removeEventListener("keydown", closeModal);
    },
    [key, action]
  );
}
