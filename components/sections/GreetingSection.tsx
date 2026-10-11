import Image from 'next/image';

export default function GreetingSection() {
  return (
    <section
      id="greeting"
      aria-labelledby="greeting-title"
      className="scroll-mt-24 border-y border-[#eae5dc] bg-[#faf8f5] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-4">
            <div aria-hidden="true" className="h-1 w-12 bg-[#003d7a]" />
            <span className="text-sm font-medium tracking-wider text-[#003d7a]">
              원장 인사말
            </span>
          </div>
          <h2
            id="greeting-title"
            className="text-3xl font-bold leading-snug text-gray-900 md:text-4xl md:leading-snug"
            style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
          >
            문화가 일상이 되는 공간,<br />
            모두에게 열린 공간
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          <figure className="mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-[#e5ded2] bg-[#e8dcc8] shadow-sm">
              <Image
                src="/images/director-yang-sang-su.png"
                alt="문화센터 열림 양상수 원장"
                width={896}
                height={1200}
                sizes="(min-width: 1024px) 340px, (min-width: 375px) 320px, calc(100vw - 64px)"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-5 text-center">
              <span className="text-sm text-gray-600">문화센터 열림 원장</span>
              <span className="ml-3 text-xl font-semibold tracking-[0.15em] text-[#003d7a]">
                양상수
              </span>
            </figcaption>
          </figure>

          <div
            className="min-w-0"
            style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
          >
            <div className="space-y-5 [&>p]:text-base [&>p]:leading-[1.9] [&>p]:text-gray-700">
              <p className="font-medium">
                안녕하십니까, 나주 지역 문화예술의 중심지인 전문 문화기관,
                &apos;문화센터 열림&apos;에 오신 것을 진심으로 환영합니다.
              </p>
              <p>
                저희 &apos;문화센터 열림&apos;은 2020년 개관 이래, 나주 시민 여러분의
                문화적 삶의 질 향상과 지역 문화예술 발전을 선도하기 위해 쉼 없이
                달려왔습니다. 우리 센터는 단순한 문화시설을 넘어서, 지역사회의 진정한
                문화적 허브로 자리매김하고자 노력하고 있습니다.
              </p>
              <p>
                무엇보다 저는 이곳이 나주 시민 여러분께서 다채로운 문화와 교육
                프로그램을 통해 서로 연결되고 따뜻하게 교류하는 화합의 장이 되기를
                꿈꿉니다. 일상 속에서 문화를 만나고 배움을 나누는 시간들이 모여,
                시민 개개인은 물론 우리 지역사회가 긍정적으로 변화하고, 한 단계 더
                성장하며 발전하는 소중한 기회가 되기를 간절히 바랍니다.
              </p>
              <p>
                저희는 앞으로도 예술가와 시민, 전통과 현대, 그리고 지역과 세계를 잇는
                든든한 가교 역할을 충실히 수행하겠습니다.
              </p>
              <p>
                앞으로도 최신 시설과 전문 인력을 바탕으로 수준 높은 문화예술
                프로그램을 제공하며, 시민 모두가 문화를 풍성하게 향유할 수 있도록
                최선을 다하겠습니다. 언제나 여러분의 발걸음이 머무는 곳,
                &apos;문화가 일상이 되는 공간&apos;이자 모두에게 &apos;열린 공간&apos;으로
                늘 곁에 함께하겠습니다.
              </p>
              <p>감사합니다.</p>
            </div>

            <p className="mt-8 border-t border-[#e5ded2] pt-6 text-right text-gray-700">
              문화센터 열림 원장{' '}
              <strong className="ml-2 text-xl font-semibold tracking-[0.15em] text-[#003d7a]">
                양상수
              </strong>{' '}
              드림
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
