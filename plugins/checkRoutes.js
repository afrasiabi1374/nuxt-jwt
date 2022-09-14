// این پلاگین میاد چک میکنه روتمون شامل این ریجکس هست یانه؟
export default function(context, inject) {
    const compare = (arr) => {
            return arr.some((item) => {
                if (item.regex) {
                    const re = new RegExp(item.regex.join('|'), 'g')
                    return re.test(context.route.path)
                } else {
                    return item === context.route.path
                }
            })
        }

    inject('checkRoutes', {
        shouldInitAuth() {
            return compare(process.env.authRoutes || [])
        }
    })
}