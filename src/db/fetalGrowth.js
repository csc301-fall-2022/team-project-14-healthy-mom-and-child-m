import firebase from "firebase/app";
import "firebase/storage";

async function getFetalGrowthMeasurementsFromDatabase(weekNumber) {
	// Get the average weight (in ounces) and length (in inches) of the fetus 
	// based on the week of the pregnancy from the database for week 11 and onward
	if (!(11 <= weekNumber && weekNumber <= 42)) {
		console.warn("Invalid week number")
		return null
	}
	try {
		const db = firebase.firestore()
		const docRef = db.collection("FetalGrowth").doc(`week${weekNumber}`)
		const document = await docRef.get()
		const { length: lengthIn, weight: weightOz } = document.data()
		return { lengthIn, weightOz }
	} catch (error) {
		console.error(error)
		return null
	}
}

export async function getFetalGrowthMeasurements(weekNumber) {
	// Get the average weight and length in both imperial and metric 
	// based on the week of the pregnancy for week 11 and onward
	// Note: This function can be refactored to not use a database at all
	const { lengthIn, weightOz } = await getFetalGrowthMeasurementsFromDatabase(weekNumber)
	const lengthCm = lengthIn * 2.54
	const weightPounds = weightOz / 16
	const weightGrams = weightOz * 28.35
	return { lengthIn, lengthCm, weightOz, weightPounds, weightGrams }
}

export function getFetalMeasurementString(weekNumber) {
	// Get information about the length and weight (when appropriate)
	// for weeks 5 to 9 (inclusive) in string format
	switch(weekNumber) {
		case 5:
			return "between 1 and 2 mm in length"
		case 6:
			return "between 2 and 4 mm in length"
		case 7:
			return "approximately 1 cm in length"
		case 8:
		case 9:
			return "approximately 13 to 18 mm in length and weighs about 3 grams"
		default:
		  return ""
	}
}

export async function getFetalGrowthDescription(weekNumber) {
	// Get a medical description of the development of the fetus based on the week
	if (!(5 <= weekNumber && weekNumber <= 42)) {
		console.warn("Invalid week number")
		return null
	}
	try {
		const db = firebase.firestore()
		const docRef = db.collection("fetalDevelopmentDescription").doc(`week${weekNumber}`)
		const document = await docRef.get()
		const { description } = document.data()
		return description
	} catch (error) {
		console.error(error)
		return null
	}
}

export async function getFetalGrowthImage(weekNumber) {
	if (!(5 <= weekNumber && weekNumber <= 42)) {
		console.warn("Invalid week number")
		return null
	}
	const storage = firebase.storage()
	const pathRef = storage.ref(`FetalDevelopment/week${weekNumber}.png`);
	return await pathRef.getDownloadURL()
}
