# Cypress101

ติดตั้ง Node js & npm

set NODE_HOME varible

Create Folder for Cypress

Install Cypress ->npm init (ไปที่ Folder ที่สร้างใว้) หลังจากเสร็จ ก็ใช้คำสั่งดู -> dir จากนั้น ติดตั้ง Cypress ->npm install cypress --save-dev

Forderต่างๆ

        fixtures ->เก็บไฟล์ Test Data json formate
        integration->เก็บไฟล์ Test Case (ต้องสร้างภายใต้ Folder นี้)
        plugins
        screenshots ->เก็บหน้าจอ
        support
        videos ->เก็บวิดีโอ
Run Cypress-> terminal ไปที่ forder ที่สร้าง ->node_modules\.bin\cypress open

คำสั่ง CMD Screenshot&Recording

     ->cypress run    #จะRun ทุก Folder&File และ Screenshot&Recording ทั้งหมด

