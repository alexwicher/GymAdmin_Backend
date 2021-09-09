const UserCS = require("./Controllers_Services/UserCS.js");
const GeneralCS = require("./Controllers_Services/GeneralCS.js");
const Activity = require("./Models/Activity.js");
const Facility = require("./Models/Facility.js");
const FacilitySchedule = require("./Models/FacilitySchedule.js");
const Plan = require("./Models/Plan.js");
const PlanSchedule = require("./Models/PlanSchedule.js");
const User = require("./Models/User.js");
const Client = require("./Models/Client.js");
const Employee = require("./Models/Employee.js");
const Role = require("./Models/Role.js");
const Inventory = require("./Models/Inventory.js");
const InventoryCS = require("./Controllers_Services/InventoryCS");
const FacilityCS = require("./Controllers_Services/FacilityCS");

class Router {

    static async routes(fastify, auth, options) {

        fastify.get('/', async (request, reply) => {
            return {hello: 'WHAT ARE YOU DOING IN MY SWAMP??!!!!'}
        })

//-----------JWT--------------------------------------

        fastify.get('/user/refresh', async (req, reply) => {
            return UserCS.refreshJWT(req, reply, fastify)
        })

        fastify.post('/user/signup', async (req, reply) => {
            return UserCS.signUp(req, reply, fastify)
        })

//-----------JWT--------------------------------------
//-----------Activity--------------------------------------

        fastify.get('/activities', async (request, reply) => {
            return GeneralCS.getAll(Activity, request, reply)
        })

        fastify.get('/activity/:id', async (request, reply) => {
            return GeneralCS.getById(Activity, request, reply)
        })

        fastify.post('/activity/create', async (request, reply) => {
            return GeneralCS.createObject(Activity, request, reply)
        })
//-----------Activity--------------------------------------
//-----------Facility--------------------------------------

        fastify.get('/facilities', async (request, reply) => {
            return GeneralCS.getAll(Facility, request, reply)
        })

        fastify.get('/facility/:id', async (request, reply) => {
            return GeneralCS.getById(Facility, request, reply)
        })

        fastify.get('/facility/:id/activities', async (request, reply) => {
            return FacilityCS.getFacilityActivities(request, reply)
        })

        fastify.post('/facility/schedule', async (request, reply) => {
            return GeneralCS.createObject(FacilitySchedule, request, reply)
        })

        fastify.get('/facility/:id/schedule', async (request, reply) => {
            return FacilityCS.getFacilitySchedule(request, reply)
        })

        fastify.post('/facility/create', async (request, reply) => {
            return GeneralCS.createObject(Facility, request, reply)
        })

//-----------Facility--------------------------------------
//-----------Plan--------------------------------------

        fastify.get('/plans', async (request, reply) => {
            return GeneralCS.getAll(Plan, request, reply)
        })

        fastify.get('/plan/:id', async (request, reply) => {
            return GeneralCS.getById(Plan, request, reply)
        })

        fastify.post('/plan/create', async (request, reply) => {
            return GeneralCS.createObject(Plan, request, reply)
        })

        fastify.post('/plan/:id/schedule', async (request, reply) => {
            return GeneralCS.createObject(PlanSchedule, request, reply)
        })

        fastify.get('/plan/schedule', async (request, reply) => {
            return GeneralCS.getById(PlanSchedule, request, reply)
        })


//-----------Plan--------------------------------------
//-----------User--------------------------------------

        fastify.get('/users', async (request, reply) => {
            return GeneralCS.getAll(User, request, reply)
        })

        fastify.get('/user/clients', async (request, reply) => {
            return GeneralCS.getAll(Client, request, reply)
        })

        fastify.get('/user/employees', async (request, reply) => {
            return GeneralCS.getAll(Employee, request, reply)
        })

        fastify.get('/user/get/:id', async (request, reply) => {
            return GeneralCS.getById(Client, request, reply)
        })

        fastify.post('/user/create', async (request, reply) => {
            return GeneralCS.createObject(User, request, reply)
        })

        fastify.post('/client/create', async (request, reply) => {
            return GeneralCS.createObject(Client, request, reply)
        })

        fastify.post('/employee/create', async (request, reply) => {
            return GeneralCS.createObject(Employee, request, reply)
        })

//-----------User--------------------------------------
//-----------Roles--------------------------------------

        fastify.get('/roles', async (request, reply) => {
            return GeneralCS.getAll(Role, request, reply)
        })

        fastify.get('/roles/:id', async (request, reply) => {
            return GeneralCS.getById(Role, request, reply)
        })

        fastify.post('/roles/create', async (request, reply) => {
            return GeneralCS.createObject(Role, request, reply)
        })

//-----------Roles--------------------------------------
//-----------Inventory--------------------------------------

        fastify.get('/inventory/:id', async (request, reply) => {
            return GeneralCS.getById(Inventory, request, reply)
        })
        fastify.get('/inventory/facility/:id', async (request, reply) => {
            return InventoryCS.getInventoryOfFacility(request, reply)
        })
        fastify.post('/inventory', async (request, reply) => {
            return GeneralCS.createObject(Facility,request, reply)
        })

//-----------Inventory--------------------------------------

    }
}

module.exports = Router