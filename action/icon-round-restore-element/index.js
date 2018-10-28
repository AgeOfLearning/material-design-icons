import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRestoreElement
 * @class IconRoundRestoreElement
 * @extends {AoflElement}
 */
class IconRoundRestoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRestoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-restore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRestoreElement.is, IconRoundRestoreElement);

export default IconRoundRestoreElement;
