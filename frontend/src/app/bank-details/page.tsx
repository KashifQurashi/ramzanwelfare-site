import Link from "next/link";

export default function BankDetailsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Bank Details</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Your support through direct bank transfers helps us continue our
            mission of serving humanity.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Donation Account Details
              </h2>
              <p className="mt-2 text-gray-600">
                Please use the following bank details to make your donation via
                direct transfer.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    bank: "Allied Bank Limited (ABL)",
                    details: [
                      { label: "Account Title", value: "Ramzan Welfare International Trust" },
                      { label: "Account Number", value: "0010-123456-789" },
                      { label: "IBAN", value: "PK36ABPA00100123456789" },
                      { label: "Branch Code", value: "0010" },
                      { label: "Branch", value: "Bahadurabad, Karachi" },
                    ],
                  },
                  {
                    bank: "Bank Alfalah Limited",
                    details: [
                      { label: "Account Title", value: "Ramzan Welfare International Trust" },
                      { label: "Account Number", value: "0001-123456-789" },
                      { label: "IBAN", value: "PK36ALFH000001123456789" },
                      { label: "Branch Code", value: "0001" },
                      { label: "Branch", value: "Bahadurabad, Karachi" },
                    ],
                  },
                  {
                    bank: "Meezan Bank Limited",
                    details: [
                      { label: "Account Title", value: "Ramzan Welfare International Trust" },
                      { label: "Account Number", value: "0001-123456-789" },
                      { label: "IBAN", value: "PK36MEZN000001123456789" },
                      { label: "Branch Code", value: "0001" },
                      { label: "Branch", value: "Bahadurabad, Karachi" },
                    ],
                  },
                ].map((bank) => (
                  <div
                    key={bank.bank}
                    className="rounded-lg border border-gray-200 p-6"
                  >
                    <h3 className="text-lg font-bold text-primary">{bank.bank}</h3>
                    <div className="mt-4 space-y-2">
                      {bank.details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex justify-between border-b border-gray-100 pb-2 text-sm"
                        >
                          <span className="font-medium text-gray-700">
                            {detail.label}
                          </span>
                          <span className="text-gray-900">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                After making a transfer, please send us your transaction details
                so we can update our records.
              </p>
              <Link href="/contact-us" className="btn-primary mt-4 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
