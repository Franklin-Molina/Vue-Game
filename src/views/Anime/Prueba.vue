<template name="cronometro" >
    <div class="container">
      		
					<p> Tiempo: {{ formatearTiempo() }}
					</p>
            
    </div>

</template>

<script >
function pad(str, length, character) {
	var str = '' + str;
	while (str.length < length) {
		console.log('pad' + character);
		str = character + str;
	}
	return str;
};

function formatearTiempoDesdeSegundos(seg) {
	var str = '';
	var hora = null;
	var minuto = null;
	
	hora = Math.floor(seg / 60.0 / 60.0);
	str += pad(hora, 2, '0');

	minuto = Math.floor(seg / 60.0);
	while (minuto >= 60) {
		minuto -=60;
	}
	str += ':' + pad(minuto, 2, '0');

	seg = Math.floor(seg);
	while (seg >= 60) {
		seg -=60;
	}
	str += ':' + pad(seg, 2, '0');
	return str;

};

   export default {
	name: 'cronometro',
        mounted() {
            console.log('Component mounted.')
			this.contarSegundos();
        },
		data() {
			return {
				tiempo:0,
			}
		},
		methods: {
			pararTiempo: function (event) {
			    event.preventDefault();
				this.tiempo = null;
			},
			continuarTiempo: function (event) {
			    event.preventDefault();
				this.tiempo = parseInt(localStorage.tiempo);
			},
			reiniciarTiempo: function(event) {
			    event.preventDefault();
      			//this.tiempo = null;
				this.tiempo = 0;
				//this.guardarEnLocalStorage();
			},
			formatearTiempo: function () {
				return formatearTiempoDesdeSegundos(this.tiempo);
			},
			guardarEnLocalStorage: function () {
				localStorage.tiempo = this.tiempo;
				console.log('guardarLocalStorage' + parseInt(localStorage.tiempo));
				console.log('guardarLocalStorage2' + localStorage.tiempo);
			},
			contarSegundos: function() {
				var self = this;
				setInterval(function() {
					if (self.tiempo !== null) {
						self.tiempo++;
						console.log('tiempo' + self.tiempo);
						self.guardarEnLocalStorage();
					}
				}, 1000);
			}
		}

    }
</script>
