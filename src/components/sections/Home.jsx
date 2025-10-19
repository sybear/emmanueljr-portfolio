export const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative"
		>
			<div className="text-center z-10 px-4">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-green-500 bg-clip-text text-transparent leading-right">
					Hi, I'm Emmanuel Jr
				</h1>
			
				<p className="text-white-900 text-lg mb-8 max-w-lg mx-auto">
					Welcome. My work is built on a dual foundation of Information Technology and Mechanical Engineering, allowing me to create solutions that seamlessly integrate software logic with physical design.
				</p>

				<div className="flex justify-center space-x-4">
					<a 
						href="#projects"
						className="bg-rose-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)"
					>
						View Projects
					</a>

					<a 
						href="#contact"
						className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2) hover:bg-green-500/10"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>	
	);
};
