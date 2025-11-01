import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialLinksBar from "@/components/SocialLinksBar";
import { FileText } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Writing {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
  tags?: string[];
}

const writings: Writing[] = [
  {
    title: "Understanding DeFi Protocols",
    date: "October 2024",
    excerpt: "A deep dive into how decentralized finance protocols work and their impact on traditional finance.",
    readTime: "8 min read",
    content: "Decentralized Finance (DeFi) represents a paradigm shift in how we think about financial services. Unlike traditional finance, which relies on centralized intermediaries like banks and brokers, DeFi protocols operate on blockchain networks, enabling peer-to-peer financial transactions.\n\nAt the core of DeFi are smart contracts - self-executing contracts with the terms directly written into code. These contracts automatically execute transactions when predetermined conditions are met, eliminating the need for intermediaries.\n\nKey DeFi protocols include:\n\n- Automated Market Makers (AMMs): Platforms like Uniswap that enable decentralized trading\n- Lending Protocols: Services like Aave and Compound that facilitate borrowing and lending\n- Yield Aggregators: Tools that optimize returns across multiple DeFi platforms\n\nThe impact on traditional finance is profound. DeFi offers 24/7 accessibility, reduced costs, and financial services to anyone with an internet connection, potentially banking the unbanked and democratizing access to financial tools.\n\nHowever, challenges remain, including scalability issues, security concerns, and regulatory uncertainty. As the space matures, we're likely to see increased integration between traditional finance and DeFi, creating a more inclusive and efficient financial system.",
    tags: ["DeFi", "Blockchain", "Finance"]
  },
  {
    title: "Blockchain Scalability Solutions",
    date: "September 2024",
    excerpt: "Exploring Layer 2 solutions and their role in making blockchain technology more accessible.",
    readTime: "10 min read",
    content: "Blockchain scalability has been one of the most pressing challenges in the crypto space. As networks like Ethereum gained popularity, transaction costs skyrocketed and processing times increased, making it impractical for everyday use.\n\nLayer 2 (L2) solutions emerged as the answer to these challenges. These protocols are built on top of existing blockchains (Layer 1) and process transactions off the main chain, significantly improving throughput and reducing costs.\n\nMain types of L2 solutions:\n\n1. Rollups: Bundle multiple transactions into a single batch\n   - Optimistic Rollups: Assume transactions are valid by default\n   - ZK-Rollups: Use zero-knowledge proofs for validation\n\n2. State Channels: Allow parties to transact off-chain and settle on-chain\n\n3. Sidechains: Independent blockchains that run parallel to the main chain\n\nThe benefits are substantial: transactions that cost $50 on Ethereum mainnet can cost mere cents on L2 solutions like Arbitrum or Optimism, with near-instant confirmation times.\n\nLooking ahead, L2 solutions are critical for blockchain mass adoption. They make DeFi accessible to average users, enable new use cases like blockchain gaming and micropayments, and pave the way for the next billion crypto users.",
    tags: ["Blockchain", "Layer 2", "Scalability"]
  },
  {
    title: "The Future of Smart Contracts",
    date: "August 2024",
    excerpt: "How smart contracts are evolving and what that means for developers and users.",
    readTime: "6 min read",
    content: "Smart contracts have come a long way since their inception on Ethereum. As the technology matures, we're seeing significant advancements that are expanding what's possible in the blockchain space.\n\nKey evolution areas:\n\nEnhanced Security: Modern development practices include formal verification, comprehensive auditing processes, and battle-tested design patterns. Tools like OpenZeppelin provide secure, community-vetted contract templates.\n\nImproved Developer Experience: New languages and frameworks are making smart contract development more accessible. Solidity continues to evolve, while alternatives like Vyper offer different security trade-offs.\n\nCross-Chain Functionality: Protocols are emerging that enable smart contracts to interact across different blockchains, creating a more interconnected ecosystem.\n\nAI Integration: The combination of AI and smart contracts opens new possibilities for dynamic, adaptive decentralized applications.\n\nFor developers, this means:\n- More tools and resources for building secure contracts\n- Greater flexibility in choosing development platforms\n- New opportunities in emerging sectors like DeFi, NFTs, and DAOs\n\nFor users, the future promises:\n- More reliable and secure applications\n- Wider range of decentralized services\n- Better user experiences with lower costs\n\nAs smart contracts continue to evolve, they're becoming the foundation for a new generation of internet applications - more transparent, accessible, and user-controlled than ever before.",
    tags: ["Smart Contracts", "Development", "Web3"]
  },
];

const Writings = () => {
  const [selectedWriting, setSelectedWriting] = useState<Writing | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-12">Writings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writings.map((writing, index) => (
              <article 
                key={index}
                onClick={() => setSelectedWriting(writing)}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:translate-y-[-4px] group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{writing.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {writing.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {writing.excerpt}
                  </p>
                  
                  <span className="text-xs text-primary">{writing.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <Dialog open={!!selectedWriting} onOpenChange={() => setSelectedWriting(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedWriting && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  {selectedWriting.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span>{selectedWriting.date}</span>
                  <span>•</span>
                  <span>{selectedWriting.readTime}</span>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 pt-4">
                {selectedWriting.tags && (
                  <div className="flex flex-wrap gap-2">
                    {selectedWriting.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="prose prose-invert max-w-none">
                  {selectedWriting.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
      <SocialLinksBar />
    </div>
  );
};

export default Writings;
