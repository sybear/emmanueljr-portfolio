export const Projects = () => {
	const cadSoftware = [
		'AutoCAD',
		'Autodesk Inventor',
		'Fusion 360',
		'Solidworks',
	];

	return (
		<section 
			id="projects"
			className="min-h-screen flex items-center justify-center py-20">
		<div className="max-w-5xl mx-auto px-4">
			<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-green-400 bg-clip-text text-transparent text-center">
				Featured Projects
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
					<h3 className="text-xl font-bold mb-2"> Gripper Mechanism </h3>
					<p className="text-gray-100 mb-4">
						A gripper mechanism is a device attached to the end of a robot arm or automated machine, designed to grasp, hold, and manipulate an object.	
					</p>
					<div className="flex flex-wrap gap-2 mb-4">
						{cadSoftware.map((tech, key) => (
							<span
								key={key}
								className="bg-green-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
							>
								{tech}
							</span>
						))}
					</div>
					<div className="flex justify-between items-center">
						<a 
							href="https://www.youtube.com/playlist?list=PL0HJZxhNqZ4gJrFMTDgS49t70vS2rCJSm" 
							className="text-rose-200 hover:text-rose-100 transition-colors my-4"
						> 
							View Project
					 </a>
					</div>
				</div>

				<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
					<h3 className="text-xl font-bold mb-2"> Injection Mold Design </h3>
					<p className="text-gray-400 mb-4">
						Injection mold design is the engineering process of creating the tool or mold that will be used to mass-produce plastic parts efficiently and accurately.
					</p>
					<div className="flex flex-wrap gap-2 mb-4">
						<span
							className="bg-green-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
						>
							{cadSoftware[1]}
						</span>
					</div>
					<div className="flex justify-between items-center">
						<a 
							href="https://www.youtube.com/playlist?list=PL0HJZxhNqZ4geI4HPZd0WgUetSc8_c3a2" 
							className="text-rose-200 hover:text-rose-100 transition-colors my-4"
						>
							View Project
						</a>
					</div>
				</div>

				<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
					<h3 className="text-xl font-bold mb-2"> Machine Belt Tigthener </h3>
					<p className="text-gray-400 mb-4">
						A belt tightener also called a belt tensioner is a mechanical device used to maintain the correct tightness or tension on a power transmission belt.
					</p>
					<div className="flex flex-wrap gap-2 mb-4">
						<span
							className="bg-green-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
						>
							{cadSoftware[2]}
						</span>
					</div>
					<div className="flex justify-between items-center">
						<a 
							href="https://www.youtube.com/watch?v=TFbiaiyUdX8&list=PL0HJZxhNqZ4hhu-dwbfH_Qgb3N6O6VZIS&index=4" 
							className="text-rose-200 hover:text-rose-100 transition-colors my-4"
						>
							View Project
						</a>
					</div>
				</div>

			</div>

		</div>
		</section>
	);
};
