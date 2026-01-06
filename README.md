# React + Vite Project (Notion Kanban Board)

In this project I've implemented a simple kanban board as you can see in the following image:

<table align="center">
  <td align="center">
    <img src="/print.png" alt="notion kanban" width="700" />
  </td>
</table>

##
This Kanban has four columns (Backlog, TODO, In progress, Complete) and the user is able to perform the following actions:
- Create a card
- Delete a card (by moving the card to the trash can)
- Move cards between column
- Move the cards within the same column

> Obs: In every action an animation was performed to improve the UX. The library used for this purpose was Motion (link: https://motion.dev/?via=cptv8)

##
The technologies used were:
- React 
- TailwindCSS for styling 
- Motion for animation

> Keep in mind that the directory structure of the components is organized in a way I'm used to work with when there's only the .jsx file and its corresponding .css file. So, as this is my first project working with tailwind I might have not used the right file organization :/
