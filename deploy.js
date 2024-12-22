const exec = require('child_process').exec;
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
const path = require('path');


// Запуск Webpack білду перед деплоєм
exec('npm run build', (err, stdout, stderr) => {
    if (err) {
        console.error('Error during build:', stderr);
        return;
    }
    console.log('Build completed:', stdout);

    // Конфігурація для FTP
    const config = {
        user: 'milanasho_webbee',
        password: 'B7eZGPcyOv',
        host: 'ftp.s48.freehost.com.ua',
        port: 21,
        localRoot: path.join(__dirname, 'dist'),
        remoteRoot: '/www.webbees.com.ua',
        include: ['*', '**/*'],
        exclude: ['**/*.map'],
        deleteRemote: false,
        forcePasv: true,
        confirm: true
    };

    // Завантаження файлів на FTP після білду
    ftpDeploy.deploy(config, (err, res) => {
        if (err) {
            console.log('Deployment error:', err);
        } else {
            console.log('Deployment results:', res);
        }
    });
});