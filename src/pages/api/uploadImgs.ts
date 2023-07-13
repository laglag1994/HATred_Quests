import { rejects } from "assert";
import formidable from "formidable";
import { NextApiHandler, NextApiRequest } from "next";
import path from "path";
import fs from "fs/promises"


export const config = {
    api: {
        bodyParser: false
    }
}

const readFile = (
    req: NextApiRequest,
    saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {}
    if (saveLocally) {
        options.uploadDir = path.join(process.cwd(), "/public")
        options.filename = (name, ext, path, form) => {
            return "" + path.originalFilename
        }
    }
    const form = formidable(options)
    return new Promise((resolve, reject) => {
        form.parse(req, (error, fields, files) => {
            if (error) reject(error)
            resolve({ fields, files })
        })
    })
}

const handler: NextApiHandler = async (req, res) => {
    try {
        await fs.readdir(path.join() + "/public")
    } catch {
        await fs.mkdir(path.join() + "/public")
    }

    await readFile(req,true)
    res.json({done:"okkie dokkie"})
}

export default handler