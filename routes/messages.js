import { Router } from "express";
import * as messagesCtrl from "../controllers/messages.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();


/*---------- Public Routes ----------*/
router.get("/", messagesCtrl.index);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.post("/", checkAuth, messagesCtrl.create);
router.delete("/:id", checkAuth, messagesCtrl.delete);
router.put("/:id", checkAuth, messagesCtrl.update)


export { router };
