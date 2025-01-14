import { Plugin } from 'obsidian'
import { DEFAULT_SETTINGS, MyPluginSettings, MySettingTab } from './settings'

export default class MyPlugin extends Plugin {
  settings: MyPluginSettings

  async onload () {
    await this.loadSettings()

    // This adds a settings tab so the user can configure various aspects of the plugin
    this.addSettingTab(new MySettingTab(this.app, this))
  }

  onunload () {

  }

  async loadSettings () {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
  }

  async saveSettings () {
    await this.saveData(this.settings)
  }
}
