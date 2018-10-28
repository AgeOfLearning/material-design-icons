import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHttpsElement
 * @class IconTwotoneHttpsElement
 * @extends {AoflElement}
 */
class IconTwotoneHttpsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHttpsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-https';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHttpsElement.is, IconTwotoneHttpsElement);

export default IconTwotoneHttpsElement;
