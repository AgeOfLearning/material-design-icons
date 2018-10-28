import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrokenImageElement
 * @class IconRoundBrokenImageElement
 * @extends {AoflElement}
 */
class IconRoundBrokenImageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrokenImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-broken-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrokenImageElement.is, IconRoundBrokenImageElement);

export default IconRoundBrokenImageElement;
