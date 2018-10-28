import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneForward5Element
 * @class IconTwotoneForward5Element
 * @extends {AoflElement}
 */
class IconTwotoneForward5Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneForward5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-forward-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneForward5Element.is, IconTwotoneForward5Element);

export default IconTwotoneForward5Element;
