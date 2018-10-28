import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDiscFullElement
 * @class IconTwotoneDiscFullElement
 * @extends {AoflElement}
 */
class IconTwotoneDiscFullElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDiscFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-disc-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDiscFullElement.is, IconTwotoneDiscFullElement);

export default IconTwotoneDiscFullElement;
