(function() {
    // PRECIOS EXACTOS SEGÚN LISTA PROPORCIONADA
    const priceMatrix = {
        'Quepos-Aeropuerto Internacional': 190,
        'Quepos-Hoteles cerca al aeropuerto': 190,
        'Quepos-Hoteles Ciudad Cariari': 200,
        'Quepos-Hoteles San José': 210,
        'Quepos-Local': 80,
        'Quepos-Dominical': 120,
        'Quepos-Uvita': 130,
        'Quepos-Sierpe': 180,
        'Quepos-Golfito': 280,
        'Quepos-Paso Canoas': 330,
        'Quepos-Puerto Jiménez': 280,
        'Quepos-San Gerardo de Dota': 280,
        'Quepos-Esterillos': 90,
        'Quepos-Esterillos Tours de Caballo': 180,
        'Quepos-Nauyaca - Uvita Tours': 180,
        'Quepos-Jacó': 130,
        'Quepos-Los Sueños Marriott - Villa Caletas': 210,
        'Quepos-Villa Lapas': 150,
        'Quepos-Puntarenas Ferry': 180,
        'Quepos-Arenal - La Fortuna': 290,
        'Quepos-Monteverde': 230,
        'Quepos-Aeropuerto Liberia': 290,
        'Quepos-Papagayo - Flamingo - Playa El Coco': 380,
        'Quepos-Santa Teresa': 430,
        'Quepos-Pérez Zeledón': 150,
        'Quepos-Volcán Poás - Catarata La Paz': 260,
        'Quepos-Tamarindo - Nosara': 380,
        'Quepos-Mal País - Tamarindo': 430,
        'Quepos-Montezuma': 430,
        'Quepos-Cahuita': 430,
        'Quepos-Puerto Viejo': 430,
        'Quepos-Jinetes de Osa - Manuel Antonio': 380,
        'Quepos-Jinetes de Osa - San José': 530,
        'Dominical-Aeropuerto Internacional': 190,
        'Dominical-Arenal - La Fortuna': 290,
        'Dominical-Monteverde': 230,
        'Dominical-Uvita': 130,
        'Dominical-Jacó': 130,
        'Dominical-Manuel Antonio': 120,
        'Dominical-Sierpe': 180,
        'Dominical-Puerto Jiménez': 280,
        'Uvita-Aeropuerto Internacional': 210,
        'Uvita-Arenal - La Fortuna': 290,
        'Uvita-Monteverde': 230,
        'Uvita-Dominical': 130,
        'Uvita-Manuel Antonio': 130,
        'Uvita-Sierpe': 180,
        'Uvita-Puerto Jiménez': 280,
        'Jacó-Aeropuerto Internacional': 190,
        'Jacó-Arenal - La Fortuna': 290,
        'Jacó-Monteverde': 230,
        'Jacó-Manuel Antonio': 130,
        'Jacó-Uvita': 130,
        'Manuel Antonio-Aeropuerto Internacional': 190,
        'Manuel Antonio-Arenal - La Fortuna': 290,
        'Manuel Antonio-Monteverde': 230,
        'Manuel Antonio-Uvita': 130,
        'Manuel Antonio-Dominical': 120,
        'Arenal - La Fortuna-Aeropuerto Internacional': 290,
        'Arenal - La Fortuna-Monteverde': 250,
        'Arenal - La Fortuna-Manuel Antonio': 290,
        'Arenal - La Fortuna-Jacó': 290,
        'Arenal - La Fortuna-Uvita': 290,
        'Arenal - La Fortuna-Tamarindo - Nosara': 380,
        'Monteverde-Aeropuerto Internacional': 230,
        'Monteverde-Arenal - La Fortuna': 250,
        'Monteverde-Manuel Antonio': 230,
        'Monteverde-Jacó': 230,
        'Tamarindo - Nosara-Aeropuerto Internacional': 290,
        'Tamarindo - Nosara-Arenal - La Fortuna': 380,
        'Tamarindo - Nosara-Monteverde': 380,
        'Aeropuerto Internacional-Manuel Antonio': 190,
        'Aeropuerto Internacional-Dominical': 190,
        'Aeropuerto Internacional-Uvita': 210,
        'Aeropuerto Internacional-Jacó': 190,
        'Aeropuerto Internacional-Arenal - La Fortuna': 290,
        'Aeropuerto Internacional-Monteverde': 230,
        'Aeropuerto Internacional-Tamarindo - Nosara': 290,
        'Aeropuerto Internacional-Puerto Jiménez': 280,
        'Aeropuerto Internacional-Santa Teresa': 430
    };

    const exchangeRate = 470;
    const extraPassengerCost = 20;

    const container = document.getElementById('destination-container');
    const addBtn = document.getElementById('addDestinationBtn');
    const itineraryList = document.getElementById('itineraryList');
    const priceCard = document.getElementById('priceEstimateCard');
    const priceDisplay = document.getElementById('priceDisplay');
    const currencyNote = document.getElementById('currencyNote');
    const itineraryTextarea = document.getElementById('itineraryText');
    const estimatedPriceField = document.getElementById('estimatedPriceField');
    const form = document.getElementById('whatsappForm');

    function getDestinationDisplayName(destValue) {
        const map = {
            'Aeropuerto Internacional': 'Aeropuerto Internacional (SJO)',
            'Hoteles cerca al aeropuerto': 'Hoteles cerca al aeropuerto',
            'Hoteles Ciudad Cariari': 'Hoteles Ciudad Cariari',
            'Hoteles San José': 'Hoteles San José',
            'Local': 'Local',
            'Dominical': 'Dominical',
            'Uvita': 'Uvita',
            'Sierpe': 'Sierpe',
            'Golfito': 'Golfito',
            'Paso Canoas': 'Paso Canoas',
            'Puerto Jiménez': 'Puerto Jiménez',
            'San Gerardo de Dota': 'San Gerardo de Dota',
            'Esterillos': 'Esterillos',
            'Esterillos Tours de Caballo': 'Esterillos Tours de Caballo',
            'Nauyaca - Uvita Tours': 'Nauyaca - Uvita Tours',
            'Jacó': 'Jacó',
            'Los Sueños Marriott - Villa Caletas': 'Los Sueños Marriott / Villa Caletas',
            'Villa Lapas': 'Villa Lapas',
            'Puntarenas Ferry': 'Puntarenas Ferry',
            'Arenal - La Fortuna': 'Arenal / La Fortuna',
            'Monteverde': 'Monteverde',
            'Aeropuerto Liberia': 'Aeropuerto Liberia (LIR)',
            'Papagayo - Flamingo - Playa El Coco': 'Papagayo / Flamingo / Playa El Coco',
            'Santa Teresa': 'Santa Teresa',
            'Pérez Zeledón': 'Pérez Zeledón',
            'Volcán Poás - Catarata La Paz': 'Volcán Poás / Catarata La Paz',
            'Tamarindo - Nosara': 'Tamarindo / Nosara',
            'Mal País - Tamarindo': 'Mal País / Tamarindo',
            'Montezuma': 'Montezuma',
            'Cahuita': 'Cahuita',
            'Puerto Viejo': 'Puerto Viejo',
            'Jinetes de Osa - Manuel Antonio': 'Jinetes de Osa / Manuel Antonio',
            'Jinetes de Osa - San José': 'Jinetes de Osa / San José',
            'Manuel Antonio': 'Manuel Antonio / Quepos'
        };
        return map[destValue] || destValue;
    }

    function getPrice(fromValue, toValue) {
        let key = fromValue + '-' + toValue;
        if (priceMatrix[key]) return priceMatrix[key];
        key = toValue + '-' + fromValue;
        if (priceMatrix[key]) return priceMatrix[key];
        console.warn(`Price not found for ${fromValue} to ${toValue}`);
        return 250;
    }

    function updateItineraryAndPrices() {
        const fromSelects = document.querySelectorAll('.from-dest');
        const toSelects = document.querySelectorAll('.to-dest');
        let totalPrice = 0;
        let legCount = 0;

        itineraryList.innerHTML = '';
        let itineraryText = '';

        for (let i = 0; i < fromSelects.length; i++) {
            if (i < toSelects.length) {
                const fromText = fromSelects[i].options[fromSelects[i].selectedIndex].text;
                const fromValue = fromSelects[i].value;
                const toValue = toSelects[i].value;
                const toDisplayText = getDestinationDisplayName(toValue);

                const legDisplay = `${fromText} → ${toDisplayText}`;
                itineraryText += (i > 0 ? ' · ' : '') + `${fromText} → ${toDisplayText}`;

                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${legDisplay} <span class="route-badge">Leg ${i+1}</span>`;
                itineraryList.appendChild(li);

                const legPrice = getPrice(fromValue, toValue);
                totalPrice += legPrice;
                legCount++;
            }
        }

        if (legCount === 0) {
            itineraryList.innerHTML = '<li><i class="fas fa-info-circle"></i> No legs added yet</li>';
            priceCard.classList.remove('visible');
            return;
        }

        if (itineraryTextarea) itineraryTextarea.value = itineraryText;
        priceCard.classList.add('visible');

        const total = totalPrice;
        const totalCRC = (total * exchangeRate).toLocaleString();

        priceDisplay.innerHTML = `
            <div class="price-tier">
                <div class="passenger-icon"><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i></div>
                <div class="passenger-count">1-4 passengers</div>
                <div class="price-amount">$${total}</div>
                <div class="price-sub">₡${totalCRC}</div>
            </div>
        `;

        estimatedPriceField.value = `$${total} (1-4 passengers)`;
        currencyNote.innerHTML = `Exchange rate: 1 USD ≈ ${exchangeRate} CRC (indicative). Final quote in USD. <br> <strong>This is an estimate only.</strong>`;
    }

    function getDestinationOptions() {
        const destinations = [
            'Aeropuerto Internacional', 'Hoteles cerca al aeropuerto', 'Hoteles Ciudad Cariari',
            'Hoteles San José', 'Local', 'Dominical', 'Uvita', 'Sierpe', 'Golfito', 'Paso Canoas',
            'Puerto Jiménez', 'San Gerardo de Dota', 'Esterillos', 'Esterillos Tours de Caballo',
            'Nauyaca - Uvita Tours', 'Jacó', 'Los Sueños Marriott - Villa Caletas', 'Villa Lapas',
            'Puntarenas Ferry', 'Arenal - La Fortuna', 'Monteverde', 'Aeropuerto Liberia',
            'Papagayo - Flamingo - Playa El Coco', 'Santa Teresa', 'Pérez Zeledón',
            'Volcán Poás - Catarata La Paz', 'Tamarindo - Nosara', 'Mal País - Tamarindo',
            'Montezuma', 'Cahuita', 'Puerto Viejo', 'Jinetes de Osa - Manuel Antonio',
            'Jinetes de Osa - San José'
        ];
        let options = '';
        destinations.forEach(dest => {
            const displayName = getDestinationDisplayName(dest);
            options += `<option value="${dest}">${displayName}</option>`;
        });
        return options;
    }

    function getFromOptions() {
        const origins = [
            'Quepos', 'Manuel Antonio', 'Dominical', 'Uvita', 'Jacó',
            'Aeropuerto Internacional', 'Arenal - La Fortuna', 'Monteverde',
            'Tamarindo - Nosara', 'Santa Teresa', 'Puerto Jiménez',
            'Sierpe', 'Golfito', 'Puerto Viejo', 'Cahuita'
        ];
        let options = '';
        origins.forEach(origin => {
            const displayName = getDestinationDisplayName(origin);
            options += `<option value="${origin}">${displayName}</option>`;
        });
        return options;
    }

    addBtn.addEventListener('click', function() {
        const newRow = document.createElement('div');
        newRow.className = 'designer-row';
        newRow.innerHTML = `
            <div class="location-group">
                <label>FROM</label>
                <select class="custom-select from-dest">
                    ${getFromOptions()}
                </select>
            </div>
            <div class="location-group">
                <label>TO</label>
                <select class="custom-select to-dest">
                    ${getDestinationOptions()}
                </select>
            </div>
            <button type="button" class="remove-dest"><i class="fas fa-trash-alt"></i> Remove</button>
        `;
        container.appendChild(newRow);
        attachRowListeners(newRow);
        updateItineraryAndPrices();
    });

    function attachRowListeners(row) {
        row.querySelectorAll('.from-dest, .to-dest').forEach(el => el.addEventListener('change', updateItineraryAndPrices));
        const removeBtn = row.querySelector('.remove-dest');
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                row.remove();
                updateItineraryAndPrices();
            });
        }
    }

    function resetForm() {
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('whatsappNum').value = '';
        document.getElementById('travelDate').value = '';
        document.getElementById('passengers').value = '2';
        document.getElementById('comments').value = '';
    }

    document.querySelectorAll('.from-dest, .to-dest').forEach(el => el.addEventListener('change', updateItineraryAndPrices));

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value.trim() || 'Guest';
        const email = document.getElementById('email').value;
        const phone = document.getElementById('whatsappNum').value;
        const date = document.getElementById('travelDate').value;
        const pax = document.getElementById('passengers').value;
        const itinerary = document.getElementById('itineraryText').value;
        const estimate = document.getElementById('estimatedPriceField').value;
        const comments = document.getElementById('comments').value;

        let message = `*NEW RESERVATION REQUEST*%0a`;
        message += `Name: ${name}%0a`;
        message += `Email: ${email}%0a`;
        message += `WhatsApp: ${phone}%0a`;
        message += `Travel Date: ${date}%0a`;
        message += `Passengers: ${pax}%0a`;
        message += `Itinerary: ${itinerary}%0a`;
        message += `Estimate: ${estimate}%0a`;
        message += `Comments: ${comments}%0a%0a`;
        message += `*Client informed this is an estimate only.*`;

        window.open(`https://wa.me/50683335665?text=${message}`, '_blank');
        resetForm();
    });

    updateItineraryAndPrices();
})();