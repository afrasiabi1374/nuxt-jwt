import { configure } from 'vee-validate'

export default function({ app }) {
    console.log('app =>', app)
    configure({
        defaultMessage: (field, values) => {
            values._field_ = app.i18n.t(`${field}`)
            return app.i18n.t(`validation.${values._rule_}`, values)
        }
    })
}