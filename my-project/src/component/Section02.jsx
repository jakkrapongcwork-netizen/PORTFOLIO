const skillGroups = [
    {
        title: 'Testing Focus',
        items: ['Manual testing', 'Test case design', 'Defect reporting', 'Regression testing'],
    },
    {
        title: 'Front-End',
        items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'],
    },
    {
        title: 'Back-End & Database',
        items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    },
]

function Section02() {
    return (
        <section id="about" className="content-section">
            <div className="section-heading">
                <p className="eyebrow">Profile</p>
                <h2>Professional Summary</h2>
            </div>

            <div className="profile-grid">
                <article className="summary-panel">
                    <p>
                        Entry-level QA Tester transitioning from a Junior Software Developer
                        bootcamp and a background in accounting and asset management. I bring
                        structured documentation habits, careful verification, and a practical
                        understanding of business workflows into software testing work.
                    </p>
                    <p>
                        I am looking for an opportunity to grow in manual testing, defect
                        reporting, test planning, and collaboration with development teams.
                    </p>
                    <div className="language-row">
                        <span>Thai: Native</span>
                        <span>English: Basic, actively improving</span>
                    </div>
                </article>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <article className="skill-card" key={group.title}>
                            <h3>{group.title}</h3>
                            <ul>
                                {group.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section02
