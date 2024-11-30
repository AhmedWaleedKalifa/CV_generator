import { jsPDF } from "jspdf";

export default function DownloadCV({ formInfo = [] }) {
  function handleDownload() {
    const pdf = new jsPDF();

    let y = 10; // Starting Y-coordinate

    if (formInfo && Array.isArray(formInfo)) {
      formInfo.forEach((section) => {
        // Section title
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.text(section.title, 10, y);
        y += 10; // Add space after the section title

        // Section content
        if (section.array && Array.isArray(section.array)) {
          pdf.setFontSize(12);
          pdf.setFont("helvetica", "normal");
          section.array.forEach((item) => {
            // Multi-line text handling
            const lines = pdf.splitTextToSize(`${item.name}: ${item.value}`, 180); // Wrap text at 180mm width
            pdf.text(lines, 10, y); // Add text
            y += lines.length * 7; // Move down based on the number of lines (7mm per line)
          });
        }

        y += 10; // Add extra space between sections
      });
    }

    pdf.save(`cv.pdf`);
  }

  return (
    <button onClick={handleDownload} >
      Download CV
    </button>
  );
}
