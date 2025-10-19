export const About = () => {
	const frontendSkills = [
		'React',
		'Javascript',
		'TailwindCSS',
		'Vite',
	];
	const backendSkills = [
		'Node.js',
		'Python',
		'AWS',
		'MongoDB',
	];
	const cadSkills = [
		'AutoCAD',
		'Autodesk Inventor',
		'Solidworks',
	];
	const programmingLangSkills = [
		'C/C++',
		'Python',
		'JavaScript',
	];

	return (
		<section 
			id="about"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<div className="max-w-3xl mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-green-500 bg-clip-text text-transparent text-center">
					About Me 
				</h2>

				<div className="p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
					<p className="text-white text-center mb-6">
						Hello and welcome. My professional foundation is built on a unique intersection: I hold a Bachelor of Science in Information Technology and a Bachelor of Science in Mechanical Engineering. By earning degrees in both fields, I've developed a unique skill set that allows me to speek both 'code' and 'CAD'. I thrive in environments that challenge me to build bridges design. Whether it's developing smart devices, optimizing automated systems, or simply solving a problem that requires a deep understanding of both digital logic and physical principles, I'm passionate about building the next generation of integrated technology.
					</p>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="rounded-xl p-6 hover:translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> Frontend </h3>
							<div className="flex flex-wrap gap-2">
								{frontendSkills.map((tech, key) => (
									<span 
										key={key}
										className="bg-rose-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="rounded-xl p-6 hover:translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> Backtend </h3>
							<div className="flex flex-wrap gap-2">
								{backendSkills.map((tech, key) => (
									<span 
										key={key}
										className="bg-rose-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="rounded-xl p-6 hover:translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> CAD Software </h3>
							<div className="flex flex-wrap gap-2">
								{cadSkills.map((tech, key) => (
									<span 
										key={key}
										className="bg-rose-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="rounded-xl p-6 hover:translate-y-1 transition-all">
							<h3 className="text-xl font-bold mb-4"> Programming language </h3>
							<div className="flex flex-wrap gap-2">
								{programmingLangSkills.map((tech, key) => (
									<span 
										key={key}
										className="bg-rose-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>

				</div>
				
				<div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
					<h3 className="text-xl text-white front-bold mb-4"> Education </h3>
					<ul className="list-disc list-inside text-white space-y-2">
						<li>
							<strong> B.S. Information Technology </strong>
							(2010 - 2014)
						</li>
						<li>
							<strong> B.S. Mechanical Engineering </strong>
							(2015 - 2020)
						</li>
					</ul>
				</div>

				<div className="p-6 mt-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all">
					<h3 className="text-xl front-bold mb-4"> Work Experience </h3>
					<div className="space-y-4 text-white">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
								<h4 className="font-semibold mb-4"> CAD Drafter at Upwork (2024 - Present) </h4>
								<p> Deliver high-precision 2D and 3D models for clients using AutoCAD, Inventor and Solidworks. Collaborate remotely with engineers and project managers to iterate and finalize mechanical designs. Adapt quickly to project requirements in sectors including consumer products and light manufacturing. </p>
							</div>
							<div className="p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
								<h4 className="font-semibold mb-4"> AutoCAD Operator at OTC - Oriental Tin Can Mfg. Company (2021 - 2024) </h4>
								<p> Designed and revised metal tooling for can manufacturing per client specifications. Assited lead designers in producing and updating technical drawings. Responded to urgent design change requests while ensuring production timelines were met. </p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
								<h4 className="font-semibold mb-4"> Machinist Intern at OTC - Oriental Tin Can Mfg. Company (2020 - 2020) </h4>
								<p> Support machining operations under supervision of lead machinists. Participated in quality inspections and basic maintenance tasks. Applied classroom theories in real-world tooling processes.</p>
							</div>
							<div className="p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
								<h4 className="font-semibold mb-4"> Freelance Web Developer and CAD Draftsman -  (2016 - 2018) </h4>
								<p> Created customized 2D/3D designs for residential and commercial projects. Delivered client-specific CAD outputs with attention to building and structural requirements. Managed multiple projects independently, maintaining quality and deadlines. Created a website for small businesses and personal websites.</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>	
	);
};
