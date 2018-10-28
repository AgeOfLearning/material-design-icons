import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStoreElement
 * @class IconRoundStoreElement
 * @extends {AoflElement}
 */
class IconRoundStoreElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-store';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStoreElement.is, IconRoundStoreElement);

export default IconRoundStoreElement;
