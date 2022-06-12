import {Application, Request, Response, NextFunction} from 'express';
import { Category, CategoryStore} from '../models/category';

const store = new CategoryStore();

const index = async (_req:Request, res:Response, Next:NextFunction) => {
    try {
        const categories:Category[] = await store.index();
        res.json({
            statusCode: 200,
            data: categories,
            messageData: 'categories retrieved successfully',})
    } catch (error) {
        Next(error)
    }
};

const show =async (req:Request, res:Response, Next: NextFunction) => {
    try {
        const id = req.params.id as unknown as number
        if(id === undefined) {
            res.status(400)
            res.send('Missing required parameter :id.')
            return false
        }

        const category:Category = await store.show(id)
        res.json({
            statusCode: 200,
            data: category,
            messageData: 'category has retrieved successfully'})
    } catch (error) {
        Next(error)
    }
};

/*const filter =async (req:Request, res:Response, Next: NextFunction) => {
    try {
        const name = req.params.name as unknown as string
        if(name === undefined) {
            res.status(400)
            res.send('Missing required parameter :name.')
            return false
        }

        const category:Category = await store.filter(name)
        res.json({
            statusCode: 200,
            data: category,
            messageData: 'category has retrieved successfully'})
    } catch (error) {
        Next(error)
    }
};*/

/*const filter = async (req:Request, res:Response, Next:NextFunction) => {
    try {
        const id = req.params.id as unknown as number
        const name = req.params.name as unknown as string

        if(id === undefined || name === undefined) {
            res.status(400)
            res.send('Missing required parameter :id or name.')
            return false
        }
        const category:Category []| undefined = await store.filter(id, name)
        res.json({
            statusCode: 200,
            data: category,
            messageData: 'category has retrieved successfully',})
    } catch (error) {
        Next(error)
    }
}*/

const create = async (req: Request, res: Response, Next:NextFunction) => {
    try {
        const newCategory = await store.create(req.body);
        
        res.json({
            statusCode: 200,
            data: { ...newCategory },
            messageData: 'Category was created successfully'})
    }catch(error) {
        Next(error)
    }
}

const update = async (req: Request, res: Response, Next:NextFunction) => {

    try {
        const updateCategory = await store.update(req.body);
    
    return res.json({
        statusCode: 200,
        data: { ...updateCategory },
        messageData: 'Category was updated successfully',})
    } catch (error) {
        Next(error)
    }
};

const destroy = async (req: Request, res: Response, Next:NextFunction) => {
    try{
        const id = req.params.id as unknown as number
            if (id === undefined) {
            res.status(400)
            res.send("Missing required parameter :id.")
            return false
            }
        const result = await store.delete(id)        
        res.send(`category with id ${id} successfully deleted.`)
    }catch(error){
        Next(error)
    }
}

export default function categoriesRoutes (app: Application) {
    app.get('/categories/index', index)
    app.get('/categories/show/:id', show)
    //app.get('/categories/filter/:name', filter)
    app.post('/categories/create', create)
    app.put('/categories/update/:id', update)
    app.delete('/categories/delete/:id', destroy) 
}

