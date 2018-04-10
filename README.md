# Buddy.GG

New version of buddy.gg!

## Project structure
```
root
│   
└───src  
│   │   BuddyGG.tsx		# Root component
│   │
│   └───index.tsx		# Entry   
│   │
│   └───components		# Small components
│   │    
│   └───blocks			# Collection of smaller components
│   │       
│   └───containers		# Collection of containers connected to the redux store
│   │
│   └───pages			# All main pages. Consists of components and blocks
│   │
│   └───store			# Contains everything related to the redux store
│   │
│   └───utils			# Utility stuff
```

## How to run

Install dependencies using <code>npm install</code>

Run Webpack dev server using <code>npm run start</code>