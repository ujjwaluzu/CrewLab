"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

const FILTERS = ["All", "Development", "Design", "AI", "Education"] as const;

export default function ExploreControls() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  return (
    <div className="x-tools">
      <label className="x-search" htmlFor="explore-search">
        <Icon name="search" />
        <span className="visually-hidden">Search projects</span>
        <input
          id="explore-search"
          type="search"
          placeholder="Search projects..."
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby="x-tool-note"
        />
      </label>
      <div className="x-filters" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={"x-pill" + (f === filter ? " on" : "")}
            aria-pressed={f === filter}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p id="x-tool-note" className="x-tool-note">
        Search and filters are a preview — real discovery ships with the CrewLab app.
      </p>
    </div>
  );
}