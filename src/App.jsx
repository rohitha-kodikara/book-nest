import BookList from "./components/BookList";
import GenreChipList from "./components/GenreChipList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import ResultsBar from "./components/ResultsBar";
import SearchSortBar from "./components/SearchSortBar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <Header />

        {/* Search + sort */}
        <SearchSortBar />

        {/* Genre chips + availability */}
        <GenreChipList />

        {/* Result bar */}
        <ResultsBar />

        {/* Book grid */}
        <BookList />

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}