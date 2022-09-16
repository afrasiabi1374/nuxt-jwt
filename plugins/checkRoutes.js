// این پلاگین میاد چک میکنه روتمون شامل این ریجکس هست یانه؟
export default function(context, inject) {
    const compare = (arr) => {
        return arr.some((item) => {
            if (item.regex) {
                // اگر آبجکت ریجکس بود
                // میاد چک میکنه روت با ریجکس مطابقت داره یا نه
                const re = new RegExp(item.regex.join('|'), 'g')
                console.log(re.test(context.route.path))
                return re.test(context.route.path)
            } else {
                // استرینگ بود
                // میاد برسی میکنه استرینگ با  آدرس مطابقت داره یانه
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