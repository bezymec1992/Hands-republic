<template>
	<div class="privacy-policy-page">
		<div class="container">
			<h1 class="h1">Privacy Policy</h1>
			<p>Deze privacy policy is van toepassing op de gehele website en app van de TribalDen, ongeacht op welke manier je ze opent of gebruikt.</p>
			<p>Wij behouden ons het recht voor om deze policy ten alle tijden te wijzigen door een vernieuwde versie op deze site te posten en de ingangsdatum van deze herziene versie te vermelden. Bij grote wijzigingen wordt dit vooraf per mail aangekondigd. Deze privacy policy is van kracht vanaf 30 juni 2020.</p>
			<h3>Persoonsgegevens die wij verwerken</h3>
			<p>Wij verzamelen persoonsgegevens van jou en de apparaten die je gebruikt wanneer je onze website of app gebruikt, een account bij ons aanmaakt, bewerkt of toevoegt of op een andere manier met ons communiceert. Gegevens die wij verzamelen zijn als volgt:</p>
			<p>Persoonsgegevens die je ons verstrekt door bij ons te bestellen of wanneer je een account aanmaakt:</p>
			<ul>
				<li>Gegevens als je naam, adres, geboortedatum, geslacht, telefoonnummer of e-mailadres.</li>
				<li>Andere gegevens die gekoppeld worden aan jouw account zoals je aankoopgeschiedenis.</li>
				<li>Financiële gegevens (zoals het nummer van je creditcard) die verband houden met een transactie.</li>
				<li>Verzendgegevens zoals naam, adres en eventueel een telefoonnummer van een ontvanger. Ook de tekst voor op een giftcard of een persoonlijke video valt hieronder.</li>
			</ul>
			<p>Persoonsgegevens die wij automatisch verzamelen:</p>
			<ul>
				<li>Gegeven die wij ontvangen van apparaten zoals je reclame voorkeuren en communicatie met ons.</li>
				<li>Ook ontvangen we statistieken over bekeken pagina's, internetverkeer van sites, verwijzende URL's, advertentiepagina's en je IP-adres (of een deel hiervan).</li>
			</ul>
			<h3>Verwerking bijzondere en/of gevoelige persoonsgegevens</h3>
			<p>
				Onze website heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als je er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via
				<a class="mailto" href="mailto:info@tribalsquare.com"> info@trabalsquare.com</a>
				, dan verwijderen wij deze informatie.
			</p>
			<h3>Delen van persoonsgegevens met derden</h3>
			<p>Bloemenmaker verkoopt jouw gegevens niet aan derden en zal deze uitsluitend verstrekken indien dit nodig is voor de uitvoering van onze overeenkomst met jou of om te voldoen aan een wettelijke verplichting. Persoonsgegevens worden alleen gedeeld met partijen om onze dienst correct uit te kunnen voeren. Zo loopt de betaling via onze app en website via de beschermde betaalomgeving van Adyen en hebben wij diverse bezorgpartijen waaraan wij afleveradressen doorgeven om de boeketten juist te kunnen bezorgen.</p>
			<h3>Cookies. Wat is een cookie?</h3>
			<p>Een cookie is een klein tekstbestand dat bij je bezoek aan een website naar je computer wordt gestuurd. Zowel deze website als andere partijen kunnen cookies plaatsen.</p>
			<p>Deze website gebruikt cookies om het gebruiksgemak en de prestaties van de website te verbeteren. Ook helpen ze ons om relevante en gerichte advertenties te tonen. Met behulp van cookies zorgen we er onder andere voor dat je bij een bezoek aan onze site niet steeds dezelfde informatie ontvangt of moet invoeren. Cookies maken het surfen onze de website en app dus een stuk prettiger. We gebruiken cookies of soortgelijke technologieën die op jouw apparaat staan zolang deze acties zijn (sessie cookies) en cookies die voor langere tijd op jouw apparaat blijven (persistent). Je kunt jouw cookie voorkeuren beheren via jouw browser of apparaatinstellingen.</p>
			<h3>Met welk specifiek doel plaatst deze website cookies?</h3>
			<p>We plaatsen cookies voor verschillende doeleinden:</p>
			<ul>
				<li>Noodzakelijk. We hebben cookies nodig voor een juiste werking van onze website en app. Denk bijvoorbeeld aan het kunnen gebruiken van jouw online winkelmandje. Of het onthouden van jouw cookievoorkeuren. Zonder deze cookies zou de website en app niet naar behoren werken</li>
				<li>Functioneel. Om de functionaliteit van onze website en apps te optimaliseren worden gebruiken we ook cookies. Denk hierbij aan het 'onthouden' van jouw inloggegevens, eerdere bestellingen en favorieten.</li>
				<li>Prestatie. Cookies helpen ons te begrijpen hoe onze bezoekers onze app en website graag gebruiken. We kunnen zo bijvoorbeeld zien hoe veel bezoekers er op onze website zijn geweest en op welke items of link er is geklikt. We meten dus hoe jij de website gebruikt, hoe je ons hebt gevonden.</li>
				<li>Advertenties of targeting. We cookies gebruiken om jou zo relevant mogelijke advertenties/producten te laten zien op sites van derden of op onze eigen app of website.</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "PrivacyPolicy",
	head() {
		return {
			bodyAttrs: {
				class: "bg-white"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.privacy-policy-page {
	padding-top: 5.4rem;
	padding-bottom: 5rem;
	font-size: 2rem;
	line-height: 2;
	background: $wild-sand;

	@include media-breakpoint-down(md) {
		padding-top: 2.6rem;
		padding-bottom: 6rem;
		font-size: 1.4rem;
		line-height: 1.5;
	}

	.h1 {
		margin-bottom: 2rem;
		font-size: 4rem;
		text-transform: unset;
		line-height: 1;

		@include media-breakpoint-down(md) {
			font-size: 2.4rem;
		}
	}

	h3 {
		margin-bottom: 1rem;
		font-size: 2.4rem;

		@include media-breakpoint-down(md) {
			font-size: 2rem;
		}
	}

	p {
		margin-bottom: 3.5rem;

		@include media-breakpoint-down(md) {
			margin-bottom: 2.5rem;
		}
	}

	a {
		color: $picton-blue;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	ul {
		padding-left: 1.4rem;
		margin-bottom: 0;
		list-style-type: "- ";

		li {
			margin-bottom: 3.5rem;

			@include media-breakpoint-down(md) {
				margin-bottom: 2.5rem;
			}
		}
	}
}
</style>
