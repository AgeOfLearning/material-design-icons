import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOpacityElement
 * @class IconTwotoneOpacityElement
 * @extends {AoflElement}
 */
class IconTwotoneOpacityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOpacityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-opacity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOpacityElement.is, IconTwotoneOpacityElement);

export default IconTwotoneOpacityElement;
