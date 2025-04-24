import styles from "@/styles/Nav.module.scss";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem",color:'#6487ff' }}>LOGO</div>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
