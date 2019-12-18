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
##โครงสร้าง####
 
         describe() คือการ Define Test Scenario ของเราว่าต้องการจะเทสอะไร (What to test)
         beforeEach() คือการ Define Test Setup Steps ที่ต้องทำทุกครั้งก่อนรัน Test Case ทุกข้อ
         it() คือการ Define Test Step ว่าใน Test Scenario ของเรานั้นมีวิธีการเทสอย่างไร (How to test)
 
 
/// <reference types="Cypress" />

describe('Cypress Test', () => {

    beforeEach(() => {
    
        cy.visit('ลิ้งที่ต้องการเปิด')
    })

    it('should has text \'npm install cypress\'', () => {
        cy.get('Locatorที่เราต้องการ').should('contain', 'npm install cypress')
    })
})





Run Cypress-> terminal ไปที่ forder ที่สร้าง ->node_modules\.bin\cypress open

คำสั่ง CMD Screenshot&Recording

     ->cypress run    #จะRun ทุก Folder&File และ Screenshot&Recording ทั้งหมด
     ->cypress run --spec "cypress\integration\LearningFirst\"    #จะ run เฉพาะ folder และทุก Test file ใน folder นั้
     ->cypress run --spec "cypress\integration\LearningFirst\firsttest.js"    #จะ run เฉพาะ Test file ที่เราต้องการ

