function InfoCard(){
     return (
    <section className="card card-green">
      <div>
        <h2>More Information</h2>

        <p>
          This is the bottom content area. You can place
          additional details, tables, lists or other
          content here.
        </p>

        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
        </ul>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-rfB-AVvfw4mU0ZE75n-XaBbgdSUBQGfWA&s"
        alt="checklist"
      />
    </section>
  );
}

export default InfoCard;