const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation" className="flex justify-center text-center font-medium">
      <ul
        className="flex justify-center items-center gap-8 !py-12"
        style={{ listStyle: "none", padding: 0 }}
      >
        {/* Previous button */}
        <li
          className={`page-item ${currentPage === 1 ? "invisible" : ""}`}
          style={{ cursor: currentPage === 1 ? "default" : "pointer" }}
        >
          <a
            className="page-link px-4"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            href="#"
            aria-label="Previous"
            style={{
              backgroundColor: "rgba(75, 42, 173, 0.3)",
              color: "rgb(75, 42, 173)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &lt;
          </a>
        </li>

        {/* Page buttons */}
        {pages.map((page) => (
          <li
            key={page}
            className="page-item"
            style={{ cursor: "pointer" }}
          >
            <a
              className="page-link  px-4"
              onClick={() => onPageChange(page)}
              href="#"
              style={{
                backgroundColor:
                  page === currentPage
                    ? "rgb(75, 42, 173)"
                    : "rgba(75, 42, 173, 0.3)",
                color:
                  page === currentPage ? "white" : "rgb(75, 42, 173)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {page}
            </a>
          </li>
        ))}

        {/* Next button */}
        <li
          className={`page-item ${currentPage === pages.length ? "invisible" : ""}`}
          style={{ cursor: currentPage === pages.length ? "default" : "pointer" }}
        >
          <a
            className="page-link  px-4"
            onClick={() => currentPage < pages.length && onPageChange(currentPage + 1)}
            href="#"
            aria-label="Next"
            style={{
              backgroundColor: "rgba(75, 42, 173, 0.3)",
              color: "rgb(75, 42, 173)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &gt;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
