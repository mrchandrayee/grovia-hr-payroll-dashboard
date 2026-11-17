# Grovia — HR and Payroll Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/grovia-hr-payroll-dashboard/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive runnable frontend recreation based on the supplied 5.43-second screen recording.

## Run
Extract the ZIP and open `index.html` in a modern browser. No npm install or build tools are required.

Optional local server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Screens and visible details reconstructed

### Overview
- Grovia brand and Overview / People / Payroll navigation.
- “Good afternoon, Amara” greeting.
- Mira Okafor employee spotlight, Product Designer, $4,138.
- Progress card with 5.5h average workday and activity bars.
- Time tracker starting at 02:35 with start / pause and reset.
- Onboarding progress, Preparation / Setup / Team tabs, clickable checklist.
- Pension plan card with Devices, Compensation and Benefits.
- Weekly schedule Sep 28 – Oct 3 with example events.
- Dark onboarding tasks panel and completion percentage.

### People
- People directory with All, Design, Engineering, Product and Operations filters.
- Search by name, role or location.
- Table columns: Name, Role, Team, Location, Started, Status.
- Sample visible staff: Mira Okafor, Jonah Reyes, Lena Park, Theo Brandt, Amara Nwosu, Sofia Marin, Kai Tanaka, Ines Duarte, Omar Haddad and Freya Lund.
- Add member form and CSV export.

### Payroll
- Team member selector on the left.
- Monthly timesheet calendar with daily hour labels.
- Month navigation, selected day feedback and payroll export.
- Employee details panel with contact, location, start date, documents and monthly summary.
- Run payroll confirmation demo.

## Extraction accuracy
The video title reads “HR and payroll dashboard”. The visible UI shows the Grovia workspace, employee Mira Okafor, dashboard overview, onboarding checklist, time tracker, a Sep 28–Oct 3 schedule, Payroll monthly calendar, and People directory with team filters. The original full HTML/React/CSS source is not shown in this screen recording. This project reconstructs the visible UI and basic interactions; it is not a verbatim copy of unseen source files.

## Demo limitations
All employee, payroll, time and onboarding data is local sample data. Forms and checklists update in browser memory only and reset on refresh. There is no backend, authentication, real payroll processing, HRIS connection, document storage or payroll-provider integration. Employee portrait art is a CSS illustration rather than an extracted photo.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
