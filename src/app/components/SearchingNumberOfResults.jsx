export default function SearchingNumberOfResults({
  searchedTerm,
  updatedProductsNumber,
}) {
  return (
    <div className="">
      {searchedTerm !== '' && (
        <div className="flex items-center justify-between font-bold">
          <p>
            Поиск “<span>{searchedTerm}</span>”
          </p>
          <p>{updatedProductsNumber} найдено</p>
        </div>
      )}
    </div>
  );
}
