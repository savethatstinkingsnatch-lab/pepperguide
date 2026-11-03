import { createFileRoute } from "@tanstack/react-router";
import { Almanac } from "@/components/almanac/almanac";

export const Route = createFileRoute("/")({ component: Almanac });
