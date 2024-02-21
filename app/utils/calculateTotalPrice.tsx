const calculateTotalPrice = (bookList: Book[]) => {
    return bookList.reduce((acc, book) => {
        return acc + parseInt(book.priceStandard, 10);
    }, 0);
};

export default calculateTotalPrice;