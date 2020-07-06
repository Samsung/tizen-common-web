import React from 'react';
import { productinfo } from '@tizentv/tizen-tv-webapis';

const { getFirmware, getDuid, getModelCode } = productinfo;

function App() {
    return (
        <div>
            <h1>React Commonjs App</h1>
            <h2>firmware: {getFirmware()}</h2>
            <h2>duid: {getDuid()}</h2>
            <h2>modelcode: {getModelCode()}</h2>
        </div>
    );
}

export default App;
