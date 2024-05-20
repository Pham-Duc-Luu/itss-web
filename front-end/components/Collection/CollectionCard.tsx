function CollectionCard({collection}) {
  return (
    <div className="w-1/3 h-48 border-[1px] border-slate-400 rounded-lg px-10 py-5 shadow-md flex flex-col justify-between hover:border-b-4 hover:border-b-sky-700">
        <div>
            <h1 className="text-xl font-semibold mb-3">{collection.title}</h1>
            <h2 className="bg-slate-200 rounded-full w-auto inline-block px-2 py-1 font-semibold text-sm">{collection.flashcard.length} words</h2>
        </div>
        <div className="flex gap-5">
            <div className="bg-slate-500 h-7 w-7 rounded-full"></div>
            <h2>{collection.author}</h2>
        </div>
    </div>
  )
}

export default CollectionCard