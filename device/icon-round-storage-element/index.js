import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStorageElement
 * @class IconRoundStorageElement
 * @extends {AoflElement}
 */
class IconRoundStorageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStorageElement.is, IconRoundStorageElement);

export default IconRoundStorageElement;
