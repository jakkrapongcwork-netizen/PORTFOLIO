import Laguna from '../assets/Section03/Laguna.jpg'
import Kata from '../assets/Section03/Kata.png'

function Section03() {
    return (
        <section id="experience" className="content-section muted-section">
            <div className="section-heading">
                <p className="eyebrow">Experience</p>
                <h2>Relevant Work Background</h2>
            </div>

            <div className="experience-list">
                <article className="experience-card">
                    <div className="experience-header">
                        <img src={Laguna} alt="Laguna Phuket logo" className="company-logo" />
                        <div>
                            <h3>Laguna Phuket</h3>
                            <p>Accountant</p>
                        </div>
                    </div>

                    <div className="responsibility-group">
                        <h4>Accounts Receivable (AR)</h4>
                        <ul>
                            <li>Recorded customer payments based on transfer slips in AccPac and SilverMan systems.</li>
                            <li>Verified customer payments using transfer slips received via email.</li>
                            <li>Reviewed and processed incoming payments according to categorized revenue types.</li>
                            <li>Maintained and filed accounting documents properly.</li>
                        </ul>
                    </div>

                    <div className="responsibility-group">
                        <h4>Accounts Payable (AP)</h4>
                        <ul>
                            <li>Received and handled invoices, delivery notes, receipts, tax invoices, and related documents.</li>
                            <li>Checked and verified documents for accuracy prior to accounting entries.</li>
                            <li>Classified expenses by category.</li>
                            <li>Recorded accounting transactions in AccPac and SilverMan systems.</li>
                            <li>Planned and managed documentation to ensure timely processing and compliance.</li>
                            <li>Organized and maintained accounting documents.</li>
                        </ul>
                    </div>
                </article>

                <article className="experience-card">
                    <div className="experience-header">
                        <img src={Kata} alt="Kata Group and Beyond Resorts logo" className="company-logo" />
                        <div>
                            <h3>Kata Group and Beyond Resorts</h3>
                            <p>Asset Analyst</p>
                        </div>
                    </div>

                    <div className="responsibility-group">
                        <ul>
                            <li>Assisted in initiating the asset management system for the hotel.</li>
                            <li>Inspected assets of various departments and prepared asset record reports.</li>
                            <li>Received reports of damaged assets and inspected the asset condition.</li>
                            <li>Reported damaged assets, prepared documents, obtained signatures for approval, and forwarded to responsible departments.</li>
                            <li>Prepared monthly reports on departmental assets and presented to supervisor.</li>
                            <li>Coordinated with asset management personnel from other hotels within the group.</li>
                            <li>Prepared various documents related to asset management tasks as assigned.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Section03
