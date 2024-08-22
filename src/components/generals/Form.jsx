import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line react/prop-types
export default function Form({ reverse }) {
  const [formData, setFormData] = useState({
    nombres: '',
    carrera: '',
    celular: '',
    correo: '',
    mensaje: '',
  });

  const [isCarreraSelected, setIsCarreraSelected] = useState(false);

  const [ref, isVisible] = useInView({
    threshold: 0,
    rootMargin: '0px 0px -300px 0px',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'carrera' && value !== '') {
      setIsCarreraSelected(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some((value) => value === '');

    if (isAnyFieldEmpty) return;

    const message = `Hola, soy ${formData.nombres}, ${
      formData.carrera !== 'otros' ? `estudiante de ${formData.carrera}` : ''
    }.\nMe gustaría solicitar el servicio de Redacción de Tesis.\nMi número de celular es ${formData.celular}.\nMensaje adicional: ${formData.mensaje}`;

    const url = `https://wa.me/34910918418?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

    setFormData({
      nombres: '',
      carrera: '',
      celular: '',
      correo: '',
      mensaje: '',
    });

    setIsCarreraSelected(false);
  };

  return (
    <div className={`form ${reverse ? 'reverse' : ''} translate-x ${isVisible ? 'active' : ''}`} ref={ref}>
      <p className="form__title">Agenda una asesoría</p>
      <p className="form__paragraph paragraph">Completa el formulario de contacto para comunicarte con nosotros</p>
      <form className="form__form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={formData.nombres}
          onChange={handleChange}
        />
        <select
          id="cmbCarrera"
          className={`form__input form__input--select ${isCarreraSelected ? 'form__input--change' : ''}`}
          name="carrera"
          value={formData.carrera}
          onChange={handleChange}
        >
          <option value="" disabled>
            Seleccione una carrera
          </option>
          <option value="Ciencias de la Salud">Ciencias de la Salud</option>
          <option value="Ciencias Sociales y jurídicas">Ciencias Sociales y jurídicas</option>
          <option value="Ciencias">Ciencias</option>
          <option value="Ingeniería y Humanidades">Ingeniería y Humanidades</option>
          <option value="Carreras técnicas">Carreras técnicas</option>
          <option value="otros">Otros</option>
        </select>
        <input
          className="form__input"
          type="tel"
          name="celular"
          placeholder="Celular"
          value={formData.celular}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          value={formData.correo}
          onChange={handleChange}
        />
        <input
          className="form__input"
          type="text"
          name="mensaje"
          placeholder="Mensaje adicional"
          value={formData.mensaje}
          onChange={handleChange}
        />
        <input className="btn btn-primary btn-primary--submit" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
