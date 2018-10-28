import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTabElement
 * @class IconTwotoneTabElement
 * @extends {AoflElement}
 */
class IconTwotoneTabElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTabElement.is, IconTwotoneTabElement);

export default IconTwotoneTabElement;
