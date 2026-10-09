"use client";

import { useMemo, useState } from "react";
import { Search, ArrowDownUp } from "lucide-react";
import FavoriteDropdown from "@/components/favorite-dropdown";
import { favoriteLinks, type FavoriteCategory } from "@/data/favorite-links";

const favoriteCategories: (FavoriteCategory | "All")[] = [
  "All",
  "Tools",
  "AI",
  "Docs",
  "Learning",
  "People",
  "Research",
];

export function FavoritesTab() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FavoriteCategory | "All">("All");
  const [sort, setSort] = useState<"Latest" | "A–Z">("Latest");

  const visibleLinks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return favoriteLinks
      .filter((favorite) => category === "All" || favorite.category === category)
      .filter((favorite) =>
        `${favorite.name} ${favorite.description} ${favorite.domain} ${favorite.category}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .sort((a, b) =>
        sort === "Latest"
          ? b.order - a.order
          : a.name.localeCompare(b.name),
      );
  }, [category, query, sort]);

  return (
    <section className="ref-page" aria-label="Favorites">
      <p className="ref-favorites-intro">
        I love finding useful tools, clear explanations, and people who make me think. Here&apos;s a small collection of things I come back to while building software and learning about AI.
      </p>

      <div className="ref-favorites-toolbar">
        <label className="ref-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search favorites</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search links"
          />
        </label>
        <div className="ref-favorites-controls">
          <FavoriteDropdown
            label="Sort favorites"
            value={sort}
            options={["Latest", "A–Z"]}
            onChange={setSort}
            leadingIcon={<ArrowDownUp size={14} aria-hidden="true" />}
          />
          <FavoriteDropdown
            label="Filter by category"
            value={category}
            options={favoriteCategories}
            onChange={setCategory}
          />
        </div>
      </div>

      <div className="ref-favorite-list" aria-live="polite">
        {visibleLinks.length ? visibleLinks.map((favorite) => (
          <a
            className="ref-favorite-row"
            href={favorite.href}
            key={favorite.name}
            target="_blank"
            rel="noreferrer"
          >
            <span className="ref-favorite-icon" style={{ backgroundColor: favorite.accent }} aria-hidden="true">{favorite.icon}</span>
            <b>{favorite.name}</b>
            <span className="ref-slash">/</span>
            <span className="ref-favorite-description">{favorite.description}</span>
            <span className="ref-favorite-domain">{favorite.domain}</span>
          </a>
        )) : (
          <p className="ref-empty">No favorites found. Try a different search or category.</p>
        )}
      </div>
    </section>
  );
}
