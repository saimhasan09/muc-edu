import React from 'react';

const Statistics = () => {
	return (
		<div>
			<section class="p-6 my-6  text-gray-100 pb-20">
				<div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
					<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
						<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 w-[70px]">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="violet-400" viewBox="0 0 24 24" stroke="gray-900" stroke-width="3">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<div class="flex flex-col justify-center align-middle">
							<p class="text-3xl font-semibold leading-none">2000+</p>
							<p class="capitalize">Students</p>
						</div>
					</div>
					<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100 ">
						<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 w-[70px]">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="violet-400" viewBox="0 0 24 24" stroke="gray-900" stroke-width="3">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</div>
						<div class="flex flex-col justify-center align-middle">
							<p class="text-3xl font-semibold leading-none">150+</p>
							<p class="capitalize">Teachers</p>
						</div>
					</div>
					<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
						<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-9 w-9 text-gray-800">
								<path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
								<rect width="32" height="32" x="80" y="264"></rect>
								<rect width="32" height="32" x="240" y="128"></rect>
								<rect width="32" height="32" x="136" y="168"></rect>
								<rect width="32" height="32" x="400" y="264"></rect>
								<path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
							</svg>
						</div>
						<div class="flex flex-col justify-center align-middle">
							<p class="text-3xl font-semibold leading-none">172%</p>
							<p class="capitalize">Growth</p>
						</div>
					</div>
					<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
						<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="h-9 w-9 text-gray-800">
								<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
							</svg>
						</div>
						<div class="flex flex-col justify-center align-middle">
							<p class="text-3xl font-semibold leading-none">17%</p>
							<p class="capitalize">Bounce rate</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Statistics;