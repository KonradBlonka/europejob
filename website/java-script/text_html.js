import * as i18next from 'https://cdn.skypack.dev/i18next@21';
class MyNavbar extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <nav>
    <div class="navbar container"> 
        <div class="logo" "><a href="/index.html"><img src="../pictures/logo.png" alt="Europejob"/></a></div>
        <div class="open-navbar"><span></span></div>
        <div class="darkened-screen"></div>
        <div class="nav-links">  
            <div class="close-navbar"><i class='bx bx-x'></i></div>                                 
            <ul class="links">    
                <li class="links-box1"><ul class="links-box1-inside"><a href="#" data-toggle="pop-box-menu"><span id="employee-navbar">PRACOWNIK</span><i class='bx bxs-chevron-down arrow pracownik-arrow'></i></a></ul>
                <ul class="pracownik-menu box-menu">
                    <li><a id="offers-navbar" href="offers.html">Oferty pracy</a></li>
                    <li><a id="CV-navbar" href="CV.html">Prześlij CV</a></li>
                    <li><a id="benefits-navbar" href="benefits.html">Benefity</a></li>
                </ul>
                </li>
                <!--
                <li class="links-box2"><ul class="links-box2-inside"><a id="employer-navbar" href="#" data-toggle="pop-box-menu">PRACODAWCA<i class='bx bxs-chevron-down arrow pracodawca-arrow'></i></a></ul>
                    <ul class="pracodawca-menu box-menu">
                        <li><a href="about">Dlaczego my</a></li>
                        <li><a href="recruitment">Rekrutacja pracowników</a></li>
                        <li><a href="cooperation">Współpraca</a></li>
                    </ul>
                </li>
                -->
                <li class="contact-link"><a href="/index.html#contact" id="contact-text">KONTAKT</a></li>
                <li><a href="#">робота в Польщі</a></li>
                <li class="links-box3"><ul class="links-box3-inside"><a href="#" data-toggle="pop-box-menu"><span id="language-navbar">JĘZYK</span><i class='bx bxs-chevron-down arrow translate-arrow'></i></a></ul>
                    <ul class="translate-menu box-menu">
                        <li><button id="button-pl-menu">Polski</button></li>
                        <li><button id="button-eng-menu">Angielski</button></li>
                        <!--
                        <li><a href="#">ukrainian</a></li>
                        <li><a href="#">georgian</a></li>
                        <li><a href="#">russian</a></li>
                        -->
                    </ul>
                </li>
            </ul>
        </div> 
        <ul class="translate">
            <li><a href="#"><i class='bx bx-globe'></i></a>
                <ul class="translate-box">
                    <li><button id="button-pl-box">Polski</button></li>
                    <li><button id="button-eng-box">Angielski</button></li>
                    <!--
                    <li><a href="#">ukrainian</a></li>
                    <li><a href="#">georgian</a></li>
                    <li><a href="#">russian</a></li>
                    -->
                </ul>
            </li>
            <div class="open_navbar"><span></span></div>
        </ul>
        
    </div>                                            
</nav>
        `;
    }
}
customElements.define('my-navbar', MyNavbar);


class MyFooter extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <footer>
    <div class="footer_row">
    <div class="footer_col">
        <div class= "logo_footer"><a href="/index.html"><img src="../pictures/logo.png"></a></div>      
    </div>
    <div class="footer_col">
        <h2 id="employee-footer">Pracownik</h2>
        <ul>
            <li><a id="offers-footer" href="/offers.html">Oferty pracy</a></li>
            <li><a id="CV-footer" href="/CV.html">Prześlij CV</a></li>
            <li><a id="benefits-footer" href="/benefits.html">Benefity</a></li>
            <li><a href="#">робота в Польщі</a></li>
        </ul>
    </div>
    <!--
    <div class="footer_col">
        <h2>Pracodawca</h2>
        <ul>
            <li><a href="#">Dlaczego my</a></li>
            <li><a href="#">Rekrutacja pracowników</a></li>
            <li><a href="#">Współpraca</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
    </div>
    -->
    <div class="footer_col">
        <h2 id="regulations-footer">Regulaminy</h2>
        <ul>
        <li><a id="privacy-footer" href="/privacy.html">Polityka prywatności</a></li>
        <li><a id="rodo-footer" href="/rodo.html">Klauzula RODO</a></li>
        </ul>
    </div>
</div>
<hr>
<div class="copyright"><a>© All rights reserved 2023</a></div>
</footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);


class MyJobText extends HTMLElement{
    connectedCallback() {
        
        this.innerHTML = `
    
                        <div class="main-job-role">
                            <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
                            <ul>
                                <li class="main-job-role-list" id="main-job-role-list-1-1">Identyfikacja i diagnoza awarii maszyn przemysłowych, 
                                    w tym analiza problemów mechanicznych, elektrycznych i hydraulicznych.</li>
                                <li class="main-job-role-list" id="main-job-role-list-1-2">Wykonywanie napraw maszyn i urządzeń, w tym montaż części, 
                                    wymianę uszkodzonych komponentów i regulacje.</li>
                                <li class="main-job-role-list" id="main-job-role-list-1-3">Przeprowadzanie regularnych prac konserwacyjnych, takich jak smarowanie, czyszczenie, regulacje 
                                    i kontrola stanu technicznego maszyn.</li>
                                <li class="main-job-role-list" id="main-job-role-list-1-4">Zapewnienie bezpiecznego środowiska pracy i przestrzeganie przepisów bezpieczeństwa 
                                    w miejscu pracy.</li>
                                <li class="main-job-role-list" id="main-job-role-list-1-5">Przeprowadzanie testów, aby upewnić się, że maszyny działają poprawnie i spełniają określone 
                                    standardy jakości.</li>
        
                            </ul>
                        </div>
                        <div class="main-job-skill">
                        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
                            <ul>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-1">Zrozumienie zasad mechaniki i działania maszyn przemysłowych.</li>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-2">Komunikatywna znajomość języka polskiego w mowie i piśmie (poziom B1).</li>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-3">Znajomość elektroniki i elektromechaniki potrzebna do diagnozowania problemów elektrycznych.</li>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-4">Znajomość narzędzi i sprzętu wykorzystywanego w naprawach maszyn.</li>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-5">Zdolność do czytania i interpretacji schematów technicznych, instrukcji obsługi i dokumentacji technicznej.</li>
                                <li class="main-job-skill-list" id="main-job-skill-list-1-6">Zrozumienie przepisów i procedur bezpieczeństwa w miejscu pracy.</li>
                            </ul>
                        
                    </div>
                
        `;
        // this.updateTranslation();
    }
    // updateTranslation() {
    //     const mainJobRoleText = document.getElementById('main-job-role-text');
        
    //     // Pobierz tłumaczenia dla każdego elementu
        
    //     mainJobRoleText.textContent = i18next.t('main-job-role-text');
       
    // }
    
}
customElements.define('my-job-text', MyJobText);

class MyJobText1 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
            <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
                <ul>
                    <li class="main-job-role-list" id="main-job-role-list-2-1">Pomocnik mechanika powinien być w stanie asystować w diagnozowaniu problemów 
                    z maszynami przemysłowymi, identyfikować uszkodzenia i ustalać przyczyny awarii.</li>
                    <li class="main-job-role-list" id="main-job-role-list-2-2">Pomocnik mechanika powinien pomagać w naprawach maszyn i urządzeń przemysłowych. Może to obejmować 
                    wymianę części, smarowanie, regulacje i inne działania konserwacyjne.</li>
                    <li class="main-job-role-list" id="main-job-role-list-2-3">Pomagać w demontowaniu uszkodzonych części maszyn oraz w montażu nowych podczas napraw.</li>
                    <li class="main-job-role-list" id="main-job-role-list-2-4">Pomocnik powinien pomagać w utrzymaniu maszyn w czystości i wykonywaniu prac konserwacyjnych, 
                    takich jak czyszczenie, wymiana płynów, oleju czy regulacja elementów mechanicznych.</li>
                    <li class="main-job-role-list" id="main-job-role-list-2-5">Pomocnik mechanika musi być zaznajomiony z różnymi narzędziami 
                    i sprzętem używanym w naprawach maszyn.</li>
                </ul>
        </div>
        <div class="main-job-skill">
            <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
                <ul>
                    <li class="main-job-skill-list" id="main-job-skill-list-2-1">Znajomość języka polskiego w mowie i piśmie na poziomie nie mniejszym niż B1.</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-2-2">Pomocnik mechanika musi znać i przestrzegać przepisów bezpieczeństwa oraz stosować odpowiednie środki ochrony osobistej.</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-2-3">Technologia w przemyśle jest stale rozwijana, pomocnik mechanika powinien być gotów do ciągłego doskonalenia swoich umiejętności 
                    i nauki nowych technik naprawczych.</li>
                </ul>                        
        </div>
        `;
    }
}
customElements.define('my-job-text1', MyJobText1);

class MyJobText2 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
            <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
                <ul>
                    <li class="main-job-role-list" id="main-job-role-list-3-1">Pomocnik mechanika powinien być w stanie asystować w diagnozowaniu problemów z maszynami przemysłowymi, 
                    identyfikować uszkodzenia i ustalać przyczyny awarii.</li>
                    <li class="main-job-role-list" id="main-job-role-list-3-2">Pomocnik mechanika powinien pomagać w naprawach maszyn i urządzeń przemysłowych. 
                    Może to obejmować wymianę części, smarowanie, regulacje i inne działania konserwacyjne.</li>
                    <li class="main-job-role-list" id="main-job-role-list-3-3">Pomagać w demontowaniu uszkodzonych części maszyn oraz w montażu nowych podczas napraw.</li>
                    <li class="main-job-role-list" id="main-job-role-list-3-4">Pomocnik powinien pomagać w utrzymaniu maszyn w czystości i wykonywaniu prac konserwacyjnych, 
                    takich jak czyszczenie, wymiana płynów, oleju czy regulacja elementów mechanicznych.</li>
                    <li class="main-job-role-list" id="main-job-role-list-3-5">Pomocnik mechanika musi być zaznajomiony z różnymi narzędziami 
                    i sprzętem używanym w naprawach maszyn.</li>
                </ul>
        </div>
        <div class="main-job-skill">
            <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
                <ul>
                    <li class="main-job-skill-list" id="main-job-skill-list-3-1">Znajomość języka polskiego w mowie i piśmie na poziomie nie mniejszym niż B1.</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-3-2">Pomocnik mechanika musi znać i przestrzegać przepisów bezpieczeństwa oraz stosować odpowiednie środki ochrony osobistej.</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-3-3">Technologia w przemyśle jest stale rozwijana, pomocnik mechanika powinien być gotów do ciągłego doskonalenia swoich umiejętności 
                    i nauki nowych technik naprawczych.</li>
                </ul>                        
        </div>
        `;
    }
}
customElements.define('my-job-text2', MyJobText2);

class MyJobText3 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
            <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
                <ul>
                    <li class="main-job-role-list" id="main-job-role-list-4-1">Operator jest odpowiedzialny za prawidłową obsługę wózka widłowego, włączając go, 
                    przemieszczanie się, zatrzymywanie i wyłączanie.</li>
                    <li class="main-job-role-list" id="main-job-role-list-4-2">Głównym zadaniem operatora jest transport i manipulacja materiałami przy użyciu wózka widłowego. 
                    To może obejmować podnoszenie i przemieszczanie palet, kontenerów, produktów i innych materiałów.</li>
                    <li class="main-job-role-list" id="main-job-role-list-4-3">Operator odpowiedzialny jest za załadunek i rozładunek towarów, 
                    a także ich przechowywanie w odpowiednich miejscach.</li>
                    <li class="main-job-role-list" id="main-job-role-list-4-4">Operator musi przestrzegać zasad bezpieczeństwa podczas pracy na wózku widłowym. 
                    Obejmuje to przestrzeganie przepisów, noszenie pasów bezpieczeństwa i unikanie ryzykownych manewrów.</li>
                    <li class="main-job-role-list" id="main-job-role-list-4-5">Operator powinien być odpowiedzialny za utrzymanie wózka widłowego 
                    w dobrym stanie technicznym, w tym regularne kontrole techniczne, smarowanie i czyszczenie.</li>
                    <li class="main-job-role-list" id="main-job-role-list-4-6">Operator zauważywszy jakieś problemy lub awarie z wózkiem widłowym, 
                    powinien o tym fakcie niezwłocznie zgłosić odpowiednim osobom lub działom.</li>
                </ul>
        </div>
        <div class="main-job-skill">
            <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
                <ul>
                    <li class="main-job-skill-list" id="main-job-skill-list-4-1">Znajomość języka polskiego w mowie na poziomie nie mniejszym niż A2.</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-4-2">Operator wózka widłowego powinien posiadać odpowiednie uprawnienia 
                    do prowadzenia wózka widłowego (certyfikat UDT).</li>
                    <li class="main-job-skill-list" id="main-job-skill-list-4-3">Operator powinien być dobrze zaznajomiony z obsługą konkretnego 
                    modelu wózka widłowego, którym będzie pracował.</li>   
                    <li class="main-job-skill-list" id="main-job-skill-list-4-4">Operator powinien znać i przestrzegać przepisów bezpieczeństwa 
                    dotyczących pracy na wózku widłowym.</li>  
                    <li class="main-job-skill-list" id="main-job-skill-list-4-5">Operator powinien być w stanie diagnozować problemy 
                    z wózkiem widłowym i reagować na awarie.</li>    
                    <li class="main-job-skill-list" id="main-job-skill-list-4-6">Umiejętność komunikacji z innymi pracownikami 
                    i personelem nadzorującym, aby skoordynować pracę i bezpiecznie przemieszczać materiały.</li>  
                </ul>                   
        </div>
        `;
    }
}
customElements.define('my-job-text3', MyJobText3);

class MyJobText4 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-5-1">Operator jest odpowiedzialny za prawidłową obsługę wózka widłowego, włączając go, 
                przemieszczanie się, zatrzymywanie i wyłączanie.</li>
                <li class="main-job-role-list" id="main-job-role-list-5-2">Głównym zadaniem operatora jest transport i manipulacja materiałami przy użyciu wózka widłowego. 
                To może obejmować podnoszenie i przemieszczanie palet, kontenerów, produktów i innych materiałów.</li>
                <li class="main-job-role-list" id="main-job-role-list-5-3">Operator odpowiedzialny jest za załadunek i rozładunek towarów, 
                a także ich przechowywanie w odpowiednich miejscach.</li>
                <li class="main-job-role-list" id="main-job-role-list-5-4">Operator musi przestrzegać zasad bezpieczeństwa podczas pracy na wózku widłowym. 
                Obejmuje to przestrzeganie przepisów, noszenie pasów bezpieczeństwa i unikanie ryzykownych manewrów.</li>
                <li class="main-job-role-list" id="main-job-role-list-5-5">Operator powinien być odpowiedzialny za utrzymanie wózka widłowego 
                w dobrym stanie technicznym, w tym regularne kontrole techniczne, smarowanie i czyszczenie.</li>
                <li class="main-job-role-list" id="main-job-role-list-5-6">Operator zauważywszy jakieś problemy lub awarie z wózkiem widłowym, 
                powinien o tym fakcie niezwłocznie zgłosić odpowiednim osobom lub działom.</li>
            </ul>
    </div>
    <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-5-1">Znajomość języka polskiego w mowie na poziomie nie mniejszym niż A2.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-5-2">Operator wózka widłowego powinien posiadać odpowiednie uprawnienia 
                do prowadzenia wózka widłowego (certyfikat UDT).</li>
                <li class="main-job-skill-list" id="main-job-skill-list-5-3">Operator powinien być dobrze zaznajomiony z obsługą konkretnego 
                modelu wózka widłowego, którym będzie pracował.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-5-4">Operator powinien znać i przestrzegać przepisów bezpieczeństwa 
                dotyczących pracy na wózku widłowym.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-5-5">Operator powinien być w stanie diagnozować problemy 
                z wózkiem widłowym i reagować na awarie.</li>    
                <li class="main-job-skill-list" id="main-job-skill-list-5-6">Umiejętność komunikacji z innymi pracownikami 
                i personelem nadzorującym, aby skoordynować pracę i bezpiecznie przemieszczać materiały.</li>                     
    </div>
        `;
    }
}
customElements.define('my-job-text4', MyJobText4);

class MyJobText5 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-6-1">Rzeźnik jest odpowiedzialny za humanitarne i zgodne z przepisami 
                zabijanie zwierząt. Proces ten jest ściśle kontrolowany, a zwierzęta ubijane są w sposób minimalizujący ich cierpienie.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-2">Po uboju zwierząt rzeźnik rozdziela ciała zwierząt na części, takie jak karkówki, żeberka, 
                udka, filety itp. Następnie przygotowuje mięso do dalszej obróbki.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-3">Rzeźnik dokładnie ocenia jakość mięsa, sprawdzając, czy nie ma uszkodzeń, zakażeń 
                lub innych nieprawidłowości.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-4">Rzeźnik musi ściśle przestrzegać przepisów sanitarnych i weterynaryjnych w celu 
                zapewnienia bezpieczeństwa żywności oraz zapobiegania rozprzestrzenianiu się chorób.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-5">Rzeźnik dba o utrzymanie narzędzi i sprzętu w czystości i odpowiednim stanie technicznym.
                 Narzędzia takie jak noże, piły i hakownice są często używane w pracy rzeźnika.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-6">Rzeźnik zajmuje się utylizacją odpadów i recyklingiem, tak aby pozbyć się pozostałości 
                po procesie uboju zwierząt.</li>
                <li class="main-job-role-list" id="main-job-role-list-6-7">Rzeźnik pracuje w zespole.</li>
            </ul>
    </div>
        `;
    }
}
customElements.define('my-job-text5', MyJobText5);

class MyJobText6 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-7-1">Pracownik linii produkcyjnej jest odpowiedzialny za montaż, 
                produkcję i/lub składanie części lub produktów zgodnie z określonymi specyfikacjami.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-2">Obejmuje prace manualne, takie jak sprawdzanie 
                jakości produktu, pakowanie i etykietowanie.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-3">Pracownik musi dokładnie kontrolować 
                jakość wykonywanych czynności i produktów, aby zapewnić zgodność z normami jakości.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-4">Pracownik linii produkcyjnej musi pracować w ramach 
                wyznaczonych terminów i norm produkcyjnych, aby utrzymać ciągłość produkcji.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-5">Dbanie o utrzymanie porządku na stanowisku 
                pracy oraz utrzymanie maszyn i narzędzi w dobrym stanie technicznym.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-6">Zachowanie przepisów bezpieczeństwa w miejscu 
                pracy, w tym stosowanie odpowiednich środków ochrony osobistej.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-7">W niektórych przypadkach praca na linii produkcyjnej 
                wymaga współpracy z innymi pracownikami i koniecznością skoordynowania działań.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-8">Zgłaszanie problemów, awarii maszyn lub innych 
                nieprawidłowości przełożonemu lub osobie odpowiedzialnej za produkcję.</li>
                <li class="main-job-role-list" id="main-job-role-list-7-9">Prowadzenie dokumentacji dotyczącej 
                produkcji, kontroli jakości i innych istotnych informacji.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-7-1">Pracownik linii produkcyjnej musi być zdolny 
                do wykonywania prac manualnych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-7-2">Zrozumienie procesów produkcyjnych 
                i procedur związanych z produkcją.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-7-3">Zdolność do dokładnej kontroli 
                jakości i rozpoznawania odchyleń od norm.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-7-4">Znajomość i przestrzeganie 
                przepisów bezpieczeństwa w miejscu pracy.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-7-5">Umiejętność komunikowania 
                się z innymi członkami zespołu i przełożonymi.</li>    
                                    
        </div>
    
        `;
    }
}
customElements.define('my-job-text6', MyJobText6);

class MyJobText7 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-8-1">Pracownik linii produkcyjnej jest odpowiedzialny za montaż, 
                produkcję i/lub składanie części lub produktów zgodnie z określonymi specyfikacjami.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-2">Obejmuje prace manualne, takie jak sprawdzanie 
                jakości produktu, pakowanie i etykietowanie.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-3">Pracownik musi dokładnie kontrolować 
                jakość wykonywanych czynności i produktów, aby zapewnić zgodność z normami jakości.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-4">Pracownik linii produkcyjnej musi pracować w ramach 
                wyznaczonych terminów i norm produkcyjnych, aby utrzymać ciągłość produkcji.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-5">Dbanie o utrzymanie porządku na stanowisku 
                pracy oraz utrzymanie maszyn i narzędzi w dobrym stanie technicznym.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-6">Zachowanie przepisów bezpieczeństwa w miejscu 
                pracy, w tym stosowanie odpowiednich środków ochrony osobistej.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-7">W niektórych przypadkach praca na linii produkcyjnej 
                wymaga współpracy z innymi pracownikami i koniecznością skoordynowania działań.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-8">Zgłaszanie problemów, awarii maszyn lub innych 
                nieprawidłowości przełożonemu lub osobie odpowiedzialnej za produkcję.</li>
                <li class="main-job-role-list" id="main-job-role-list-8-9">Prowadzenie dokumentacji dotyczącej 
                produkcji, kontroli jakości i innych istotnych informacji.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-8-1">Pracownik linii produkcyjnej musi być zdolny 
                do wykonywania prac manualnych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-8-2">Zrozumienie procesów produkcyjnych 
                i procedur związanych z produkcją.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-8-3">Zdolność do dokładnej kontroli 
                jakości i rozpoznawania odchyleń od norm.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-8-4">Znajomość i przestrzeganie 
                przepisów bezpieczeństwa w miejscu pracy.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-8-5">Umiejętność komunikowania 
                się z innymi członkami zespołu i przełożonymi.</li>    
                </ul>
        </div>
        `;
    }
}
customElements.define('my-job-text7', MyJobText7);

class MyJobText8 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-9-1">Operator jest odpowiedzialny 
                za obsługę różnych maszyn włókienniczych, takich jak przędzarki, tkalnie, przędzarki ringowe, 
                urządzenia do barwienia i wykańczania tkanin oraz wiele innych.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-2">Operator musi ustawiać odpowiednie parametry maszyn, 
                takie jak prędkość, napięcie nici, temperatura i ciśnienie, aby uzyskać pożądane wyniki.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-3">Operator monitoruje proces produkcji, aby zapewnić 
                jego ciągłość i zgodność z normami jakościowymi.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-4">W razie awarii lub problemów z maszynami operator 
                jest odpowiedzialny za ich diagnozowanie i podejmowanie działań naprawczych.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-5">Operator sprawdza wyprodukowane materiały 
                i produkty pod kątem jakości, identyfikując wszelkie nieprawidłowości i wady.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-6">W zależności od potrzeb produkcji operator 
                może dokonywać zmian narzędzi i przystawek na maszynach.</li>
                <li class="main-job-role-list" id="main-job-role-list-9-7">Operator musi przestrzegać przepisów dotyczących 
                bezpieczeństwa w miejscu pracy, włącznie z noszeniem odpowiedniego sprzętu ochrony osobistej.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-9-1">Operator musi zrozumieć proces produkcyjny 
                i parametry maszyn włókienniczych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-9-2">Umiejętność obsługi konkretnych maszyn 
                włókienniczych, włącznie z ustawianiem i regulacją parametrów.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-9-3">Zdolność do dokładnej kontroli jakości 
                wyprodukowanych materiałów i produktów.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-9-4">Operator musi umieć rozpoznać i rozwiązywać 
                problemy techniczne, które mogą wystąpić podczas pracy na maszynach.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-9-5">Znajomość różnych rodzajów włókien 
                i materiałów włókienniczych oraz ich właściwości.</li> 
                <li class="main-job-skill-list" id="main-job-skill-list-9-6">Umiejętność komunikowania się z innymi członkami 
                zespołu produkcyjnego oraz technikami i inżynierami w razie potrzeby.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-9-7">Podstawowa znajomość języka polskiego w mowie.</li>     
                </ul>
        </div>
        `;
    }
}
customElements.define('my-job-text8', MyJobText8);

class MyJobText9 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-10-1">Operator jest odpowiedzialny za prawidłową obsługę wtryskarki, 
                włączając ją, ustawianie odpowiednich parametrów i monitorowanie jej działania.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-2">Ustawianie odpowiednich parametrów wtrysku, takich 
                jak temperatura, ciśnienie i czas wtrysku, aby uzyskać optymalną jakość produktu.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-3">Przeprowadzanie kontroli jakości wyprodukowanych 
                części, sprawdzanie, czy spełniają określone standardy jakości.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-4">Identyfikacja i rozwiązywanie problemów w procesie 
                wtrysku, takich jak zatkanie formy lub problemy z jakością produktu.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-5">Dbanie o utrzymanie wtryskarki w dobrym stanie 
                technicznym, włącznie z czyszczeniem i smarowaniem.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-6">Przestrzeganie przepisów bezpieczeństwa w miejscu pracy, 
                w tym stosowanie odpowiednich środków ochrony osobistej.</li>
                <li class="main-job-role-list" id="main-job-role-list-10-7">Współpraca z zespołem odpowiedzialnym za produkcję.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-10-1">Zrozumienie procesu wtrysku plastiku, 
                w tym jego parametrów i zasad działania.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-10-2">Umiejętność obsługi konkretnej 
                wtryskarki oraz znajomość jej funkcji i parametrów.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-10-3">Zdolność do dokładnej kontroli jakości 
                i rozpoznawania odchyleń od norm.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-10-4">Zrozumienie różnych rodzajów 
                tworzyw sztucznych i ich właściwości.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-10-5">Znajomość i przestrzeganie 
                przepisów bezpieczeństwa w miejscu pracy.</li> 
                <li class="main-job-skill-list" id="main-job-skill-list-10-6">Zrozumienie ogólnego procesu produkcyjnego 
                i jego znaczenia w kontekście całej produkcji.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-10-7">Znajomość języka polskiego w mowie 
                i piśmie na poziomie nie mniejszym niż B1.</li>     
                </ul>
        </div>
        `;
    }
}
customElements.define('my-job-text9', MyJobText9);

class MyJobText10 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-11-1">Przygotowywanie materiałów, które mają być zespawane, 
                w tym cięcie, czyszczenie i usuwanie zanieczyszczeń z powierzchni spawanych części.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-2">Ustawianie odpowiednich parametrów spawania, takich jak prąd, napięcie, 
                przepływ gazu i prędkość podawania drutu, w zależności od rodzaju materiału i grubości.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-3">Obsługa spawalniczych maszyn MIG, MAG lub TIG, w tym pistoletów 
                spawalniczych, źródeł prądu, zasobników z gazem ochronnym i innych narzędzi związanych z procesem spawania.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-4">Precyzyjne prowadzenie łuku spawalniczego i tworzenie trwałych 
                i bezpiecznych spoin, zwracając uwagę na jakość i wygląd spawów.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-5">Inspekcja spoin w celu sprawdzenia, czy spełniają określone 
                standardy jakości oraz wykonywanie ewentualnych poprawek.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-6">Interpretowanie rysunków technicznych, które opisują, 
                jakie spoiny i połączenia są wymagane w projekcie.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-7">Przestrzeganie przepisów dotyczących bezpieczeństwa 
                pracy i ochrony zdrowia, a także norm jakościowych i branżowych.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-8">Rozpoznawanie i rozwiązywanie problemów technicznych, 
                które mogą pojawić się podczas spawania.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-9">Prowadzenie dokładnej dokumentacji dotyczącej procesu 
                spawania, takiej jak raporty jakości i inne zapisy.</li>
                <li class="main-job-role-list" id="main-job-role-list-11-10">Współpraca z innymi spawaczami 
                i członkami zespołu produkcyjnego.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-11-1">Zrozumienie procesu spawania MIG, MAG i/lub TIG, 
                umiejętność obsługi odpowiedniego sprzętu i narzędzi.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-11-2">Znajomość różnych rodzajów materiałów, takich 
                jak stal, aluminium czy nierdzewna oraz umiejętność dostosowywania technik spawania do konkretnego materiału.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-11-3">Precyzyjne prowadzenie łuku spawalniczego w celu uzyskania 
                trwałych, bezpiecznych i estetycznych spoin.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-11-4">Umiejętność dokładnej kontroli jakości spoin 
                i wykrywania ewentualnych błędów.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-11-5">Zdolność do odczytywania i interpretowania 
                rysunków technicznych.</li> 
                <li class="main-job-skill-list" id="main-job-skill-list-11-6">Umiejętność rozpoznawania i rozwiązywania 
                problemów technicznych podczas procesu spawania.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-11-7">Przestrzeganie ścisłych zasad bezpieczeństwa 
                w miejscu pracy oraz dbałość o higienę osobistą.</li>     
                <li class="main-job-skill-list" id="main-job-skill-list-11-8">Podstawowa znajomość języka polskiego w mowie.</li>  
                </ul>
        </div>
        `;
    }
}
customElements.define('my-job-text10', MyJobText10);

class MyJobText11 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-12-1">Przygotowywanie materiałów, które mają być zespawane, 
                w tym cięcie, czyszczenie i usuwanie zanieczyszczeń z powierzchni spawanych części.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-2">Ustawianie odpowiednich parametrów spawania, takich jak prąd, napięcie, 
                przepływ gazu i prędkość podawania drutu, w zależności od rodzaju materiału i grubości.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-3">Obsługa spawalniczych maszyn MIG, MAG lub TIG, w tym pistoletów 
                spawalniczych, źródeł prądu, zasobników z gazem ochronnym i innych narzędzi związanych z procesem spawania.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-4">Precyzyjne prowadzenie łuku spawalniczego i tworzenie trwałych 
                i bezpiecznych spoin, zwracając uwagę na jakość i wygląd spawów.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-5">Inspekcja spoin w celu sprawdzenia, czy spełniają określone 
                standardy jakości oraz wykonywanie ewentualnych poprawek.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-6">Interpretowanie rysunków technicznych, które opisują, 
                jakie spoiny i połączenia są wymagane w projekcie.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-7">Przestrzeganie przepisów dotyczących bezpieczeństwa 
                pracy i ochrony zdrowia, a także norm jakościowych i branżowych.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-8">Rozpoznawanie i rozwiązywanie problemów technicznych, 
                które mogą pojawić się podczas spawania.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-9">Prowadzenie dokładnej dokumentacji dotyczącej procesu 
                spawania, takiej jak raporty jakości i inne zapisy.</li>
                <li class="main-job-role-list" id="main-job-role-list-12-10">Współpraca z innymi spawaczami 
                i członkami zespołu produkcyjnego.</li>
            </ul>
            </div>
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-12-1">Zrozumienie procesu spawania MIG, MAG i/lub TIG, 
                umiejętność obsługi odpowiedniego sprzętu i narzędzi.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-12-2">Znajomość różnych rodzajów materiałów, takich 
                jak stal, aluminium czy nierdzewna oraz umiejętność dostosowywania technik spawania do konkretnego materiału.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-12-3">Precyzyjne prowadzenie łuku spawalniczego w celu uzyskania 
                trwałych, bezpiecznych i estetycznych spoin.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-12-4">Umiejętność dokładnej kontroli jakości spoin 
                i wykrywania ewentualnych błędów.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-12-5">Zdolność do odczytywania i interpretowania 
                rysunków technicznych.</li> 
                <li class="main-job-skill-list" id="main-job-skill-list-12-6">Umiejętność rozpoznawania i rozwiązywania 
                problemów technicznych podczas procesu spawania.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-12-7">Przestrzeganie ścisłych zasad bezpieczeństwa 
                w miejscu pracy oraz dbałość o higienę osobistą.</li>     
                <li class="main-job-skill-list" id="main-job-skill-list-12-8">Podstawowa znajomość języka polskiego w mowie.</li>  
                </ul>
        </div>
        `;
    }
}
customElements.define('my-job-text11', MyJobText11);

class MyJobText12 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-13-1">Betoniarz jest odpowiedzialny za przygotowanie odpowiedniej mieszanki 
                betonu, w tym pomiar i mieszanie składników, takich jak cement, piasek, żwir i woda, zgodnie z określonymi proporcjami.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-2">Przewożenie betonu z centrali betonu lub mieszalni na miejsce budowy, używając 
                specjalnych pojazdów, takich jak betonowe mikserki.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-3">Rozładunek betonu na miejscu budowy i jego równomierne rozprowadzenie, 
                w tym w formach lub na powierzchniach, gdzie ma być użyty.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-4">Wykorzystywanie wibratorów betonowych w celu usunięcia powietrza i zagęszczenia 
                mieszanki betonu, co przyczynia się do wytrzymałości i trwałości konstrukcji.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-5">Układanie betonu w określonym kształcie i na określonym poziomie, 
                a także wygładzanie go narzędziami ręcznymi lub mechanicznymi.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-6">Monitorowanie jakości mieszanki betonu i pracy zgodnie z wymaganymi standardami 
                jakości oraz ewentualne korygowanie problemów.</li>
                <li class="main-job-role-list" id="main-job-role-list-13-7">Przestrzeganie zasad bezpieczeństwa w miejscu pracy, w tym noszenie odpowiedniego 
                sprzętu ochrony osobistej i zapobieganie wypadkom.</li>
            </ul>
        </div>     
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-13-1">Zrozumienie właściwości betonu, w tym mieszanki, czasu 
                utwardzania i procesów chemicznych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-13-2">Umiejętność obsługi narzędzi i maszyn stosowanych w pracy z betonem, 
                w tym mikserów betonowych, wibratorów betonowych i narzędzi ręcznych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-13-3">Umiejętność precyzyjnego układania i wygładzania betonu w celu 
                osiągnięcia oczekiwanych efektów wizualnych i jakościowych.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-13-4">Dobra kondycja fizyczna.</li>  
                <li class="main-job-skill-list" id="main-job-skill-list-13-5">Umiejętność czytania rysunków technicznych i zrozumienia, 
                jakie są wymagania w zakresie układania betonu.</li> 
                <li class="main-job-skill-list" id="main-job-skill-list-13-6">Umiejętność rozpoznawania problemów i podejmowania 
                działań naprawczych w trakcie pracy.</li>  
                </ul>
        </div>   
        `;
    }
}
customElements.define('my-job-text12', MyJobText12);

class MyJobText13 extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        <div class="main-job-role">
        <h1 class="main-job-role-text" id="main-job-role-text">Opis pracy:</h1>
            <ul>
                <li class="main-job-role-list" id="main-job-role-list-14-1">Murarz zajmuje się układaniem murów, ścian, kominów, fundamentów 
                i innych struktur budowlanych. Układanie może być wykonywane w różnych technikach, w zależności od rodzaju materiału i projektu.</li>
                <li class="main-job-role-list" id="main-job-role-list-14-2">Przygotowywanie podłoża, na którym będą umieszczane materiały budowlane, w tym wykopanie 
                i wyrównanie fundamentów, jeśli to konieczne.</li>
                <li class="main-job-role-list" id="main-job-role-list-14-3">Murarz przygotowuje zaprawę, która służy do łączenia materiałów budowlanych, takich jak cegły 
                lub kamienie. To wymaga umiejętności mieszania odpowiednich proporcji materiałów.</li>
                <li class="main-job-role-list" id="main-job-role-list-14-4">Kontrola jakości pracy, zapewnienie równości ścian i dokładności układania materiałów, 
                a także dbanie o estetykę i trwałość konstrukcji.</li>
                <li class="main-job-role-list" id="main-job-role-list-14-5">Dodawanie elementów konstrukcyjnych, takich jak stalowe pręty zbrojeniowe, kotwy, 
                wpusty okienne i drzwiowe oraz inne elementy niezbędne do budowy.</li>
                <li class="main-job-role-list" id="main-job-role-list-14-6">Przestrzeganie ścisłych przepisów bezpieczeństwa w miejscu pracy, w tym 
                stosowanie odpowiedniego sprzętu ochrony osobistej.</li>
                </ul>
        </div>     
        <div class="main-job-skill">
        <h1 class="main-job-skill-text" id="main-job-skill-text">Umiejętności i wymagania:</h1>
            <ul>
                <li class="main-job-skill-list" id="main-job-skill-list-14-1">Zrozumienie zasad budowy i konstrukcji, 
                a także zdolność czytania rysunków technicznych.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-14-2">Precyzyjne układanie materiałów 
                i dbałość o dokładność pomiarów.</li>
                <li class="main-job-skill-list" id="main-job-skill-list-14-3">Zrozumienie i przestrzeganie przepisów 
                dotyczących bezpieczeństwa w miejscu pracy.</li>   
                <li class="main-job-skill-list" id="main-job-skill-list-14-4">Doświadczenie w pracy na placu budowy oraz 
                zdobycie umiejętności praktycznych w zawodzie. </li>  
                <li class="main-job-skill-list" id="main-job-skill-list-14-5">Podstawowa znajomość języka polskiego w mowie.</li> 
                </ul>
        </div>   
        `;
    }
}
customElements.define('my-job-text13', MyJobText13);

