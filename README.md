# Project Name: Roulette Wheel for OBS

## Description
This project is designed to create a **roulette-style wheel** that you can integrate into your [OBS](https://obsproject.com/) (Open Broadcaster Software) scenes. It's perfect for interactive streams, giveaways, or any situation where you want to randomly select items from predefined lists.

## Installation

1. **Download the Project:**
   - Click the **Code** button above and select the **Download ZIP** option.
   - Save the downloaded ZIP file to a location of your preference.

2. **Unzip the Project:**
   - Extract the contents of the ZIP file to a folder on your computer.

3. **Set Up OBS Scene:**
   - Open OBS and create a new scene (if you haven't already).
   - Add a new **Browser Source** to your scene.
   - In the **Browser Source** settings:
     - Set the **URL** to the `index.html` file from the unzipped project folder.
     - Check the option **"Shutdown source when not visible"**. This ensures that the roulette wheel stops spinning when it's not visible in your scene.

4. **Customize Lists:**
   - By default, the project includes sample lists.
   - To change the default lists:
     - Create a `.txt` file for each list you want to use (e.g., `fruits.txt`, `colors.txt`).
     - Inside the new file you can add the options separated by commas. (see [`lists/lists.txt`](https://github.com/miguelangel45/Roulette-s/blob/master/lists/list1.txt) as example
     - Place these files in the **lists** directory within the project folder.
     - Edit the [`lists.txt`](https://github.com/miguelangel45/Roulette-s/blob/master/lists/lists.txt) file (also in the **lists** directory) and add the names of your custom lists, separated by commas.

## Usage
- When you go live or activate the scene with the roulette wheel, it will randomly select items from your lists.
- Enjoy the excitement of spinning the wheel and surprising your audience!

Here's an example of the roulette working on obs:
![Untitled-video](https://github.com/miguelangel45/Roulette-s/assets/22915449/de074e6f-cdac-44cf-9681-db6e1591cfb0)

