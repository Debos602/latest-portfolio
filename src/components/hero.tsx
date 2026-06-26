import Image from "next/image";
import image from "../asset/debos_image.jpg";
// Add to your imports at the top of the file
import { CodeXml, MapPin, Clock, Mail, Globe } from "lucide-react";
import { HatchDivider } from "./HatchDivider";
export default function Hero() {
  return (
    <section className="bg-background mt-10">
      <div className="max-w-3xl border-x border-[lab(90.6853%_0.399232_-1.45452)] mx-auto">
        <div className="mx-auto">
          <div className="flex items-center justify-center py-6 relative">
            <svg
              className="h-16 sm:h-20 text-foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 638 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="14.8883"
              strokeLinecap="round"
            >
              <title>hello</title>
              <path
                d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
                pathLength="1"
                strokeDashoffset="0"
                strokeDasharray="1 1"
              />
              <path
                d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
                pathLength="1"
                strokeDashoffset="0"
                strokeDasharray="1 1"
              />
            </svg>
          </div>

          <div
            className="absolute top-[180px] left-0 right-0 h-8 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)",
            }}
          />

          <div className="flex items-end mt-[34px] relative w-full">
            <div className="flex-shrink-0 border-r border-[lab(90.6853%_0.399232_-1.45452)]">
              <div className=" h-36 w-36 m-[5px] rounded-full shadow-lg ring-4 ring-white overflow-hidden">
                <Image src={image} alt="Debos" width={144} height={144} className="object-cover h-36 w-36" />
              </div>
            </div>

            <div className="w-full">
              <h1 className="px-4 flex items-center gap-2 py-1.5 pl-3 sm:py-2 sm:pl-4 font-heading text-2xl font-semibold leading-none tracking-tight min-[24rem]:text-3xl sm:text-3xl border-y border-[lab(90.6853%_0.399232_-1.45452)] text-foreground">
                Debos Das
                <svg
                  className="h-6 w-6 text-[#1d9bf0] flex-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" fill="#1d9bf0" />
                  <path d="M16.5 9l-5 5-2.5-2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h1>


            <div className="h-auto py-1.5 pl-3 sm:h-10 sm:py-2 sm:pl-4">
                <p className="inline-flex items-center gap-1 font-mono text-sm text-balance text-muted-foreground">
                  Passionate web developer specializing in modern.
                </p>            
            </div>
            </div>
          </div>
          <div
            className="absolute top-[365px] left-0 right-0 h-8 pointer-events-none border-y border-[lab(90.6853%_0.399232_-1.45452)]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px)",
            }}
          />

          
          {/* here --------------*/}
          <div className="p-4 mt-[34px] space-y-2.5">
            <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <CodeXml aria-hidden="true" />
                  </div>
                  <p className="text-balance flex items-center gap-1" aria-label="Role">
                    <span>Web Developer</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <MapPin aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener"
                      href="https://www.google.com/maps/search/?api=1&query=YOUR_CITY"
                      aria-label="Location: Your City, Country"
                    >
                      Chittagong, Bangladesh
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Clock aria-hidden="true" />
                  </div>
                  <p className="text-balance" aria-label="Current local time">
                    04:32 AM // Asia/Dhaka
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Mail aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a href="mailto:hello@yourdomain.com" className="link" aria-label="Email: Debos.das.02@gmail.com">
                      Debos.das.02@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background select-none [&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
                    <Globe aria-hidden="true" />
                  </div>
                  <p className="text-balance">
                    <a className="link" target="_blank" rel="noopener" href="https://www.yourdomain.com" aria-label="Website: yourdomain.com">
                      +8801834491602
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Social links */}
      <div className="p-4">
        <div
            className="absolute top-[525px] left-0 right-0 h-16 pointer-events-none border-t border-[lab(90.6853%_0.399232_-1.45452)]"
            aria-hidden="true"
           
          />
          <ul className="flex flex-wrap gap-2">
            <li className="flex">
              
                <a className="flex size-8 items-center justify-center rounded-lg gradient-border gradient-border-to-tl gradient-border-from-foreground/10 gradient-border-to-foreground/20 gradient-border-via-foreground/5 dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6 bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-[inset_0_-1px_1px_1px] shadow-white dark:shadow-[inset_0_1px_1px_0px] dark:shadow-zinc-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg]:drop-shadow-xs [&_svg]:drop-shadow-foreground/15 [&_svg:not([class*='size-'])]:size-5"
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub: YOUR_USERNAME"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </li>

            <li className="flex">
              
                <a className="flex size-8 items-center justify-center rounded-lg gradient-border gradient-border-to-tl gradient-border-from-foreground/10 gradient-border-to-foreground/20 gradient-border-via-foreground/5 dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6 bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-[inset_0_-1px_1px_1px] shadow-white dark:shadow-[inset_0_1px_1px_0px] dark:shadow-zinc-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg]:drop-shadow-xs [&_svg]:drop-shadow-foreground/15 [&_svg:not([class*='size-'])]:size-5"
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn: YOUR_USERNAME"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21.418 1H2.584C1.634 1 1 1.628 1 2.572v18.855C1 22.373 1.792 23 2.583 23h18.834c.95 0 1.583-.628 1.583-1.572V2.573C23.001 1.627 22.367 1 21.418 1ZM7.49 19.7H4.166V9.172h3.323L7.49 19.7ZM5.906 7.757c-1.108 0-1.898-.785-1.898-1.885S4.8 3.985 5.906 3.985c1.11 0 1.9.787 1.9 1.887s-.95 1.885-1.9 1.885ZM19.836 19.7h-3.324v-5.028c0-1.257 0-2.83-1.742-2.83-1.74 0-1.9 1.258-1.9 2.673V19.7H9.548V9.172h3.166v1.413c.633-1.1 1.9-1.728 3.165-1.728 3.325 0 3.957 2.2 3.957 5.028V19.7Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>

            <li className="flex">
              
                <a className="flex size-8 items-center justify-center rounded-lg gradient-border gradient-border-to-tl gradient-border-from-foreground/10 gradient-border-to-foreground/20 gradient-border-via-foreground/5 dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6 bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-[inset_0_-1px_1px_1px] shadow-white dark:shadow-[inset_0_1px_1px_0px] dark:shadow-zinc-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg]:drop-shadow-xs [&_svg]:drop-shadow-foreground/15 [&_svg:not([class*='size-'])]:size-5"
                href="https://www.facebook.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook: YOUR_USERNAME"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </li>

            <li className="flex">
              
                <a className="flex size-8 items-center justify-center rounded-lg gradient-border gradient-border-to-tl gradient-border-from-foreground/10 gradient-border-to-foreground/20 gradient-border-via-foreground/5 dark:gradient-border-from-foreground/20 dark:gradient-border-to-foreground/30 dark:gradient-border-via-foreground/6 bg-linear-to-t from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-[inset_0_-1px_1px_1px] shadow-white dark:shadow-[inset_0_1px_1px_0px] dark:shadow-zinc-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground/80 [&_svg]:drop-shadow-xs [&_svg]:drop-shadow-foreground/15 [&_svg:not([class*='size-'])]:size-5"
                href="https://discord.com/users/YOUR_USER_ID"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord: YOUR_USERNAME"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Discord</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <HatchDivider/>
    </section>
  );
}