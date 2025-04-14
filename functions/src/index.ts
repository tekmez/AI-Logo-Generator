import * as admin from "firebase-admin";
import * as logoApi from "./controller/logoApi";
import * as aiService from "./services/aiService";
// Firebase Admin Initialize
admin.initializeApp();

// Logo CRUD Controllers
export const addLogo = logoApi.addLogo;
export const getLogo = logoApi.getLogo;
export const updateLogo = logoApi.updateLogo;
export const deleteLogo = logoApi.deleteLogo;
export const getAllLogos = logoApi.getAllLogos;

// Logo Generation Controller
export const generateLogo = aiService.generateLogo;
