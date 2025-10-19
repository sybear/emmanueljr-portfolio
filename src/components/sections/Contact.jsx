import { useState } from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		
		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
			.then((result) => {
				setFormData({name: "", email: "", message: ""});	
		})
		.catch(() => alert("Failed due to error!"));
	};

	return (
		<section
			id="contact"
			className="min-h-screen flex items-center justify-center py-20"
		>
	
			<div className="mx-auto w-150 pb-20">
				<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-green-400 bg-clip-text text-transparent text-center"
				> 
					Get In Touch 
				</h2>
	
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="relative">
						<input 
							type="text" 
							id="name" 
							name="name" 
							required
							value={formData.name} 
							className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-600 focus:bg-green-600" 
							placeholder="Name"
							onChange={(e) => setFormData({...formData, name: e.target.value})}
						/>
					</div>

					<div className="relative">
						<input 
							type="email" 
							id="email" 
							name="email" 
							required 
							value={formData.email}
							className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-600 focus:bg-green-600" 
							placeholder="examplel@gmail.com"
							onChange={(e) => setFormData({...formData, email: e.target.value})}
						/>
					</div>

					<div className="relative">
						<textarea 
							id="message" 
							name="message" 
							required
							value={formData.message} 
							rows={5}
							className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-600 focus:bg-green-600" 
							placeholder="Your message..."
							onChange={(e) => setFormData({...formData, message: e.target.value})}
						/>
					</div>

					<button 
						type="submit" 
						className="w-full bg-rose-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
					>
						Send Message
					</button>
				</form>
				
			</div>

		</section>
	);
};
