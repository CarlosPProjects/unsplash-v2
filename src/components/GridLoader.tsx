const GridLoader = () => {

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(12).fill(12).map((_, i) => (
                <div
                    key={i}
                    className="col h-72 relative rounded-md overflow-hidden animate-pulse bg-background-foreground"
                >
                </div>
            ))}
        </div>

    )
}

export default GridLoader