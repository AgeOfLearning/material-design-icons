import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneClassElement
 * @class IconTwotoneClassElement
 * @extends {AoflElement}
 */
class IconTwotoneClassElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneClassElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-class';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneClassElement.is, IconTwotoneClassElement);

export default IconTwotoneClassElement;
