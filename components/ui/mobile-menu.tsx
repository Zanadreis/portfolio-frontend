'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MobileMenu() {
  const pathname = usePathname()
  const isPortuguese = pathname == '/pt'
  const isEnglish = pathname == '/en'

  const svgBRFlag = isPortuguese 
    ? <svg width="42px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(4.48,4.48), scale(0.86)"><rect x="-6.4" y="-6.4" width="76.80" height="76.80" rx="38.4" fill="#8D8DFF"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.757 25.537a26.195 26.195 0 0 1 7.34-1.065c8.362 0 15.779 3.908 20.442 9.916c.128-.78.211-1.573.211-2.388c0-8.146-6.604-14.75-14.75-14.75c-5.825 0-10.846 3.384-13.243 8.287" fill="#000000"></path><path d="M26.097 28.493c-3.121 0-6.072.676-8.746 1.84A14.788 14.788 0 0 0 17.25 32c0 8.146 6.604 14.75 14.75 14.75c5.511 0 10.308-3.028 12.84-7.506c-3.635-6.395-10.665-10.751-18.743-10.751m-3.93 8.424a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m0-3.934a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m3.933 5.901a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m5.9 3.932a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m0-3.932a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m3.934 1.966a.981.981 0 1 1 0-1.965a.981.981 0 1 1 0 1.965m3.933 1.966a.982.982 0 1 1-.003-1.965a.982.982 0 0 1 .003 1.965m0-3.932a.983.983 0 1 1-.002-1.966a.983.983 0 0 1 .002 1.966" fill="#000000"></path><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm28 30a27.99 27.99 0 0 1-.652 5.994L32 51.667L4.653 37.994C4.229 36.062 4 34.058 4 32s.229-4.062.653-5.994L32 12.333l27.348 13.673A27.99 27.99 0 0 1 60 32z" fill="#000000"></path></g></svg>
    : <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" strokeWidth="0.00064"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(4.48,4.48), scale(0.86)"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.757 25.537a26.195 26.195 0 0 1 7.34-1.065c8.362 0 15.779 3.908 20.442 9.916c.128-.78.211-1.573.211-2.388c0-8.146-6.604-14.75-14.75-14.75c-5.825 0-10.846 3.384-13.243 8.287" fill="#000000"></path><path d="M26.097 28.493c-3.121 0-6.072.676-8.746 1.84A14.788 14.788 0 0 0 17.25 32c0 8.146 6.604 14.75 14.75 14.75c5.511 0 10.308-3.028 12.84-7.506c-3.635-6.395-10.665-10.751-18.743-10.751m-3.93 8.424a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m0-3.934a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m3.933 5.901a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m5.9 3.932a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m0-3.932a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m3.934 1.966a.981.981 0 1 1 0-1.965a.981.981 0 1 1 0 1.965m3.933 1.966a.982.982 0 1 1-.003-1.965a.982.982 0 0 1 .003 1.965m0-3.932a.983.983 0 1 1-.002-1.966a.983.983 0 0 1 .002 1.966" fill="#000000"></path><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm28 30a27.99 27.99 0 0 1-.652 5.994L32 51.667L4.653 37.994C4.229 36.062 4 34.058 4 32s.229-4.062.653-5.994L32 12.333l27.348 13.673A27.99 27.99 0 0 1 60 32z" fill="#000000"></path></g></svg>

  const svgUSFlag = isEnglish
    ? <svg width="42px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000" stroke="#000000" strokeWidth="0.00064"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(4.48,4.48), scale(0.86)"><rect x="-6.4" y="-6.4" width="76.80" height="76.80" rx="38.4" fill="#8D8DFF" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M19.212 56.896a28.082 28.082 0 0 1-6.399-4.532h38.375a28.104 28.104 0 0 1-6.399 4.532H19.212M8.92 47.829a27.935 27.935 0 0 1-2.531-4.532h51.223a28.01 28.01 0 0 1-2.531 4.532H8.92m-4.089-9.064a27.848 27.848 0 0 1-.734-4.533h55.807a27.848 27.848 0 0 1-.734 4.533H4.831m3.71-22.024h.378l.329-1.03c.063-.088.123-.178.188-.265l.412 1.295h1.502l-1.215.962l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-.47-.371c.123-.197.251-.392.378-.588M10.6 30.993l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502l.465-1.458l.464 1.458h1.502l-1.215.962l.465 1.491m18.45-21.61l.465 1.458h1.502l-1.216.962l.465 1.491l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.457m-.465 13.258l.465-1.457l.465 1.457h1.502l-1.216.963l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502zm-2.718-4.938l.465 1.49l-1.215-.885l-1.216.908l.464-1.516l-1.215-.96h1.502l.465-1.458l.464 1.458h1.502l-1.216.963m.465 13.29l-1.215-.885l-1.216.908l.464-1.516l-1.215-.96h1.502l.465-1.458l.464 1.458h1.502l-1.216.962l.465 1.491m-4.397-19.19l.465 1.491l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.458l.465 1.458h1.502l-1.216.963m-1.216 10.838l.465-1.457l.465 1.457h1.502l-1.216.963l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502zm-2.718-4.938l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502l.465-1.458l.465 1.458h1.502l-1.216.963m-1.216 10.838l.465-1.458l.465 1.458h1.502l-1.216.962l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502zm-2.718-4.937l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.457l.465 1.457h1.502l-1.216.964M32 25.165h27.152c.37 1.468.618 2.983.745 4.532H32v-4.532m0-4.533V16.1h23.029a28.063 28.063 0 0 1 2.55 4.532H32m0-9.067V7.032h12.648a28.079 28.079 0 0 1 6.465 4.533H32m-6.476-6.801l.057.178h1.502l-1.216.962l.465 1.49l-1.215-.886l-1.216.909l.464-1.516l-.771-.61a28.283 28.283 0 0 1 1.93-.527m-11.743 6.077h1.502l-1.216.962l.465 1.491l-1.216-.886l-1.216.908l.435-1.416c.397-.385.807-.758 1.227-1.119l.019.06m-7.866 11.8h1.502l-1.216.963l.465 1.49l-1.216-.886l-.43.321c.22-.791.469-1.568.755-2.33l.14.442" fill="#000000"></path></g></svg>
    : <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M19.212 56.896a28.082 28.082 0 0 1-6.399-4.532h38.375a28.104 28.104 0 0 1-6.399 4.532H19.212M8.92 47.829a27.935 27.935 0 0 1-2.531-4.532h51.223a28.01 28.01 0 0 1-2.531 4.532H8.92m-4.089-9.064a27.848 27.848 0 0 1-.734-4.533h55.807a27.848 27.848 0 0 1-.734 4.533H4.831m3.71-22.024h.378l.329-1.03c.063-.088.123-.178.188-.265l.412 1.295h1.502l-1.215.962l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-.47-.371c.123-.197.251-.392.378-.588M10.6 30.993l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502l.465-1.458l.464 1.458h1.502l-1.215.962l.465 1.491m18.45-21.61l.465 1.458h1.502l-1.216.962l.465 1.491l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.457m-.465 13.258l.465-1.457l.465 1.457h1.502l-1.216.963l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502zm-2.718-4.938l.465 1.49l-1.215-.885l-1.216.908l.464-1.516l-1.215-.96h1.502l.465-1.458l.464 1.458h1.502l-1.216.963m.465 13.29l-1.215-.885l-1.216.908l.464-1.516l-1.215-.96h1.502l.465-1.458l.464 1.458h1.502l-1.216.962l.465 1.491m-4.397-19.19l.465 1.491l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.458l.465 1.458h1.502l-1.216.963m-1.216 10.838l.465-1.457l.465 1.457h1.502l-1.216.963l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502zm-2.718-4.938l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502l.465-1.458l.465 1.458h1.502l-1.216.963m-1.216 10.838l.465-1.458l.465 1.458h1.502l-1.216.962l.465 1.49l-1.216-.885l-1.216.908l.465-1.516l-1.216-.96h1.502zm-2.718-4.937l.465 1.49l-1.216-.886l-1.216.908l.465-1.515l-1.216-.961h1.502l.465-1.457l.465 1.457h1.502l-1.216.964M32 25.165h27.152c.37 1.468.618 2.983.745 4.532H32v-4.532m0-4.533V16.1h23.029a28.063 28.063 0 0 1 2.55 4.532H32m0-9.067V7.032h12.648a28.079 28.079 0 0 1 6.465 4.533H32m-6.476-6.801l.057.178h1.502l-1.216.962l.465 1.49l-1.215-.886l-1.216.909l.464-1.516l-.771-.61a28.283 28.283 0 0 1 1.93-.527m-11.743 6.077h1.502l-1.216.962l.465 1.491l-1.216-.886l-1.216.908l.435-1.416c.397-.385.807-.758 1.227-1.119l.019.06m-7.866 11.8h1.502l-1.216.963l.465 1.49l-1.216-.886l-.43.321c.22-.791.469-1.568.755-2.33l.14.442" fill="#000000"></path></g></svg>
  

  return (
    <div className="md:hidden">
      {/*Mobile navigation */}
      {/* Toggle content */}
      <div className={`switch-container ${isPortuguese ? 'fade-right': 'fade-left'}`}>
          <Link href='/pt' className={`flag-left ${!isPortuguese && 'inactive'}`}>
            {svgBRFlag}
          </Link>
          <Link href='/en' className={`flag-right ${!isEnglish && 'inactive'}`}>
            {svgUSFlag}
          </Link>
      </div>
    </div>
  )
}
