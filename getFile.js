module.exports = async function (context, req) {
    const fileName = req.query.filename;
    if (!fileName) {
        context.res = {
            status: 400,
            body: "Please provide a filename."
        };
        return;
    }

    const baseUrl = "https://publicfiles21.blob.core.windows.net/public-files/";
    const fileUrl = `${baseUrl}${encodeURIComponent(fileName)}`;

    context.res = {
        status: 302,
        headers: {
            Location: fileUrl
        }
    };
};

