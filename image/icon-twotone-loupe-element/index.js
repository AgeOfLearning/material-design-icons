import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLoupeElement
 * @class IconTwotoneLoupeElement
 * @extends {AoflElement}
 */
class IconTwotoneLoupeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLoupeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-loupe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLoupeElement.is, IconTwotoneLoupeElement);

export default IconTwotoneLoupeElement;
