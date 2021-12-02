import React from 'react'

import logoUsco from '../img/logo-usco.png'



export const FormRegister = () => {
	return (
		<section id="pricing" className="pricing">

			<div className="container" data-aos="fade-up">

				<header className="section-header">
					<h2>Bienvenido</h2>
					<p>Register</p>
				</header>

				<div className="row justify-content-center" data-aos="fade-left">
					<div className="col-lg-8 col-md-8  " data-aos="zoom-in" data-aos-delay="100">
						<div className="box row rounded-10">

							<form >
								<div className="row">

										<div className="col-12">
											<img src={logoUsco} className="img-fluid" alt="" />
											<link rel="shortcut icon" href="https://www.usco.edu.co/imagen-institucional/favicon.ico" type="image/x-icon" />
										</div>
									<div className="col-lg-6 col-md-12">
										<div className="row gy-4 p-3">
											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-person-fill "></i></span>
												<input type="text" className="form-control" placeholder="Nombres" aria-label="Username" aria-describedby="basic-addon1" />
											</div>
											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="text" className="form-control" placeholder="Primer Apellido" aria-label="Username" aria-describedby="basic-addon1" />
											</div>
											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="text" className="form-control" placeholder="Segundo Apellido" aria-label="Username" aria-describedby="basic-addon1" />
											</div>
											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Pais</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su Pais</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Tipo Documento</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su tipo de Documento</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>
											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="number" className="form-control" placeholder="Numero de Documento" aria-label="Username" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Lugar de Expedicion</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su Municipio</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Estado Civil</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="password" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
											</div>

										</div>
									</div>

									<div className="col-lg-6 col-md-12">
										<div className="row gy-4 p-3">

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="email" className="form-control" placeholder="Correo Personal" aria-label="CorreoPersonal" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="number" className="form-control" placeholder="Telefono Personal" aria-label="TelefonoPersonal" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="email" className="form-control" placeholder="Correo Institucional" aria-label="CorreoInstitucional" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
												<input type="date" className="form-control" placeholder="Fecha de Nacimiento" aria-label="FechaNacimiento" aria-describedby="basic-addon1" />
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Lugar de Nacimiento</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su municipio</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Sexo</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su Sexo</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Grupo Etnico</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione su Grupo Etnico</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

											<div className="input-group mb-3">
												<label className="input-group-text" for="inputGroupSelect01">Discapacidad</label>
												<select className="form-select" id="inputGroupSelect01">
													<option selected disabled>Seleccione</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
											</div>

										</div>
									</div>
								</div>


								<div className="row ">
									<div className="">
										<button className="btn-buy text-decoration-none">Login</button>
									</div>
								</div>
							</form>


						</div>
					</div>
				</div>

			</div>
		</section>
	)
}
