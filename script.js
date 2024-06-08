const traits = [
    {
        name: "Prediction",
        description: "At the start of your turn, if you correctly guess the outcome of your next dice roll, you can choose to receive $250 from the bank, pay 40% less rent, move twice the dice roll value, or teleport to any square if you guess a 2 or a 12.",
        uses: Infinity
      },
      {
        name: "Businessman",
        description: "You get $5 off on all payments, excluding trading, increasing by an additional $5 for every payment owed. When another player lands on your property, you may charge them the discount amount x2 on top of the normal rent (4 uses).",
        uses: 4
      },
      {
        name: "Insurance",
        description: "Whenever you pass Go, you may choose to pay $50, $100, or $200 to the bank for 10%, 25%, or 50% off on all rent payments respectively. You can change or cancel the plan upon passing Go again.",
        uses: Infinity
      },
      {
        name: "Crowd Favourite",
        description: "You receive 150% of the money from passing Go. Once all properties are purchased, you receive 200% of the money from passing Go.",
        uses: Infinity
      },
      {
        name: "Master Negotiator",
        description: "After a successful trade with another player, you receive $200 from the bank. If the trade results in a monopoly, you get a free settlement on one property. Limited to one trade per person per turn and only activates with at least 1 card exchanged. (2 uses)",
        uses: 2
      },
      {
        name: "Blizzard",
        description: "Every other player's roll numbers are halved for 1 turn, rounded down (4 uses).",
        uses: 4
      },
      {
        name: "Parasite",
        description: "When you land on an owned property, you can buy a 50% share of the property for half the original price. Rent payouts are shared between you and the original owner (3 uses).",
        uses: 3
      },
      {
        name: "Hibernate",
        description: "For 3 turns, you do not move or roll the dice. Other players choose a number you cannot roll after your 3 turns, if you roll it you must reroll. Each pass of Go adds +1 use (Starts at 0 uses).",
        uses: 0
      },
      {
        name: "Welfare",
        description: "If your money is below certain thresholds, you receive benefits at the start of your turn until the threshold is crossed. $50 for $400-$600, $100 for $200-$400, double trait income below $200.",
        uses: Infinity
      },
      {
        name: "Desperation",
        description: "If hit with a rent that would bankrupt you, you may pay nothing and go to jail, receiving x4 multiplier on trait income while in jail (1 use).",
        uses: 1
      },
      {
        name: "Reserved Parking",
        description: "If you land on Free Parking, you receive $300 from the bank if there's $100 or less in the center. If another player lands on Free Parking, you receive 50% of the payout won.",
        uses: Infinity
      },
      {
        name: "Lucky Draw",
        description: "When you receive a good luck card, draw 2 and choose one. You may keep one and give one to another player (3 uses).",
        uses: 3
      },
      {
        name: "Poker Face",
        description: "Peek at the next 3 development cards but you may not buy any on this turn (2 uses).",
        uses: 2
      },
      {
        name: "Overpower",
        description: "Swap any one trait from any two people for one turn. After swapping, this trait goes into a 2 turn cooldown (4 uses).",
        uses: 4
      },
      {
        name: "Warrigal Road",
        description: "Pick any street or corner, and no charges will be issued to you. Skip any good luck cards on the chosen street. Effect negates after passing Go twice (2 uses).",
        uses: 2
      },
      {
        name: "Nate’s House",
        description: "Place two 'Nate’s House' at any point. If anyone lands on the square, they owe you $100. Stacks with additional people. If placed on another player's property, you don't pay rent.",
        uses: Infinity
      },
      {
        name: "Viv Fart",
        description: "After another player lands on your property and owes rent, they owe you $50 for the next two turns (if they didn't dodge rent).",
        uses: Infinity
      },
      {
        name: "Bees Dick",
        description: "Once you roll the dice, you can add or subtract 1 from your roll (6 uses).",
        uses: 6
      },
      {
        name: "Conductor",
        description: "Upon landing on a train station, you may travel to any other train station. If others travel, they owe you based on distance. You may purchase all train stations at a 25% discount.",
        uses: Infinity
      },
      {
        name: "Warden",
        description: "Choose the jail time for all players (0-4 turns). You still collect $200 from passing Go if in jail. You can send another player to jail if you get a 'get out of jail free' card.",
        uses: Infinity
      },
      {
        name: "Hourly Rate",
        description: "The bank pays you $40 for every turn a player is in jail.",
        uses: Infinity
      },
      {
        name: "Police Chase",
        description: "If a player escapes jail, they are Wanted. You may send them back to jail if you land on the same square.",
        uses: Infinity
      },
      {
        name: "Nepotism Baby",
        description: "Begin with an additional $600. Your first property and house are paid by the bank. You can't buy development cards on the first 2 turns.",
        uses: Infinity
      },
      {
        name: "Estate Auctioneer",
        description: "Select an unowned property and put it into auction. If all properties are bought, you get $100 for each remaining use (2 uses).",
        uses: 2
      },
      {
        name: "Insider Connections",
        description: "Upon landing on a property, you may purchase a different property within the same color set (2 uses).",
        uses: 2
      },
      {
        name: "The Godfather",
        description: "Paid an extra $30 on board income and $50 on card income. Avoid board taxes. Make another player go to jail instead of you (1 use).",
        uses: 1
      },
      {
        name: "Hitman for Hire",
        description: "Kidnap a player and hold them for ransom. They pay you based on dice roll value to escape. If they refuse, they are killed at the end of turn 2 (3 uses).",
        uses: 3
      },
      {
        name: "Craps Addict",
        description: "Rolling doubles grants unique benefits. Odd doubles grant a random trait for 3 turns, capped at 3 traits. Even doubles pay you $75 per trait.",
        uses: Infinity
      },
      {
        name: "Rehab Escapist",
        description: "You can choose not to be sent to jail after 3 double rolls until you roll a non-double combination.",
        uses: Infinity
      },
      {
        name: "Secret Tenant",
        description: "Choose 3 properties at the start. Own 1/3 properties: $500, 2/3: $750, 3/3: $750 and 1 victory point.",
        uses: Infinity
      },
      {
        name: "Splooge",
        description: "Before rolling the dice, scream 'SPLOOGE' and pay $200 to double all income/expenses until your next turn.",
        uses: Infinity
      },
      {
        name: "Viv Fart",
        description: "After another player lands on your property and owes rent, for the next two additional turns, that player owes you $50. Does not take effect if someone dodged rent.",
        uses: Infinity
      },
  ];
  
  function populateTraits() {
    const select = document.getElementById("traits");
    traits.forEach((trait, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = trait.name;
      select.appendChild(option);
    });
  }
  
  function selectTrait() {
    const select = document.getElementById("traits");
    const selectedTrait = traits[select.value];
    document.getElementById("trait-name").textContent = selectedTrait.name;
    document.getElementById("trait-description").textContent = selectedTrait.description;
    document.getElementById("trait-uses").textContent = selectedTrait.uses;
    document.getElementById("trait-info").dataset.index = select.value;
  }
  
  function useTrait() {
    const traitIndex = document.getElementById("trait-info").dataset.index;
    const trait = traits[traitIndex];
    if (trait.uses > 0 && trait.uses !== Infinity) {
      trait.uses--;
      document.getElementById("trait-uses").textContent = trait.uses;
    }
  }
  
  populateTraits();