export default function SearchingNumberOfResults({
  searchedTerm,
  updatedProductsNumber,
}) {
  return (
    <div className="">
      {searchedTerm !== '' && (
        <div className="flex items-center justify-between font-bold">
          <h4>
            Поиск “<span>{searchedTerm}</span>”
          </h4>
          <h4>{updatedProductsNumber} найдено</h4>
        </div>
      )}
    </div>
  );
}
