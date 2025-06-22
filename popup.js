document.getElementById('sendRequest').addEventListener('click', async () => {
    const randomText=["this is awesome","this is great","this is good","this is bad","this is terrible"][Math.floor(Math.random() * 5)];



    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: randomText })
        });

        const result = await response.json();
        console.log("Api Response ",result);
        document.getElementById('response').innerText = JSON.stringify(result);    
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Error: ' + error.message;
    }
});