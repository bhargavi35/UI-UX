export default function InfoSection() {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "4rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "120px",
        paddingTop: "200px",
        paddingBottom: "200px",
        background: "#DCE1E6",
      }}
    >
      <img
        src="./images/hero1.png"
        alt="Info"
        style={{ width: "80%", maxWidth: "600px", borderRadius: "12px" }}
      />
      <div style={{ maxWidth: "500px" ,color:'black'}}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Why Choose Us?
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          Some informative content about the product or service provided here.
          Make this informative and highlight key benefits.
        </p>
      </div>
    </section>
  );
}
