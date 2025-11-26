interface ProjectFilterProps {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
    sortOptions: { value: string; label: string }[]
    activeSort: string
    onSortChange: (sort: string) => void
}

export default function ProjectFilter({
    categories,
    activeCategory,
    onCategoryChange,
    sortOptions,
    activeSort,
    onSortChange
}: ProjectFilterProps) {
    return (
        <div role="search" aria-label="Filter and sort projects">
            <fieldset>
                <legend>[FILTER_BY_CATEGORY]</legend>
                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={activeCategory === category}
                            onChange={() => onCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </fieldset>

            <fieldset>
                <legend>[SORT_BY]</legend>
                {sortOptions.map((option) => (
                    <label key={option.value}>
                        <input
                            type="radio"
                            name="sort"
                            value={option.value}
                            checked={activeSort === option.value}
                            onChange={() => onSortChange(option.value)}
                        />
                        {option.label}
                    </label>
                ))}
            </fieldset>
        </div>
    )
}