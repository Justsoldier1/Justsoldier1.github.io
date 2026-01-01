//creates a variable that targets items with the header id
const header = document.querySelector('#header')

window.addEventListener('load', function(){
    //sets the HTML code within this element
    header.innerHTML = `
    <table class="headertable">
        <tr class="headercontents">
            <td class ="AboutLink"><a href="#about" class="ClearWhiteAnchor">Tyler Gledhill</a></td>
            <td><a href="#projects" class="ClearWhiteAnchor">Projects</a></td>
            <td><a title="Linktree for Tyler Gledhill" class="ClearWhiteAnchor">My socials</a></td>
            <td><a href="mailto:whattyler@outlook.com" title="Email me" target="_blank" rel="noopener noreferrer" class="ClearWhiteAnchor">Contact me</a></td>
        </tr>
    </table>
    `;
});