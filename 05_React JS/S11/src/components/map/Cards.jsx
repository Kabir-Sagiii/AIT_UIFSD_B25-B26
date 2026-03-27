import { useState } from "react";

function Cards() {
  var [users, setUsers] = useState([
    {
      image:
        "https://i.pinimg.com/originals/a3/1b/2e/a31b2ee2bdf3a8c5e65f99d935e64055.jpg",
      name: "Jiya",
    },
    {
      image:
        "https://tse1.mm.bing.net/th/id/OIP.ZSExQDqnZhkFWy758XtBdQHaJY?w=800&h=1013&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: "Lisa",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9wb3J0cmFpdF9vZl9hX2JlYXV0aWZ1bF9zbWlsaW5nX3lvdW5nX2luZGlhbl9iZWRkY2ViOC1iMjAwLTRlMjAtYmZiYy1kMWIwMTc4MDhlNzIucG5n.png",
      name: "Merry",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9wb3J0cmFpdF9vZl9hX2JlYXV0aWZ1bF9zbWlsaW5nX3lvdW5nX2luZGlhbl8yNGNkMTU0NS03YjdjLTQ3MTEtYmRkMi0wNDg5MzM1MjMyZWYucG5n.png",
      name: "Rohita",
    },
  ]);
  return (
    <div className="container">
      {users.map(function (user) {
        return (
          <div className="card">
            <img src={user.image} width="100%" height="230" />
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
