import SuccessData from "../../Data/Success";

const Success = () => {
    return (
        <>
            <section>
                {/* Header Section */}
                <div>
                    <h1>Map Your Success</h1>
                    <button>Discover Now</button>
                </div>

                {/* List Section */}
                <div>
                    {SuccessData.map((item) => (
                        <div key={item.id}>
                            {/* Accessing the ID here */}
                            <span>{item.id}</span>

                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Success;