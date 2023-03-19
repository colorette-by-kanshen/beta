function alternateNames(color) {
    // Load the json file
    const colornames = 
        [
            {
                "code-name": "AliceBlue",
                "name": "Alice Blue",
                "hex": "#F0F8FF"
            },
            {
                "code-name": "AntiqueWhite",
                "name": "Antique White",
                "hex": "#FAEBD7"
            },
            {
                "code-name": "Aqua",
                "name": "Aqua",
                "hex": "#00FFFF"
            },
            {
                "code-name": "Aquamarine",
                "name": "Aquamarine",
                "hex": "#7FFFD4"
            },
            {
                "code-name": "Azure",
                "name": "Azure",
                "hex": "#F0FFFF"
            },
            {
                "code-name": "Beige",
                "name": "Beige",
                "hex": "#F5F5DC"
            },
            {
                "code-name": "Bisque",
                "name": "Bisque",
                "hex": "#FFE4C4"
            },
            {
                "code-name": "Black",
                "name": "Black",
                "hex": "#000000"
            },
            {
                "code-name": "BlanchedAlmond",
                "name": "Blanched Almond",
                "hex": "#FFEBCD"
            },
            {
                "code-name": "Blue",
                "name": "Blue",
                "hex": "#0000FF"
            },
            {
                "code-name": "BlueViolet",
                "name": "Blue Violet",
                "hex": "#8A2BE2"
            },
            {
                "code-name": "Brown",
                "name": "Brown",
                "hex": "#A52A2A"
            },
            {
                "code-name": "BurlyWood",
                "name": "Burly Wood",
                "hex": "#DEB887"
            },
            {
                "code-name": "CadetBlue",
                "name": "Cadet Blue",
                "hex": "#5F9EA0"
            },
            {
                "code-name": "Chartreuse",
                "name": "Chartreuse",
                "hex": "#7FFF00"
            },
            {
                "code-name": "Chocolate",
                "name": "Chocolate",
                "hex": "#D2691E"
            },
            {
                "code-name": "Coral",
                "name": "Coral",
                "hex": "#FF7F50"
            },
            {
                "code-name": "CornflowerBlue",
                "name": "Cornflower Blue",
                "hex": "#6495ED"
            },
            {
                "code-name": "Cornsilk",
                "name": "Cornsilk",
                "hex": "#FFF8DC"
            },
            {
                "code-name": "Crimson",
                "name": "Crimson",
                "hex": "#DC143C"
            },
            {
                "code-name": "Cyan",
                "name": "Cyan",
                "hex": "#00FFFF"
            },
            {
                "code-name": "DarkBlue",
                "name": "Dark Blue",
                "hex": "#00008B"
            },
            {
                "code-name": "DarkCyan",
                "name": "Dark Cyan",
                "hex": "#008B8B"
            },
            {
                "code-name": "DarkGoldenRod",
                "name": "Dark Golden Rod",
                "hex": "#B8860B"
            },
            {
                "code-name": "DarkGray",
                "name": "Dark Gray",
                "hex": "#A9A9A9"
            },
            {
                "code-name": "DarkGrey",
                "name": "Dark Grey",
                "hex": "#A9A9A9"
            },
            {
                "code-name": "DarkGreen",
                "name": "Dark Green",
                "hex": "#006400"
            },
            {
                "code-name": "DarkKhaki",
                "name": "Dark Khaki",
                "hex": "#BDB76B"
            },
            {
                "code-name": "DarkMagenta",
                "name": "Dark Magenta",
                "hex": "#8B008B"
            },
            {
                "code-name": "DarkOliveGreen",
                "name": "Dark Olive Green",
                "hex": "#556B2F"
            },
            {
                "code-name": "DarkOrange",
                "name": "Dark Orange",
                "hex": "#FF8C00"
            },
            {
                "code-name": "DarkOrchid",
                "name": "Dark Orchid",
                "hex": "#9932CC"
            },
            {
                "code-name": "DarkRed",
                "name": "Dark Red",
                "hex": "#8B0000"
            },
            {
                "code-name": "DarkSalmon",
                "name": "Dark Salmon",
                "hex": "#E9967A"
            },
            {
                "code-name": "DarkSeaGreen",
                "name": "Dark Sea Green",
                "hex": "#8FBC8F"
            },
            {
                "code-name": "DarkSlateBlue",
                "name": "Dark Slate Blue",
                "hex": "#483D8B"
            },
            {
                "code-name": "DarkSlateGray",
                "name": "Dark Slate Gray",
                "hex": "#2F4F4F"
            },
            {
                "code-name": "DarkSlateGrey",
                "name": "Dark Slate Grey",
                "hex": "#2F4F4F"
            },
            {
                "code-name": "DarkTurquoise",
                "name": "Dark Turquoise",
                "hex": "#00CED1"
            },
            {
                "code-name": "DarkViolet",
                "name": "Dark Violet",
                "hex": "#9400D3"
            },
            {
                "code-name": "DeepPink",
                "name": "Deep Pink",
                "hex": "#FF1493"
            },
            {
                "code-name": "DeepSkyBlue",
                "name": "Deep Sky Blue",
                "hex": "#00BFFF"
            },
            {
                "code-name": "DimGray",
                "name": "Dim Gray",
                "hex": "#696969"
            },
            {
                "code-name": "DimGrey",
                "name": "Dim Grey",
                "hex": "#696969"
            },
            {
                "code-name": "DodgerBlue",
                "name": "Dodger Blue",
                "hex": "#1E90FF"
            },
            {
                "code-name": "FireBrick",
                "name": "Fire Brick",
                "hex": "#B22222"
            },
            {
                "code-name": "FloralWhite",
                "name": "Floral White",
                "hex": "#FFFAF0"
            },
            {
                "code-name": "ForestGreen",
                "name": "Forest Green",
                "hex": "#228B22"
            },
            {
                "code-name": "Fuchsia",
                "name": "Fuchsia",
                "hex": "#FF00FF"
            },
            {
                "code-name": "Gainsboro",
                "name": "Gainsboro",
                "hex": "#DCDCDC"
            },
            {
                "code-name": "GhostWhite",
                "name": "Ghost White",
                "hex": "#F8F8F8"
            },
            {
                "code-name": "Gold",
                "name": "Gold",
                "hex": "#FFD700"
            },
            {
                "code-name": "GoldenRod",
                "name": "Golden Rod",
                "hex": "#DAA520"
            },
            {
                "code-name": "Gray",
                "name": "Gray",
                "hex": "#808080"
            },
            {
                "code-name": "Grey",
                "name": "Grey",
                "hex": "#808080"
            },
            {
                "code-name": "Green",
                "name": "Green",
                "hex": "#008000"
            },
            {
                "code-name": "GreenYellow",
                "name": "Green-ish Yellow",
                "hex": "#ADFF2F"
            },
            {
                "code-name": "HoneyDew",
                "name": "Honey Dew",
                "hex": "#F0FFF0"
            },
            {
                "code-name": "HotPink",
                "name": "Hot Pink",
                "hex": "#FF69B4"
            },
            {
                "code-name": "IndianRed",
                "name": "Indian Red",
                "hex": "#CD5C5C"
            },
            {
                "code-name": "Indigo",
                "name": "Indigo",
                "hex": "#4B0082"
            },
            {
                "code-name": "Ivory",
                "name": "Ivory",
                "hex": "#FFFFF0"
            },
            {
                "code-name": "Khaki",
                "name": "Khaki",
                "hex": "#F0E68C"
            },
            {
                "code-name": "Lavender",
                "name": "Lavender",
                "hex": "#E6E6FA"
            },
            {
                "code-name": "LavenderBlush",
                "name": "Lavender Blush",
                "hex": "#FFF0F5"
            },
            {
                "code-name": "LawnGreen",
                "name": "Lawn Green",
                "hex": "#7CFC00"
            },
            {
                "code-name": "LemonChiffon",
                "name": "Lemon Chiffon",
                "hex": "#FFFACD"
            },
            {
                "code-name": "LightBlue",
                "name": "Light Blue",
                "hex": "#ADD8E6"
            },
            {
                "code-name": "LightCoral",
                "name": "Light Coral",
                "hex": "#F08080"
            },
            {
                "code-name": "LightCyan",
                "name": "Light Cyan",
                "hex": "#E0FFFF"
            },
            {
                "code-name": "LightGoldenRodYellow",
                "name": "Light-Golden-Rod Yellow",
                "hex": "#F2F2D2"
            },
            {
                "code-name": "LightGray",
                "name": "Light Gray",
                "hex": "#D3D3D3"
            },
            {
                "code-name": "LightGrey",
                "name": "Light Grey",
                "hex": "#D3D3D3"
            },
            {
                "code-name": "LightGreen",
                "name": "Light Green",
                "hex": "#90EE90"
            },
            {
                "code-name": "LightPink",
                "name": "Light Pink",
                "hex": "#FFB6C1"
            },
            {
                "code-name": "LightSalmon",
                "name": "Light Salmon",
                "hex": "#FFA07A"
            },
            {
                "code-name": "LightSeaGreen",
                "name": "Light Sea Green",
                "hex": "#20B2AA"
            },
            {
                "code-name": "LightSkyBlue",
                "name": "Light Sky Blue",
                "hex": "#87CEFA"
            },
            {
                "code-name": "LightSlateGray",
                "name": "Light Slate Gray",
                "hex": "#778899"
            },
            {
                "code-name": "LightSlateGrey",
                "name": "Light Slate Grey",
                "hex": "#778899"
            },
            {
                "code-name": "LightSteelBlue",
                "name": "Light Steel Blue",
                "hex": "#B0C4DE"
            },
            {
                "code-name": "LightYellow",
                "name": "Light Yellow",
                "hex": "#FFFFE0"
            },
            {
                "code-name": "Lime",
                "name": "Lime",
                "hex": "#00FF00"
            },
            {
                "code-name": "LimeGreen",
                "name": "Lime Green",
                "hex": "#32CD32"
            },
            {
                "code-name": "Linen",
                "name": "Linen",
                "hex": "#FAF0E6"
            },
            {
                "code-name": "Magenta",
                "name": "Magenta",
                "hex": "#FF00FF"
            },
            {
                "code-name": "Maroon",
                "name": "Maroon",
                "hex": "#800000"
            },
            {
                "code-name": "MediumAquamarine",
                "name": "Medium Aquamarine",
                "hex": "#66CDAA"
            },
            {
                "code-name": "MediumBlue",
                "name": "Medium Blue",
                "hex": "#0000CD"
            },
            {
                "code-name": "MediumOrchid",
                "name": "Medium Orchid",
                "hex": "#BA55D3"
            },
            {
                "code-name": "MediumPurple",
                "name": "Medium Purple",
                "hex": "#9370DB"
            },
            {
                "code-name": "MediumSeaGreen",
                "name": "Medium Sea Green",
                "hex": "#3CB371"
            },
            {
                "code-name": "MediumSlateBlue",
                "name": "Medium Slate Blue",
                "hex": "#7B68EE"
            },
            {
                "code-name": "MediumSpringGreen",
                "name": "Medium Spring Green",
                "hex": "#00FA9A"
            },
            {
                "code-name": "MediumTurquoise",
                "name": "Medium Turquoise",
                "hex": "#48D1CC"
            },
            {
                "code-name": "MediumVioletRed",
                "name": "Medium Violet Red",
                "hex": "#C71585"
            },
            {
                "code-name": "MidnightBlue",
                "name": "Midnight Blue",
                "hex": "#191970"
            },
            {
                "code-name": "MintCream",
                "name": "Mint Cream",
                "hex": "#F5FFFA"
            },
            {
                "code-name": "MistyRose",
                "name": "Misty Rose",
                "hex": "#FFR4E1"
            },
            {
                "code-name": "Moccasin",
                "name": "Moccasin",
                "hex": "#FFE4B5"
            },
            {
                "code-name": "NavajoWhite",
                "name": "Navajo White",
                "hex": "#FFDEAD"
            },
            {
                "code-name": "Navy",
                "name": "Navy",
                "hex": "#000080"
            },
            {
                "code-name": "OldLace",
                "name": "Old Lace",
                "hex": "#FDF5E6"
            },
            {
                "code-name": "Olive",
                "name": "Olive",
                "hex": "#808000"
            },
            {
                "code-name": "OliveDrab",
                "name": "Olive Drab",
                "hex": "#6B8E23"
            },
            {
                "code-name": "Orange",
                "name": "Orange",
                "hex": "#FFA500"
            },
            {
                "code-name": "OrangeRed",
                "name": "Orange Red",
                "hex": "#FF4500"
            },
            {
                "code-name": "Orchid",
                "name": "Orchid",
                "hex": "#DA70D6"
            },
            {
                "code-name": "PaleGordenRod",
                "name": "Pale Golden Rod",
                "hex": "#EEE8AA"
            },
            {
                "code-name": "PaleGreen",
                "name": "Pale Green",
                "hex": "#98FB98"
            },
            {
                "code-name": "PaleTurquoise",
                "name": "Pale Turquoise",
                "hex": "#AFEEEE"
            },
            {
                "code-name": "PaleVioletRed",
                "name": "Pale Violet Red",
                "hex": "#DB7093"
            },
            {
                "code-name": "PapayaWhip",
                "name": "Papaya Whip",
                "hex": "#FFEFD6"
            },
            {
                "code-name": "PeachPuff",
                "name": "Peach Puff",
                "hex": "#FFDAB9"
            },
            {
                "code-name": "Peru",
                "name": "Peru",
                "hex": "#CD853F"
            },
            {
                "code-name": "Pink",
                "name": "Pink",
                "hex": "#FFC0CB"
            },
            {
                "code-name": "Plum",
                "name": "Plum",
                "hex": "#DDA0DD"
            },
            {
                "code-name": "PowderBlue",
                "name": "Powder Blue",
                "hex": "#B0E0E6"
            },
            {
                "code-name": "Purple",
                "name": "Purple",
                "hex": "#800080"
            },
            {
                "code-name": "RebeccaPurple",
                "name": "Rebecca Purple",
                "hex": "#663399"
            },
            {
                "code-name": "Red",
                "name": "Red",
                "hex": "#FF0000"
            },
            {
                "code-name": "RosyBrown",
                "name": "Rosy Brown",
                "hex": "#BC8F8F"
            },
            {
                "code-name": "RoyalBlue",
                "name": "Royal Blue",
                "hex": "#4169E1"
            },
            {
                "code-name": "SaddleBrown",
                "name": "Saddle Brown",
                "hex": "#8B4513"
            },
            {
                "code-name": "Salmon",
                "name": "Salmon",
                "hex": "#FA8072"
            },
            {
                "code-name": "SandyBrown",
                "name": "Sandy Brown",
                "hex": "#F4A460"
            },
            {
                "code-name": "SeaGreen",
                "name": "Sea Green",
                "hex": "#3E8B57"
            },
            {
                "code-name": "SeaShell",
                "name": "Sea Shell",
                "hex": "#FFF5EE"
            },
            {
                "code-name": "Sienna",
                "name": "Sienna",
                "hex": "#A0522D"
            },
            {
                "code-name": "Silver",
                "name": "Silver",
                "hex": "#C0C0C0"
            },
            {
                "code-name": "SkyBlue",
                "name": "Sky Blue",
                "hex": "#87CEEB"
            },
            {
                "code-name": "SlateBlue",
                "name": "Slate Blue",
                "hex": "#6A5ACD"
            },
            {
                "code-name": "SlateGray",
                "name": "Slate Gray",
                "hex": "#708090"
            },
            {
                "code-name": "SlateGrey",
                "name": "Slate Grey",
                "hex": "#708090"
            },
            {
                "code-name": "Snow",
                "name": "Snow",
                "hex": "#FFFAFA"
            },
            {
                "code-name": "SpringGreen",
                "name": "Spring Green",
                "hex": "#00FF7F"
            },
            {
                "code-name": "SteelBlue",
                "name": "Steel Blue",
                "hex": "#4682B4"
            },
            {
                "code-name": "Tan",
                "name": "Tan",
                "hex": "#D2B48C"
            },
            {
                "code-name": "Teal",
                "name": "Teal",
                "hex": "#008080"
            },
            {
                "code-name": "Thistle",
                "name": "Thistle",
                "hex": "#D8BFD8"
            },
            {
                "code-name": "Tomato",
                "name": "Tomato",
                "hex": "#FF6347"
            },
            {
                "code-name": "Turquoise",
                "name": "Turquoise",
                "hex": "#40E0D0"
            },
            {
                "code-name": "Violet",
                "name": "Violet",
                "hex": "#EE82EE"
            },
            {
                "code-name": "Wheat",
                "name": "Wheat",
                "hex": "#F5DEB3"
            },
            {
                "code-name": "White",
                "name": "White",
                "hex": "#FFFFFF"
            },
            {
                "code-name": "WhiteSmoke",
                "name": "White Smoke",
                "hex": "#F5F5F5"
            },
            {
                "code-name": "Yellow",
                "name": "Yellow",
                "hex": "#FFFF00"
            },
            {
                "code-name": "YellowGreen",
                "name": "Yellow Green",
                "hex": "#9ACD32"
            }
        ];

    // Compare the color parameter to all hex values in the objects of the json file
    for (let i = 0; i < colornames.length; i++) {
        if (colornames[i].hex === color) {
            return colornames[i]["code-name"];
        }
    }
    // If no match is found, return null
    return null;
}