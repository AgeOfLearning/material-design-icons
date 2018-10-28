import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNearMeElement
 * @class IconTwotoneNearMeElement
 * @extends {AoflElement}
 */
class IconTwotoneNearMeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNearMeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-near-me';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNearMeElement.is, IconTwotoneNearMeElement);

export default IconTwotoneNearMeElement;
