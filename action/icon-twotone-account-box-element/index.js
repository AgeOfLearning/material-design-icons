import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccountBoxElement
 * @class IconTwotoneAccountBoxElement
 * @extends {AoflElement}
 */
class IconTwotoneAccountBoxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccountBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-account-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccountBoxElement.is, IconTwotoneAccountBoxElement);

export default IconTwotoneAccountBoxElement;
