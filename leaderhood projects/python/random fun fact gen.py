import random

# we list the fun facts. which i took from awesome fun fact sites
fun_facts = [
    "The first computer virus was created in 1983 and was called the 'Elk Cloner'.",
    "The first electronic computer, ENIAC, weighed more than 27 tons and took up 1800 square feet.",
    "The QWERTY keyboard layout was designed in 1873 and was originally created to prevent typewriter jams.",
    "The first domain name ever registered was 'symbolics.com' on March 15, 1985.",
    "The first email was sent by Ray Tomlinson to himself in 1971.",
    "The term 'bug' to describe a glitch in a computer system originated in 1947 when a moth got caught in a relay of the Mark II computer at Harvard University.",
    "The Apollo 11 guidance computer that landed humans on the moon in 1969 had less processing power than a modern smartphone.",
    "The term 'Wi-Fi' doesn't stand for anything; it was simply a play on words with 'Hi-Fi' (High Fidelity).",
    "Amazon was originally called 'Cadabra' but changed its name after someone misheard it as 'cadaver'.",
    "The first webcam was created at the University of Cambridge to monitor a coffee pot."
]

# generate a random fun fact
random_fact = random.choice(fun_facts)

# print a random fun fact
print(random_fact)