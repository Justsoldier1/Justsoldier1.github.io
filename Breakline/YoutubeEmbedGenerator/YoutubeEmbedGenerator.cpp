#include <iostream>

std::string embedlink = "https://www.youtube.com/embed/QLH_0T_xv3I?si=-R4lf5sS8yOOMoHN";
std::string normallink = "https://youtu.be/7tVZ1FSLFIw";
std::string watchlink = "https://www.youtube.com/watch?v=gp7ja4c1FCU&list=RDMM&index=7";

//variables
//strings
std::string input = "";
std::string embedprefix = "https://www.youtube.com/embed/";
std::string convertedlink = "";

//booleans
bool iswatchlink = true;

//functions
std::string removeyoutubeprefix(std::string input);
std::string removeyoutubewatchprefix(std::string input);
std::string insertwww(std::string input);
std::string removewatchsuffix(std::string input);
/// <summary>
/// Gets the type of youtube link
/// </summary>
/// <param name="link:">The link to check</param>
/// <returns>True is watch link, false is normal link</returns>
bool getlinktype(std::string link);

int main()
{
    //link examples
    std::cout << "Embed link: " + embedlink + "\n";
    std::cout << "Normal link: " + normallink + "\n";
    std::cout << "Watch link: " + watchlink + "\n";

    //user input
    std::cout << "Enter the youtube link: ";
    std::cin >> input;
    std::cout << "\n";
    
    //need to insert www. into convertedlink for more consistency between link sizes
    convertedlink = insertwww(input);

    //getting the link type
    iswatchlink = getlinktype(convertedlink);

    if (iswatchlink) {
		convertedlink = removeyoutubewatchprefix(convertedlink);
		convertedlink = removewatchsuffix(convertedlink);
    }
    else {
		convertedlink = removeyoutubeprefix(convertedlink);
    }
   
    convertedlink = embedprefix + convertedlink;
    std::cout << "Converted link: " + convertedlink;

}

std::string insertwww(std::string input) {

    std::string prefix = "www.";
    //checking if www. needs to be inserted.
    if (input[8] != prefix[0]) {
        input.insert(8,prefix);
    }
    return input;
}

bool getlinktype(std::string input) {
    
	return input.find("watch") != std::string::npos;
}

std::string removeyoutubeprefix(std::string input) {
    //removing the standard youtube prefix
    for (int i = 0; i < 21; i++) {
        input[i] = NULL;
    }
    return input;
}

std::string removeyoutubewatchprefix(std::string input) {
    //removing the standard youtube prefix
    for (int i = 0; i < 33; i++) {
        input[i] = NULL;
    }
    return input;
}

std::string removewatchsuffix(std::string input) {
	int suffixstart = input.find("&");
    for(int i = suffixstart; i < input.length(); i++) {
        input[i] = NULL;
	}
    return input;
}