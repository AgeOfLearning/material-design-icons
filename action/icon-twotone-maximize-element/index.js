import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMaximizeElement
 * @class IconTwotoneMaximizeElement
 * @extends {AoflElement}
 */
class IconTwotoneMaximizeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMaximizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-maximize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMaximizeElement.is, IconTwotoneMaximizeElement);

export default IconTwotoneMaximizeElement;
