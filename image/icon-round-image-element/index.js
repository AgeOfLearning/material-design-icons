import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundImageElement
 * @class IconRoundImageElement
 * @extends {AoflElement}
 */
class IconRoundImageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundImageElement.is, IconRoundImageElement);

export default IconRoundImageElement;
