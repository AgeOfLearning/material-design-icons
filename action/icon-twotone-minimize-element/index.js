import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMinimizeElement
 * @class IconTwotoneMinimizeElement
 * @extends {AoflElement}
 */
class IconTwotoneMinimizeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMinimizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-minimize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMinimizeElement.is, IconTwotoneMinimizeElement);

export default IconTwotoneMinimizeElement;
