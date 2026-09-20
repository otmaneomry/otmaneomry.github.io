const topics = [
  "IoC / DI",
  "AOP & Proxies",
  "Transactions",
  "Spring Security",
  "Spring Data JPA",
  "Observability",
  "Resilience",
  "Architecture",
];

const BookFeature = () => {
  return (
      <section id="book" className="mt-24 scroll-mt-28">
        {/* heading — matches the #projects style */}
        <div className="flex items-center justify-between gap-5">
          <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div>
              <span className="text-[#C778DD]">#</span>book
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          <div className="font-medium text-white whitespace-nowrap">
            <a href="/book/" className="hover:text-[#C778DD] duration-150">
              <span>Read online ~~&gt;</span>
            </a>
          </div>
        </div>

        {/* shiny featured card */}
        <div className="book-card mt-10 rounded-2xl">
          <div className="book-card__inner rounded-2xl flex flex-col md:flex-row gap-8 md:gap-10 p-6 md:p-10">
            {/* cover */}
            <a
                href="/book/"
                className="book-cover group relative block w-fit self-center md:self-start shrink-0"
                aria-label="Open The Spring Boot Mastery Book"
            >
              <span className="book-cover__glow" aria-hidden="true"></span>
              <img
                  src="/assets/images/spring-boot-mastery-cover.svg"
                  alt="The Spring Boot Mastery Book — cover"
                  className="book-cover__img w-[230px] md:w-[290px] border border-[#2b3039]"
              />
              <span className="book-cover__shine" aria-hidden="true"></span>
            </a>

            {/* info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="book-badge">✦ NEW</span>
                <span className="text-[#6DB33F] text-[11px] font-mono tracking-[0.18em]">
                  SPRING BOOT 4 · FRAMEWORK 7 · JAVA 21
                </span>
              </div>

              <h3 className="text-white text-[28px] md:text-[34px] font-semibold mt-4 leading-tight">
                The Spring Boot Mastery Book
              </h3>
              <p className="text-[#C9D1D9] italic mt-2">
                From your first bean to the architect&apos;s chair.
              </p>

              <p className="text-[#ABB2BF] mt-5 leading-relaxed max-w-2xl">
                A 17-chapter narrative that rebuilds a frameworkless Java engineer into a
                principal architect — one production incident at a time. Every chapter forces a
                Spring topic to senior depth, then climbs to the system-level decision behind it:
                the trade-off, the failure mode, the ADR.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {topics.map((t, i) => (
                    <span key={`book-topic-${i}`} className="book-chip">{t}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="/book/" className="book-cta">
                  <span className="book-cta__shine" aria-hidden="true"></span>
                  Read the book <span className="ml-2">{"<~>"}</span>
                </a>
                <a
                    href="/book/ch-01.html"
                    className="text-[#ABB2BF] hover:text-white duration-150"
                >
                  or start at Chapter 1 →
                </a>
                <span className="text-[#6B7280] text-sm md:ml-auto">
                  v1.6 · Updated June 2026 · 6 parts + capstone
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BookFeature;
