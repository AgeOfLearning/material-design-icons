import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAppsElement
 * @class IconRoundAppsElement
 * @extends {AoflElement}
 */
class IconRoundAppsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAppsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-apps';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAppsElement.is, IconRoundAppsElement);

export default IconRoundAppsElement;
