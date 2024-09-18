export const NewPlayer = () => {

    return (
        <div className="container">
            <h4 className="new-form-heading">Add a new property</h4>
            <hr />
            <form className="new-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">
                    Property Name
                </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                />

                <label htmlFor="price" className="form-label">
                    Price of Property
                </label>
                <input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="form-control"
                />

                <label htmlFor="location" className="form-label">
                    Address of Property
                </label>
                <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-control"
                />

                <label htmlFor="apartments" className="form-label">
                    Number of Apartments
                </label>
                <input
                    id="apartments"
                    name="apartments"
                    value={formData.apartments}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
                <button className="btn btn-info" type="submit">
                    Add Property
                </button>
            </form>
        </div>
    );
};