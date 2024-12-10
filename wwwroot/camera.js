export async function startCamera()
{
    const videoElement = document.getElementById('videoElement');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } else {
        console.error("Camera not supported on this device.");
    }
};
