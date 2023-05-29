function getBotResponse(input) {

    if (input == "Fever") {
        let days = prompt("How many days have you had a fever?");
        let vomiting = prompt("Are you experiencing any vomiting? (Yes/No)");
        let yellowish_skin = prompt("Do you have yellowish skin? (Yes/No)");
        let abdominal_pain = prompt("Are you experiencing abdominal pain? (Yes/No)");
        let swelling_of_stomach = prompt("Do you have swelling of the stomach? (Yes/No)");
    
        if (days < 3) {
            return "You may have a viral infection. Rest and drink plenty of fluids.";
        } else if (days >= 3 && days < 7 && vomiting == "Yes" && abdominal_pain == "Yes") {
            return "You may have a gastrointestinal infection. See a doctor.";
        } else if (days >= 7 && yellowish_skin == "Yes" && swelling_of_stomach == "Yes") {
            return "You may have jaundice. See a doctor immediately.";
        } else {
            return "Your symptoms may indicate a serious condition. See a doctor.";
        }
    } 
    else if (input == "Fungal infection") {
        let days = prompt("How many days have you been experiencing symptoms?");
        let vomiting = prompt("Are you experiencing any vomiting? (Yes/No)");
        let yellowish_skin = prompt("Do you have yellowish skin? (Yes/No)");
        let abdominal_pain = prompt("Are you experiencing abdominal pain? (Yes/No)");
        let swelling_of_stomach = prompt("Do you have swelling of the stomach? (Yes/No)");
        if (days < 7 && abdominal_pain == "Yes") {
            return "You may have a peptic ulcer. See a doctor.";
        } else if (days >= 7 && yellowish_skin == "Yes") {
            return "You may have liver damage. See a doctor immediately.";
        } else if (days >= 7 && swelling_of_stomach == "Yes") {
            return "You may have ascites. See a doctor.";
        } else {
            return "Your symptoms may indicate a fungal infection. See a doctor.";
        }
        
    } 
    else if (input == "Allergy") {
        let difficulty_breathing = prompt("Are you having difficulty breathing? (Yes/No)");
        let skin_rash = prompt("Do you have a skin rash? (Yes/No)");
        let itching = prompt("Are you experiencing itching? (Yes/No)");
        let swelling_of_face = prompt("Do you have swelling of the face? (Yes/No)");
      
        if (difficulty_breathing == "Yes" || skin_rash == "Yes" || itching == "Yes" || swelling_of_face == "Yes") {
          return "You may be having an allergic reaction. Seek medical attention immediately.";
        } else {
          return "Your symptoms may not be related to an allergy. If you experience any new or worsening symptoms, see a doctor.";
        }
      }
      else if (input == "GERD") {
        let duration = prompt("How long have you been experiencing symptoms? (in days)");
        let heartburn = prompt("Do you have heartburn? (Yes/No)");
        let regurgitation = prompt("Do you have regurgitation (bringing up food)? (Yes/No)");
        let difficulty_swallowing = prompt("Are you experiencing difficulty swallowing? (Yes/No)");
        let chest_pain = prompt("Are you experiencing chest pain? (Yes/No)");
        
        if (duration < 7 && (heartburn == "Yes" || regurgitation == "Yes")) {
            return "You may have mild GERD. Try lifestyle modifications such as avoiding trigger foods and losing weight. Over-the-counter antacids may help.";
        } else if (duration >= 7 && (heartburn == "Yes" || regurgitation == "Yes") && difficulty_swallowing == "Yes" && chest_pain == "Yes") {
            return "You may have severe GERD. See a doctor for further evaluation and treatment options, such as prescription medications or surgery.";
        } else {
            return "Your symptoms may not necessarily indicate GERD. See a doctor for further evaluation.";
        }
    }
    else if (input == "Peptic ulcer disease") {
        let pain_location = prompt("Where is the pain located? (Upper abdomen/Lower abdomen)");
        let pain_duration = prompt("How long have you been experiencing the pain?");
        let vomiting = prompt("Are you experiencing any vomiting? (Yes/No)");
        let appetite_loss = prompt("Have you lost your appetite? (Yes/No)");
        let black_stool = prompt("Have you noticed any black stool? (Yes/No)");
      
        if (pain_location == "Upper abdomen" && pain_duration < 2 && vomiting == "No" && appetite_loss == "No") {
          return "You may have a mild peptic ulcer. Avoid spicy or acidic foods and take antacids.";
        } else if (pain_location == "Upper abdomen" && pain_duration >= 2 && vomiting == "Yes" && appetite_loss == "Yes") {
          return "You may have a bleeding peptic ulcer. See a doctor immediately.";
        } else if (pain_location == "Lower abdomen" && black_stool == "Yes") {
          return "You may have a perforated peptic ulcer. See a doctor immediately.";
        } else {
          return "Your symptoms may indicate peptic ulcer disease. See a doctor for proper diagnosis and treatment.";
        }
      }
      else if (input == "Drug reaction") {
        let days = prompt("How many days ago did you start experiencing symptoms?");
        let rash = prompt("Do you have a rash? (Yes/No)");
        let fever = prompt("Are you experiencing any fever? (Yes/No)");
        let breathing_difficulty = prompt("Are you experiencing breathing difficulty? (Yes/No)");
        let swollen_face = prompt("Do you have swollen face? (Yes/No)");
        
        if (days < 7 && rash == "Yes") {
            return "You may be having an allergic reaction to the medication. See a doctor.";
        } else if (fever == "Yes" && breathing_difficulty == "Yes" && swollen_face == "Yes") {
            return "You may be having a severe allergic reaction or anaphylaxis. Seek emergency medical attention.";
        } else {
            return "Your symptoms may indicate a drug reaction. See a doctor.";
        }
      }
    else if (input == "Urinary tract infection") {
        let days = prompt("How many days have you been experiencing symptoms?");
        let painful_urination = prompt("Are you experiencing painful urination? (Yes/No)");
        let frequent_urination = prompt("Are you urinating more frequently than usual? (Yes/No)");
        let cloudy_urine = prompt("Is your urine cloudy or foul-smelling? (Yes/No)");
        let lower_abdominal_pain = prompt("Are you experiencing pain or discomfort in your lower abdomen? (Yes/No)");
        if (days < 7 && painful_urination == "Yes") {
            return "You may have a bacterial UTI. See a doctor.";
        } else if (days >= 7 && frequent_urination == "Yes" && cloudy_urine == "Yes") {
            return "You may have a fungal UTI. See a doctor.";
        } else if (days >= 7 && lower_abdominal_pain == "Yes") {
            return "You may have a kidney infection. See a doctor immediately.";
        } else {
            return "Your symptoms may indicate a UTI. See a doctor.";
        }
    }
    else if (input == "Osteoarthritis") {
        let joint = prompt("Which joint(s) are experiencing pain? (e.g. knee, hip, finger)");
        let duration = prompt("How long have you been experiencing the pain? (in months)");
        let swelling = prompt("Do you have swelling in the joint(s)? (Yes/No)");
        let stiffness = prompt("Do you have stiffness in the joint(s)? (Yes/No)");
        let crunching_sound = prompt("Do you hear a crunching sound when you move the joint(s)? (Yes/No)");
        if (duration < 3 && swelling == "Yes" && stiffness == "Yes") {
            return "You may have early-stage osteoarthritis. See a doctor.";
        } else if (duration >= 3 && crunching_sound == "Yes") {
            return "You may have moderate-stage osteoarthritis. See a doctor.";
        } else if (duration >= 6) {
            return "You may have advanced-stage osteoarthritis. See a doctor immediately.";
        } else {
            return "Your symptoms may indicate osteoarthritis. See a doctor.";
        }
    }
    else if (input == "Hyperthyroidism") {
        let heart_rate = prompt("What is your heart rate (beats per minute)?");
        let weight_loss = prompt("Have you experienced any unintentional weight loss? (Yes/No)");
        let tremors = prompt("Do you have hand tremors? (Yes/No)");
        let anxiety = prompt("Are you experiencing anxiety? (Yes/No)");
        
        if (heart_rate > 100 && weight_loss == "Yes" && tremors == "Yes" && anxiety == "Yes") {
          return "Your symptoms may indicate Hyperthyroidism. See a doctor.";
        } else {
          return "Your symptoms do not appear to be indicative of Hyperthyroidism, but it is still best to see a doctor for proper evaluation.";
        }
      }
      else if (input == "Hypothyroidism") {
        let fatigue = prompt("Are you experiencing fatigue or tiredness? (Yes/No)");
        let weight_gain = prompt("Have you experienced unexplained weight gain recently? (Yes/No)");
        let constipation = prompt("Do you have constipation? (Yes/No)");
        let dry_skin = prompt("Do you have dry skin? (Yes/No)");
        let cold_sensitivity = prompt("Are you more sensitive to cold than usual? (Yes/No)");
        if (fatigue == "Yes" && weight_gain == "Yes" && constipation == "Yes" && dry_skin == "Yes" && cold_sensitivity == "Yes") {
            return "Your symptoms may indicate Hypothyroidism. See a doctor.";
        } else {
            return "Your symptoms do not strongly indicate Hypothyroidism, but it is best to see a doctor for an accurate diagnosis.";
        }
    }
    else if (input == "Varicose veins") {
        let pain = prompt("Are you experiencing any pain or discomfort in your legs? (Yes/No)");
        let swelling = prompt("Do you have any swelling or bulging veins in your legs? (Yes/No)");
        let itching = prompt("Are you experiencing any itching or burning sensation in your legs? (Yes/No)");
        if (pain == "Yes" || swelling == "Yes") {
          return "You may have varicose veins. It is recommended to consult a doctor for treatment options.";
        } else if (itching == "Yes") {
          return "You may have a mild case of varicose veins. Some self-care measures can be taken to reduce symptoms, but it is still recommended to consult a doctor for further evaluation.";
        } else {
          return "Your symptoms may not be related to varicose veins. Please consult a doctor for proper diagnosis and treatment.";
        }
      }
      else if (input == "Heart attack") {
        let chest_pain = prompt("Are you experiencing chest pain or discomfort? (Yes/No)");
        let upper_body_pain = prompt("Do you have pain or discomfort in the arms, back, neck, jaw, or stomach? (Yes/No)");
        let shortness_of_breath = prompt("Are you experiencing shortness of breath? (Yes/No)");
        let sweating = prompt("Are you sweating or breaking out into a cold sweat? (Yes/No)");
        let nausea = prompt("Do you feel nauseous or are you experiencing vomiting? (Yes/No)");
        if (chest_pain == "Yes" && upper_body_pain == "Yes" && shortness_of_breath == "Yes" && sweating == "Yes" && nausea == "Yes") {
            return "You may be experiencing a heart attack. Call emergency services immediately.";
        } else {
            return "Your symptoms do not seem to indicate a heart attack. However, if you have concerns about your heart health, please see a doctor.";
        }
    }
    else if (input === "Hemorrhoids") {
        let bleeding = prompt("Are you experiencing bleeding during bowel movements? (Yes/No)");
        let pain = prompt("Are you experiencing pain or discomfort during bowel movements? (Yes/No)");
        let swelling = prompt("Are you experiencing swelling around your anus? (Yes/No)");
        
        if (bleeding === "Yes" && pain === "No" && swelling === "No") {
          return "You may have internal hemorrhoids. Increase your fiber intake and see a doctor.";
        } else if (bleeding === "Yes" && (pain === "Yes" || swelling === "Yes")) {
          return "You may have external hemorrhoids. Increase your fiber intake and see a doctor.";
        } else {
          return "Your symptoms may indicate a different condition. See a doctor for proper diagnosis.";
        }
      } else if (input == "Pneumonia") {
        let fever = prompt("Do you have a fever? (Yes/No)");
        let cough = prompt("Do you have a cough? (Yes/No)");
        let chest_pain = prompt("Are you experiencing chest pain? (Yes/No)");
        let shortness_of_breath = prompt("Are you experiencing shortness of breath? (Yes/No)");
        let fatigue = prompt("Do you feel tired or fatigued? (Yes/No)");
        
        if (fever == "Yes" && cough == "Yes" && chest_pain == "Yes" && shortness_of_breath == "Yes" && fatigue == "Yes") {
          return "You may have pneumonia. See a doctor immediately.";
        } else if (fever == "Yes" && cough == "Yes" && shortness_of_breath == "Yes") {
          return "Your symptoms may indicate pneumonia. See a doctor.";
        } else {
          return "Your symptoms do not appear to be related to pneumonia. Please seek medical advice.";
        }
      }else if (input=="common cold"){
        let input = prompt("What are your symptoms? (e.g. cough, sore throat, runny nose)");

if (input.includes("fever")) {
  return "Your symptoms may indicate the flu. Rest and drink plenty of fluids. If symptoms persist, see a doctor.";
} else if (input.includes("cough") || input.includes("sore throat") || input.includes("runny nose")) {
  return "Your symptoms may indicate a common cold. Rest and drink plenty of fluids. If symptoms persist or worsen, see a doctor.";
} else {
  return "Your symptoms do not match any common illnesses. If they persist or worsen, see a doctor.";
}
}

else if (input == "Tuberculosis") {
    let cough = prompt("Are you experiencing a persistent cough for more than 3 weeks? (Yes/No)");
    let fever = prompt("Have you been experiencing fever and chills? (Yes/No)");
    let weight_loss = prompt("Have you experienced unexplained weight loss? (Yes/No)");
    let chest_pain = prompt("Are you experiencing chest pain or difficulty breathing? (Yes/No)");
    if (cough == "Yes" && fever == "Yes" && weight_loss == "Yes" && chest_pain == "Yes") {
        return "Your symptoms may indicate tuberculosis. See a doctor immediately.";
    } else {
        return "Your symptoms do not necessarily indicate tuberculosis, but it is still recommended to see a doctor for a proper diagnosis.";
    }
}
else if (input == "Hepatitis B") {
    let days = prompt("How many days have you been experiencing symptoms?");
    let jaundice = prompt("Are you experiencing yellowing of the skin or eyes? (Yes/No)");
    let fatigue = prompt("Are you experiencing fatigue or weakness? (Yes/No)");
    let fever = prompt("Are you experiencing a fever? (Yes/No)");
    let nausea = prompt("Are you experiencing nausea or vomiting? (Yes/No)");
    let abdominal_pain = prompt("Are you experiencing abdominal pain or discomfort? (Yes/No)");
    
    if (jaundice == "Yes" && fatigue == "Yes" && fever == "Yes" && nausea == "Yes" && abdominal_pain == "Yes") {
        return "You may have acute Hepatitis B. See a doctor immediately.";
    } else if (jaundice == "Yes" && fatigue == "Yes" && nausea == "Yes" && abdominal_pain == "Yes") {
        return "You may have chronic Hepatitis B. See a doctor for further evaluation and treatment.";
    } else {
        return "Your symptoms may not indicate Hepatitis B, but it is important to see a doctor for proper diagnosis and treatment.";
    }
}
else if (input == "Hepatitis A") {
    let fever = prompt("Are you experiencing fever? (Yes/No)");
    let fatigue = prompt("Are you feeling fatigued? (Yes/No)");
    let nausea = prompt("Are you experiencing nausea or vomiting? (Yes/No)");
    let jaundice = prompt("Do you have yellowish eyes or skin? (Yes/No)");
    let abdominal_pain = prompt("Are you experiencing abdominal pain? (Yes/No)");
    if (fever == "Yes" && fatigue == "Yes" && nausea == "Yes" && jaundice == "Yes" && abdominal_pain == "Yes") {
        return "Your symptoms may indicate Hepatitis A. See a doctor.";
    } else {
        return "Your symptoms do not appear to be related to Hepatitis A.";
    }
}
else if (input == "Typhoid") {
    let fever = prompt("Do you have a high fever? (Yes/No)");
    let stomach_pain = prompt("Are you experiencing stomach pain? (Yes/No)");
    let constipation = prompt("Do you have constipation? (Yes/No)");
    let diarrhea = prompt("Are you experiencing diarrhea? (Yes/No)");
    if (fever == "Yes" && stomach_pain == "Yes" && constipation == "Yes" && diarrhea == "No") {
        return "Your symptoms are consistent with Typhoid. See a doctor immediately for treatment.";
    } else {
        return "Your symptoms do not seem to be consistent with Typhoid. However, it is best to see a doctor for a proper diagnosis.";
    }
}
else if (input == "Dengue") {
    let fever = prompt("Do you have a high fever? (Yes/No)");
    let rash = prompt("Do you have a rash on your skin? (Yes/No)");
    let headache = prompt("Are you experiencing severe headache? (Yes/No)");
    let pain_behind_eyes = prompt("Are you experiencing pain behind your eyes? (Yes/No)");
    let joint_muscle_pain = prompt("Are you experiencing joint and muscle pain? (Yes/No)");
    if (fever == "Yes" && rash == "Yes" && headache == "Yes" && pain_behind_eyes == "Yes" && joint_muscle_pain == "Yes") {
      return "You may have Dengue fever. Please consult a doctor immediately.";
    } else {
      return "Your symptoms do not seem to indicate Dengue fever.";
    }
  }
  else if (input == "Chickenpox") {
    let fever = prompt("Do you have a fever? (Yes/No)");
    let rash = prompt("Do you have a rash that started as small red bumps and progressed to fluid-filled blisters? (Yes/No)");
    let itching = prompt("Are you experiencing itching? (Yes/No)");
    let headache = prompt("Are you experiencing a headache? (Yes/No)");
    if (fever == "Yes" && rash == "Yes" && itching == "Yes" && headache == "Yes") {
        return "You may have chickenpox. Get plenty of rest and see a doctor.";
    } else {
        return "Your symptoms may not indicate chickenpox. See a doctor for a proper diagnosis.";
    }
}
else if (input == "Malaria") {
    let fever = prompt("Do you have fever? (Yes/No)");
    let headache = prompt("Are you experiencing headache? (Yes/No)");
    let muscle_pain = prompt("Do you have muscle pain? (Yes/No)");
    let vomiting = prompt("Are you experiencing vomiting? (Yes/No)");
    
    if (fever == "Yes" && headache == "Yes" && muscle_pain == "Yes" && vomiting == "No") {
      return "Your symptoms suggest that you may have malaria. Please see a doctor immediately for diagnosis and treatment.";
    } else if (fever == "Yes" && headache == "Yes" && muscle_pain == "Yes" && vomiting == "Yes") {
      return "Your symptoms suggest that you may have severe malaria. Please seek medical attention immediately as this can be life-threatening.";
    } else {
      return "Your symptoms do not suggest malaria, but it's always best to consult with a doctor for proper diagnosis and treatment.";
    }
  }
  else if (input == "Jaundice") {
    let yellowish_skin = prompt("Do you have yellowish skin? (Yes/No)");
    let abdominal_pain = prompt("Are you experiencing abdominal pain? (Yes/No)");
    let fever = prompt("Do you have fever? (Yes/No)");
    if (yellowish_skin == "Yes" && abdominal_pain == "No" && fever == "Yes") {
        return "You may have viral hepatitis. See a doctor.";
    } else if (yellowish_skin == "Yes" && abdominal_pain == "Yes" && fever == "Yes") {
        return "You may have cholecystitis. See a doctor.";
    } else if (yellowish_skin == "Yes" && abdominal_pain == "Yes" && fever == "No") {
        return "You may have pancreatitis. See a doctor.";
    } else {
        return "Your symptoms may indicate jaundice. See a doctor.";
    }
}
else if (input == "Paralysis") {
    let side = prompt("Which side of the body is affected? (Left/Right)");
    let duration = prompt("How long have you been experiencing symptoms?");
    let high_blood_pressure = prompt("Do you have high blood pressure? (Yes/No)");
    let diabetes = prompt("Do you have diabetes? (Yes/No)");
    if (duration < 24 && high_blood_pressure == "Yes") {
      return "You may have experienced a transient ischemic attack (TIA), also known as a mini-stroke. See a doctor immediately.";
    } else if (duration >= 24 && high_blood_pressure == "Yes" && diabetes == "Yes") {
      return "You may have had a stroke. See a doctor immediately.";
    } else if (side == "Left" && high_blood_pressure == "Yes") {
      return "You may have experienced a left-sided stroke. See a doctor immediately.";
    } else if (side == "Right" && high_blood_pressure == "Yes") {
      return "You may have experienced a right-sided stroke. See a doctor immediately.";
    } else {
      return "Your symptoms may indicate paralysis. See a doctor.";
    }
  }
  else if (input == "Cervical spondylosis") {
    let neck_pain = prompt("Are you experiencing neck pain? (Yes/No)");
    let stiffness = prompt("Do you have stiffness in your neck? (Yes/No)");
    let weakness = prompt("Are you experiencing weakness or numbness in your arms or hands? (Yes/No)");
    let headache = prompt("Are you experiencing headaches? (Yes/No)");
    if (neck_pain == "Yes" && stiffness == "Yes" && weakness == "Yes" && headache == "Yes") {
        return "Your symptoms may indicate cervical spondylosis. See a doctor for diagnosis and treatment.";
    } else {
        return "Your symptoms may not indicate cervical spondylosis. Please see a doctor for proper diagnosis and treatment.";
    }
}
else if (input == "Migraine") {
    let headache_intensity = prompt("On a scale of 1-10, how intense is your headache?");
    let headache_location = prompt("Where is your headache located?");
    let nausea = prompt("Are you experiencing any nausea? (Yes/No)");
    let sensitivity_to_light = prompt("Are you sensitive to light? (Yes/No)");
    let sensitivity_to_sound = prompt("Are you sensitive to sound? (Yes/No)");
    
    if (headache_intensity >= 7 && headache_location == "One side of the head" && sensitivity_to_light == "Yes" && sensitivity_to_sound == "Yes") {
        return "Your symptoms may indicate a migraine. Take over-the-counter pain medication and rest in a quiet, dark room. If your symptoms persist, see a doctor.";
    } else if (nausea == "Yes") {
        return "Your symptoms may indicate a migraine with nausea. Take over-the-counter pain medication and rest in a quiet, dark room. If your symptoms persist, see a doctor.";
    } else {
        return "Your symptoms may indicate a tension headache. Try to relax and take over-the-counter pain medication. If your symptoms persist, see a doctor.";
    }
}
else if (input == "Hypertension") {
    let blood_pressure = prompt("What is your current blood pressure?");
    let age = prompt("What is your age?");
    let cholesterol = prompt("Do you have high cholesterol? (Yes/No)");
    let family_history = prompt("Does your family have a history of hypertension? (Yes/No)");
  
    if (blood_pressure >= 180 || blood_pressure <= 90) {
      return "Your blood pressure is extremely high. Seek emergency medical attention immediately.";
    } else if (blood_pressure >= 140 && blood_pressure < 180) {
      if (age >= 60 || cholesterol == "Yes" || family_history == "Yes") {
        return "Your blood pressure is high. See a doctor.";
      } else {
        return "Your blood pressure is high, but you may be able to lower it with lifestyle changes. Try reducing your salt intake, exercising regularly, and losing weight if necessary.";
      }
    } else if (blood_pressure >= 120 && blood_pressure < 140) {
      return "Your blood pressure is normal, but it's important to maintain healthy habits to prevent hypertension.";
    } else {
      return "Your blood pressure is low. This is generally not a concern unless you are experiencing symptoms such as dizziness or fainting.";
    }
  }
  else if (input == "Bronchial asthma") {
    let breathing_rate = prompt("What is your breathing rate? (Normal/Fast)");
    let cough = prompt("Are you experiencing a cough? (Yes/No)");
    let wheezing = prompt("Are you experiencing wheezing? (Yes/No)");
    let chest_tightness = prompt("Do you have chest tightness? (Yes/No)");
    
    if (breathing_rate == "Fast" && cough == "Yes" && wheezing == "Yes" && chest_tightness == "Yes") {
      return "Your symptoms suggest an acute asthma attack. Please seek medical attention immediately.";
    } else if (breathing_rate == "Normal" && cough == "Yes" && wheezing == "Yes" && chest_tightness == "Yes") {
      return "Your symptoms may indicate bronchial asthma. See a doctor for further evaluation and management.";
    } else {
      return "Your symptoms do not match those of bronchial asthma. Please try another symptom or see a doctor for further evaluation.";
    }
  }
  else if (input == "Gastroenteritis") {
    let days = prompt("How many days have you been experiencing symptoms?");
    let fever = prompt("Are you experiencing fever? (Yes/No)");
    let diarrhea = prompt("Are you experiencing diarrhea? (Yes/No)");
    let stomach_pain = prompt("Are you experiencing stomach pain? (Yes/No)");
  
    if (days < 2) {
      return "It is likely too early to tell if you have gastroenteritis. Please monitor your symptoms and see a doctor if they persist.";
    } else if (fever == "Yes" && diarrhea == "Yes" && stomach_pain == "Yes") {
      return "You may have gastroenteritis. Drink plenty of fluids and get plenty of rest. If your symptoms worsen, see a doctor.";
    } else {
      return "Your symptoms do not appear to be consistent with gastroenteritis. Please see a doctor for a proper diagnosis.";
    }
  }
  else if (input == "Diabetes") {
    let blood_sugar = prompt("What is your current blood sugar level?");
    let weight_loss = prompt("Have you experienced significant weight loss recently? (Yes/No)");
    let thirst = prompt("Are you experiencing excessive thirst? (Yes/No)");
    let blurry_vision = prompt("Are you experiencing blurry vision? (Yes/No)");
    let fatigue = prompt("Are you experiencing fatigue? (Yes/No)");

    if (blood_sugar < 100) {
        return "Your blood sugar level is normal.";
    } else if (blood_sugar >= 100 && blood_sugar < 126 && weight_loss == "No" && thirst == "No" && blurry_vision == "No" && fatigue == "No") {
        return "You may have pre-diabetes. See a doctor.";
    } else if (blood_sugar >= 126 || weight_loss == "Yes" || thirst == "Yes" || blurry_vision == "Yes" || fatigue == "Yes") {
        return "You may have diabetes. See a doctor immediately.";
    } else {
        return "Your symptoms may indicate a serious condition. See a doctor.";
    }
}
 

else if (input == "AIDS") {
    let high_fever = prompt("Are you experiencing a high fever? (Yes/No)");
    let night_sweats = prompt("Are you experiencing night sweats? (Yes/No)");
    let weight_loss = prompt("Have you experienced significant weight loss recently? (Yes/No)");
    let fatigue = prompt("Are you feeling more fatigued than usual? (Yes/No)");
    let rash = prompt("Are you experiencing a rash or skin sores? (Yes/No)");
    let sore_throat = prompt("Do you have a sore throat? (Yes/No)");
    
    if (high_fever == "Yes" && night_sweats == "Yes" && weight_loss == "Yes" && fatigue == "Yes" && rash == "Yes" && sore_throat == "Yes") {
        return "You may have AIDS. See a doctor immediately for testing and treatment.";
    } else {
        return "Your symptoms do not necessarily indicate AIDS, but it's important to get tested if you're concerned. See a doctor for more information.";
    }
}
else {
        return "Check spell and type again ";
    }
}