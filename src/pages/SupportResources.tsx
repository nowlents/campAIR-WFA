const faqs: { q: string; a: string; list?: string[] }[] = [
  {
    q: 'What is Camp AIR in a Box?',
    a: 'Camp AIR in a Box is a self-service kit that enables managers, teams, and organizations to run Camp AIR on their own schedule using curated content, recordings, practice materials, agendas, and facilitation guidance.',
  },
  {
    q: 'Who is Camp AIR in a Box designed for?',
    a: 'The kit is designed for:',
    list: [
      'Managers running Camp AIR for their team',
      'Organizational leads coordinating larger cohorts',
      'Teams looking to scale AI adoption using a repeatable learning model',
    ],
  },
  {
    q: 'How much experience with AI is required?',
    a: 'None. Camp AIR is intended for mixed-experience groups. Teams are encouraged to learn together, share knowledge, and support one another during activities and practice sessions.',
  },
  {
    q: 'Can I customize the agenda?',
    a: "Yes. The agenda can be adapted based on your team's goals, schedule, and learning priorities.",
  },
  {
    q: 'How do I get help if I have questions?',
    a: 'Support is available through:',
    list: [
      'Tool-specific support channels',
      'Office Hours',
      'Camp AIR documentation and FAQs',
      'SME guidance where available',
    ],
  },
  {
    q: 'How often is content updated?',
    a: 'Camp AIR content is intended to be refreshed regularly to reflect changes in AI tools and experiences.',
  },
  {
    q: 'Can my organization run multiple cohorts?',
    a: 'Yes. Organizations can run Camp AIR on their own timeline and scale participation based on their needs.',
  },
  {
    q: 'What is the recommended cohort size?',
    a: 'Smaller pilot cohorts can help organizations learn the process before scaling to larger groups, though the model is designed to support a range of cohort sizes.',
  },
  {
    q: 'What happens after Camp AIR?',
    a: 'Teams are encouraged to apply what they learned to real workflows, identify opportunities for improvement, and continue practicing with AI tools as part of their regular work.',
  },
  {
    q: 'What support does the Camp AIR team provide?',
    a: 'The Camp AIR team provides learning assets, guidance, documentation, FAQs, office hours, and support resources. Teams remain responsible for running their own cohorts and facilitating local participation.',
  },
];

export function SupportResources() {
  return (
    <div className="ryo-page">
      <section className="page-intro">
        <h2 className="page-intro__title">Resources &amp; FAQ</h2>
      </section>

      <section className="ryo-section">
        <div className="ryo-support">
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">🗓️ Onboarding office hours</h4>
            <p className="ryo-support__text">
              For organizations getting started: delivery models, launch planning, resource
              selection, and readiness reviews.
            </p>
            <a
              className="ryo-link"
              href="https://teams.microsoft.com/l/channel/19%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2/tab%3A%3Aedc5a160-9a36-450b-9c51-5278dc3fee37?context=%7B%22channelId%22%3A%2219%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2%22%7D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Teams channel →
            </a>
          </div>
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">🛠️ Support office hours</h4>
            <p className="ryo-support__text">
              Recurring help once execution begins: delivery, facilitation, tool issues,
              measurement, and scaling.
            </p>
            <a
              className="ryo-link"
              href="https://teams.microsoft.com/l/channel/19%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2/tab%3A%3Aedc5a160-9a36-450b-9c51-5278dc3fee37?context=%7B%22channelId%22%3A%2219%3AH_cLj6ozUE51pflZEOSCzulJkYJs5af5GfV1bSVlpiQ1%40thread.tacv2%22%7D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Teams channel →
            </a>
          </div>
          <div className="ryo-support__card">
            <h4 className="ryo-support__title">✅ Camp AIR Cohort Coach Checklist</h4>
            <p className="ryo-support__text">
              A step-by-step checklist that guides Cohort Coaches through everything needed to
              prepare for and run their Camp AIR.
            </p>
            <a
              className="ryo-link"
              href="https://microsoft-my.sharepoint.com/:w:/p/jillet/cQrce9rI_A-4RJo2B1rfUInKEgUCWPEJKtENVgKEMxUXS7RFpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the checklist →
            </a>
          </div>
        </div>

        <div className="ryo-faq">
          <h4 className="ryo-faq__title">Frequently asked questions</h4>
          <div className="ryo-faq__list">
            {faqs.map((faq) => (
              <details className="ryo-faq-item" key={faq.q}>
                <summary className="ryo-faq-item__q">
                  <span>{faq.q}</span>
                  <span className="ryo-faq-item__icon" aria-hidden="true">+</span>
                </summary>
                <div className="ryo-faq-item__a">
                  <p>{faq.a}</p>
                  {faq.list && (
                    <ul>
                      {faq.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
