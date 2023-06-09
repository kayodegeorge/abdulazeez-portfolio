'use client'
import { useCallback, useEffect, useState } from 'react'
import Hobbies from '../components/Hobbies'
import {
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiOutlineBehance,
  AiOutlineTwitter,
} from 'react-icons/ai'

const roles = [
  { id: '01', role: 'UI/UX designer, Brandux' },
  { id: '02', role: 'Product designer, Instaclean' },
  { id: '03', role: 'Product design tutor, Codar' },
]

export default function About() {
  return (
    <div className='px-4 lg:px-24'>
      <section className='mt-14 lg:mt-[145px]'>
        <h1 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Hi! I am Abdulazeez
        </h1>

        <p className='mt-6 max-w-6xl lg:text-2xl'>
          A product designer skilled in user experience and visual design. I
          strive to create intuitive and engaging experiences that excites users
          and businesses. I have 3 years of professional experience in designing
          digital experiences, I&apos;ve worked closely with product managers
          and engineers to design and ship applications or softwares that
          encompass an end-to-end experience across a variety of platforms.
        </p>

        <div className='mb-14 mt-6 lg:mb-32'>
          {/* <div className='flex gap-[10px]'>
            <a
              href='https://twitter.com/azeezmadeit'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                width='18'
                height='16'
                viewBox='0 0 18 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.66262 15.3125C12.4534 15.3125 16.1687 9.68509 16.1687 4.80646C16.1687 4.64825 16.1652 4.48653 16.1582 4.32833C16.8809 3.80566 17.5046 3.15825 18 2.41653C17.3269 2.71601 16.6122 2.9116 15.8804 2.99661C16.651 2.53474 17.2279 1.80917 17.5043 0.954386C16.7794 1.38398 15.9867 1.68702 15.1601 1.85052C14.6031 1.25873 13.8667 0.866898 13.0648 0.735599C12.2628 0.6043 11.4399 0.740849 10.7233 1.12413C10.0067 1.50742 9.43635 2.11609 9.10039 2.85604C8.76442 3.596 8.68157 4.42602 8.86465 5.21778C7.39687 5.14413 5.96095 4.76284 4.64999 4.09863C3.33902 3.43443 2.18227 2.50214 1.25473 1.3622C0.7833 2.17499 0.639042 3.1368 0.851273 4.05213C1.0635 4.96746 1.6163 5.76765 2.3973 6.29005C1.81097 6.27144 1.23748 6.11357 0.724219 5.8295V5.87521C0.723693 6.72817 1.01857 7.555 1.55873 8.21514C2.09889 8.87528 2.85099 9.32798 3.68719 9.4963C3.14404 9.64491 2.57399 9.66656 2.02113 9.55958C2.25709 10.2931 2.71618 10.9347 3.33433 11.3948C3.95248 11.8549 4.69884 12.1105 5.46926 12.126C4.16132 13.1534 2.54563 13.7107 0.882422 13.708C0.587465 13.7076 0.292799 13.6895 0 13.6539C1.68964 14.7379 3.65515 15.3136 5.66262 15.3125Z'
                  fill='#F5F5F5'
                />
              </svg>
            </a>

            <a
              href='https://www.linkedin.com/in/abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.6676 0H1.32891C0.594141 0 0 0.580078 0 1.29727V16.6992C0 17.4164 0.594141 18 1.32891 18H16.6676C17.4023 18 18 17.4164 18 16.7027V1.29727C18 0.580078 17.4023 0 16.6676 0ZM5.34023 15.3387H2.66836V6.74648H5.34023V15.3387ZM4.0043 5.57578C3.14648 5.57578 2.45391 4.8832 2.45391 4.02891C2.45391 3.17461 3.14648 2.48203 4.0043 2.48203C4.85859 2.48203 5.55117 3.17461 5.55117 4.02891C5.55117 4.87969 4.85859 5.57578 4.0043 5.57578ZM15.3387 15.3387H12.6703V11.1621C12.6703 10.1672 12.6527 8.88398 11.2816 8.88398C9.89297 8.88398 9.68203 9.97031 9.68203 11.0918V15.3387H7.01719V6.74648H9.57656V7.9207H9.61172C9.9668 7.2457 10.8387 6.53203 12.1359 6.53203C14.8395 6.53203 15.3387 8.31094 15.3387 10.6242V15.3387V15.3387Z'
                  fill='#F5F5F5'
                />
              </svg>
            </a>

            <a
              href='https://dribbble.com/Abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10.91 14.69C10.9325 14.81 10.865 14.9375 10.7525 14.9825C9.90501 15.32 8.97501 15.5 8.01501 15.5C6.35751 15.5 4.82751 14.9675 3.59001 14.0525C3.48501 13.9775 3.45501 13.8275 3.52251 13.715C3.93501 12.98 5.54751 10.6175 9.11001 9.29753C9.24501 9.24503 9.39501 9.31253 9.44001 9.44753C10.3325 11.84 10.7525 13.865 10.91 14.69ZM15.365 9.41603C15.0211 11.2302 14.0128 12.8508 12.5375 13.961C12.38 14.081 12.155 13.991 12.1175 13.8035C11.96 12.9935 11.5775 11.246 10.8425 9.16853C10.79 9.01103 10.895 8.83853 11.06 8.81603C12.9275 8.59103 14.5625 8.95103 15.1775 9.11603C15.305 9.16103 15.3875 9.28853 15.365 9.41603ZM15.1925 7.86428C14.4275 7.72928 12.4775 7.44428 10.4825 7.66178C10.3625 7.67678 10.2575 7.60928 10.205 7.49678C10.175 7.42928 10.1525 7.36178 10.1225 7.29428C10.0025 7.01678 9.87501 6.73178 9.74751 6.45428C9.68001 6.31928 9.74751 6.15428 9.88251 6.09428C11.9825 5.18678 13.1525 4.01678 13.61 3.49178C13.7225 3.36428 13.9175 3.37178 14.0225 3.50678C14.9077 4.68505 15.422 6.10015 15.5 7.57178C15.5075 7.75928 15.3575 7.89428 15.1925 7.86428ZM12.83 2.59403C12.44 3.06653 11.345 4.19153 9.26751 5.01653C9.20739 5.04081 9.14042 5.04199 9.07949 5.01983C9.01856 4.99768 8.96798 4.95376 8.93751 4.89653C8.19402 3.56351 7.37519 2.27392 6.48501 1.03403C6.37251 0.876533 6.46251 0.651533 6.65001 0.621533C7.08501 0.546533 7.54251 0.509033 8.00751 0.509033C9.82251 0.509033 11.495 1.15403 12.7925 2.23403C12.905 2.31653 12.92 2.48153 12.83 2.59403ZM7.26501 5.63003C4.42251 6.34253 1.91001 6.44003 0.995007 6.45503C0.822507 6.45503 0.695007 6.29003 0.740007 6.12503C1.28001 4.02503 2.72001 2.27003 4.61751 1.30253C4.73001 1.24253 4.87251 1.28003 4.94751 1.38503C5.33751 1.92503 6.39501 3.44753 7.43001 5.24003C7.51251 5.39003 7.43751 5.58503 7.26501 5.63003ZM8.69001 7.69928C8.75751 7.84178 8.67501 8.01428 8.52501 8.06678C5.20251 9.13928 3.21501 11.8018 2.61501 12.7168C2.51751 12.8668 2.30751 12.8743 2.19501 12.7393C1.14501 11.4493 0.507507 9.97178 0.507507 8.17928V8.04428C0.507507 7.89428 0.627507 7.77428 0.777507 7.78178C1.72251 7.81928 4.80501 7.69178 8.00751 6.76928C8.12751 6.73178 8.26251 6.79178 8.31501 6.90428C8.44251 7.16678 8.57001 7.42928 8.69001 7.69928Z'
                  fill='#F5F5F5'
                />
              </svg>
            </a>

            <a
              href='https://www.behance.net/abdulazeezishaq'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark'
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.84184 4.05262C6.24714 4.0451 6.65187 4.08665 7.04718 4.17638C7.38003 4.24904 7.69604 4.38427 7.97842 4.57486C8.23922 4.76438 8.44557 5.01917 8.57676 5.31366C8.72753 5.67578 8.80027 6.06562 8.79023 6.45774C8.80735 6.88831 8.69739 7.31439 8.47405 7.68289C8.23908 8.03093 7.9143 8.30888 7.53415 8.48728C8.05004 8.62636 8.49938 8.94494 8.80137 9.38572C9.09127 9.85276 9.23699 10.3949 9.22027 10.9444C9.22983 11.3824 9.13925 11.8169 8.95544 12.2147C8.78553 12.5617 8.53675 12.8641 8.22902 13.0977C7.91218 13.3287 7.55565 13.4996 7.17712 13.6019C6.78458 13.7105 6.37906 13.7651 5.97178 13.7641H1.5V4.05262H5.84184ZM5.58382 7.98051C5.90227 7.99364 6.21575 7.89831 6.47297 7.71011C6.59617 7.60045 6.692 7.46348 6.75281 7.31017C6.81362 7.15685 6.83772 6.99144 6.82319 6.82714C6.83144 6.63526 6.79323 6.44422 6.71182 6.27026C6.64275 6.13176 6.53537 6.016 6.40244 5.93675C6.26779 5.84951 6.11651 5.79115 5.95817 5.76535C5.78636 5.73207 5.61153 5.71693 5.43655 5.72018H3.52582V7.98918H5.58382V7.98051ZM5.69519 12.1151C5.88778 12.1177 6.07997 12.0969 6.26755 12.0532C6.43897 12.0153 6.60154 11.945 6.74647 11.8459C6.88845 11.7469 7.00316 11.6137 7.07998 11.4586C7.16905 11.2608 7.20998 11.0447 7.1994 10.828C7.21871 10.6306 7.19256 10.4314 7.12295 10.2456C7.05335 10.0598 6.94213 9.89248 6.79782 9.75635C6.49197 9.53108 6.11715 9.41949 5.73789 9.44079H3.52582V12.1151H5.69519Z'
                  fill='#F5F5F5'
                />
                <path
                  d='M12.1055 12.0791C12.2645 12.2265 12.4518 12.34 12.6561 12.4127C12.8603 12.4855 13.0772 12.516 13.2936 12.5023C13.6366 12.511 13.9729 12.4066 14.2508 12.2053C14.4768 12.0583 14.648 11.8408 14.7377 11.5866H16.3533C16.1812 12.3104 15.7608 12.951 15.1653 13.3971C14.594 13.7763 13.9189 13.9683 13.2335 13.9465C12.7444 13.9529 12.259 13.861 11.8061 13.6761C11.3964 13.5053 11.0289 13.247 10.7294 12.9194C10.431 12.5761 10.2018 12.1783 10.0543 11.7481C9.88882 11.2671 9.8078 10.7611 9.81488 10.2525C9.81186 9.75245 9.89561 9.25565 10.0624 8.7842C10.2864 8.12096 10.7149 7.54575 11.2861 7.14111C11.8574 6.73647 12.5422 6.5232 13.2422 6.53192C13.759 6.52111 14.2701 6.64206 14.7272 6.88337C15.1404 7.10996 15.4969 7.4273 15.7698 7.81151C16.049 8.21467 16.2491 8.66715 16.3595 9.14494C16.4806 9.65799 16.5238 10.1864 16.4876 10.7123H11.6755C11.6365 11.2064 11.7907 11.6963 12.1055 12.0791ZM14.2167 8.38572C14.0821 8.25103 13.9201 8.14676 13.7418 8.07995C13.5634 8.01313 13.3728 7.98531 13.1828 7.99838C12.9307 7.98876 12.6804 8.04462 12.4564 8.16049C12.2787 8.25829 12.1219 8.38987 11.9948 8.54784C11.8821 8.69594 11.7981 8.86384 11.7473 9.04284C11.7014 9.19214 11.6728 9.34617 11.6619 9.50196H14.6424C14.6165 9.09584 14.4685 8.70701 14.218 8.38634L14.2167 8.38572Z'
                  fill='#F5F5F5'
                />
                <path
                  d='M15.0125 4.70117H11.2776V5.65592H15.0125V4.70117Z'
                  fill='#F5F5F5'
                />
              </svg>
            </a>
          </div> */}

          <div className=''>
            <div className='flex gap-[10px]'>
              <a
                href='https://twitter.com/azeezmadeit'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
                rel='noopener noreferrer'
                target='_blank'
              >
                <AiOutlineTwitter size={20} />
              </a>

              <a
                href='https://www.linkedin.com/in/abdulazeezishaq'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
                rel='noopener noreferrer'
                target='_blank'
              >
                <AiFillLinkedin size={20} />
              </a>

              <a
                href='https://dribbble.com/Abdulazeezishaq'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
                rel='noopener noreferrer'
                target='_blank'
              >
                <AiFillDribbbleCircle size={20} />
              </a>

              <a
                href='https://www.behance.net/abdulazeezishaq'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-text-dark text-white hover:bg-bg-lemon hover:text-black'
                rel='noopener noreferrer'
                target='_blank'
              >
                <AiOutlineBehance size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-[#D9D9D9] pt-8 lg:pt-32'>
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-0'>
          <div>
            <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
              Work Experience
            </h2>

            <p className='mt-6 max-w-4xl lg:text-2xl'>
              I have collaborated extensively with product managers and
              engineers to create and deploy applications or software solutions
              that provide a seamless experience across diverse platforms,
              covering the entire user journey
            </p>
          </div>

          <div className='shrink-0'>
            <a
              href='https://drive.google.com/file/d/1w5wsr7QSCGXyIkh6-Lo4y4awrQ3vtGyA/view'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div
                className="relative flex w-fit items-center gap-3 overflow-hidden rounded-full border border-black py-3 pl-6 pr-7 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-50 before:bg-bg-lemon
              before:transition-[top] before:duration-200 before:ease-in before:content-[''] hover:border-bg-lemon
              hover:fill-black   hover:before:top-0 lg:mt-14"
              >
                <span className='uppercase'>Download resume</span>

                <svg
                  width='15'
                  height='17'
                  viewBox='0 0 15 17'
                  fill='inherit'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7.27393 0C7.65362 0 7.96742 0.282154 8.01708 0.648229L8.02393 0.75L8.02393 15.75C8.02393 16.1642 7.68814 16.5 7.27393 16.5C6.89423 16.5 6.58043 16.2178 6.53077 15.8518L6.52393 15.75L6.52393 0.75C6.52393 0.335786 6.85971 0 7.27393 0Z' />
                  <path d='M12.767 9.17101C13.0593 8.87749 13.5342 8.87646 13.8277 9.16872C14.0945 9.43442 14.1196 9.85103 13.9024 10.1451L13.83 10.2294L7.80598 16.2794C7.5395 16.547 7.12138 16.5714 6.82731 16.3524L6.74308 16.2794L0.718085 10.2294C0.425799 9.93593 0.426782 9.46105 0.720281 9.16877C0.987098 8.90305 1.40381 8.87971 1.69697 9.09817L1.78094 9.17096L7.27481 14.687L12.767 9.17101Z' />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-8 lg:mb-32 lg:mt-20 lg:grid-cols-3 lg:gap-12'>
          {roles.map((role) => (
            <div key={role.id}>
              <div className='pb-2 text-5xl font-medium leading-[1.2] text-[#D9D9D9] lg:text-8xl'>
                {role.id}
              </div>

              <p className='w-3/5 border-t border-text-gray pt-2 text-text-dark lg:w-full lg:border-t-2 lg:pt-6 lg:text-2xl'>
                {role.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-14 border-t border-[#D9D9D9] pt-14 lg:mt-28'>
        <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Skills & Tools
        </h2>

        <div className='mt-11 flex gap-12 lg:gap-16'>
          <div>
            <p className='text-2xl leading-[1.2] text-text-gray lg:text-4xl'>
              Skills
            </p>
            <ul className='mt-6 lg:text-2xl'>
              <li>UX design</li>
              <li>Interaction design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>UX research</li>
              <li>Visual design</li>
              <li>Communication</li>
              <li>Design Thinking</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <p className='text-2xl leading-[1.2] text-text-gray lg:text-4xl'>
              Tools
            </p>
            <ul className='mt-6 lg:text-2xl'>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adode Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Webflow</li>
              <li>Miro</li>
              <li>After effect</li>
              <li>Invision</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='mt-14 border-y border-[#D9D9D9] pt-14 lg:mt-28'>
        <h2 className='text-4xl lg:max-w-4xl lg:text-[102px] lg:leading-[96px]'>
          Interests
        </h2>

        <p className='mt-6 max-w-4xl lg:text-2xl'>
          When I’m not designing, I love to do and talk about other things
          like:​
        </p>

        <div className='mb-32 mt-32 flex justify-center'>
          <Hobbies />
        </div>
      </section>
    </div>
  )
}
