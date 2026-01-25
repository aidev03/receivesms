'use client';

import { useState, useMemo, useEffect, useCallback, createContext, useContext } from 'react';

interface SMSMessage {
  id: string;
  from: string;
  content: string;
  receivedAt: string;
  timeAgo: string;
  arrivedAt?: number; // timestamp when message "arrived"
}

// Event system for communication between Copy button and Messages list
type MessageEventCallback = (message: SMSMessage) => void;
const messageEventListeners: Set<MessageEventCallback> = new Set();

function subscribeToNewMessages(callback: MessageEventCallback) {
  messageEventListeners.add(callback);
  return () => messageEventListeners.delete(callback);
}

function emitNewMessage(message: SMSMessage) {
  messageEventListeners.forEach(callback => callback(message));
}

// Format time ago based on actual elapsed time
function formatTimeAgo(arrivedAt: number): string {
  const seconds = Math.floor((Date.now() - arrivedAt) / 1000);
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds} seconds ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) return '1 minute ago';
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return '1 hour ago';
  return `${hours} hours ago`;
}

/**
 * Pool of realistic SMS verification messages
 * Each number will get a unique random selection from this pool
 */
const MESSAGE_POOL = [
  // Uber
  { from: 'Uber', content: 'Your Uber code is {CODE4}. Never share this code.' },
  { from: 'Uber', content: '{CODE4} is your Uber code.' },
  { from: 'Uber', content: 'Uber code: {CODE4}. Reply STOP to unsubscribe.' },
  { from: '17324105578', content: 'Your Uber code is {CODE4}' },
  { from: '14254092621', content: '{CODE4} is your Uber code.' },
  { from: 'Informacja', content: 'Uber code: {CODE4}' },
  { from: '18152428116', content: 'Uber code: {CODE4}' },
  // WhatsApp
  { from: 'WhatsApp', content: 'Your WhatsApp code: {CODE6}. Don\'t share this code.' },
  { from: 'WhatsApp', content: '<#> Your WhatsApp code is {CODE6}. Do not share.' },
  { from: '31611282785', content: 'WhatsApp code {CODE3}-{CODE3}.' },
  { from: 'GRALIGA.PL', content: 'WhatsApp code {CODE3}-{CODE3}' },
  { from: '14155238886', content: 'Your WhatsApp verification code is {CODE6}' },
  // Telegram
  { from: 'Telegram', content: 'Telegram code: {CODE5}' },
  { from: 'SMS', content: 'Telegram code {CODE5}' },
  { from: '42777', content: 'Telegram code: {CODE5}. Don\'t give this code to anyone.' },
  { from: 'Telegram', content: 'Login code: {CODE5}. Do not give it to anybody.' },
  // Google
  { from: '22000', content: 'G-{CODE6} is your Google verification code. Don\'t share your code with anyone.' },
  { from: 'Google', content: 'G-{CODE6} is your Google verification code.' },
  { from: '22000', content: '<#> If someone requests this code, it is a scam. Use code {CODE6} only in Google Voice app to sign up. g.co/voice/help owBEk0tbefD' },
  { from: 'Google', content: '{CODE6} is your Google verification code for your phone.' },
  // Facebook
  { from: 'Facebook', content: '{CODE5} is your Facebook code. #fb' },
  { from: '32665', content: '{CODE6} is your Facebook confirmation code' },
  { from: '16504803896', content: '{CODE5} e o codigo de confirmacao do Facebook #fb' },
  { from: 'Meta', content: '{CODE6} is your Facebook confirmation code. @m.facebook.com #fb' },
  { from: '15708337923', content: 'Confirmado! Para editar as preferencias de SMS, acesse m.facebook.com/settings.' },
  // TikTok
  { from: 'TikTok', content: '[TikTok] {CODE6} is your verification code' },
  { from: '22395', content: '[TikTok] {CODE4} is your verification code, valid for 5 minutes.' },
  { from: 'TikTok', content: '[#][TikTok] {CODE6} is your verification code fJpzQvK2eu1' },
  // Instagram
  { from: '32665', content: '{CODE6} is your Instagram code. Don\'t share it.' },
  { from: 'Instagram', content: '{CODE6} is your Instagram code' },
  { from: 'Facebook', content: 'Use {CODE6} to verify your Instagram account.' },
  // Twitter/X
  { from: 'Twitter', content: 'Your Twitter confirmation code is {CODE6}.' },
  { from: '40404', content: 'Your X confirmation code is {CODE6}. Use it to verify your phone number.' },
  { from: '89203', content: 'In Twitter, enter the confirmation code {CODE6} to turn on two-factor authentication.' },
  // Discord
  { from: 'Discord', content: 'Your Discord verification code is: {CODE6}' },
  { from: 'Discord', content: 'Your verification code is {CODE6}.' },
  // Snapchat
  { from: 'Snapchat', content: 'Your Snapchat verification code is {CODE6}' },
  { from: 'Snapchat', content: 'Snapchat Code: {CODE6}. Happy Snapping!' },
  // Microsoft
  { from: 'Microsoft', content: 'Use {CODE6} as Microsoft account security code' },
  { from: 'Microsoft', content: 'Your Microsoft verification code is {CODE6}' },
  { from: '97671', content: 'Microsoft access code: {CODE6}' },
  // Amazon
  { from: 'Amazon', content: '{CODE6} is your Amazon OTP. Do not share it with anyone.' },
  { from: 'Amazon', content: 'Your Amazon verification code is {CODE6}' },
  { from: '262966', content: '{CODE6} is your Amazon OTP. Don\'t share this code.' },
  // PayPal
  { from: 'PayPal', content: 'Your PayPal code is: {CODE6}. Your code expires in 10 minutes.' },
  { from: 'PayPal', content: 'PayPal: Your security code is {CODE6}.' },
  { from: '72975', content: 'PayPal: {CODE6} is your security code. It expires in 10 min.' },
  // Netflix
  { from: 'Netflix', content: 'Your Netflix verification code is {CODE6}.' },
  { from: '66399', content: 'Your Netflix code is {CODE4}. Never share this code.' },
  // Spotify
  { from: 'Spotify', content: 'Your Spotify code is {CODE6}' },
  { from: '78156', content: '{CODE6} is your Spotify verification code.' },
  // Tinder
  { from: '22395', content: 'Your Tinder code is {CODE6}' },
  { from: 'Tinder', content: 'Your Tinder code is {CODE6}. Do not share.' },
  // Bumble
  { from: 'Bumble', content: 'Your Bumble code is {CODE6}' },
  { from: '22395', content: 'Your Bumble verification code is: {CODE6}' },
  // Banking/Financial
  { from: 'Revolut', content: '{CODE6} is your Revolut verification code. Do not share.' },
  { from: 'Wise', content: 'Your Wise verification code is: {CODE6}' },
  { from: 'N26', content: 'Your N26 verification code is {CODE6}' },
  { from: 'Binance', content: '[Binance] Verification code: {CODE6}. Do not share.' },
  { from: 'Coinbase', content: 'Your Coinbase verification code is {CODE6}' },
  { from: 'Crypto', content: '{CODE6} is your verification code for Crypto.com' },
  // Food Delivery
  { from: 'DoorDash', content: 'DO NOT share this code with anyone. DoorDash will NEVER ask you for this code: {CODE6}.' },
  { from: '14159094272', content: 'DO NOT share this code with anyone. DoorDash will NEVER ask you for this code: {CODE6}.' },
  { from: 'UberEats', content: 'Your Uber Eats code is {CODE4}' },
  { from: 'GrubHub', content: 'GrubHub code: {CODE6}' },
  { from: '15808002134', content: 'A Wolt kódod {CODE5}' },
  { from: 'Wolt', content: 'Your Wolt code is {CODE5}' },
  { from: '18338313939', content: 'Your Delivereasy verification code is: {CODE6}' },
  // Shopping
  { from: 'Shopee', content: 'Demi keamanan akun Anda, mohon TIDAK MEMBERIKAN kode verifikasi kepada siapapun. Kode verifikasi: {CODE6}' },
  { from: '31629031196', content: 'Demi keamanan akun Anda, mohon TIDAK MEMBERIKAN kode verifikasi kepada siapapun TERMASUK TIM SHOPEE. Kode verifikasi berlaku 15 mnt: {CODE6}' },
  { from: 'Vinted', content: 'Vinted code: {CODE4}. Valid for 2 minutes.' },
  { from: '31061', content: 'Vinted code: {CODE4}. Valid for 2 minutes.' },
  { from: 'AliExpress', content: '[AliExpress] Verification code: {CODE6}' },
  { from: 'eBay', content: 'Your eBay verification code is: {CODE6}' },
  // KakaoTalk
  { from: 'KakaoTalk', content: '{CODE4} Verification Code from KakaoTalk. [KakaoTalk]' },
  { from: '81787', content: '{CODE4} Verification Code from KakaoTalk. [KakaoTalk]' },
  { from: '14254092621', content: '{CODE4} Verification Code from KakaoTalk. [KakaoTalk]' },
  { from: 'Coinchase', content: '{CODE4} Verification Code from KakaoTalk. [KakaoTalk]' },
  // Gaming
  { from: 'Steam', content: 'Your Steam Guard code is {CODE5}' },
  { from: 'Steam', content: '{CODE5} is your Steam verification code' },
  { from: 'Epic', content: 'Your Epic Games verification code is {CODE6}' },
  { from: '44398', content: '{CODE6} is your verification code for Velo Poker: Texas Holdem Game.' },
  { from: 'Roblox', content: 'Your Roblox security code is: {CODE6}' },
  // Other services
  { from: 'DENT', content: 'Your DENT code is: {CODE6}' },
  { from: '48604957950', content: 'Your DENT code is: {CODE6}' },
  { from: '16573064024', content: 'Your DENT code is: {CODE6}' },
  { from: 'Hostinger', content: 'Hostinger code: {CODE6}. Valid for 10 minutes.' },
  { from: '31061', content: 'Hostinger code: {CODE6}. Valid for 10 minutes.' },
  { from: 'CloudSigma', content: 'Your CloudSigma verification code for MIA is {CODE6}' },
  { from: '16474925231', content: 'Your CloudSigma verification code for MIA is {CODE6}' },
  { from: 'adjarabet', content: 'Your otp is {CODE4}' },
  { from: '22395', content: 'Your Plenty Of Fish verification code is: {CODE6}' },
  { from: '18004210363', content: 'Caddy authentication code: {CODE6}' },
  { from: '22395', content: 'Your Mistral AI verification code is: {CODE6}' },
  { from: '16178303145', content: 'Open www.neuprime.com/f3, code: {CODE6}-{CODE4}' },
  { from: 'VK', content: 'VK: {CODE5} - use this code to activate your VK profile.' },
  { from: '15708337923', content: 'VK: {CODE5} - use this code to activate your VK profile.' },
  { from: '12517141088', content: '<#> Account: {CODE6} is your Samsung account verification code. bP2ROrn3fZQ' },
  { from: 'Samsung', content: '{CODE6} is your Samsung verification code.' },
  { from: 'codcor', content: '{CODE4}' },
  { from: 'InterCasino', content: 'Your PIN number is {CODE6}. Use this PIN to verify your account.' },
  { from: '18663435894', content: 'Code: {CODE4}. Please verify your phone number on Kalshi using this code.' },
  { from: 'Apple', content: 'Your Apple ID Code is: {CODE6}. Don\'t share it with anyone.' },
  { from: 'Signal', content: 'Your Signal verification code is: {CODE6}' },
  { from: 'Lyft', content: 'Your Lyft code is {CODE6}' },
  { from: 'LinkedIn', content: '{CODE6} is your LinkedIn verification code.' },
  { from: 'Airbnb', content: '{CODE4} is your Airbnb verification code.' },
  { from: 'Yahoo', content: 'Your Yahoo verification code is {CODE6}' },
  { from: 'Adobe', content: 'Adobe verification code: {CODE6}' },
  { from: 'LINE', content: 'LINE: {CODE6} is your verification code.' },
  { from: 'Viber', content: 'Your Viber code is: {CODE6}' },
  { from: 'WeChat', content: 'Use {CODE6} as your WeChat security verification code.' },
  { from: 'Grab', content: '[Grab] Your OTP is {CODE6}. Valid for 5 mins.' },
  { from: 'OLX', content: 'Your OLX verification code is {CODE4}' },
  { from: 'Bolt', content: 'Your Bolt code is {CODE4}' },
  { from: 'Glovo', content: 'Tu código de verificación de Glovo es {CODE6}' },
  { from: 'Skype', content: 'Use {CODE6} as your Skype verification code' },
  { from: 'Zoom', content: 'Zoom verification code: {CODE6}' },
  { from: 'Chudoslot', content: 'Dear Rider, welcome to Uber! Your Uber app is designed to make your booking experience smooth. Learn how to request an AC car in minutes here: t.uber.' },
  { from: '16467601731', content: 'Dear Rider, welcome to Uber! Your Uber app is designed to make your booking experience smooth. Learn how to request an AC car in minutes here: t.uber.' },
  { from: '886961591663', content: 'de celular, responda sair. Responda ajuda para outras opcoes. Podem ser cobradas tarifas de SMS.' },
  { from: 'Truecaller', content: 'Your Truecaller code is {CODE6}' },
  { from: 'Badoo', content: 'Badoo code: {CODE6}. Valid for 2 mins.' },
  { from: 'Hinge', content: 'Your Hinge verification code is {CODE6}' },
];

/**
 * Time intervals for messages (in minutes)
 */
const TIME_INTERVALS = [
  { min: 2, text: '2 minutes ago' },
  { min: 5, text: '5 minutes ago' },
  { min: 8, text: '8 minutes ago' },
  { min: 12, text: '12 minutes ago' },
  { min: 18, text: '18 minutes ago' },
  { min: 25, text: '25 minutes ago' },
  { min: 33, text: '33 minutes ago' },
  { min: 42, text: '42 minutes ago' },
  { min: 55, text: '55 minutes ago' },
  { min: 68, text: '1 hour ago' },
  { min: 85, text: '1 hour ago' },
  { min: 100, text: '1 hour ago' },
  { min: 125, text: '2 hours ago' },
  { min: 150, text: '2 hours ago' },
  { min: 180, text: '3 hours ago' },
  { min: 220, text: '3 hours ago' },
  { min: 280, text: '4 hours ago' },
  { min: 350, text: '5 hours ago' },
  { min: 420, text: '7 hours ago' },
  { min: 540, text: '9 hours ago' },
  { min: 720, text: '12 hours ago' },
  { min: 960, text: '16 hours ago' },
  { min: 1200, text: '20 hours ago' },
  { min: 1440, text: '1 day ago' },
];

/**
 * Generate a random code based on pattern
 */
function generateCode(pattern: string, seed: number): string {
  const rand = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };
  
  if (pattern === '{CODE3}') {
    return String(Math.floor(rand(seed) * 900 + 100));
  } else if (pattern === '{CODE4}') {
    return String(Math.floor(rand(seed) * 9000 + 1000));
  } else if (pattern === '{CODE5}') {
    return String(Math.floor(rand(seed) * 90000 + 10000));
  } else if (pattern === '{CODE6}') {
    return String(Math.floor(rand(seed) * 900000 + 100000));
  }
  return pattern;
}

/**
 * Generate unique messages for a phone number based on its ID
 */
function generateMessagesForNumber(phoneId: string): SMSMessage[][] {
  // Create a seed from the phone ID
  let seed = 0;
  for (let i = 0; i < phoneId.length; i++) {
    seed += phoneId.charCodeAt(i) * (i + 1);
  }
  
  // Seeded random function
  const seededRandom = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };
  
  // Shuffle array with seed (type-specific for MESSAGE_POOL items)
  const shuffleWithSeed = (arr: typeof MESSAGE_POOL, s: number): typeof MESSAGE_POOL => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(s + i) * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  
  // Get shuffled messages
  const shuffledMessages = shuffleWithSeed(MESSAGE_POOL, seed);
  
  // Generate 32-40 messages (4-5 pages of 8)
  const numMessages = 32 + Math.floor(seededRandom(seed + 999) * 8);
  const selectedMessages = shuffledMessages.slice(0, Math.min(numMessages, shuffledMessages.length));
  
  // Create message objects with unique codes and times
  const messages: SMSMessage[] = selectedMessages.map((msg, index) => {
    const timeInfo = TIME_INTERVALS[index % TIME_INTERVALS.length];
    const msgSeed = seed + index * 7;
    
    // Replace code patterns
    let content = msg.content;
    content = content.replace(/\{CODE3\}/g, () => generateCode('{CODE3}', msgSeed + 1));
    content = content.replace(/\{CODE4\}/g, () => generateCode('{CODE4}', msgSeed + 2));
    content = content.replace(/\{CODE5\}/g, () => generateCode('{CODE5}', msgSeed + 3));
    content = content.replace(/\{CODE6\}/g, () => generateCode('{CODE6}', msgSeed + 4));
    
    return {
      id: `msg-${phoneId}-${index}`,
      from: msg.from,
      content,
      receivedAt: new Date(Date.now() - timeInfo.min * 60 * 1000).toISOString(),
      timeAgo: timeInfo.text,
    };
  });
  
  // Split into pages of 8 messages
  const pages: SMSMessage[][] = [];
  for (let i = 0; i < messages.length; i += 8) {
    pages.push(messages.slice(i, i + 8));
  }
  
  return pages;
}

// Cache for generated messages
const messageCache: Record<string, SMSMessage[][]> = {};

/**
 * Get messages for a specific phone number (with caching)
 */
function getMessagesForNumber(phoneId: string): SMSMessage[][] {
  if (!messageCache[phoneId]) {
    messageCache[phoneId] = generateMessagesForNumber(phoneId);
  }
  return messageCache[phoneId];
}

/**
 * SMS Message Card Component (Client Component)
 * Displays individual SMS message with copy functionality
 */
export function MessageCard({ message, isNew = false }: { message: SMSMessage; isNew?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    // Extract code from message (4-7 digit numbers or formatted codes like 401-572)
    const codeMatch = message.content.match(/\b\d{4,7}\b|\b\d{3}[-\s]?\d{3}\b/);
    if (codeMatch) {
      navigator.clipboard.writeText(codeMatch[0].replace(/[-\s]/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Check if message contains a code
  const hasCode = /\b\d{4,7}\b|\b\d{3}[-\s]?\d{3}\b/.test(message.content);

  return (
    <article className={`rounded-xl p-4 transition-all ${
      isNew 
        ? 'bg-green-50 border-2 border-green-300 ring-2 ring-green-100 shadow-md animate-[fadeIn_0.5s_ease-out]' 
        : 'bg-white border border-slate-200 hover:shadow-md'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isNew ? 'bg-green-200 text-green-700' : 'bg-primary-100 text-primary-600'
          }`}>
            {message.from.charAt(0).toUpperCase()}
          </span>
          <span className="font-semibold text-slate-900">{message.from}</span>
          {isNew && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-medium">NEW</span>}
        </div>
        <span className={`text-xs ${isNew ? 'text-green-600 font-medium' : 'text-slate-500'}`}>{message.timeAgo}</span>
      </div>
      <p className={`rounded-lg p-3 font-mono text-sm break-words ${
        isNew ? 'bg-white text-slate-800 border border-green-200' : 'bg-slate-50 text-slate-700'
      }`}>
        {message.content}
      </p>
      {hasCode && (
        <button
          className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
          onClick={handleCopyCode}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Code
            </>
          )}
        </button>
      )}
    </article>
  );
}

/**
 * Messages List Component with Load More functionality
 * Handles displaying messages with pagination
 * Each phone number gets unique random messages
 */
export function MessagesList({ phoneId, initialMessages }: { phoneId: string; initialMessages?: SMSMessage[] }) {
  const [loadedPages, setLoadedPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [newMessages, setNewMessages] = useState<SMSMessage[]>([]);
  const [, forceUpdate] = useState(0);

  // Get messages for this specific phone number
  const allMessages = useMemo(() => getMessagesForNumber(phoneId), [phoneId]);

  // Subscribe to new message events
  useEffect(() => {
    const unsubscribe = subscribeToNewMessages((message) => {
      setNewMessages(prev => [message, ...prev]);
    });
    return () => { unsubscribe(); };
  }, []);

  // Update time display every 5 seconds for new messages
  useEffect(() => {
    if (newMessages.length === 0) return;
    const interval = setInterval(() => {
      forceUpdate(n => n + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [newMessages.length]);

  // Listen for refresh events to update time display
  useEffect(() => {
    const handleRefresh = () => {
      forceUpdate(n => n + 1);
    };
    window.addEventListener('refreshMessages', handleRefresh);
    return () => window.removeEventListener('refreshMessages', handleRefresh);
  }, []);

  // Get all messages up to the currently loaded page
  const displayedMessages = allMessages
    .slice(0, loadedPages)
    .flat();

  // Combine new messages with existing ones
  const allDisplayedMessages = [
    ...newMessages.map(msg => ({
      ...msg,
      timeAgo: msg.arrivedAt ? formatTimeAgo(msg.arrivedAt) : msg.timeAgo
    })),
    ...displayedMessages
  ];

  const hasMoreMessages = loadedPages < allMessages.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setLoadedPages((prev) => prev + 1);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* New Message Indicator */}
      {newMessages.length > 0 && (
        <div className="mb-4 bg-green-100 border border-green-300 rounded-lg p-3 flex items-center gap-2 animate-pulse">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-green-700 font-medium">
            {newMessages.length} new message{newMessages.length > 1 ? 's' : ''} received!
          </span>
        </div>
      )}

      {/* Messages List */}
      <div className="space-y-4">
        {allDisplayedMessages.map((message, index) => (
          <MessageCard 
            key={message.id} 
            message={message} 
            isNew={index < newMessages.length}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreMessages && (
        <div className="text-center mt-8">
          <button
            className="btn-secondary flex items-center gap-2 mx-auto"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Load Older Messages
              </>
            )}
          </button>
        </div>
      )}

      {/* End of messages indicator */}
      {!hasMoreMessages && (
        <div className="text-center mt-8 py-4">
          <p className="text-slate-500 text-sm">No more messages to load</p>
        </div>
      )}
    </>
  );
}

// Pool of services for generating random incoming messages
const INCOMING_MESSAGE_SERVICES = [
  { from: 'Google', template: 'G-{CODE} is your Google verification code.' },
  { from: 'WhatsApp', template: 'Your WhatsApp code: {CODE}. Don\'t share this code.' },
  { from: 'Telegram', template: 'Telegram code: {CODE}' },
  { from: 'Facebook', template: '{CODE} is your Facebook confirmation code' },
  { from: 'TikTok', template: '[TikTok] {CODE} is your verification code' },
  { from: 'Instagram', template: '{CODE} is your Instagram code' },
  { from: 'Twitter', template: 'Your Twitter confirmation code is {CODE}' },
  { from: 'Discord', template: 'Your Discord verification code is: {CODE}' },
  { from: 'Uber', template: 'Your Uber code is {CODE}. Never share this code.' },
  { from: 'Amazon', template: '{CODE} is your Amazon OTP. Do not share.' },
  { from: 'PayPal', template: 'Your PayPal code is {CODE}. It expires in 10 minutes.' },
  { from: 'Microsoft', template: 'Your Microsoft security code is {CODE}' },
  { from: 'Netflix', template: 'Your Netflix verification code is {CODE}' },
  { from: 'Spotify', template: 'Your Spotify code is {CODE}' },
  { from: 'LinkedIn', template: 'Your LinkedIn verification code is {CODE}' },
];

function generateRandomCode(): string {
  const length = Math.random() > 0.5 ? 6 : 4;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

function generateIncomingMessage(): SMSMessage {
  const service = INCOMING_MESSAGE_SERVICES[Math.floor(Math.random() * INCOMING_MESSAGE_SERVICES.length)];
  const code = generateRandomCode();
  const now = Date.now();
  
  return {
    id: `incoming-${now}-${Math.random().toString(36).substr(2, 9)}`,
    from: service.from,
    content: service.template.replace('{CODE}', code),
    receivedAt: new Date().toISOString(),
    timeAgo: 'just now',
    arrivedAt: now,
  };
}

/**
 * Copy Number Button Component (Client Component)
 * Handles copying phone number to clipboard and triggers message arrival
 */
export function CopyNumberButton({ number }: { number: string }) {
  const [copied, setCopied] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(number.replace(/[\s()-]/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    // Start countdown for new message (60 seconds = 1 minute)
    if (!waiting) {
      setWaiting(true);
      setCountdown(60);
      
      // Countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      // After 60 seconds, emit a new message
      setTimeout(() => {
        const newMessage = generateIncomingMessage();
        emitNewMessage(newMessage);
        setWaiting(false);
        setCountdown(0);
      }, 60000); // 60 seconds = 1 minute
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Number
          </>
        )}
      </button>
      
      {/* Waiting for SMS indicator */}
      {waiting && (
        <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200 animate-pulse">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Waiting for SMS... ({countdown}s)</span>
        </div>
      )}
    </div>
  );
}

/**
 * Refresh Messages Button Component (Client Component)
 * Handles refreshing the messages list - updates time display without page reload
 */
export function RefreshButton() {
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  const handleRefresh = () => {
    setRefreshing(true);
    // Simulate refresh with a small delay
    setTimeout(() => {
      setRefreshing(false);
      setLastRefresh(Date.now());
      // Dispatch a custom event to trigger time updates without page reload
      window.dispatchEvent(new CustomEvent('refreshMessages'));
    }, 800);
  };

  return (
    <button
      className="btn-secondary flex items-center gap-2"
      onClick={handleRefresh}
      disabled={refreshing}
    >
      <svg
        className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      {refreshing ? 'Refreshing...' : 'Refresh Messages'}
    </button>
  );
}
