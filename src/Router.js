const RoleController = require('./Controllers/RoleController.js')
const UserController = require("./Controllers/UserController");

class Router {

    static async routes(fastify, auth, options) {

        fastify.get('/', async (request, reply) => {
            return {hello: 'WHAT ARE YOU DOING IN MY SWAMP??!!!!'}
        })

//-----------JWT--------------------------------------

        fastify.get('/user/refresh', async (req, reply) => {
            return UserController.refreshJWT(req, reply, fastify)
        })

        fastify.post('/user/signup', async (req, reply) => {
            return UserController.signUp(req, reply, fastify)
        })

//-----------JWT--------------------------------------
//-----------Activity--------------------------------------

        fastify.get('/activities', async (request, reply) => {
            return ActivityController.getAllActivities(request, reply)
        })

        fastify.get('/activity/:id', async (request, reply) => {
            return ActivityController.getActivityById(request, reply)
        })

        fastify.post('/activity/create', async (request, reply) => {
            return ActivityController.createActivity(request, reply)
        })
//-----------Activity--------------------------------------
//-----------Facility--------------------------------------

        fastify.get('/facilities', async (request, reply) => {
            return FacilityController.getAllFacilities(request, reply)
        })

        fastify.get('/facility/:id', async (request, reply) => {
            return FacilityController.getFacilityById(request, reply)
        })

        fastify.get('/facility/:id/activities', async (request, reply) => {
            return FacilityController.getFacilityActivities(request, reply)
        })

        fastify.post('/facility/:id/schedule', async (request, reply) => {
            return FacilityController.createFacilitySchedule(request, reply)
        })

        fastify.get('/facility/:id/schedule', async (request, reply) => {
            return FacilityController.getFacilitySchedule(request, reply)
        })

        fastify.post('/facility/create', async (request, reply) => {
            return FacilityController.createFacility(request, reply)
        })

//-----------Facility--------------------------------------
//-----------Plan--------------------------------------

        fastify.get('/plans', async (request, reply) => {
            return PlanController.getAllPlans(request, reply)
        })

        fastify.get('/plan/:id', async (request, reply) => {
            return PlanController.getPlanById(request, reply)
        })

        fastify.post('/plan/create', async (request, reply) => {
            return PlanController.createPlan(request, reply)
        })

        fastify.post('/plan/:id/schedule', async (request, reply) => {
            return PlanController.createPlanSchedule(request, reply)
        })

        fastify.get('/plan/:id/schedule', async (request, reply) => {
            return PlanController.getPlanSchedule(request, reply)
        })


//-----------Plan--------------------------------------
//-----------User--------------------------------------

        fastify.get('/users', async (request, reply) => {
            return UserController.getAllUsers(request, reply)
        })

        fastify.get('/user/clients', async (request, reply) => {
            return UserController.getAllClients(request, reply)
        })

        fastify.get('/user/employees', async (request, reply) => {
            return UserController.getAllEmployees(request, reply)
        })

        fastify.get('/user/:id', async (request, reply) => {
            return UserController.getUserById(request, reply)
        })

        fastify.post('/user/create', async (request, reply) => {
            return UserController.createUser(request, reply)
        })

//-----------User--------------------------------------
//-----------Roles--------------------------------------

        fastify.get('/roles', async (request, reply) => {
            return RoleController.getAllRoles(request, reply)
        })

        fastify.get('/roles/:id', async (request, reply) => {
            return RoleController.getRoleById(request, reply)
        })

        fastify.post('/roles/create', async (request, reply) => {
            return RoleController.createRole(request, reply)
        })

//-----------Roles--------------------------------------
//-----------Inventory--------------------------------------

        fastify.get('/inventory/:id', async (request, reply) => {
            return InventoryController.getInventoryById(request, reply)
        })
        fastify.get('/inventory/facility/:id', async (request, reply) => {
            return InventoryController.getInventoryOfFacility(request, reply)
        })
        fastify.post('/inventory/facility/:id', async (request, reply) => {
            return InventoryController.createInventoryInFacility(request, reply)
        })

//-----------Inventory--------------------------------------


    }

}


module.exports = Router