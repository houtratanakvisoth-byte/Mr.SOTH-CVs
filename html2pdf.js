<script>
    function downloadCV(event) {
        event.preventDefault();
        
        // 1. Target your complete portfolio layout element wrapper
        const element = document.getElementById('cv-content');
        
        // 2. Set strict parameters to balance crisp mobile display formatting
        const options = {
            margin:       10,
            filename:     'Hout_Ratanakvisoth_CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // 3. Temporarily hide download button so it doesn't appear inside your PDF file
        const button = document.querySelector('.btn.no-print');
        button.style.display = 'none';

        // 4. Run the html2pdf engine, download locally to storage, then restore the button
        html2pdf().set(options).from(element).save().then(() => {
            button.style.display = 'inline-block';
        });
    }
</script>