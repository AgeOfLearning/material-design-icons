import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWarningElement
 * @class IconTwotoneWarningElement
 * @extends {AoflElement}
 */
class IconTwotoneWarningElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWarningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-warning';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWarningElement.is, IconTwotoneWarningElement);

export default IconTwotoneWarningElement;
