import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Heat, Summer } from "@/data/content";

type Prefs = {
  zoneId: number;
  summer: Summer;
  varietyId: string;
  fitsOnly: boolean;
  heat: Heat | "all";
  method: "ferment" | "dry";
  checks: string[];
  setZoneId: (zoneId: number) => void;
  setSummer: (summer: Summer) => void;
  setVarietyId: (varietyId: string) => void;
  setFitsOnly: (fitsOnly: boolean) => void;
  setHeat: (heat: Heat | "all") => void;
  setMethod: (method: "ferment" | "dry") => void;
  toggleCheck: (id: string) => void;
};

export const usePrefs = create<Prefs>()(
  persist(
    (set) => ({
      zoneId: 6,
      summer: "moderate",
      varietyId: "early-jalapeno",
      fitsOnly: true,
      heat: "all",
      method: "ferment",
      checks: [],
      setZoneId: (zoneId) => set({ zoneId }),
      setSummer: (summer) => set({ summer }),
      setVarietyId: (varietyId) => set({ varietyId }),
      setFitsOnly: (fitsOnly) => set({ fitsOnly }),
      setHeat: (heat) => set({ heat }),
      setMethod: (method) => set({ method }),
      toggleCheck: (id) =>
        set((state) => ({
          checks: state.checks.includes(id)
            ? state.checks.filter((item) => item !== id)
            : [...state.checks, id],
        })),
    }),
    { name: "pepper-almanac", skipHydration: true },
  ),
);
