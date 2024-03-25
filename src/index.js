import create from './createProjects'
import makeTask from './makeTask'
import { checkExisting } from './storage'
import settings from './settings'

checkExisting()
create()


