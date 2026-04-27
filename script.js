:root {
    --gold: #c5a059;
    --dark-bg: #121212;
    --card-bg: #1e1e1e;
    --text: #ffffff;
}

body {
    background-color: var(--dark-bg);
    color: var(--text);
    font-family: 'Cairo', sans-serif;
    margin: 0;
    direction: rtl;
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: #000;
    border-bottom: 2px solid var(--gold);
}

.site-logo { height: 50px; }
.site-name { color: var(--gold); font-size: 1.8rem; }

.novel-row {
    display: flex;
    overflow-x: auto;
    padding: 20px;
    gap: 20px;
    scrollbar-width: none;
}

.novel-card {
    min-width: 160px;
    background: var(--card-bg);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
}

.novel-card:hover { transform: translateY(-5px); }

.novel-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.novel-card h4 { padding: 10px; font-size: 14px; margin: 0; }

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: #252525;
    padding: 30px;
    border-radius: 15px;
    width: 90%;
    max-width: 400px;
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
}

button {
    background: var(--gold);
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.error-text { color: red; font-size: 12px; }
  
