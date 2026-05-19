// Interactive Terminal Portfolio
class Terminal {
    constructor() {
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            skills: this.showSkills.bind(this),
            projects: this.showProjects.bind(this),
            achievements: this.showAchievements.bind(this),
            certifications: this.showCertifications.bind(this),
            contact: this.showContact.bind(this),
            clear: this.clearTerminal.bind(this),
            ls: this.listCommands.bind(this),
            whoami: this.whoami.bind(this),
            social: this.showSocial.bind(this),
            resume: this.showResume.bind(this),
            github: this.openGithub.bind(this),
            linkedin: this.openLinkedIn.bind(this)
        };
        
        this.commandHistory = [];
        this.historyIndex = -1;
        this.init();
    }

    init() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.inputLine = document.querySelector('.input-line');
        
        this.input.addEventListener('keydown', this.handleKeyDown.bind(this));
        this.input.addEventListener('keyup', this.handleKeyUp.bind(this));
        
        // Focus input when clicking anywhere on terminal
        document.getElementById('terminal').addEventListener('click', () => {
            this.input.focus();
        });
        
        // Show welcome message
        this.showWelcome();
        this.input.focus();
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = this.input.value.trim();
            if (command) {
                this.executeCommand(command);
                this.commandHistory.push(command);
                this.historyIndex = this.commandHistory.length;
            }
            this.input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.input.value = this.commandHistory[this.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
                this.input.value = this.commandHistory[this.historyIndex];
            } else {
                this.historyIndex = this.commandHistory.length;
                this.input.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autocomplete();
        }
    }

    handleKeyUp(e) {
        // Update cursor position
        const cursorPos = this.input.selectionStart;
    }

    executeCommand(input) {
        const [command, ...args] = input.toLowerCase().split(' ');
        
        // Echo command
        this.addOutput(`<span class="prompt">sena@portfolio:~$</span> ${this.escapeHtml(input)}`);
        
        if (this.commands[command]) {
            this.commands[command](args);
        } else {
            this.addOutput(`<span class="error">Command not found: ${this.escapeHtml(command)}</span>`);
            this.addOutput('Type <span class="highlight">help</span> to see available commands.');
        }
        
        this.scrollToBottom();
    }

    autocomplete() {
        const partial = this.input.value.toLowerCase();
        const matches = Object.keys(this.commands).filter(cmd => cmd.startsWith(partial));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1) {
            this.addOutput(`<span class="prompt">sena@portfolio:~$</span> ${this.escapeHtml(partial)}`);
            this.addOutput(matches.join('  '));
        }
    }

    showWelcome() {
        const welcome = `
<span class="ascii-art">
╔═══════════════════════════════════════════════╗
║                                               ║
║         SENA RAUFI - PORTFOLIO v1.0          ║
║    Digital Forensics & Cybersecurity         ║
║                                               ║
╚═══════════════════════════════════════════════╝
</span>

<span class="welcome-text">Welcome to my interactive portfolio terminal!</span>
<span class="info">TU Dublin | B.Sc. Cyber Security (Year 3)</span>

Type <span class="highlight">help</span> to see available commands.
Type <span class="highlight">about</span> to learn more about me.
`;
        this.addOutput(welcome);
    }

    showHelp() {
        const help = `
<span class="section-title">Available Commands:</span>

  <span class="command">help</span>              Show this help message
  <span class="command">about</span>             Learn about me
  <span class="command">skills</span>            View my technical skills
  <span class="command">projects</span>          Browse my cybersecurity projects
  <span class="command">achievements</span>      View CTF achievements and competitions
  <span class="command">certifications</span>    List my certifications
  <span class="command">contact</span>           Get my contact information
  <span class="command">social</span>            View social media links
  <span class="command">resume</span>            Download my resume
  <span class="command">github</span>            Open my GitHub profile
  <span class="command">linkedin</span>          Open my LinkedIn profile
  <span class="command">clear</span>             Clear the terminal
  <span class="command">ls</span>                List available commands
  <span class="command">whoami</span>            Display current user info

<span class="tip">Tip: Use Tab for autocomplete, ↑↓ for command history</span>
`;
        this.addOutput(help);
    }

    showAbout() {
        const about = `
<span class="section-title">About Me</span>

I am a third-year student pursuing a B.Sc. Honours in Digital Forensics 
and Cyber Security at Technological University Dublin (TU863). My focus 
is on building production-grade security tools and competing in CTF challenges.

I have strong foundations in network security, digital forensics, penetration 
testing, and software engineering. I specialize in Rust development for 
security applications, with experience in threat detection, log analysis, 
and network forensics.

<span class="highlight">Recent Highlights:</span>
• 9th place in ZeroDays CTF 2025 (Colleges category)
• 2nd place in TU Dublin's Naughty or Nice CTF
• Active member of TU Dublin Ethical Hacking Society
• Regular competitor on ZeroDays and PicoCTF platforms
`;
        this.addOutput(about);
    }

    showSkills() {
        const skills = `
<span class="section-title">Technical Skills</span>

<span class="skill-category">Languages:</span>
  Rust • Python • Java • JavaScript • PHP • HTML/CSS

<span class="skill-category">Security Tools:</span>
  Wireshark • FTK Imager • Binwalk • Burp Suite • CVSS 3.1 • MITRE ATT&CK

<span class="skill-category">Frameworks:</span>
  React • Flask • Axum • Tokio • Unity

<span class="skill-category">Other Tools:</span>
  Git • SQL • SQLx • Linux • Docker

<span class="skill-category">Focus Areas:</span>
  Digital Forensics • Threat Detection • Penetration Testing
  Network Analysis • CTF Competitions
`;
        this.addOutput(skills);
    }

    showProjects() {
        const projects = `
<span class="section-title">Cybersecurity Projects</span>

<span class="project-title">1. Security Log Analyser</span>
   Production-grade log analysis platform built in Rust using Cargo workspace
   architecture. Implements CVSS 3.1 scoring, MITRE ATT&CK framework mapping,
   and multi-provider LLM integration (Groq, OpenAI, Gemini).
   <span class="link">→ github.com/Senaraufi/Security-Log-Analyser</span>

<span class="project-title">2. PCAP Anomaly Detector</span>
   Network packet capture analysis tool for detecting anomalous traffic patterns
   and potential intrusions. Directly applicable to network forensics workflows.
   <span class="link">→ github.com/Senaraufi/pcap-anomaly-detector</span>

<span class="project-title">3. Web Vulnerability Scanner</span>
   Automated tool for identifying common web vulnerabilities including XSS,
   SQL injection, and misconfigured endpoints.
   <span class="link">→ github.com/Senaraufi/Web-Vulnerability-Scanner</span>

<span class="project-title">4. Emergency Response System</span>
   Web app for online medical consulting with automated ambulance dispatch.
   Built during Ireland's first 30-hour hackathon (HackIreland).
   <span class="link">→ github.com/Senaraufi/Team24</span>

Type <span class="highlight">github</span> to visit my GitHub profile for more projects.
`;
        this.addOutput(projects);
    }

    showAchievements() {
        const achievements = `
<span class="section-title">CTF Achievements & Competitions</span>

<span class="achievement">🏆 ZeroDays CTF 2025</span>
   9th place (Colleges category), 27th overall out of 120 teams
   Ireland's premier cybersecurity competition

<span class="achievement">🥈 TU Dublin Naughty or Nice CTF</span>
   2nd place overall
   Internal university capture the flag competition

<span class="achievement">💻 HackIreland</span>
   Participant in Ireland's inaugural 30-hour overnight hackathon
   Dogpatch Labs, Dublin

<span class="highlight">Active Platforms:</span>
• ZeroDays CTF Platform
• PicoCTF
• TryHackMe (Pre Security certified)
• TU Dublin Ethical Hacking Society Member
`;
        this.addOutput(achievements);
    }

    showCertifications() {
        const certs = `
<span class="section-title">Certifications</span>

✓ <span class="cert">Fundamentals of Deep Learning</span> - NVIDIA (Dec 2024)
✓ <span class="cert">Junior Programmer</span> - Unity (Dec 2024)
✓ <span class="cert">Java Fundamentals</span> - Coddy
✓ <span class="cert">PHP Level 1, 2, 3</span> - Symfony Casts (Jan 2025)
✓ <span class="cert">Advent of Cyber 2025</span> - TryHackMe
✓ <span class="cert">Pre Security</span> - TryHackMe (Dec 2025)
`;
        this.addOutput(certs);
    }

    showContact() {
        const contact = `
<span class="section-title">Contact Information</span>

<span class="contact-item">📧 Email:</span>      sena.devx@gmail.com
<span class="contact-item">🔗 LinkedIn:</span>   linkedin.com/in/sena-raufi
<span class="contact-item">💻 GitHub:</span>     github.com/Senaraufi
<span class="contact-item">🌐 Portfolio:</span>  senaraufi.github.io/website_rs

<span class="highlight">CTF Profiles:</span>
• ZeroDays: ctf.cybersecuritychallenge.ie/user
• PicoCTF: play.picoctf.org/users/sena24
• TryHackMe: tryhackme.com/p/sena24
`;
        this.addOutput(contact);
    }

    showSocial() {
        const social = `
<span class="section-title">Social Links</span>

<span class="link-item">GitHub:</span>     <a href="https://github.com/Senaraufi" target="_blank">github.com/Senaraufi</a>
<span class="link-item">LinkedIn:</span>   <a href="https://linkedin.com/in/sena-raufi" target="_blank">linkedin.com/in/sena-raufi</a>
<span class="link-item">ZeroDays:</span>   <a href="https://ctf.cybersecuritychallenge.ie/user" target="_blank">CTF Profile</a>
<span class="link-item">PicoCTF:</span>    <a href="https://play.picoctf.org/users/sena24" target="_blank">PicoCTF Profile</a>
<span class="link-item">TryHackMe:</span>  <a href="https://tryhackme.com/p/sena24" target="_blank">TryHackMe Profile</a>
`;
        this.addOutput(social);
    }

    showResume() {
        this.addOutput('<span class="info">Resume download feature coming soon!</span>');
        this.addOutput('For now, visit my LinkedIn profile or contact me directly.');
    }

    openGithub() {
        this.addOutput('Opening GitHub profile...');
        window.open('https://github.com/Senaraufi', '_blank');
    }

    openLinkedIn() {
        this.addOutput('Opening LinkedIn profile...');
        window.open('https://linkedin.com/in/sena-raufi', '_blank');
    }

    listCommands() {
        const commands = Object.keys(this.commands).join('  ');
        this.addOutput(commands);
    }

    whoami() {
        this.addOutput('sena - Digital Forensics & Cybersecurity Student');
    }

    clearTerminal() {
        this.output.innerHTML = '';
    }

    addOutput(text) {
        const line = document.createElement('div');
        line.innerHTML = text;
        this.output.appendChild(line);
    }

    scrollToBottom() {
        const terminal = document.getElementById('terminal');
        terminal.scrollTop = terminal.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
