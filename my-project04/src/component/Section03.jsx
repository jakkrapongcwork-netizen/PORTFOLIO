import Laguna from '../assets/Section03/Laguna.jpg'
import Kata from '../assets/Section03/Kata.png'

function Section03() {
    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            minHeight: '100vh',
            backgroundColor: 'black',
            overflow: 'hidden',
            padding: '60px 8%',
            boxSizing: 'border-box',
        }}>
            <h1 style={{
                color: 'white',
                fontSize: '2.8rem',
                fontWeight: 'bold',
                letterSpacing: '0.3rem',
                marginBottom: '50px',
                borderLeft: '5px solid #00ff00',
                paddingLeft: '20px',
            }}>
                Job Experience
            </h1>

            <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                    <img src={Laguna} alt="Laguna" style={logoStyle} />
                    <div>
                        <p style={companyStyle}>Laguna Phuket</p>
                        <p style={positionStyle}>Accountant</p>
                    </div>
                </div>

                <div style={skillGroupStyle}>
                    <p style={subTitleStyle}>Accounts Receivable (AR)</p>
                    <ul style={ulStyle}>
                        <li>Recorded customer payments based on transfer slips in AccPac and SilverMan systems.</li>
                        <li>Verified customer payments using transfer slips received via email.</li>
                        <li>Reviewed and processed incoming payments according to categorized revenue types.</li>
                        <li>Maintained and filed accounting documents properly.</li>
                    </ul>
                </div>

                <div style={skillGroupStyle}>
                    <p style={subTitleStyle}>Accounts Payable (AP)</p>
                    <ul style={ulStyle}>
                        <li>Received and handled invoices, delivery notes, receipts, tax invoices, and related documents.</li>
                        <li>Checked and verified documents for accuracy prior to accounting entries.</li>
                        <li>Classified expenses by category.</li>
                        <li>Recorded accounting transactions in AccPac and SilverMan systems.</li>
                        <li>Planned and managed documentation to ensure timely processing and compliance.</li>
                        <li>Organized and maintained accounting documents.</li>
                    </ul>
                </div>
            </div>

            <div style={cardStyle}>
                <div style={cardHeaderStyle}>
                    <img src={Kata} alt="Kata" style={logoStyle} />
                    <div>
                        <p style={companyStyle}>Kata Group and Beyond Resorts</p>
                        <p style={positionStyle}>Asset Analyst</p>
                    </div>
                </div>

                <div style={skillGroupStyle}>
                    <ul style={ulStyle}>
                        <li>Assisted in initiating the asset management system for the hotel.</li>
                        <li>Inspected assets of various departments and prepared asset record reports.</li>
                        <li>Received reports of damaged assets and inspected the asset condition.</li>
                        <li>Reported damaged assets, prepared documents, obtained signatures for approval, and forwarded to responsible departments.</li>
                        <li>Prepared monthly reports on departmental assets and presented to supervisor.</li>
                        <li>Coordinated with asset management personnel from other hotels within the group.</li>
                        <li>Prepared various documents related to asset management tasks as assigned.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const cardStyle = {
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,255,0,0.2)',
    borderRadius: '16px',
    padding: '30px',
    marginBottom: '30px',
    backdropFilter: 'blur(8px)',
}

const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
}

const logoStyle = {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    borderRadius: '10px',
    backgroundColor: 'white',
    padding: '4px',
}

const companyStyle = {
    color: '#00ff00',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    margin: '0 0 4px 0',
}

const positionStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.95rem',
    margin: 0,
    letterSpacing: '0.05rem',
}

const skillGroupStyle = {
    marginBottom: '16px',
}

const subTitleStyle = {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 'bold',
    fontSize: '1rem',
    margin: '0 0 8px 0',
    letterSpacing: '0.05rem',
}

const ulStyle = {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.9rem',
    lineHeight: '2',
    margin: 0,
    paddingLeft: '20px',
    listStyleType: 'disc',
}

export default Section03
