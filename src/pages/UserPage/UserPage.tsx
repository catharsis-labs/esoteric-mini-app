import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"; // Assuming you have a Separator component or create one
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom"

import {
    initDataRaw as _initDataRaw,
    initDataState as _initDataState,
    LaunchParams,
    type User,
    useSignal,
} from '@telegram-apps/sdk-react';
import type {DisplayDataRow} from "@/components/DisplayData/DisplayData.tsx";

function getUserRows(user: User): DisplayDataRow[] {
    return Object.entries(user).map(([title, value]) => ({ title, value }));
}

const launchParams = LaunchParams;
const telegramUser = initData?.user;
const userData = {
    name: telegramUser.first_name,
    avatarUrl: "https://placehold.co/100x100/A0A0A0/FFFFFF?text=IV", // Placeholder image for avatar
    achievements: [
        { name: "Hierophant", progress: 80, icon: "🧘" }, // Using emojis as placeholders for icons
        { name: "Empress", progress: 60, icon: "👑" },
        { name: "Incredible Coach", progress: 90, icon: "🏆" },
        { name: "Another Ach.", progress: 40, icon: "🌟" },
    ],
    personalInfo: {
        name: "Ivan Nesterov",
        birthday: "21.05.2000",
        gender: "Male",
        occupation: "Freelancer",
    },
};

export function UserPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-20 font-inter">
            {/* Profile Header */}
            <div className="w-full bg-white p-4 pt-8 shadow-sm flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={userData.avatarUrl} alt="User Avatar" />
                    <AvatarFallback>IV</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
            </div>

            {/* Achievements Section */}
            <div className="w-full bg-white p-4 mt-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
                    <Button variant="link" className="text-purple-600" onClick={() => navigate('/achievements')}>See all</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {userData.achievements.map((achievement, index) => (
                        <Card key={index} className="flex flex-col items-center justify-center p-4 text-center border-none shadow-none bg-transparent">
                            <div className="relative w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-2 overflow-hidden">
                                {/* SVG for achievement icon - replace with actual icons if available */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-purple-600">
                                    {/* This is a placeholder SVG. You'd use actual SVG paths for your icons. */}
                                    {achievement.icon === "🧘" && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>}
                                    {achievement.icon === "👑" && <path d="M16 8v-1.5c0-.83-.67-1.5-1.5-1.5H9.5C8.67 5 8 5.67 8 6.5V8c-2.67 0-6 1.34-6 4v2h20v-2c0-2.66-3.33-4-6-4zm-4 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>}
                                    {achievement.icon === "🏆" && <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.72 4.09 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>}
                                    {achievement.icon === "🌟" && <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>}
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-purple-600 opacity-20">
                                    {/* Placeholder for achievement number if any. The image shows numbers (10, 30) */}
                                    {index === 0 && 10}
                                    {index === 1 && 30}
                                </div>
                            </div>
                            <p className="text-sm font-medium text-gray-700">{achievement.name}</p>
                            <Progress value={achievement.progress} className="w-full h-2 rounded-full mt-1 indicatorClassName=bg-purple-600" />
                        </Card>
                    ))}
                </div>
            </div>

            {/* History and Favourites */}
            <div className="w-full bg-white p-4 mt-4 shadow-sm space-y-2">
                <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
            <span className="p-2 bg-green-100 rounded-full text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414L14.586 5A2 2 0 0115 5.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h7V5.414L10.586 4H6z" clipRule="evenodd" />
              </svg>
            </span>
                        <span>History of spreads</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Button>
                <Separator className="bg-gray-200" /> {/* Separator between buttons */}
                <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
            <span className="p-2 bg-pink-100 rounded-full text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </span>
                        <span>Favourites</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Button>
            </div>

            {/* Personal Section */}
            <div className="w-full bg-white p-4 mt-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal</h2>
                <div className="space-y-3">
                    {Object.entries(userData.personalInfo).map(([key, value], index) => (
                        <div key={key}>
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center space-x-3 text-gray-700">
                  <span className="p-2 rounded-full bg-purple-100 text-purple-600">
                    {/* Placeholder icons for personal info */}
                      {key === 'name' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}
                      {key === 'birthday' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}
                      {key === 'gender' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM7 9a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" /></svg>}
                      {key === 'occupation' && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l.293.293A1 1 0 009 15h2a1 1 0 00.707-.293l.293-.293V17a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293-.293a1 1 0 000-1.414l-7-7z" /></svg>}
                  </span>
                                    <span className="capitalize">{key}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <span>{value}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            {index < Object.keys(userData.personalInfo).length - 1 && <Separator className="bg-gray-200" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* General Section (Language, Contact Us, Transaction History) */}
            <div className="w-full bg-white p-4 mt-4 shadow-sm space-y-2">
                {/* Language */}
                <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
            <span className="p-2 bg-blue-100 rounded-full text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9.922A6.5 6.5 0 0012 16.5a1.5 1.5 0 013 0A6.504 6.504 0 0014.225 10H18a1 1 0 000-2h-3.775A6.504 6.504 0 0012 3.5a1.5 1.5 0 01-3 0A6.5 6.5 0 004.083 9.922zM10 14a1 1 0 100-2 1 1 0 000 2zM10 6a1 1 0 100 2 1 1 0 000-2zM4.775 8a6.5 6.5 0 00-1.69 1.922A6.5 6.5 0 004.775 8z" clipRule="evenodd" />
              </svg>
            </span>
                        <span>Language</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span>{/*userData.settings.language*/} тут язык будет</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </Button>
                <Separator className="bg-gray-200" />
                {/* Contact Us */}
                <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
            <span className="p-2 bg-green-100 rounded-full text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v9A2.5 2.5 0 0115.5 17h-11A2.5 2.5 0 012 14.5v-9zM4.5 4h11c.276 0 .5.224.5.5V6H4v-.5c0-.276.224-.5.5-.5zM16 8V6H4v2h12zm-2 4H6v-2h8v2z" clipRule="evenodd" />
              </svg>
            </span>
                        <span>Contact Us</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Button>
                <Separator className="bg-gray-200" />
                {/* Transaction History */}
                <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
            <span className="p-2 bg-purple-100 rounded-full text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.293 2.293a1 1 0 001.414-1.414L11 11.586V6z" clipRule="evenodd" />
              </svg>
            </span>
                        <span>Transaction history</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </Button>
            </div>

            {/* Legal Section */}
            <div className="w-full bg-white p-4 mt-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Legal</h2>
                <div className="space-y-3">
                    {/* Policy Privacy */}
                    <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
              <span className="p-2 bg-gray-100 rounded-full text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414L14.586 5A2 2 0 0115 5.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h7V5.414L10.586 4H6z" clipRule="evenodd" />
                </svg>
              </span>
                            <span>Policy Privacy</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Button>
                    <Separator className="bg-gray-200" />
                    {/* Terms & Conditions */}
                    <Button variant="ghost" className="w-full justify-between px-4 py-6 text-base text-gray-800 hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
              <span className="p-2 bg-gray-100 rounded-full text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414L14.586 5A2 2 0 0115 5.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h7V5.414L10.586 4H6z" clipRule="evenodd" />
                </svg>
              </span>
                            <span>Terms&Conditions</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}