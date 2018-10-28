import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCommuteElement
 * @class IconTwotoneCommuteElement
 * @extends {AoflElement}
 */
class IconTwotoneCommuteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCommuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-commute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCommuteElement.is, IconTwotoneCommuteElement);

export default IconTwotoneCommuteElement;
