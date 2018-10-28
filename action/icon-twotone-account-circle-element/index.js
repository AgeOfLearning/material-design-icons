import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccountCircleElement
 * @class IconTwotoneAccountCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneAccountCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccountCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-account-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccountCircleElement.is, IconTwotoneAccountCircleElement);

export default IconTwotoneAccountCircleElement;
