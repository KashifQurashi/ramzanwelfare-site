import Link from "next/link";

export default function QurbaniPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Qurbani 2026</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Perform your Qurbani in accordance with Islamic principles and share
            its blessings with those in need.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Cow Share */}
              <div className="card overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-primary-100">
                  <span className="text-6xl">🐄</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Cow / Bull Qurbani</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Share in a large animal Qurbani. Each share is priced
                    affordably so you can participate in this blessed act.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Full Animal</span>
                      <span className="font-bold text-primary">PKR 85,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Per Share (1/7)</span>
                      <span className="font-bold text-primary">PKR 12,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goat Share */}
              <div className="card overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-primary-100">
                  <span className="text-6xl">🐐</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Goat / Sheep Qurbani</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    A complete goat or sheep Qurbani. Perfect for individual or
                    family offerings according to Islamic principles.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Full Animal</span>
                      <span className="font-bold text-primary">PKR 25,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Meat Distribution</span>
                      <span className="font-bold text-primary">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="mt-12">
              <h2 className="text-center text-2xl font-bold text-gray-900">
                How It Works
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Choose Your Qurbani",
                    desc: "Select cow, goat, or sheep Qurbani package that suits your budget.",
                  },
                  {
                    step: "2",
                    title: "Make Payment",
                    desc: "Pay securely online through our donation portal or bank transfer.",
                  },
                  {
                    step: "3",
                    title: "We Perform & Distribute",
                    desc: "We perform the Qurbani according to Sunnah and distribute meat to the needy.",
                  },
                ].map((item) => (
                  <div key={item.step} className="card p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {item.step}
                    </div>
                    <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/donate" className="btn-gold !rounded-lg !px-10 !py-4 !text-lg">
                BOOK YOUR QURBANI NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
