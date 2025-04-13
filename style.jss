/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to right, #f0f4ff, #e0e7ff);
    color: #1e293b;
    line-height: 1.6;
    padding: 20px;
  }
  
  h1, h2 {
    color: #0f172a;
  }
  
  h1 {
    font-size: 2.2rem;
    margin-bottom: 25px;
    text-align: center;
    background: linear-gradient(to right, #6366f1, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* LAYOUT */
  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  
  .utama {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .samping {
    flex: 1;
  }
  
  /* SECTIONS */
  .panel {
    background: linear-gradient(to bottom right, #ffffff, #f1f5f9);
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
  }
  
  .panel:hover {
    transform: translateY(-3px);
  }
  
  .panel h2 {
    margin-bottom: 15px;
    font-size: 1.3rem;
    background: linear-gradient(to right, #3b82f6, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  /* FORM */
  form {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-size: 1rem;
    background: #f8fafc;
    transition: border 0.2s;
  }
  
  input[type="text"]:focus {
    outline: none;
    border-color: #60a5fa;
  }
  
  button {
    padding: 10px 16px;
    border: none;
    background: linear-gradient(to right, #6366f1, #3b82f6);
    color: white;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  
  button:hover {
    background: linear-gradient(to right, #4f46e5, #2563eb);
  }
  
  /* LISTS */
  ul {
    list-style: none;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    background: linear-gradient(to right, #e0f2fe, #f0f9ff);
    border: 1px solid #bae6fd;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  
  /* CATATAN (Memo) */
  .catatan-kartu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }
  
  .kartu-catatan {
    background: linear-gradient(to bottom right, #fef3c7, #fde68a);
    padding: 14px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s;
  }
  
  .kartu-catatan:hover {
    transform: scale(1.03);
  }
  
  .kartu-catatan p {
    margin-bottom: 10px;
    word-wrap: break-word;
  }
  
  .kartu-catatan button {
    background: linear-gradient(to right, #f87171, #ef4444);
    font-size: 0.85rem;
    padding: 6px 10px;
    border: none;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .kartu-catatan button:hover {
    background: linear-gradient(to right, #dc2626, #b91c1c);
  }
  
  /* RESPONSIVE */
  @media (max-width: 768px) {
    .grid-container {
      flex-direction: column;
    }
  
    .utama, .samping {
      flex: 1;
    }
  }
  
