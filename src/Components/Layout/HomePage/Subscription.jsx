import React from 'react';

const Subscription = () => {
    return (
<div className="flex h-96 items-center justify-center bg-[#FC477E]/50">
  <div className="grid w-2/4 grid-rows-4 gap-1" data-aos="zoom-in" data-aos-delay="500">
    <p className="font-semibold text-gray-700">💌 Get the best TOYs and their information, directly in your inbox.</p>
    <input type="text" className="h-10 w-full rounded border p-2 text-sm" placeholder="Your email" />
    <button className="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]">Subscribe to the newsletter</button>
    <a href="">
      <p className="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-700">
        Read the latest issue
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-3 w-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </p>
    </a>
  </div>
</div>
    );
};

export default Subscription;