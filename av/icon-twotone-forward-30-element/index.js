import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneForward30Element
 * @class IconTwotoneForward30Element
 * @extends {AoflElement}
 */
class IconTwotoneForward30Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneForward30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-forward-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneForward30Element.is, IconTwotoneForward30Element);

export default IconTwotoneForward30Element;
