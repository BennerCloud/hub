class FileDownloader {
    constructor(buttonId, filePath, fileName) {
        this.button = document.getElementById(buttonId);
        this.filePath = filePath;
        this.fileName = fileName;
        
        this.init();
    }
    
    init() {
        if (this.button) {
            this.button.addEventListener('click', () => this.downloadFile());
        } else {
            console.error(`Botão com ID ${this.buttonId} não encontrado.`);
        }
    }

    downloadFile() {
        const absoluteFilePath = `http://localhost${this.filePath}`;
        console.log('Baixando arquivo de:', absoluteFilePath);  // Verifica o caminho absoluto no console
        const link = document.createElement('a');
        link.href = absoluteFilePath;  // Use o caminho HTTP absoluto
        link.download = this.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Uso com caminho HTTP absoluto
const downloader = new FileDownloader('downloadBtn', '/faq/FAQ_Benner.xlsx', 'FAQ_Benner.xlsx');
