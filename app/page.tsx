'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Terminal, 
  Download, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Github, 
  ExternalLink,
  Copy,
  Check,
  ChevronRight,
  Star,
  Users,
  GitBranch,
  Play,
  RotateCcw
} from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Built with Go for optimal performance and minimal resource usage'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure by Default',
    description: 'Modern security practices with SSL/TLS support and encryption'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Cross Platform',
    description: 'Works seamlessly on Linux, macOS, Windows, and FreeBSD'
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Developer Friendly',
    description: 'Intuitive CLI with colorful output and built-in readline features'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Modern Features',
    description: 'Port scanning, proxy support, file transfer, and much more'
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Easy Installation',
    description: 'Available via package managers and direct downloads'
  }
]

const installMethods = [
  {
    title: 'Homebrew (macOS/Linux)',
    command: 'brew install gocat',
    description: 'The easiest way to install on macOS and Linux'
  },
  {
    title: 'Go Install',
    command: 'go install github.com/ibrahmsql/gocat@latest',
    description: 'Install directly from source using Go'
  },
  {
    title: 'Package Managers (.deb/.rpm)',
    command: 'apt install gocat  # or yum install gocat.rpm, yay -S gocat',
    description: 'Available as .deb and .rpm packages for Linux distributions'
  },
  {
    title: 'Direct Download',
    command: 'curl -L https://github.com/ibrahmsql/gocat/releases/latest',
    description: 'Download pre-built binaries for all platforms'
  }
]

const examples = [
  {
    title: 'Connect to Remote Host',
    command: 'gocat connect example.com 80',
    description: 'Establish a connection to a remote server'
  },
  {
    title: 'Listen for Connections',
    command: 'gocat listen 8080',
    description: 'Start a server listening on port 8080'
  },
  {
    title: 'Port Scanning',
    command: 'gocat scan localhost 1-1000',
    description: 'Scan for open ports on a target host'
  },
  {
    title: 'File Transfer',
    command: 'gocat transfer file.txt remote-host:8080',
    description: 'Transfer files securely between hosts'
  }
]

const demoCommands = [
  {
    command: 'gocat connect google.com 80',
    output: 'Connecting to google.com:80...\nConnected successfully!\nConnection established to 142.250.191.14:80\nReady to send/receive data.'
  },
  {
    command: 'gocat listen 8080',
    output: 'Starting server on port 8080...\nListening on 0.0.0.0:8080\nServer ready to accept connections.\nWaiting for incoming connections...'
  },
  {
    command: 'gocat scan localhost 1-100',
    output: 'Scanning localhost ports 1-100...\nPort 22: Open (SSH)\nPort 80: Open (HTTP)\nPort 443: Open (HTTPS)\nScan completed. 3 open ports found.'
  },
  {
    command: 'gocat --help',
    output: 'GoCat - Modern netcat alternative\n\nUsage:\n  gocat [command]\n\nAvailable Commands:\n  connect     Connect to a remote host\n  listen      Listen for incoming connections\n  scan        Scan for open ports\n  help        Help about any command\n\nFlags:\n  -h, --help     help for gocat\n  -v, --version  version for gocat'
  }
]

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [terminalText, setTerminalText] = useState('')
  const [demoOutput, setDemoOutput] = useState('')
  const [currentCommand, setCurrentCommand] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState(0)
  const fullText = '$ gocat connect example.com 80'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">GoCat</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <a 
              href="https://github.com/ibrahimsql/gocat" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#install" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Modern
              </motion.span>{' '}
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Netcat
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A powerful, cross-platform networking tool built with Go. Fast, secure, and feature-rich replacement for traditional netcat.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href="#install" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Install Now</span>
            </a>
            <a 
              href="https://github.com/ibrahimsql/gocat" 
              className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Source</span>
            </a>
          </motion.div>
        </div>
        
        {/* Terminal Demo */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gray-900 rounded-lg p-6 text-left border border-gray-700">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">Terminal</span>
            </div>
            <div className="font-mono text-green-400">
              {terminalText}<span className="terminal-cursor">|</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose GoCat?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built from the ground up with modern networking needs in mind
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass p-6 rounded-lg hover-lift group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 group-hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started in Seconds
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your preferred installation method
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {installMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="glass p-6 rounded-lg group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {method.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {method.description}
                </motion.p>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 pr-12 group-hover:bg-gray-800 transition-colors duration-300">
                    {method.command}
                  </div>
                  <motion.button
                    onClick={() => copyToClipboard(method.command, index)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors rounded"
                    title="Copy to clipboard"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: copiedIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {copiedIndex === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common use cases and command examples
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <motion.div 
                key={index}
                className="glass p-6 rounded-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {example.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {example.description}
                </motion.p>
                <motion.div 
                  className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 group-hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    $ {example.command}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://github.com/ibrahimsql/gocat/blob/main/docs/user-guide.md" 
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View full documentation</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try GoCat Online
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience GoCat's capabilities with our interactive demo
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Command Selector */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {demoCommands.map((demo, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedDemo(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
                      selectedDemo === index
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                    }`}
                    whileHover={{ scale: selectedDemo === index ? 1 : 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {demo.command}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Interactive Terminal */}
            <motion.div 
              className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Terminal Header */}
              <motion.div 
                className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  ></motion.div>
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  ></motion.div>
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  ></motion.div>
                  <motion.span 
                    className="text-gray-400 text-sm ml-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    GoCat Demo Terminal
                  </motion.span>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => {
                      setDemoOutput('')
                      setCurrentCommand('')
                      setIsRunning(false)
                    }}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                    title="Clear terminal"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Terminal Content */}
              <motion.div 
                className="p-6 font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="text-gray-400 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Welcome to GoCat Interactive Demo!
                  <br />
                  Select a command above and click "Run" to see it in action.
                </motion.div>
                
                {/* Command Input */}
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.span 
                    className="text-green-400 mr-2"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    $
                  </motion.span>
                  <motion.span 
                    className="text-white flex-1"
                    key={selectedDemo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentCommand || demoCommands[selectedDemo].command}
                  </motion.span>
                  <motion.button
                    onClick={async () => {
                      if (isRunning) return
                      
                      setIsRunning(true)
                      setCurrentCommand(demoCommands[selectedDemo].command)
                      setDemoOutput('')
                      
                      // Simulate typing
                      const command = demoCommands[selectedDemo].command
                      for (let i = 0; i <= command.length; i++) {
                        setCurrentCommand(command.slice(0, i))
                        await new Promise(resolve => setTimeout(resolve, 50))
                      }
                      
                      // Simulate processing
                      await new Promise(resolve => setTimeout(resolve, 500))
                      
                      // Show output
                      const output = demoCommands[selectedDemo].output
                      const lines = output.split('\\n')
                      
                      for (let i = 0; i < lines.length; i++) {
                        await new Promise(resolve => setTimeout(resolve, 300))
                        setDemoOutput(prev => prev + (i > 0 ? '\n' : '') + lines[i])
                      }
                      
                      setIsRunning(false)
                    }}
                    disabled={isRunning}
                    className={`ml-4 px-3 py-1 rounded text-xs flex items-center space-x-1 transition-all duration-300 ${
                      isRunning
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
                    whileHover={!isRunning ? { scale: 1.05, y: -1 } : {}}
                    whileTap={!isRunning ? { scale: 0.95 } : {}}
                  >
                    <motion.div
                      animate={isRunning ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 1, repeat: isRunning ? Infinity : 0, ease: "linear" }}
                    >
                      <Play className="w-3 h-3" />
                    </motion.div>
                    <span>{isRunning ? 'Running...' : 'Run'}</span>
                  </motion.button>
                </motion.div>
                
                {/* Output */}
                {demoOutput && (
                  <motion.div 
                    className="text-green-400 whitespace-pre-line"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {demoOutput}
                  </motion.div>
                )}
                
                {isRunning && (
                  <motion.div 
                    className="text-yellow-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Processing...
                    </motion.span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Want to try the real thing? 
                <a href="#install" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Install GoCat now
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="glass p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Open Source</div>
              <div className="text-gray-400">MIT Licensed</div>
            </motion.div>
            
            <motion.div 
              className="glass p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">Cross Platform</div>
              <div className="text-gray-400">Linux, macOS, Windows, FreeBSD</div>
            </motion.div>
            
            <motion.div 
              className="glass p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">High Performance</div>
              <div className="text-gray-400">Built with Go</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">GoCat</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/ibrahmsql/gocat" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://github.com/ibrahmsql/gocat/blob/main/docs/user-guide.md" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/ibrahmsql/gocat/releases" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Releases
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 ibrahimsql. Released under the MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
