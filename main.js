// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// AXIOS GLOBALS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
/*
AXIOS IS AN HTTP LIBRARY/CLIENT TO MAKE REQUESTS TO OUR OWN BACKEND/THIRD PARTY API TO FETCH DATA
SIMILAR TO FETCH API WHICH IS BUILT INTO THE BROWSER

WE'RE USING JSON PLACEHOLDER FAKE REST API FOR OUR DATA
*/

// IF WE HAVE MULTIPLE ROUTES
// WE CAN SEND A HEADER VALUE WITH EVERY REQUEST, THIS WILL COMES IN HANDY WITH AUTHENTICATION TOKENS

// THIS IS A REAL TOKEN FROM jwt.io (JSON WEB TOKEN)
// WE GET THE TOKEN FROM THE SERVER AFTER LOGGING IN AN WE STORE IT IN LOCAL STORAGE,
// PUT IT IN THE GLOBAL AND IF WE MAKE A REQUEST, IT WILL BE IN OUR CONFIG, WE CAN VALIDATE IT ON THE SERVER

axios.defaults.headers.common['X-Auth-Token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// IF WE MAKE A REQUEST, OUR TOKEN WILL BE IN CONFIG (WE CAN VALIDATE IT ON THE SERVER)

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// GET REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function getTodos() {
    console.log('GET Request');

    // 1️⃣
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // })
    //     .then(res => {
    //         showOutput(res);
    //         console.log(res);
    //     })
    //     .catch(err => console.error(err));


    // 2️⃣  WE CAN LEAVE OUT .get
    axios
        // ❗️❗️❗️.get('https://jsonplaceholder.typicode.com/todos?_limit=5', params: { _limit: 5 } { ❗️❗️❗️
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            // ADD IN TIMEOUT AS A PROPERTY TO SET THE MAX TIME ITS GOING TO TAKE BEFORE WE STOP TRYING FOR REQ.
            timeout: 5000
        })
        .then(res => {
            showOutput(res);
            // console.log(res);
        })
        .catch(err => console.error(err));
}

// ❗️❗️❗️ LIMIT DATA: ❗️❗️❗️
// PASS IN A URL PARAM "params: { _limit: 5 }"

//🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 ASYNC/AWAIT🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

async function getTodosAA() {
    console.log('GET Request - Async/Await');

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3', {
        // ADD IN TIMEOUT AS A PROPERTY TO SET THE MAX TIME ITS GOING TO TAKE BEFORE WE STOP TRYING FOR REQ.
        timeout: 5000
    })

    // console.log(res);
    showOutput(res);

    // const data = await res.json();

    // console.log(data);

}




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// POST REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function addTodo() {
    console.log('POST Request');

    // 1️⃣
    // axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data: {
    //         title: "New Todo",
    //         completed: false
    //     }
    // })
    //     .then(res => {
    //         showOutput(res);
    //         console.log(res);
    //     })
    //     .catch(err => console.error(err));

    // 2️⃣  SHORTER:
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}

//  ❗️❗️❗️ THIS IS OUR RESPONSE WITH THE DATA WE POSTED PLUS THE ID THAT IS GENERATED ON THE SERVER FOR US: ❗️❗️❗️

// {
//     "title": "New Todo",
//         "completed": false,
//             "id": 201
// }

//🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦 ASYNC/AWAIT🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦

async function addTodoAA() {
    console.log('POST Request - Async/Await');

    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New Todo',
        completed: false
    });

    console.log(res);
    showOutput(res);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// PUT/PATCH REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// PUT: TO REPLACE ENTIRE RESOURCE
// PATCH: UPDATES IT INCREMENTALLY

// HAVE TO INCLUDE THE ID IN THE URL
// THE USER ID WILL BE GONE IN RESPONSE

// function updateTodo() {
//     console.log('PUT/PATCH Request');

//     axios
//         .put('https://jsonplaceholder.typicode.com/todos/1', {
//             title: 'Updated Todo',
//             completed: true
//         })
//         .then(res => showOutput(res))
//         .catch(err => console.error(err));

// }

// DATA WILL INCLUDE USER ID, WE DIDN'T REPLACE IT, IT ONLY REPLACED WHAT WE SPECIFIED (TITLE, COMPLETED)
function updateTodo() {
    console.log('PUT/PATCH Request');

    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'Updated Todo',
            completed: true
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// DELETE REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DON'T PASS DATA IN AS WE'RE SIMPLY DELETING IT
function removeTodo() {
    console.log('DELETE Request');

    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}

// RESPONSE WILL RETURN AN EMPTY OBJECT BUT EVERY API CAN BE DIFFERENT

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// SIMULTANEOUS DATA (GET POSTS AND TODOS AT THE SAME TIME)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// AXIOS.ALL TAKES IN AN ARRAY OF REQUESTS

function getData() {
    console.log('Simultaneous Request');

    axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        ])

        // 1️⃣
        // .then(res => {
        // 	console.log(res[0]);	// TODOS
        // 	console.log(res[1]);	// POSTS
        // 	showOutput(res[1]);		// showOutput CAN HANDLE ONLY ONE OF THEM
        // })

        // 2️⃣ ❗️❗️❗️ REFACTOR WITH axios.spread() ❗️❗️❗️
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch(err => console.error(err));
    // WE CAN USE MORE DESCRIPTIVE VARIABLE NAMES (todos, posts VS. res[0], res[1])
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// CUSTOM HEADERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// WHEN WE HAVE AUTHITENTICATION WITH JSON WEB TOKENS,
// MAKE A REQUEST TO LOGIN, VALIDATE LOGIN AND WE GET BACK A TOKEN
// WE HAVE TO SEND THAT TOKEN IN THE HEADER TO ACCESS PROTECTED ROUTES

// !! FOR MULTIPLE ROUTES, SEE GLOBALS AT THE TOP !!!

function customHeaders() {
    console.log('Custom Headers');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    };

    axios
        .post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title: 'New Todo',
                completed: false
            },
            config
        )
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// TRANSFORMING (TWEAK) REQUESTS & RESPONSES
function transformResponse() {
    console.log('Transform Response');

    // MAKE A  REQUEST TO WHATEVER WE PUT IN OPTIONS
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World'
        },
        // TAKE THE DEFAULT TRANS.RESP. AND ADD TO THAT, RATHER THAN JUST OVERIDING IT:
        // CONCAT TAKES IN A FUNCTION WITH DATA AS A PARAMETER
        transformResponse: axios.defaults.transformResponse.concat(data => {
            // MAKE OUR "Hello World" DATA UPPERCASE:
            data.title = data.title.toUpperCase();
            return data;
        })
    };

    axios(options).then(res => showOutput(res));
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// ERROR HANDLING - APP RESPOND DIFFERENTLY FOR DIFF. ERRORS, LIMIT CATCH TO CERTAIN STATUS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// UP TO THIS POINT WE JUST COSOLE.ERRORING OUR ERRORS
// IF WE GET A 404 ERROR ETC.., SOMETHING IS NOT FOUND ON THE SERVER,
// WE MIGHT WANT TO SHOW A 404 PAGE OR DO SOME OTHER FUNCTIONALITY BASED ON THAT
function errorHandling() {
    console.log('Error Handling');

    // TEST WITH INVALID ROUTE BELOW:
    axios
        // THIS WILL THROW THE CATCH ERROR ON ANY STATUS:
        .get('https://jsonplaceholder.typicode.com/todoss', {
            // THROW DIFFERENT ERRORS FOR CERTAIN STATUSES (ABOVE 500 IS SERVER STATUS)
            // 

            // validateStatus: function(status) {
            //   return status < 500; // Reject only if status is greater or equal to 500
            // }

            // NOW, EVEN THOUGH THE ROUTE IS INVALID (404), IT SHOULD NOT RUN THE CATCH
            // EVERYTHING STILL GOES THROUGH WHEN THE CATCH DOES NOT RUN, WE JUST DONT GET THE DATA

        })
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // Server responded with a status other than 200 range (SUCCESS RANGE)
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);

                // ALERT IF 404
                if (err.response.status === 404) {
                    alert('Error: Page Not Found');
                }
            } else if (err.request) {
                // CHECK FOR ERR.REQUEST: Request was made but no response
                console.error(err.request);
            } else {
                console.error(err.message);
            }
        });
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// CANCEL TOKEN
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 
// CANCEL REQUEST ON THE FLY 


function cancelToken() {
    console.log('Cancel Token');

    // CREATE VAR CALLED source
    const source = axios.CancelToken.source();

    // PASS IN cancelToken AND SET IT TO source.token
    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        // PASS IN thrown
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            }
        });

    if (true) {
        source.cancel('Request canceled!');
    }
}

// WE DIN'T GET A RESPONSE BACK, IT WAS CANCELED


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// INTERCEPTING REQUESTS & RESPONSES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 

// CREATE INTERCEPTOR TO RUN SOME KIND OF FUNCTIONALITY, LIKE A LOGGER FOR EVERY REQ WE MAKE
// TAKES A FUNCION config() AS A PARAM SO WE HAVE ACCESS TO ANYTHING IN CONFIG(METHOD, URL, TIMESTAMP  ETC)
axios.interceptors.request.use(
    config => {
        console.log(
            `From Interceptor: ${config.method.toUpperCase()} request sent to ${config.url
            } at ${new Date().getTime()}`
        );

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// LOG:
// From Interceptor: GET request sent to https://jsonplaceholder.typicode.com/todos?_limit=5 a


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// AXIOS INSTANCES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 

// RIGHT NOW WE ARE DEALING WITH THE GLOBAL axios OBJECT

// CREATE VARIABLE
const axiosInstance = axios.create({
    // WE CAN HAVE CUSTOM SETTINS HERE, ONE OF THEM IS THE BASE URL:
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// USE AXIOS INSTANCE TO GET COMMENTS:
// axiosInstance.get('/comments').then(res => showOutput(res));



// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners

// GET
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('getAA').addEventListener('click', getTodosAA);
// POST
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('postAA').addEventListener('click', addTodoAA);

document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);