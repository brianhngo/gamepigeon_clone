import React from "react";

export default function SocialMedia() {
  return (
    <>
      <button className='group transition-all duration-500 hover:-translate-y-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 93 92'
          fill='none'>
          <rect
            x='1.13867'
            width='91.5618'
            height='91.5618'
            rx='15'
            fill='url(#paint0_linear_7092_54439)'
          />
          <path
            d='M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z'
            fill='white'
          />
          <defs>
            <linearGradient
              id='paint0_linear_7092_54439'
              x1='90.9407'
              y1='91.5618'
              x2='-0.621143'
              y2='-2.46459e-06'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#FBE18A' />
              <stop offset='0.21' stop-color='#FCBB45' />
              <stop offset='0.38' stop-color='#F75274' />
              <stop offset='0.52' stop-color='#D53692' />
              <stop offset='0.74' stop-color='#8F39CE' />
              <stop offset='1' stop-color='#5B4FE9' />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <button className='group transition-all duration-500 hover:-translate-y-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 93 92'
          fill='none'>
          <rect
            x='0.138672'
            width='91.5618'
            height='91.5618'
            rx='15'
            fill='black'
          />
          <path
            d='M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z'
            fill='white'
          />
        </svg>
      </button>
      <button className='flex w-[47.25px] h-[47.25px] group transition-all duration-500 hover:-translate-y-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-1 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='48'
          height='48'
          viewBox='0 -28.5 256 256'
          version='1.1'
          preserveAspectRatio='xMidYMid'>
          <g>
            <path
              d='M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z'
              fill='#5865F2'
              fill-rule='nonzero'></path>
          </g>
        </svg>
      </button>
      <button className='group transition-all duration-500 hover:-translate-y-2'>
        <svg
          width='48'
          height='48'
          viewBox='0 0 92 92'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='0.138672'
            width='91.5618'
            height='91.5618'
            rx='15'
            fill='black'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M55.6721 39.4285C58.7387 41.6085 62.4112 42.7733 66.1737 42.7592V35.3024C65.434 35.3045 64.6963 35.2253 63.9739 35.0663V41.0068C60.203 41.0135 56.5252 39.8354 53.4599 37.6389V52.9749C53.4507 55.4914 52.7606 57.9585 51.4628 60.1146C50.165 62.2706 48.3079 64.0353 46.0885 65.2215C43.8691 66.4076 41.37 66.9711 38.8563 66.852C36.3426 66.733 33.9079 65.9359 31.8105 64.5453C33.7506 66.5082 36.2295 67.8513 38.9333 68.4044C41.6372 68.9576 44.4444 68.6959 46.9994 67.6526C49.5545 66.6093 51.7425 64.8312 53.2864 62.5436C54.8302 60.256 55.6605 57.5616 55.6721 54.8018V39.4285ZM58.3938 31.8226C56.8343 30.1323 55.8775 27.9739 55.6721 25.6832V24.7139H53.5842C53.8423 26.1699 54.4039 27.5553 55.2326 28.78C56.0612 30.0048 57.1383 31.0414 58.3938 31.8226ZM36.645 58.642C35.9213 57.6957 35.4779 56.5653 35.365 55.3793C35.2522 54.1934 35.4746 52.9996 36.0068 51.9338C36.5391 50.8681 37.3598 49.9731 38.3757 49.3508C39.3915 48.7285 40.5616 48.4039 41.7529 48.4139C42.4106 48.4137 43.0644 48.5143 43.6916 48.7121V41.0068C42.9584 40.9097 42.2189 40.8682 41.4794 40.8826V46.8728C39.9522 46.39 38.2992 46.4998 36.8492 47.1803C35.3992 47.8608 34.2585 49.0621 33.6539 50.5454C33.0494 52.0286 33.0252 53.6851 33.5864 55.1853C34.1475 56.6855 35.2527 57.9196 36.6823 58.642H36.645Z'
            fill='#EE1D52'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M53.4589 37.5892C56.5241 39.7857 60.2019 40.9638 63.9729 40.9571V35.0166C61.8243 34.5623 59.8726 33.4452 58.3927 31.8226C57.1372 31.0414 56.0601 30.0048 55.2315 28.78C54.4029 27.5553 53.8412 26.1699 53.5831 24.7139H48.09V54.8018C48.0849 56.1336 47.6629 57.4304 46.8831 58.51C46.1034 59.5897 45.0051 60.3981 43.7425 60.8217C42.4798 61.2453 41.1162 61.2629 39.8431 60.872C38.57 60.4811 37.4512 59.7012 36.6439 58.642C35.3645 57.9965 34.3399 56.9387 33.7354 55.6394C33.1309 54.3401 32.9818 52.875 33.3121 51.4805C33.6424 50.0861 34.4329 48.8435 35.556 47.9535C36.6791 47.0634 38.0693 46.5776 39.5023 46.5745C40.1599 46.5766 40.8134 46.6772 41.4411 46.8728V40.8826C38.7288 40.9477 36.0946 41.8033 33.8617 43.3444C31.6289 44.8855 29.8946 47.0451 28.8717 49.5579C27.8489 52.0708 27.5821 54.8276 28.1039 57.49C28.6258 60.1524 29.9137 62.6045 31.8095 64.5453C33.9073 65.9459 36.3458 66.7512 38.8651 66.8755C41.3845 66.9997 43.8904 66.4383 46.1158 65.2509C48.3413 64.0636 50.2031 62.2948 51.5027 60.133C52.8024 57.9712 53.4913 55.4973 53.4962 52.9749L53.4589 37.5892Z'
            fill='white'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M63.9736 35.0161V33.4129C62.0005 33.4213 60.0655 32.8696 58.3934 31.8221C59.8695 33.4493 61.8229 34.5674 63.9736 35.0161ZM53.5838 24.7134C53.5838 24.4275 53.4968 24.1292 53.4596 23.8434V22.874H45.8785V52.9744C45.872 54.6598 45.197 56.2738 44.0017 57.4621C42.8064 58.6504 41.1885 59.3159 39.503 59.3126C38.5106 59.3176 37.5311 59.0876 36.6446 58.6415C37.4519 59.7007 38.5707 60.4805 39.8438 60.8715C41.1169 61.2624 42.4805 61.2448 43.7432 60.8212C45.0058 60.3976 46.1041 59.5892 46.8838 58.5095C47.6636 57.4298 48.0856 56.1331 48.0907 54.8013V24.7134H53.5838ZM41.4418 40.8696V39.167C38.3222 38.7432 35.1511 39.3885 32.4453 40.9977C29.7394 42.6069 27.6584 45.0851 26.5413 48.0284C25.4242 50.9718 25.337 54.2067 26.2938 57.206C27.2506 60.2053 29.195 62.792 31.8102 64.5448C29.9287 62.5995 28.6545 60.1484 28.1433 57.4908C27.6321 54.8333 27.906 52.0844 28.9315 49.5799C29.957 47.0755 31.6897 44.924 33.918 43.3882C36.1463 41.8524 38.7736 40.9988 41.4791 40.9318L41.4418 40.8696Z'
            fill='#69C9D0'
          />
        </svg>
      </button>
      <button className='group transition-all duration-500 hover:-translate-y-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          viewBox='0 0 93 93'
          fill='none'>
          <rect
            x='1.13867'
            y='1'
            width='91.5618'
            height='91.5618'
            rx='15'
            fill='#FF0000'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M67.5615 29.2428C69.8115 29.8504 71.58 31.6234 72.1778 33.8708C73.2654 37.9495 73.2654 46.4647 73.2654 46.4647C73.2654 46.4647 73.2654 54.98 72.1778 59.0586C71.5717 61.3144 69.8032 63.0873 67.5615 63.6866C63.4932 64.7771 47.1703 64.7771 47.1703 64.7771C47.1703 64.7771 30.8557 64.7771 26.7791 63.6866C24.5291 63.079 22.7606 61.306 22.1628 59.0586C21.0752 54.98 21.0752 46.4647 21.0752 46.4647C21.0752 46.4647 21.0752 37.9495 22.1628 33.8708C22.7689 31.615 24.5374 29.8421 26.7791 29.2428C30.8557 28.1523 47.1703 28.1523 47.1703 28.1523C47.1703 28.1523 63.4932 28.1523 67.5615 29.2428ZM55.5142 46.4647L41.9561 54.314V38.6154L55.5142 46.4647Z'
            fill='white'
          />
        </svg>
      </button>
    </>
  );
}
