using Microsoft.AspNetCore.Http;
public static class FormFileExtensions {
    public static bool IsImage(this IFormFile file) {
            // Check if the received file is an image, otherwise do nothing
            if( file.ContentType.ToLower() != "image/jpg" &&
                file.ContentType.ToLower() != "image/jpeg" &&
                file.ContentType.ToLower() != "image/pjpeg" &&
                file.ContentType.ToLower() != "image/gif" &&
                file.ContentType.ToLower() != "image/x-png" &&
                file.ContentType.ToLower() != "image/png") 
                {
                    // The sent file is not an image
                    return false;
                }

            return true;
    }
}