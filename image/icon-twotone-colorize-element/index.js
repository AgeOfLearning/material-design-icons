import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneColorizeElement
 * @class IconTwotoneColorizeElement
 * @extends {AoflElement}
 */
class IconTwotoneColorizeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneColorizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-colorize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneColorizeElement.is, IconTwotoneColorizeElement);

export default IconTwotoneColorizeElement;
