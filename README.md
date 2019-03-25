# Base64 Encoding

This is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It achieves this by converting the binary data into a 6-bit character representation.

## Use cases

Could be used when converting binary data, such as images or video, is transmitted over systems that are designed to transmit data in plain-text.

## The logic

The 64 characters chosed for this scheme are `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`. Each base64 digit represents 6 bits of data. Hence, a total of 3 8-bit bytes of data can be fully represented by 4 6-bit bytes of base64 digits. 
