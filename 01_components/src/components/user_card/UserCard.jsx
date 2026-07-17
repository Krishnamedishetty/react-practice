const StockIndicator = (props) => {
  return (
    <div className="stock-card">
      <h3>Royal Enfield Guerrilla 450</h3>
      
      {/* If true, show available. If false, show waitlist. */}
      {props.inStock ? (
        <p style={{ color: 'green' }}>Available for immediate delivery</p>
      ) : (
        <p style={{ color: 'red' }}>Currently out of stock - Join the waitlist</p>
      )}
    </div>
  );
};

export default StockIndicator;