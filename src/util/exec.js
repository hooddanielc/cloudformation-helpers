const process = require('process');
const {spawn} = require('child_process');
const prettyprint = require('./prettyprint');

module.exports = (cmd, args = [], options={}) => {
    prettyprint(`executing command`, {cmd, args, options});
    return new Promise((resolve, reject) => {
        const proc = spawn(cmd, args, {stdio: [null, 'pipe', 'pipe'], ...options});
        let stderr = '';
        let stdout = '';
        proc.stdout.on('data', (data) => ((stdout += data.toString()) && process.stdout.write(data)));
        proc.stderr.on('data', (data) => ((stderr += data.toString()) && process.stderr.write(data)));
        proc.on('close', (code) => {
            if (code !== 0) {
                prettyprint(`command success`);
                reject(code);
            } else {
                resolve({
                    stderr: stderr || null,
                    stdout: stdout || null,
                    code
                });
            }
        });
    });
};
