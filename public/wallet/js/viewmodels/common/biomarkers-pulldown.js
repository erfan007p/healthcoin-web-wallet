define(['knockout'], function(ko){
    var biomarkersPulldownType = function(){

        this.hcbmEHR_SourceValues = ko.observableArray(["--- Self Reported ---",
            "Columbia South Valley Hospital, Gilroy",
            "Community Hospital of Los Gatos, Los Gatos",
            "El Camino Hospital, Mountain View",
            "Good Samaritan Hospital, San Jose",
            "Kaiser Permanente Medical Center Gilroy, Gilroy, California",
            "Kaiser Permanente Santa Clara Medical Center, Santa Clara, California",
            "Kaiser Permanente Santa Teresa Medical Center, San Jose, California",
            "Lucile Salter Packard Children's Hospital at Stanford, Palo Alto, California",
            "O'Connor Hospital, San Jose, California",
            "Regional Medical Center of San Jose, San Jose, California",
            "Saint Louise Regional Hospital, Gilroy, California",
            "San Jose Medical Center, San Jose, California",
            "Santa Clara Valley Medical Center, San Jose, California",
            "Stanford University Medical Center, Stanford",
            "VA Palo Alto Health Care System, Palo Alto",
            "Other"
            ]);

        this.hcbmDevice_SourceValues =   ko.observableArray(["",
            "Adidas",
            "Apple",
            "Biomedtrics",
            "BodyTrace",
            "CareTRx",
            "CoheroHealth",
            "DailyMile",
            "Edamam",
            "Emfit",
            "EpsonPulsense",
            "Fatsecret",
            "Fitbit",
            "Fitbug",
            "FitLinxx",
            "Garmin Connect",
            "Higi",
            "iHealth",
            "inrfood",
            "Jawbone Up",
            "Kiqplan",
            "Life Fitness",
            "LifeTrak",
            "Lumo",
            "ManageBGL",
            "MapMyFitness",
            "Microsoft",
            "Misfit",
            "Moov",
            "Moveable",
            "Moves",
            "MyFitnessPal",
            "Omron Wellness",
            "PearSports",
            "Personalabs",
            "Polar",
            "Precor",
            "Qardio",
            "RunKeeper",
            "RxCheck",
            "Sleep_Image",
            "Sony",
            "Strava",
            "Striiv",
            "Suunto",
            "Telcare",
            "TomTom MySports",
            "Under Armour",
            "Visiomed",
            "VitaDock",
            "Withings",
            "Yoo",
            "Other"
            ]);

    };
    return biomarkersPulldownType; 
});
