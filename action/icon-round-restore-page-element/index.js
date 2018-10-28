import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRestorePageElement
 * @class IconRoundRestorePageElement
 * @extends {AoflElement}
 */
class IconRoundRestorePageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRestorePageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-restore-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRestorePageElement.is, IconRoundRestorePageElement);

export default IconRoundRestorePageElement;
