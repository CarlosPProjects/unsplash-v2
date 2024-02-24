const GridLoader = () => {

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {Array(12).fill(12).map((_, i) => (
                <div
                    key={i}
                    className="col h-40 md:h-52 relative rounded-md overflow-hidden animate-pulse bg-gray-300"
                >
                </div>
            ))}
        </div>

    )
}

export default GridLoader