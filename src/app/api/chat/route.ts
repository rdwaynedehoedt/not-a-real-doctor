import { NextResponse } from "next/server";

// This is a mock API response. In a real application, you would connect to an AI service.
export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock responses based on input
    let response = "I understand how you're feeling. Would you like to talk more about that?";
    
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("sad") || lowerMessage.includes("depress")) {
      response = "I'm sorry to hear you're feeling down. Remember that it's okay to not be okay sometimes. Would you like to explore some simple activities that might help lift your mood?";
    } else if (lowerMessage.includes("anxious") || lowerMessage.includes("worry") || lowerMessage.includes("stress")) {
      response = "Anxiety can be really challenging. Taking slow, deep breaths might help in the moment. Would you like to try a quick breathing exercise together?";
    } else if (lowerMessage.includes("happy") || lowerMessage.includes("good") || lowerMessage.includes("great")) {
      response = "I'm glad to hear you're feeling positive! What's been contributing to your good mood lately?";
    } else if (lowerMessage.includes("tired") || lowerMessage.includes("exhausted") || lowerMessage.includes("sleep")) {
      response = "Rest is so important for our mental wellbeing. Have you been having trouble with your sleep routine lately?";
    } else if (lowerMessage.includes("help") || lowerMessage.includes("suicide") || lowerMessage.includes("hurt")) {
      response = "I'm concerned about what you're sharing. Please remember that I'm just a chatbot and not a real mental health professional. If you're in crisis, please contact a crisis helpline or emergency services immediately.";
    }
    
    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Error processing chat:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    );
  }
} 