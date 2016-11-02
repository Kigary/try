const linker = 'https://en.wikipedia.org/wiki/';
function setInnerHTML() {
	var main = $('main'), table= $('table'), tbody = $('tbody'), tfoot = $('tfoot'), header = $('header');
header.innerHTML = 'JS Static Periodic Table of The Elements';
tbody.innerHTML = '<tr>'+
					'<td><pre>Group</pre><hr id="hr"/><pre>Period</pre></td>'+
					'<td class="group">1<br/>IA<br/>1A</td>'+
					'<td colspan="16"></td>'+
					'<td class="group">18<br/>VIIIA<br/>8A</td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">1</td>'+
					'<td class="nonmetal" title="Hydrogen" lang="UK"><a href="' + linker + 'Hydrogen"><ruby content-text="H"><rt content-text="1">1</rt>H</ruby><strong content-text="Hydrogen">Hydrogen</strong><tt content-text="1.008">1.008</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="group">2<br/>IIA<br/>2A</td>'+
					'<td colspan="10"></td>'+
					'<td class="group">13<br/>IIIA<br/>3A</td>'+
					'<td class="group">14<br/>IVA<br/>4A</td>'+
					'<td class="group">15<br/>VA<br/>5A</td>'+
					'<td class="group">16<br/>VIA<br/>6A</td>'+
					'<td class="group">17<br/>VIIA<br/>7A</td>'+
					'<td class="noble_gas" title="Helium" lang="fruk" ><a href="' + linker + 'Helium"><ruby content-text="He"><rt content-text="2">2</rt>He</ruby><strong content-text="Helium">Helium</strong><tt content-text="4.03">4.03</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">2</td>'+
					'<td class="alkali_metal" title="Lithium" lang="SW" ><a href="' + linker + 'Lithium"><ruby content-text="Li"><rt content-text="3">3</rt>Li</ruby><strong content-text="Lithium">Lithium</strong><tt content-text="6.941">6.941</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Beryllium" lang="FR" ><a href="' + linker + 'Beryllium"><ruby content-text="Be"><rt content-text="4">4</rt>Be</ruby><strong content-text="Beryllium">Beryllium</strong><tt content-text="9.012">9.012</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td colspan="10"></td>'+
					'<td class="semimetal" title="Boron" lang="fruk" ><a href="' + linker + 'Boron"><ruby content-text="B"><rt content-text="5">5</rt>B</ruby><strong content-text="Boron">Boron</strong><tt content-text="10.811">10.811</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Carbon" lang="" ><a href="' + linker + 'Carbon"><ruby content-text="C"><rt content-text="6">6</rt>C</ruby><strong content-text="Carbon">Carbon</strong><tt content-text="12.011">12.011</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Nitrogen" lang="UK" ><a href="' + linker + 'Nitrogen"><ruby content-text="N"><rt content-text="7">7</rt>N</ruby><strong content-text="Nitrogen">Nitrogen</strong><tt content-text="14.007">14.007</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Oxygen" lang="fruksw" ><a href="' + linker + 'Oxygen"><ruby content-text="O"><rt content-text="8">8</rt>O</ruby><strong content-text="Oxygen">Oxygen</strong><tt content-text="15.999">15.999</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Fluorine" lang="FR" ><a href="' + linker + 'Fluorine"><ruby content-text="F"><rt content-text="9">9</rt>F</ruby><strong content-text="Fluorine">Fluorine</strong><tt content-text="18.998">18.998</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Neon" lang="UK" ><a href="' + linker + 'Neon"><ruby content-text="Ne"><rt content-text="10">10</rt>Ne</ruby><strong content-text="Neon">Neon</strong><tt content-text="20.180">20.180</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">3</td>'+
					'<td class="alkali_metal" title="Natrium(Sodium)" lang="UK"><a href="' + linker + 'Sodium"><ruby content-text="Na"><rt content-text="11">11</rt>Na</ruby><strong content-text="Sodium">Sodium</strong><tt content-text="22.990">22.990</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Magnesium" lang="UK" ><a href="' + linker + 'Magnesium"><ruby content-text="Mg"><rt content-text="12">12</rt>Mg</ruby><strong content-text="Magnesium">Magnesium</strong><tt content-text="24.305">24.305</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="group">3<br/>IIIB<br/>3B</td>'+
					'<td class="group">4<br/>IVB<br/>3B</td>'+
					'<td class="group">5<br/>VB<br/>3B</td>'+
					'<td class="group">6<br/>VIB<br/>3B</td>'+
					'<td class="group">7<br/>VIIB<br/>3B</td>'+
					'<td class="group">8</td>'+
					'<td class="group">9<br/>VIII<br/>8</td>'+
					'<td class="group">10</td>'+
					'<td class="group">11<br/>IB<br/>1B</td>'+
					'<td class="group">12<br/>IIB<br/>2B</td>'+
					'<td class="basic_metal" title="Aluminium" lang="DEN" ><a href="' + linker + 'Aluminium"><ruby content-text="Al"><rt content-text="13">13</rt>Al</ruby><strong content-text="Aluminum">Aluminum</strong><tt content-text="26.982">26.982</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Silicon" lang="SW" ><a href="' + linker + 'Silicon"><ruby content-text="Si"><rt content-text="14">14</rt>Si</ruby><strong content-text="Silicon">Silicon</strong><tt content-text="28.086">28.086</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Phosphorus" lang="GE" ><a href="' + linker + 'Phosphorus"><ruby content-text="P"><rt content-text="15">15</rt>P</ruby><strong content-text="Phosphorus">Phosphorus</strong><tt content-text="30.974">30.974</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Sulfur" lang="" ><a href="' + linker + 'Sulfur"><ruby content-text="S"><rt content-text="16">16</rt>S</ruby><strong content-text="Sulfur">Sulfur</strong><tt content-text="32.066">32.066</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Chlorine" lang="SW" ><a href="' + linker + 'Chlorine"><ruby content-text="Cl"><rt content-text="17">17</rt>Cl</ruby><strong content-text="Chlorine">Chlorine</strong><tt content-text="35.453">35.453</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Argon" lang="UK" ><a href="' + linker + 'Argon"><ruby content-text="Ar"><rt content-text="18">18</rt>Ar</ruby><strong content-text="Argon">Argon</strong><tt content-text="39.948">39.948</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">4</td>'+
					'<td class="alkali_metal" title="Kalium(Potassium)" lang="UK"><a href="' + linker + 'Potassium"><ruby content-text="K"><rt content-text="19">19</rt>K</ruby><strong content-text="Potassium">Potassium</strong><tt content-text="39.098">39.098</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Calcium" lang="UK" ><a href="' + linker + 'Calcium"><ruby content-text="Ca"><rt content-text="20">20</rt>Ca</ruby><strong content-text="Calcium">Calcium</strong><tt content-text="40.078">40.078</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Scandium" lang="SW" ><a href="' + linker + 'Scandium"><ruby content-text="Sc"><rt content-text="21">21</rt>Sc</ruby><strong content-text="Scandium">Scandium</strong><tt content-text="44.956">44.956</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Titanium" lang="UK" ><a href="' + linker + 'Titanium"><ruby content-text="Ti"><rt content-text="22">22</rt>Ti</ruby><strong content-text="Titanium">Titanium</strong><tt content-text="47.88">47.88</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Vanadium" lang="SW" ><a href="' + linker + 'Vanadium"><ruby content-text="V"><rt content-text="23">23</rt>V</ruby><strong content-text="Vanadium">Vanadium</strong><tt content-text="50.942">50.942</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Chromium" lang="FR" ><a href="' + linker + 'Chromium"><ruby content-text="Cr"><rt content-text="24">24</rt>Cr</ruby><strong content-text="Chromium">Chromium</strong><tt content-text="51.966">51.966</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Manganese" lang="SW" ><a href="' + linker + 'Manganese"><ruby content-text="Mn"><rt content-text="25">25</rt>Mn</ruby><strong content-text="Manganese">Manganese</strong><tt content-text="54.938">54.938</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Ferrum(Iron)" lang=""><a href="' + linker + 'Iron"><ruby content-text="Fe"><rt content-text="26">26</rt>Fe</ruby><strong content-text="Iron">Iron</strong><tt content-text="55.933">55.933</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Cobalt" lang="SW" ><a href="' + linker + 'Cobalt"><ruby content-text="Co"><rt content-text="27">27</rt>Co</ruby><strong content-text="Cobalt">Cobalt</strong><tt content-text="58.933">58.933</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Nickel" lang="SW" ><a href="' + linker + 'Nickel"><ruby content-text="Ni"><rt content-text="28">28</rt>Ni</ruby><strong content-text="Nickel">Nickel</strong><tt content-text="58.693">58.693</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Cuprum(Copper)" lang=""><a href="' + linker + 'Copper"><ruby content-text="Cu"><rt content-text="29">29</rt>Cu</ruby><strong content-text="Copper">Copper</strong><tt content-text="63.546">63.546</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Zinc" lang="GE" ><a href="' + linker + 'Zinc"><ruby content-text="Zn"><rt content-text="30">30</rt>Zn</ruby><strong content-text="Zinc">Zinc</strong><tt content-text="65.39">65.39</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Gallium" lang="FR" ><a href="' + linker + 'Gallium"><ruby content-text="Ga"><rt content-text="31">31</rt>Ga</ruby><strong content-text="Gallium">Gallium</strong><tt content-text="69.732">69.732</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Germanium" lang="GE" ><a href="' + linker + 'Germanium"><ruby content-text="Ge"><rt content-text="32">32</rt>Ge</ruby><strong content-text="Germanium">Germanium</strong><tt content-text="72.61">72.61</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Arsenic" lang="" ><a href="' + linker + 'Arsenic"><ruby content-text="As"><rt content-text="33">33</rt>As</ruby><strong content-text="Arsenic">Arsenic</strong><tt content-text="74.922">74.922</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="nonmetal" title="Selenium" lang="SW" ><a href="' + linker + 'Selenium"><ruby content-text="Se"><rt content-text="34">34</rt>Se</ruby><strong content-text="Selenium">Selenium</strong><tt content-text="78.09">78.09</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Bromine" lang="FR" ><a href="' + linker + 'Bromine"><ruby content-text="Br"><rt content-text="35">35</rt>Br</ruby><strong content-text="Bromine">Bromine</strong><tt content-text="79.904">79.904</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Krypton" lang="UK" ><a href="' + linker + 'Krypton"><ruby content-text="Kr"><rt content-text="36">36</rt>Kr</ruby><strong content-text="Krypton">Krypton</strong><tt content-text="84.80">84.80</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">5</td>'+
					'<td class="alkali_metal" title="Rubidium" lang="GE" ><a href="' + linker + 'Rubidium"><ruby content-text="Rb"><rt content-text="37">37</rt>Rb</ruby><strong content-text="Rubidium">Rubidium</strong><tt content-text="84.468">84.468</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Strontium" lang="UK" ><a href="' + linker + 'Strontium"><ruby content-text="Sr"><rt content-text="38">38</rt>Sr</ruby><strong content-text="Strontium">Strontium</strong><tt content-text="87.62">87.62</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Yttrium" lang="FIN" ><a href="' + linker + 'Yttrium"><ruby content-text="Y"><rt content-text="39">39</rt>Y</ruby><strong content-text="Yttrium">Yttrium</strong><tt content-text="88.906">88.906</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Zirconium" lang="GE" ><a href="' + linker + 'Zirconium"><ruby content-text="Zr"><rt content-text="40">40</rt>Zr</ruby><strong content-text="Zirconium">Zirconium</strong><tt content-text="91.224">91.224</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Niobium" lang="UK" ><a href="' + linker + 'Niobium"><ruby content-text="Nb"><rt content-text="41">41</rt>Nb</ruby><strong content-text="Niobium">Niobium</strong><tt content-text="92.906">92.906</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Molybdenium" lang="SW" ><a href="' + linker + 'Molybdenium"><ruby content-text="Mo"><rt content-text="42">42</rt>Mo</ruby><strong content-text="Molybdenium">Molybdenium</strong><tt content-text="95.94">95.94</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Technetium" lang="IT" ><a href="' + linker + 'Technetium"><ruby content-text="Tc"><rt content-text="43">43</rt>Tc</ruby><strong content-text="Technetium">Technetium</strong><tt content-text="98.907">98.907</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Ruthenium" lang="RU" ><a href="' + linker + 'Ruthenium"><ruby content-text="Ru"><rt content-text="44">44</rt>Ru</ruby><strong content-text="Ruthenium">Ruthenium</strong><tt content-text="101.07">101.07</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Rhodium" lang="UK" ><a href="' + linker + 'Rhodium"><ruby content-text="Rh"><rt content-text="45">45</rt>Rh</ruby><strong content-text="Rhodium">Rhodium</strong><tt content-text="102.906">102.906</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Palladium" lang="UK" ><a href="' + linker + 'Palladium"><ruby content-text="Pd"><rt content-text="46">46</rt>Pd</ruby><strong content-text="Palladium">Palladium</strong><tt content-text="106.42">106.42</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Argentum(Silver)" lang=""><a href="' + linker + 'Silver"><ruby content-text="Ag"><rt content-text="47">47</rt>Ag</ruby><strong content-text="Silver">Silver</strong><tt content-text="107.868">107.868</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Cadmium" lang="GE" ><a href="' + linker + 'Cadmium"><ruby content-text="Cd"><rt content-text="48">48</rt>Cd</ruby><strong content-text="Cadmium">Cadmium</strong><tt content-text="112.411">112.411</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Indium" lang="GE" ><a href="' + linker + 'Indium"><ruby content-text="In"><rt content-text="49">49</rt>In</ruby><strong content-text="Indium">Indium</strong><tt content-text="114.818">114.818</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Stannum(Tin)" lang=""><a href="' + linker + 'Tin"><ruby content-text="Sn"><rt content-text="50">50</rt>Sn</ruby><strong content-text="Tin">Tin</strong><tt content-text="118.71">118.71</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Stibium(Antimony)" lang=""><a href="' + linker + 'Antimony"><ruby content-text="Sb"><rt content-text="51">51</rt>Sb</ruby><strong content-text="Antimony">Antimony</strong><tt content-text="121.760">121.760</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Tellurium" lang="ROM" ><a href="' + linker + 'Tellurium"><ruby content-text="Te"><rt content-text="52">52</rt>Te</ruby><strong content-text="Tellurium">Tellurium</strong><tt content-text="127.6">127.6</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Iodine" lang="FR" ><a href="' + linker + 'Iodine"><ruby content-text="I"><rt content-text="53">53</rt>I</ruby><strong content-text="Iodine">Iodine</strong><tt content-text="126.904">126.904</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Xenon" lang="UK" ><a href="' + linker + 'Xenon"><ruby content-text="Xe"><rt content-text="54">54</rt>Xe</ruby><strong content-text="Xenon">Xenon</strong><tt content-text="131.29">131.29</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">6</td>'+
					'<td class="alkali_metal" title="Cesium" lang="GE" ><a href="' + linker + 'Cesium"><ruby content-text="Cs"><rt content-text="55">55</rt>Cs</ruby><strong content-text="Cesium">Cesium</strong><tt content-text="132.905">132.905</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Barium" lang="UK" ><a href="' + linker + 'Barium"><ruby content-text="Ba"><rt content-text="56">56</rt>Ba</ruby><strong content-text="Barium">Barium</strong><tt content-text="137.327">137.327</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide"><p align="center" content-text="Lanthanides">57-71</p></td>'+
					'<td class="transition_metal" title="Hafnium" lang="DEN" ><a href="' + linker + 'Hafnium"><ruby content-text="Hf"><rt content-text="72">72</rt>Hf</ruby><strong content-text="Hafnium">Hafnium</strong><tt content-text="178.49">178.49</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Tantalum" lang="SW" ><a href="' + linker + 'Tantalum"><ruby content-text="Ta"><rt content-text="73">73</rt>Ta</ruby><strong content-text="Tantalum">Tantalum</strong><tt content-text="180.948">180.948</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Wolfram(Tungsten)" lang="SP"><a href="' + linker + 'Tungsten"><ruby content-text="W"><rt content-text="74">74</rt>W</ruby><strong content-text="Tungsten">Tungsten</strong><tt content-text="183.85">183.85</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Rhenium" lang="GE" ><a href="' + linker + 'Rhenium"><ruby content-text="Re"><rt content-text="75">75</rt>Re</ruby><strong content-text="Rhenium">Rhenium</strong><tt content-text="186.207">186.207</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Osmium" lang="UK" ><a href="' + linker + 'Osmium"><ruby content-text="Os"><rt content-text="76">76</rt>Os</ruby><strong content-text="Osmium">Osmium</strong><tt content-text="190.23">190.23</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Iridium" lang="UK" ><a href="' + linker + 'Iridium"><ruby content-text="Ir"><rt content-text="77">77</rt>Ir</ruby><strong content-text="Iridium">Iridium</strong><tt content-text="192.22">192.22</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Platinum" lang="SP" ><a href="' + linker + 'Platinum"><ruby content-text="Pt"><rt content-text="78">78</rt>Pt</ruby><strong content-text="Platinum">Platinum</strong><tt content-text="195.08">195.08</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Aurum(Gold)" lang=""><a href="' + linker + 'Gold"><ruby content-text="Au"><rt content-text="79">79</rt>Au</ruby><strong content-text="Gold">Gold</strong><tt content-text="196.967">196.967</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Hydrargyrum(Mercury)" lang=""><a href="' + linker + 'Mercury_(element)"><ruby content-text="Hg"><rt content-text="80">80</rt>Hg</ruby><strong content-text="Mercury">Mercury</strong><tt content-text="200.59">200.59</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Thallium" lang="UK" ><a href="' + linker + 'Thallium"><ruby content-text="Tl"><rt content-text="81">81</rt>Tl</ruby><strong content-text="Thallium">Thallium</strong><tt content-text="204.383">204.383</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Plumbum(Lead)" lang=""><a href="' + linker + 'Lead"><ruby content-text="Pb"><rt content-text="82">82</rt>Pb</ruby><strong content-text="Lead">Lead</strong><tt content-text="207.2">207.2</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Bismuth" lang="" ><a href="' + linker + 'Bismuth"><ruby content-text="Bi"><rt content-text="83">83</rt>Bi</ruby><strong content-text="Bismuth">Bismuth</strong><tt content-text="208.980">208.980</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="semimetal" title="Polonium" lang="FR" ><a href="' + linker + 'Polonium"><ruby content-text="Po"><rt content-text="84">84</rt>Po</ruby><strong content-text="Polonium">Polonium</strong><tt content-text="[208.982]"><q>208.982</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Astatine" lang="USA" ><a href="' + linker + 'Astatine"><ruby content-text="At"><rt content-text="85">85</rt>At</ruby><strong content-text="Astatine">Astatine</strong><tt content-text="209.987">209.987</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Radon" lang="GE" ><a href="' + linker + 'Radon"><ruby content-text="Rn"><rt content-text="86">86</rt>Rn</ruby><strong content-text="Radon">Radon</strong><tt content-text="222.018">222.018</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td class="period">7</td>'+
					'<td class="alkali_metal" title="Francium" lang="FR" ><a href="' + linker + 'Francium"><ruby content-text="Fr"><rt content-text="87">87</rt>Fr</ruby><strong content-text="Francium">Francium</strong><tt content-text="223.020">223.020</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="alkaline_earth" title="Radium" lang="FR" ><a href="' + linker + 'Radium"><ruby content-text="Ra"><rt content-text="88">88</rt>Ra</ruby><strong content-text="Radium">Radium</strong><tt content-text="226.025">226.025</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide"><p align="center" content-text="Actinides">89-103</p></td>'+
					'<td class="transition_metal" title="Rutherfordium" lang="usaru" ><a href="' + linker + 'Rutherfordium"><ruby content-text="Rf"><rt content-text="104">104</rt>Rf</ruby><strong content-text="Rutherfordium">Rutherfordium</strong><tt content-text="[261]"><q>261</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Dubnium" lang="USA" ><a href="' + linker + 'Dubnium"><ruby content-text="Db"><rt content-text="105">105</rt>Db</ruby><strong content-text="Dubnium">Dubnium</strong><tt content-text="[262]"><q>262</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Seaborgium" lang="usaru" ><a href="' + linker + 'Seaborgium"><ruby content-text="Sg"><rt content-text="106">106</rt>Sg</ruby><strong content-text="Seaborgium">Seaborgium</strong><tt content-text="[266]"><q>266</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Bohrium" lang="GE" ><a href="' + linker + 'Bohrium"><ruby content-text="Bh"><rt content-text="107">107</rt>Bh</ruby><strong content-text="Bohrium">Bohrium</strong><tt content-text="[264]"><q>264</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Hassium" lang="GE" ><a href="' + linker + 'Hassium"><ruby content-text="Hs"><rt content-text="108">108</rt>Hs</ruby><strong content-text="Hassium">Hassium</strong><tt content-text="[269]"><q>269</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Meitnerium" lang="GE" ><a href="' + linker + 'Meitnerium"><ruby content-text="Mt"><rt content-text="109">109</rt>Mt</ruby><strong content-text="Meitnerium">Meitnerium</strong><tt content-text="[268]"><q>268</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Darmstadtium" lang="GE" ><a href="' + linker + 'Darmstadtium"><ruby content-text="Ds"><rt content-text="110">110</rt>Ds</ruby><strong content-text="Darmstadtium">Darmstadtium</strong><tt content-text="[269]"><q>269</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Roentgenium" lang="GE" ><a href="' + linker + 'Roentgenium"><ruby content-text="Rg"><rt content-text="111">111</rt>Rg</ruby><strong content-text="Roentgenium">Roentgenium</strong><tt content-text="[272]"><q>272</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="transition_metal" title="Copernicium" lang="GE" ><a href="' + linker + 'Copernicium"><ruby content-text="Cn"><rt content-text="112">112</rt>Cn</ruby><strong content-text="Copernicium">Copernicium</strong><tt content-text="[277]"><q>277</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Ununtrium" lang="usaru_alt" ><a href="' + linker + 'Ununtrium"><ruby content-text="Uut"><rt content-text="113">113</rt>Uut</ruby><strong content-text="Ununtrium">Ununtrium</strong><tt content-text="---">---</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Flerovium" lang="usaru" ><a href="' + linker + 'Flerovium"><ruby content-text="Fl"><rt content-text="114">114</rt>Fl</ruby><strong content-text="Flerovium">Flerovium</strong><tt  content-text="[289]"><q>289</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Ununpentium" lang="usaru_alt" ><a href="' + linker + 'Ununpentium"><ruby content-text="Uup"><rt content-text="115">115</rt>Uup</ruby><strong content-text="Ununpentium">Ununpentium</strong><tt content-text="---">---</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="basic_metal" title="Livermorium" lang="usaru" ><a href="' + linker + 'Livermorium"><ruby content-text="Lv"><rt content-text="116">116</rt>Lv</ruby><strong content-text="Livermorium">Livermorium</strong><tt content-text="[298]"><q>298</q></tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="halogen" title="Ununseptium" lang="usaru_alt" ><a href="' + linker + 'Ununseptium"><ruby content-text="Uus"><rt content-text="117">117</rt>Uus</ruby><strong content-text="Ununseptium">Ununseptium</strong><tt content-text="---">---</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="noble_gas" title="Ununoctium" lang="usaru_alt" ><a href="' + linker + 'Ununoctium"><ruby content-text="Uuo"><rt content-text="118">118</rt>Uuo</ruby><strong content-text="Ununoctium">Ununoctium</strong><tt content-text="---">---</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr><td colspan="18" class="blank"/></tr>'+
				'<tr>'+
					'<td colspan="3" class="series">Lanthanide<br/>Series</td>'+
					'<td class="lanthanide" title="Lanthanium" lang="SW" ><a href="' + linker + 'Lanthanium"><ruby content-text="La"><rt content-text="57">57</rt>La</ruby><strong content-text="Lanthanum">Lanthanum</strong><tt content-text="138.906">138.906</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Cerium" lang="swge" ><a href="' + linker + 'Cerium"><ruby content-text="Ce"><rt content-text="58">58</rt>Ce</ruby><strong content-text="Cerium">Cerium</strong><tt content-text="140.115">140.115</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Praseodymium" lang="AUS" ><a href="' + linker + 'Praseodymium"><ruby content-text="Pr"><rt content-text="59">59</rt>Pr</ruby><strong content-text="Praseodymium">Praseodymium</strong><tt content-text="140.908">140.908</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Neodymium" lang="AUS" ><a href="' + linker + 'Neodymium"><ruby content-text="Nd"><rt content-text="60">60</rt>Nd</ruby><strong content-text="Neodymium">Neodymium</strong><tt content-text="144.24">144.24</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Promethium" lang="USA" ><a href="' + linker + 'Promethium"><ruby content-text="Pm"><rt content-text="61">61</rt>Pm</ruby><strong content-text="Promethium">Promethium</strong><tt content-text="144.913">144.913</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Samarium" lang="FR" ><a href="' + linker + 'Samarium"><ruby content-text="Sa"><rt content-text="62">62</rt>Sm</ruby><strong content-text="Samarium">Samarium</strong><tt content-text="150.36">150.36</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Europium" lang="FR" ><a href="' + linker + 'Europium"><ruby content-text="Eu"><rt content-text="63">63</rt>Eu</ruby><strong content-text="Europium">Europium</strong><tt content-text="151.966">151.966</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Gadolinium" lang="SWZ" ><a href="' + linker + 'Gadolinium"><ruby content-text="Gd"><rt content-text="64">64</rt>Gd</ruby><strong content-text="Gadolinium">Gadolinium</strong><tt content-text="157.25">157.25</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Terbium" lang="SW" ><a href="' + linker + 'Terbium"><ruby content-text="Tb"><rt content-text="65">65</rt>Tb</ruby><strong content-text="Terbium">Terbium</strong><tt content-text="158.925">158.925</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Dysprosium" lang="FR" ><a href="' + linker + 'Dysprosium"><ruby content-text="Dy"><rt content-text="66">66</rt>Dy</ruby><strong content-text="Dysprosium">Dysprosium</strong><tt content-text="162.50">162.50</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Holmium" lang="SW" ><a href="' + linker + 'Holmium"><ruby content-text="Ho"><rt content-text="67">67</rt>Ho</ruby><strong content-text="Holmium">Holmium</strong><tt content-text="164.930">164.930</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Erbium" lang="SW" ><a href="' + linker + 'Erbium"><ruby content-text="Er"><rt content-text="68">68</rt>Er</ruby><strong content-text="Erbium">Erbium</strong><tt content-text="167.26">167.26</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Thulium" lang="SW" ><a href="' + linker + 'Thulium"><ruby content-text="Tm"><rt content-text="69">69</rt>Tm</ruby><strong content-text="Thulium">Thulium</strong><tt content-text="168.934">168.934</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Ytterbium" lang="SWZ" ><a href="' + linker + 'Ytterbium"><ruby content-text="Yb"><rt content-text="70">70</rt>Yb</ruby><strong content-text="Ytterbium">Ytterbium</strong><tt content-text="173.04">173.04</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="lanthanide" title="Lutetium" lang="FR" ><a href="' + linker + 'Lutetium"><ruby content-text="Lu"><rt content-text="71">71</rt>Lu</ruby><strong content-text="Lutetium">Lutetium</strong><tt content-text="174.967">174.967</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>'+
				'<tr>'+
					'<td colspan="3" class="series">Actinide<br/>Series</td>'+
					'<td class="actinide" title="Actinium" lang="FR" ><a href="' + linker + 'Actinium"><ruby content-text="As"><rt content-text="89">89</rt>As</ruby><strong content-text="Actinium">Actinium</strong><tt content-text="227.028">227.028</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Thorium" lang="SW" ><a href="' + linker + 'Thorium"><ruby content-text="Th"><rt content-text="90">90</rt>Th</ruby><strong content-text="Thorium">Thorium</strong><tt content-text="232.038">232.038</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Protactinium" lang="ukge" ><a href="' + linker + 'Protactinium"><ruby content-text="Pa"><rt content-text="91">91</rt>Pa</ruby><strong content-text="Protactinium">Protactinium</strong><tt content-text="231.036">231.036</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Uranium" lang="GE" ><a href="' + linker + 'Uranium"><ruby content-text="U"><rt content-text="92">92</rt>U</ruby><strong content-text="Uranium">Uranium</strong><tt content-text="238.029">238.029</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Neptunium" lang="USA" ><a href="' + linker + 'Neptunium"><ruby content-text="Np"><rt content-text="93">93</rt>Np</ruby><strong content-text="Neptunium">Neptunium</strong><tt content-text="237.048">237.048</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Plutonium" lang="USA" ><a href="' + linker + 'Plutonium"><ruby content-text="Pu"><rt content-text="94">94</rt>Pu</ruby><strong content-text="Plutonium">Plutonium</strong><tt content-text="244.064">244.064</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Americium" lang="USA" ><a href="' + linker + 'Americium"><ruby content-text="Am"><rt content-text="95">95</rt>Am</ruby><strong content-text="Americium">Americium</strong><tt content-text="243.061">243.061</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Curium" lang="USA" ><a href="' + linker + 'Curium"><ruby content-text="Cm"><rt content-text="96">96</rt>Cm</ruby><strong content-text="Curium">Curium</strong><tt content-text="247.070">247.070</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Berkelium" lang="USA" ><a href="' + linker + 'Berkelium"><ruby content-text="Bk"><rt content-text="97">97</rt>Bk</ruby><strong content-text="Berkelium">Berkelium</strong><tt content-text="247.070">247.070</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Californium" lang="USA" ><a href="' + linker + 'Californium"><ruby content-text="Cf"><rt content-text="98">98</rt>Cf</ruby><strong content-text="Californium">Californium</strong><tt content-text="251.080">251.080</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Einsteinium" lang="USA" ><a href="' + linker + 'Einsteinium"><ruby content-text="Es"><rt content-text="99">99</rt>Es</ruby><strong content-text="Einsteinium">Einsteinium</strong><tt content-text="[254]">[254]</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Fermium" lang="USA" ><a href="' + linker + 'Fermium"><ruby content-text="Fm"><rt content-text="100">100</rt>Fm</ruby><strong content-text="Fermium">Fermium</strong><tt content-text="257.095">257.095</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Mendelevium" lang="USA" ><a href="' + linker + 'Mendelevium"><ruby content-text="Md"><rt content-text="101">101</rt>Md</ruby><strong content-text="Mendelevium">Mendelevium</strong><tt content-text="258.1">258.1</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Nobelium" lang="RU" ><a href="' + linker + 'Nobelium"><ruby content-text="No"><rt content-text="102">102</rt>No</ruby><strong content-text="Nobelium">Nobelium</strong><tt content-text="259.101">259.101</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
					'<td class="actinide" title="Lawrencium" lang="USA" ><a href="' + linker + 'Lawrencium"><ruby content-text="Lr"><rt content-text="103">103</rt>Lr</ruby><strong content-text="Lawrencium">Lawrencium</strong><tt content-text="[262]">[262]</tt></a><span><hr/><hr/><hr/><hr/></span><h5/><h3/><h4/><h6/></td>'+
				'</tr>';
	tfoot.innerHTML = '<tr>'+
						'<td colspan="18"></td>'+
					'</tr>'+
					'<tr>'+
						'<td colspan="4"></td>'+
						'<td class="alkali_metal"><div content-text="Alkali Metals">Alkali<br/>Metals</div></td>'+
						'<td class="alkaline_earth"><div content-text="Alkaline Earths">Alkaline<br/>Earths</div></td>'+
						'<td class="transition_metal"><div content-text="Transition Metals">Transition<br/>Metasl</div></td>'+
						'<td class="basic_metal"><div content-text="Basic Metals">Basic<br/>Metals</div></td>'+
						'<td class="semimetal"><div content-text="Semimetals">Semimetals</div></td>'+
						'<td class="nonmetal"><div content-text="Nonmetals">Nonmetals</div></td>'+
						'<td class="halogen"><div content-text="Halogens">Halogens</div></td>'+
						'<td class="noble_gas"><div content-text="Noble Gases">Noble<br/>Gases</div></td>'+
						'<td class="lanthanide"><div content-text="Lanthanides">Lanthanides</div></td>'+
						'<td class="actinide"><div content-text="Actinides">Actinides</div></td>'+
						'<td colspan="4"></td>'+
					'</tr>';
		table.append(tbody);
		table.append(tfoot);
		main.append(table);
		document.body.append(header);
		document.body.append(main);
}