

export async function savePackage(details) {
    try {
        console.log(details)
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const response = await fetch("https://api-web2.onrender.com/api/packages", {
            method: "POST", // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        });

        const result = await response.text();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);

        // Print the response body for debugging
        const responseBody = await response.text();
        console.error("Response body:", responseBody);
    }
}

export async function getAllPackage() {
    try {
        const response = await fetch("https://api-web2.onrender.com/api/packages", {
            method: "GET"
        });

        const result = await response.text();
        // console.log(result);


        return result;

    } catch (error) {
        console.error("Error:", error);

        // Print the response body for debugging
        const responseBody = await response.text();
        console.error("Response body:", responseBody);
    }
}


export async function deletePackage(packageId) {
    try {
        const response = await fetch(`https://api-web2.onrender.com/api/packages/${packageId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log(`Package with ID ${packageId} deleted successfully.`);
        } else {
            const errorData = await response.json();
            console.error("Error deleting package:", errorData);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

