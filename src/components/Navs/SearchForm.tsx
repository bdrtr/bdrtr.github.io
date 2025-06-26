export default function SearchForm() {



    return (
        <>
        <form className="d-flex mb-2 mb-lg-0 ms-auto">
            <input type='search' className="form-control me-1" placeholder="Search.."></input>
            <button className="btn btn-outline-dark" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>

        </>
    )
}