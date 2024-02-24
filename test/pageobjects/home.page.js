import { $ } from '@wdio/globals'



class HomePage {
    async openMenu(menu) {
        await $(`//android.widget.TextView[@text="Profile"]`).click();
    }
}
export default new HomePage();
