<script>
    const subjectCount = 10;
    const table = document.getElementById("subjectTable");

    const gradeMap = {
      "A+": 4.00,
      "A": 3.75,
      "A-": 3.50,
      "B+": 3.25,
      "B": 3.00,
      "B-": 2.75,
      "C+": 2.50,
      "C": 2.25,
      "D": 2.00,
      
    };

		/* This system developed by Md Morshed Ali */

    const gradeOptions = Object.keys(gradeMap).map(grade =>
      `<option value="${grade}">${grade}</option>`
    ).join('');

    for (let i = 1; i <= subjectCount; i++) {
      const row = `
        <tr>
          <td>Subject ${i}</td>
          <td>
            <select name="letter">
              <option value="">Select</option>
              ${gradeOptions}
            </select>
          </td>
          <td class="gradePoint"></td>
        </tr>
      `;
      table.insertAdjacentHTML('beforeend', row);
    }
    
    /* This system developed by Md Morshed Ali */

    function calculateGPA() {
      const rows = document.querySelectorAll("#subjectTable tr");
      let totalGP = 0;
      let validSubjects = 0;

      rows.forEach(row => {
        const select = row.querySelector("select[name='letter']");
        const gradePointCell = row.querySelector(".gradePoint");

        const letter = select.value;
        if (gradeMap.hasOwnProperty(letter)) {
          const gp = gradeMap[letter];
          gradePointCell.textContent = gp.toFixed(2);
          totalGP += gp;
          validSubjects++;
        } else {
          gradePointCell.textContent = "Invalid";
        }
      });
      
      /* This system developed by Md Morshed Ali */

      const avgGPA = validSubjects ? (totalGP / validSubjects).toFixed(2) : "N/A";
      document.getElementById("averageGPA").textContent = `Average GPA: ${avgGPA}`;
    }
  </script>
