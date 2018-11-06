# LR SDK Integration with React

This is a simple Create React App site that integrates the Live Receipts FB SDK
into a page. The use case for this is specifically:

- When order ref is not available until the Thank You page (eg: postcheckout)
- The entire checkout flow + thank you page is a SPA
- Using the sdk ready callback to confirm user opt in on Thank You page

More details on the sdk [OneMarket for Developers](https://developer.onemarketnetwork.com/user-guide/live-receipts/integration/online/widget/) documentation website.

## To Run:

Please clone the repo first, and then run the following:

1.  Install app dependencies:
    ```sh
    $ npm install
    ```
2.  Run server:
    ```sh
    $ npm start
    ```

Go to your browser and open: http://localhost:3000/
